import { useState } from 'react';

// Get input and value and return it to App.

function Input() {

  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(answer);
  };

  return (
    <div>
      <form action="#" onSubmit={handleSubmit} id="form">
        <input
          type="text"
          placeholder="Input Goes Here"
          className="form-value"
          value={answer}
          onChange={e => setAnswer(e.target.value)}
        />
        <input type="submit" value="Check Answer" className="form-submit" />
      </form>
      <p>
        You have <span className="rightAnswers">10</span> correct answers to go
        and <span className="wrongAnswers">3</span> wrong ones to make before
        the game ends.
      </p>
    </div>
  );
}

export default Input;
