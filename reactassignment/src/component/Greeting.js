//Q2.Personal Greeting: Build a component that accepts a name prop and displays a personalized greeting using JSX.		

import React from 'react'

const Greeting = ({name}) => {
  return (
    <div>Hello,Welcome {name}</div>
  )
}

export default Greeting