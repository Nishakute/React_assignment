//Simple Calculator: Create a component that displays the result of a simple calculation (e.g., 2 + 2) using JSX.

import React from 'react'

const Calculator = () => {
    const result=2+2;
  return (
    <div>
        The result of 2+2 is:{result}
    </div>
  )
}

export default Calculator