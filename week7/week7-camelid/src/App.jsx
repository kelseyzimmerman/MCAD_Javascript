import React from "react";
import Camelid from "./Camelid";

const App = () => {
  const llama = {
    name: "Llama",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Lama_glama_Lama_glama_juvenile_-_Calafate.JPG/320px-Lama_glama_Lama_glama_juvenile_-_Calafate.JPG",
    trivia: "Llamas are known for their strength and are often used as pack animals."
  };

  const alpaca = {
    name: "Alpaca",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Alpaca_in_Luxembourg.jpg/320px-Alpaca_in_Luxembourg.jpg",
    trivia: "Alpacas produce soft, luxurious wool that is highly valued in textiles."
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
