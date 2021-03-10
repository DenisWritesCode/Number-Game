import React from 'react';
// Should generate the equation. 
// Or maybe App should do it for us and then we can pass it down as prop since we need the answer
// to that equation in Input.
// Or maybe I will end up creating a third component.
function Equation({ changeEquation }) {
  return (
    <div>
      <p className="equation">6 x 2</p>
    </div>
  )
}

export default Equation;