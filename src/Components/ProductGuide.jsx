import React, { useState } from "react";
import axios from "axios";

const ProductGuide = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const handleAsk = async () => {
    try {
      const result = await axios.post(process.env.REACT_APP_PRODUCT_GUIDE_API_URL, { question });
      setResponse(result.data.response);
      console.log("Product :",result);
    } catch (error) {
      console.error("Error asking about product:", error);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Product Guide</h2>
      <input
        type="text"
        className="border rounded p-2 w-full mb-2"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask about a product"
      />
      <button className="bg-blue-500 text-white p-2 rounded" onClick={handleAsk}>Ask</button>
      {response && <p className="mt-4 font-semibold">{response}</p>}
    </div>
  );
};

export default ProductGuide;
