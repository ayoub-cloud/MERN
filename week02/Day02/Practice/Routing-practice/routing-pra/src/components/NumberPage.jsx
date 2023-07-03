import React from 'react'
import { useParams } from 'react-router-dom';

const NumberPage = (props) => {
    const {id} = useParams();
  return (
   <div>
      {isNaN(+id) ? <h1>The Word is : {id}</h1> : <h1>The Number is : {id}</h1>}
    </div>
  )
}


  
 
   

export default NumberPage