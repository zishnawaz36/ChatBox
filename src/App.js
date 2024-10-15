import React, { useState } from "react";
import SalesChat from './Components/SalesChat' 
import MarketInsights from "./Components/MarketInsights";
import MagicButton from "./Components/MagicButton";
import ProductGuide from "./Components/ProductGuide";

function App() {
  const [feature, setFeature] = useState("");

  return (
    <div className="App min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Sales Copilot</h1>
      <div className="flex justify-around mb-4">
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600" onClick={() => setFeature("Sales Chat")}>Sales Chat</button>
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600" onClick={() => setFeature("Market Insights")}>Market Insights</button>
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600" onClick={() => setFeature("Magic Button")}>Magic Button</button>
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600" onClick={() => setFeature("Product Guide")}>Product Guide</button>
      </div>

      {feature === "Sales Chat" && <SalesChat/>}
      {feature === "Market Insights" && <MarketInsights />}
      {feature === "Magic Button" && <MagicButton />}
      {feature === "Product Guide" && <ProductGuide />}
    </div>
  );
}

export default App;
