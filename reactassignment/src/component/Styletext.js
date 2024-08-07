//Styled Text: Build a component that displays text with some inline styles applied using JSX.	

import React from 'react'

const Styletext = () => {

    const containerdiv={
        backgroundColor:"red",
        color: "white",
        height:"100px"

    }
  return (
    <div>
        <p style={containerdiv}>Text with inline Style</p></div>
  )
}

export default Styletext