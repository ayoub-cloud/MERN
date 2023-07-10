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
    //deleteFunction
    const deleteProduct =(id)=>{
        axios.delete("http://localhost:8000/api/products/"+id)
        .then((serverResponse)=>{
            console.log("delete succesfully",serverResponse.data);
            //removeFromTheDOM
            setProducts(products.filter((product) => product._id !== id))

        })
        .catch((err)=>{
            console.log("Somthing went wrong ❌",err);
        })
    }
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
                <th>Action</th>

            </tr>
            </thead>
            <tbody>
                 {products.map((oneProduct)=>{
                    return(
                        <tr key={oneProduct._id} >
                        <td><Link to={`products/${oneProduct._id}`}>{oneProduct.title}</Link></td>
                        <td>{oneProduct.price}</td>
                        <td>{oneProduct.description}</td>
                        <td>
                        <button className='btn btn-success'><Link to={`products/edit/${oneProduct._id}`}>update!!</Link></button>
                           <button onClick={()=>deleteProduct(oneProduct._id)}  className='btn btn-danger'>delete</button>
                        </td>
                    </tr>
                    )
                 })}   
            </tbody>
         </table>
    </div>



  )
}

export default ProductsList