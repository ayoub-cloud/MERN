import React from 'react'
import { useParams } from 'react-router-dom';


const ColoredWord = (props) => {
    const { word, color1, color2 } = useParams()
  const style = {
    color: color1,
    backgroundColor: color2}
  return (
    <h1 style={style}> The word is: {word}</h1>
  )
}

export default ColoredWord