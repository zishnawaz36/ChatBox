import React, { useState } from "react";
import axios from "axios";

const SalesChat = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [history, setHistory] = useState([]);

  const handleSend = async () => {
    try {
      const result = await axios.post(process.env.REACT_APP_SALES_CHAT_API_URL, { input });
      setResponse(result.data.response);
      setHistory([...history, input]);
      setInput("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Sales Chat</h2>
      <div className="flex">
        <input
          type="text"
          className="border rounded p-2 flex-grow mr-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message"
        />
        <button className="bg-blue-500 text-white p-2 rounded" onClick={handleSend}>Send</button>
      </div>
      <div className="mt-4">
        <p className="font-semibold">Response: {response}</p>
        <p className="font-semibold">History: {history.join(", ")}</p>
      </div>
    </div>
  );
};

export default SalesChat;
