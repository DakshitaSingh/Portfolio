import React, { useEffect, useState } from "react";

const ContestTracker = () => {
  const [contests, setContests] = useState([]);
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    // Fetch Codeforces contests
    const fetchContests = async () => {
      try {
        const response = await fetch("https://codeforces.com/api/contest.list");
        const data = await response.json();
        if (data.status === "OK") {
          const upcoming = data.result
            .filter((contest) => contest.phase === "BEFORE")
            .slice(0, 5); // limit to top 5 upcoming
          const recent = data.result
            .filter((contest) => contest.phase === "FINISHED")
            .slice(0, 5); // limit to top 5 recent
          setContests({ upcoming, recent });
        }
      } catch (error) {
        console.error("Failed to fetch contests", error);
      }
    };

    fetchContests();

    // Update current time every second for live countdown
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  const formatTime = (seconds) => {
    const totalSeconds = Math.max(seconds, 0); // Avoid negative
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return `${h}h ${m}m ${s}s`;
  };

  const formatDateTime = (seconds) => {
    const date = new Date(seconds * 1000);
    return date.toLocaleString("en-IN", {
      dateStyle: "short",
      timeStyle: "medium",
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">📅 Codeforces Contests</h2>

      {/* Upcoming Contests */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-4 text-blue-600">Upcoming Contests</h3>
        {contests.upcoming?.length > 0 ? (
          contests.upcoming.map((contest) => {
            const secondsUntil = Math.floor(contest.startTimeSeconds - currentTime / 1000);
            return (
              <div
                key={contest.id}
                className="border border-blue-500 p-4 rounded-lg mb-4 shadow hover:shadow-lg transition duration-300"
              >
                <h4 className="text-xl font-medium mb-1">{contest.name}</h4>
                <p>🕒 Start Time: {formatDateTime(contest.startTimeSeconds)}</p>
                <p>⏳ Starts in: {formatTime(secondsUntil)}</p>
                <a
                  href={`https://codeforces.com/contests/${contest.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline mt-2 inline-block"
                >
                  Visit Contest
                </a>
              </div>
            );
          })
        ) : (
          <p>No upcoming contests found.</p>
        )}
      </div>

      {/* Past Contests */}
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-green-600">Past Contests</h3>
        {contests.recent?.length > 0 ? (
          contests.recent.map((contest) => (
            <div
              key={contest.id}
              className="border border-green-500 p-4 rounded-lg mb-4 shadow hover:shadow-lg transition duration-300"
            >
              <h4 className="text-xl font-medium mb-1">{contest.name}</h4>
              <p>🕒 Ended: {formatDateTime(contest.startTimeSeconds + contest.durationSeconds)}</p>
              <a
                href={`https://codeforces.com/contest/${contest.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 underline mt-2 inline-block"
              >
                View Contest Page
              </a>
            </div>
          ))
        ) : (
          <p>No recent contests found.</p>
        )}
      </div>
    </div>
  );
};

export default ContestTracker;
