
function App() {
  const computer = true;
  const name = "Kelsey";
  return (
    <p>Hello World! I am { name } and I wrote this on my { computer ? (<p>dekstop computer</p> ) : (<p> fancy tablet</p>)} </p>
  )
}

export default App