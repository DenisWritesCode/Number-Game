import Equation from "./components/Equation";
import Input from "./components/Input";

// Need another component to work out the correct or wrong ansewr. Basically, a logic.
// If answer correct, increase state if wrong, pass bad value.

function App() {
  
  return (
    <div className="App">
      <Equation />
      <Input />
    </div>
  );
}

export default App;
