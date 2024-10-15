import React, { useState } from "react";
import axios from "axios";

const MarketInsights = () => {
  const [company, setCompany] = useState("");
  const [report, setReport] = useState(null);

  const fetchInsights = async () => {
    try {
      const result = await axios.post(process.env.REACT_APP_MARKET_INSIGHTS_API_URL, { company });
      setReport(result.data.report);
      console.log("Market :",result);
    } catch (error) {
      console.error("Error fetching insights:", error);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Market Insights</h2>
      <input
        type="text"
        className="border rounded p-2 w-full mb-2"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Enter company name"
      />
      <button className="bg-blue-500 text-white p-2 rounded" onClick={fetchInsights}>Get Insights</button>

      {report && (
        <div className="mt-4">
          <p className="font-semibold">Latest Attacks: {report.latest_attacks}</p>
          <p className="font-semibold">Pain Points: {report.pain_points}</p>
        </div>
      )}
    </div>
  );
};

export default MarketInsights;
