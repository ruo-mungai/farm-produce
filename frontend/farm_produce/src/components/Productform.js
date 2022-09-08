import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {useState} from 'react'


function ProductForms({classes , textStyle, button,newProduct}) {

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [quantity, setQuantity] = useState("")
  const [category_id, setCategory] = useState("")
  const [farmer_id, setFarmer] = useState("")
  const [category, setCategorys] = useState("")
  

   function handleSubmit(event) {
    event.preventDefault();
    let newProduct={
      name:name,
      quantity:quantity,
      price:price,
      category_id:category_id,
      farmer_id:farmer_id
    }

    const handleCategory=(event)=>{
    event.preventDefault();
    let newCategory={
      name:category,
    }


    fetch("http://localhost:9292/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCategory)
    })
    .then(response => response.json())
    .then(data => {
     newCategory(data) 
    })
    setCategorys("")
  }
  
  
    fetch("http://localhost:9292/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct)
    })
    .then(response => response.json())
    .then(data => {
     newProduct(data) 
    })
    setName("")
    setPrice("")
    setQuantity("")
    setCategory("")
    setFarmer("")
  }
  
  return (
    <div >
        <h2>Add product Form</h2>
       <TextField id="outlined-basic" label="Name" variant="outlined" className={textStyle} onChange={(e) => setName(e.target.value)} value={name} />
       <TextField id="outlined-basic" label="Quantity (kg)" variant="outlined" className={textStyle} onChange={(e) => setQuantity(e.target.value)} value={quantity} />
       <TextField id="outlined-basic" label="Price" variant="outlined" className={textStyle} onChange={(e) => setPrice(e.target.value)} value={price}  />
        <TextField id="outlined-basic" label="Caterogy_id" variant="outlined" className={textStyle} onChange={(e) => setCategory(e.target.value)} value={category_id}   />
         <TextField id="outlined-basic" label="Farmer_id" variant="outlined" className={textStyle} onChange={(e) => setFarmer(e.target.value)} value={farmer_id}  />
        <Button variant="contained" color="secondary" className={button} onClick={handleSubmit}> Buy product</Button >

        <h2>Add Category Form</h2>
        <TextField id="outlined-basic" label="Name" variant="outlined" className={textStyle} onChange={(e) => setCategorys(e.target.value)} value={category} />
        

    </div>
  )
}
export default ProductForms