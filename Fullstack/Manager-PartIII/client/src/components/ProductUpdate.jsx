import axios from 'axios'
import React, {  useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css"

const ProductUpdate = (props) => {
    const {id} = useParams();

    const [title , setTitle]= useState("")
    const [price , setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const nav = useNavigate()

useEffect (()=>{
//got to the server and brong the show from DB
axios.get("http://localhost:8000/api/products/"+id)
.then((serverResponse)=>{
    // console.log(serverResponse.data.Product);
    setTitle(serverResponse.data.Product.title)
    setPrice(serverResponse.data.Product.price)
    setDescription(serverResponse.data.Product.description)
})
.catch((err)=>{
    console.log("Somthing went wrong ❌",err);
})

},[id])
const handleForm = (e) =>{
    e.preventDefault();

    // console.log(title, genre, episodes);
    const updatedProduct = {
        title,
        price,
        description
    }

    // send it to the server

    axios.put("http://localhost:8000/api/products/"+id, updatedProduct)
    .then((response)=>{
        console.log(response.data);
        nav("/")
    })
    .catch((err)=>{
        console.log("❌❌❌ Something Went Wrong", err);
    })
   }    


  return (
    <div>ProductUpdate
                <form onSubmit={handleForm}>
                    <div>
                        <label>Title</label>
                        <input
                            type="text"

                            onChange={(e) => setTitle(e.target.value)}value={title}
                        />
                    </div>
                    <div>
                        <label>Price</label>
                        <input
                            type="number"

                            onChange={(e) => setPrice(e.target.value)} value={price}
                        />
                    </div>
                    <div>
                        <label>Description</label>
                        <input
                            type="text"

                            onChange={(e) => setDescription(e.target.value)}value={description}
                        />
                    </div>
                    <input type="submit" value="update" />
                </form>

    </div>
  )
}

export default ProductUpdate