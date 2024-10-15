import React, { useState } from "react";
import axios from "axios";

const MagicButton = () => {
  const [feedback, setFeedback] = useState("");
  const [updatedReport, setUpdatedReport] = useState("");

  const handleMagic = async () => {
    try {
      const result = await axios.post(process.env.REACT_APP_MAGIC_BUTTON_API_URL, { feedback });
      setUpdatedReport(result.data.updated_report);
      console.log("Magic:",result);
    } catch (error) {
      console.error("Error updating report:", error);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Magic Button</h2>
      <input
        type="text"
        className="border rounded p-2 w-full mb-2"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Enter feedback"
      />
      <button className="bg-blue-500 text-white p-2 rounded" onClick={handleMagic}>Update Report</button>
      {updatedReport && <p className="mt-4 font-semibold">{updatedReport}</p>}
    </div>
  );
};

export default MagicButton;
