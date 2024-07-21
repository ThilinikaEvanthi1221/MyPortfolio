import React, { useState } from "react";
import { FaCommentDots } from "react-icons/fa"; // Example for chat icon

const Bot = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleMessageBox = () => {
    setIsVisible(!isVisible);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput("");
    }
  };

  return (
    <div>
      {/* Chat icon with popup effect */}
      <div
        onClick={toggleMessageBox}
        className={`fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-3xl bg-cyan-600 w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition-transform transform hover:scale-110 animate-bounce ${
          isVisible ? "scale-90" : ""
        }`}
      >
        <FaCommentDots /> {/* React Icon */}
      </div>

      {/* Chat box with smooth transition */}
      <div
        className={`fixed bottom-24 sm:right-8 right-4 z-[999] bg-white border border-gray-200 rounded-lg shadow-lg w-80 max-h-80 flex flex-col transition-transform transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transition: "opacity 0.3s ease, transform 0.3s ease" }}
      >
        <div className="p-4 flex-1 overflow-y-auto">
          {messages.length === 0 ? (
            <p className="text-gray-500">No messages yet.</p>
          ) : (
            messages.map((msg, index) => (
              <div key={index} className="mb-2 p-3 bg-gray-100 rounded-lg shadow-sm">
                <p className="text-gray-800">{msg}</p>
              </div>
            ))
          )}
        </div>
        <div className="flex items-center border-t border-gray-200">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            className="flex-1 p-3 border-none rounded-l-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Type a message..."
          />
          <button
            onClick={handleSendMessage}
            className="p-3 bg-cyan-600 text-white border-none rounded-r-lg hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bot;
