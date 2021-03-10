import React from "react";

function Input() {
  return (
    <div>
      <form action="#" onSubmit="handleSubmit" className="form">
        <input type="text" value="Enter answer Here" className="form-value" />
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
