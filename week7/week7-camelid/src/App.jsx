import React from "react";
import Camelid from "./Camelid";

const App = () => {
  const llama = {
    name: "Llama",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Black_Llama_Side.jpg",
    trivia: "Llamas are known for their strength and are often used as pack animals."
  };

  const alpaca = {
    name: "Alpaca",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Handspun_llama_yarn.jpg",
    trivia: "Alpaca wool is lovely to work with as a knitter."
  };

  return (
    <div>
      <h1>Compare Llamas and Alpacas</h1>
      <Camelid {...llama} />
      <Camelid {...alpaca} />
    </div>
  );
};

export default App;
