import Equation from './components/Equation';
import Input from './components/Input';

// Need another component to work out the correct or wrong ansewr. Basically, a logic.
// If answer correct, increase state if wrong, pass bad value.

function App() {

  const handleAnswer = (answer) => {
    if (answer === equation.answer) {
      alert("Jinias");
    } else {
      alert("More Practice for ya");
    }
  };

  const makeQuestion = () => {
    const firstNumber = Math.floor(Math.random() * 11); // 11 because we will floor it and we want to include 10.
    const lastNumber = Math.floor(Math.random() * 11); // 11 because we will floor it and we want to include 10.
    const answer = firstNumber * lastNumber;
    console.log("Answer: ",answer);
    const numbers = {
      firstNumber,
      lastNumber,
      answer
    };
    return numbers;
  }
  const equation = makeQuestion();
  
  return (
    <div className='App'>
      <Equation equation={equation}/>
      <Input handleAnswer={handleAnswer} />
    </div>
  );
}

export default App;
