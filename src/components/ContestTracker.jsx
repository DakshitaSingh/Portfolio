import React, { useEffect, useState } from "react";

const ContestTracker = () => {
  const [upcomingContests, setUpcomingContests] = useState([]);
  const [pastContests, setPastContests] = useState([]);

  useEffect(() => {
    const fetchContests = async () => {
      try {
        const res = await fetch("https://codeforces.com/api/contest.list");
        const data = await res.json();
        if (data.status === "OK") {
          const contests = data.result;

          const currentTime = Math.floor(Date.now() / 1000);
          const upcoming = contests
            .filter((c) => c.phase === "BEFORE")
            .slice(0, 5); // limit to next 5
          const past = contests
            .filter((c) => c.phase === "FINISHED" && currentTime - c.startTimeSeconds <= 7 * 24 * 60 * 60)
            .slice(0, 5); // past 1 week

          setUpcomingContests(upcoming);
          setPastContests(past);
        }
      } catch (error) {
        console.error("Failed to fetch contests", error);
      }
    };

    fetchContests();
  }, []);

  const formatTime = (seconds) => {
    const d = new Date(seconds * 1000);
    return d.toLocaleString();
  };

  const timeRemaining = (seconds) => {
    const diff = seconds - Math.floor(Date.now() / 1000);
    const hours = Math.floor(diff / 3600);
    const minutes = Math.floor((diff % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      {/* Upcoming Contests */}
      <div>
        <h2 className="text-xl font-semibold text-indigo-700 mb-3">Upcoming Contests</h2>
        <div className="space-y-4">
          {upcomingContests.map((contest) => (
            <div key={contest.id} className="p-4 bg-white shadow rounded">
              <p className="text-lg font-medium">{contest.name}</p>
              <p>Start Time: {formatTime(contest.startTimeSeconds)}</p>
              <p className="text-sm text-green-600">Starts in: {timeRemaining(contest.startTimeSeconds)}</p>
              <a
                href={`https://codeforces.com/contest/${contest.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline text-sm"
              >
                Visit Contest
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Past Contests */}
      <div>
        <h2 className="text-xl font-semibold text-indigo-700 mb-3">Past Contests (Last 7 Days)</h2>
        <div className="space-y-4">
          {pastContests.map((contest) => (
            <div key={contest.id} className="p-4 bg-white shadow rounded">
              <p className="text-lg font-medium">{contest.name}</p>
              <p>Start Time: {formatTime(contest.startTimeSeconds)}</p>
              <a
                href={`https://codeforces.com/contest/${contest.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline text-sm"
              >
                View Contest
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContestTracker;
