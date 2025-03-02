function App () {
  const source = "https://nwyarns.com/blogs/northwest-yarns/know-your-fiber-llama#:~:text=Like%20many%20of%20the%20warmest,alpaca%20in%20texture%20and%20width"
  const llamaFacts = [ //array of facts about llamas
    "Llamas are part of the same family as camels. ", 
    "Their wool has a hollow core like other super-insulative fibers. ",
    "Llamas are native to South America. ",
    "European colonization decimated the native llama population in South America. ",
    "Farmers in North America did not begin stocking llamas until the 1970s. "
    ]

    const randomFact = Math.random() < 0.5 ? llamaFacts[3] : llamaFacts[4];  // randomizes between last two llamaFact statements 
return (
  <div>
      <h1>Llama Facts</h1>
      <p> {llamaFacts[0]} </p>
      <p> {llamaFacts[1]} </p>
      <p> {llamaFacts[2]} </p>
      <p>{randomFact}</p>
      <p><a href={source}>source</a>
      </p>
      </div>
)
}
export default App
