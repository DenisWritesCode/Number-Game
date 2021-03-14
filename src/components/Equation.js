// Receives equation from App and displays it.

function Equation({ equation }) {

  return (
    <div>
      <p className='equation'>{equation.firstNumber} {equation.operator} {equation.lastNumber} = {equation.answer} </p>
    </div>
  )
}

export default Equation;