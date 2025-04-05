import { useState, useRef, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function Chatbot() {
  const [chatHistory, setChatHistory] = useState([]);
  const [question, setQuestion] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const [listening, setListening] = useState(false);

  const chatContainerRef = useRef(null);
  const recognitionRef = useRef(null);
  const utteranceRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory, generatingAnswer]);

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
      alert("Your browser does not support Speech Recognition");
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.onresult = (event) => {
      const result = event.results[0][0].transcript;
      setQuestion(result);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognitionRef.current = recognition;
  }, []);

  const startListening = () => {
    if (recognitionRef.current && !listening) {
      recognitionRef.current.start();
      setListening(true);
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && listening) {
      recognitionRef.current.stop();
      setListening(false);
    }
  };

  const speakText = (text) => {
    const synth = window.speechSynthesis;
    if (!synth) return;

    synth.cancel(); // cancel any existing speech

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utteranceRef.current = utterance;

    synth.speak(utterance);
  };

  const stopSpeaking = () => {
    const synth = window.speechSynthesis;
    if (synth && synth.speaking) {
      synth.cancel();
    }
  };

  async function generateAnswer(e) {
    e.preventDefault();
    if (!question.trim()) return;

    stopSpeaking(); // stop speaking before answering

    setGeneratingAnswer(true);
    const currentQuestion = question;
    setQuestion(""); // Clear input

    setChatHistory((prev) => [...prev, { type: "question", content: currentQuestion }]);

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${
          import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT
        }`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: currentQuestion }] }],
        },
      });

      const aiResponse = response.data.candidates[0].content.parts[0].text;
      setChatHistory((prev) => [...prev, { type: "answer", content: aiResponse }]);

      speakText(aiResponse);
    } catch (error) {
      console.log(error);
      setChatHistory((prev) => [
        ...prev,
        { type: "answer", content: "Sorry, something went wrong!" },
      ]);
    }

    setGeneratingAnswer(false);
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="text-center py-4 bg-blue-600 text-white shadow-md">
        <h1 className="text-2xl font-bold">AI Chatbot</h1>
      </header>

      <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4">
        {chatHistory.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-600">Ask me anything!</p>
          </div>
        ) : (
          chatHistory.map((chat, index) => (
            <div
              key={index}
              className={`my-2 ${
                chat.type === "question" ? "text-right" : "text-left"
              }`}
            >
              <div
                className={`inline-block p-3 rounded-lg max-w-[80%] ${
                  chat.type === "question"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                <ReactMarkdown>{chat.content}</ReactMarkdown>
              </div>
            </div>
          ))
        )}
        {generatingAnswer && (
          <p className="text-gray-500 animate-pulse">Thinking...</p>
        )}
      </div>

      <form
        onSubmit={generateAnswer}
        className="p-4 bg-white shadow-md flex flex-col gap-2"
      >
        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded p-3 focus:outline-none"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask something..."
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Send
          </button>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={startListening}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            🎙️ Start Voice
          </button>
          <button
            type="button"
            onClick={stopListening}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            ✋ Stop Voice
          </button>
          <button
            type="button"
            onClick={stopSpeaking}
            className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
          >
            🛑 Stop Speaking
          </button>
        </div>
      </form>
    </div>
  );
}

export default Chatbot;
