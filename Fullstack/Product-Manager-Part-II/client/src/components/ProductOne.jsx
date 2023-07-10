import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductOne = (props) => {
    const [oneProduct,setOneProduct] = useState({});
    //get id form :id in the route
    const {id} = useParams();
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/"+id)
        .then((serverResponse)=>{
            console.log(serverResponse);
            setOneProduct(serverResponse.data.Product)
        })
        .catch((err)=>{
            console.log("Somthing went wrong",err);
        })
    },[id])

  return (
    <div>
        <h1>
        about {oneProduct.title}</h1> 
        {/* {JSON.stringify(oneProduct.title)} */}
<div>

            <li>{oneProduct.title}</li> 
           <li>{oneProduct.price}</li>
            <li>{oneProduct.description}</li>

</div>

    </div>

  )
}

export default ProductOne