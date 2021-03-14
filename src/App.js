import Equation from './components/Equation';
import Input from './components/Input';

// Need another component to work out the correct or wrong ansewr. Basically, a logic.
// If answer correct, increase state if wrong, pass bad value.

function App() {
  
  const makeQuestion = () => {
    const firstNumber = Math.floor(Math.random() * 11); // 11 because we will floor it and we want to include 10.
    const lastNumber = Math.floor(Math.random() * 11); // 11 because we will floor it and we want to include 10.
    const operator = ['+', '*', '-'][Math.floor(Math.random() * 3)]; //Pick a random operator from the array of signs

    let answer = 0;
    switch (operator) {
      case "+":
        answer = firstNumber + lastNumber;
        break;
      case "*":
        answer = firstNumber * lastNumber;
        break;
      case "-":
        answer = firstNumber - lastNumber;
        break;
      default:
        break;
    }

    const numbers = {
      firstNumber,
      lastNumber,
      operator,
      answer
    };
    
    return numbers;
  }
  
  const equation = makeQuestion();
  
  const handleAnswer = (answer) => {
    if (equation.answer === parseInt(answer)) {
      console.log("Jinias");
    } else {
      console.log("More Practice for ya");
    }
  };

  return (
    <div className='App'>
      <Equation equation={equation}/>
      <Input handleAnswer={handleAnswer} />
    </div>
  );
}

export default App;
