import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.css"
import { Link } from 'react-router-dom';

const ProductsList = (props) => {
    //create a new state 
    const [products , setProducts]= useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/")
        .then((serverResponse)=>{
            console.log(serverResponse.data);
            setProducts(serverResponse.data)
        })
        .catch((err)=>{
            console.log("Somthing went wrong ❌",err);
        })
    },[])
  return (
    <div><h2>
        Products List
    </h2>

         <table className='table'>
            <thead>
            <tr>
                <th>title</th>
                <th>price</th>
                <th>description</th>

            </tr>
            </thead>
            <tbody>
                 {products.map((oneProduct)=>{
                    return(
                        <tr key={oneProduct._id} >
                        <td><Link to={`products/${oneProduct._id}`}>{oneProduct.title}</Link></td>
                        <td>{oneProduct.price}</td>
                        <td>{oneProduct.description}</td>
                    </tr>
                    )
                 })}   
            </tbody>
         </table>
    </div>



  )
}

export default ProductsList