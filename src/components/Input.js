// Get input and value and return it to App.
import { useState } from 'react';

function Input({ handleAnswer, rightAnswers, triesLeft, resetGame }) {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAnswer(answer);
    setAnswer('');
  };

  return (
    <div>
      {/* If rightAnswers are 10 or more, display Won Modal.
       *               or
       * If triesLeft are less than or equal to 0, display Lost Modal.
       */}
      {(rightAnswers >= 10 && (
        <div>
          <p>Won Modal</p>
          <button onClick={resetGame}>
            Start
          </button>
        </div>
      )) ||
        (triesLeft <= 0 && (
          <div>
            <p>Lost Modal</p>
            <button onClick={resetGame}>
              Start
            </button>
          </div>
        ))}

      <form action="#" onSubmit={handleSubmit} id="form">
        <input
          type="text"
          placeholder="Input Goes Here"
          className="form-value"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <input type="submit" value="Check Answer" className="form-submit" />
      </form>
      <p>
        You have <span className="rightAnswers">{10 - rightAnswers}</span>{" "}
        correct answers to game completion and{" "}
        <span className="triesLeft">{triesLeft}</span> wrong ones to make before
        the game ends.
      </p>
    </div>
  );
}

export default Input;
