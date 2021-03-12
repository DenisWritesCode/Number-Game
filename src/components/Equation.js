// Receives equation from App and displays it.

function Equation({ equation }) {

  return (
    <div>
      <p className='equation'>{equation.firstNumber} x {equation.lastNumber} </p>
    </div>
  )
}

export default Equation;