import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/Home";
import ProductForms from "./components/Productform.js";
import ProtectedRoutes from "./components/ProtectedRoutes";
import SearchAppBar from "./components/SearchAppBar";
import images from "./farm.png";
import ProdoctD from "./components/ProdoctD";


function App() {
// Define all useStates
  const [product, setProduct] = useState([]);
  const [loggedin, setLoggedin] = useState(false);
  const [farmer, setFarmer] = useState([]);
  const [category, setCategory] = useState([]);
  const [total, setTotal] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category_id, setCategory_id] = useState("");
  const [farmer_id, setFarmer_id] = useState("");
  
// functions to create new product and farmer
  function addProduct(newProduct) {
    setProduct([...product, newProduct]);
  }

  function addFarmer(newFarmer) {
    setFarmer([...farmer, newFarmer]);
  }
//get all farmers
  useEffect(() => {
    fetch("https://farm-pro1.herokuapp.com/farmers")
      .then((response) => response.json())
      .then((data) => {
        setFarmer(data);
      });
  }, []);

//get the total of all products
  useEffect(() => {
    fetch(`https://farm-pro1.herokuapp.com/total`)
      .then((response) => response.json())
      .then((data) => {
        setTotal(data);
      });
  }, []);

//get category data
  useEffect(() => {
    fetch("https://farm-pro1.herokuapp.com/category")
      .then((response) => response.json())
      .then((data) => {
        setCategory(data);
      });
  }, []);

  //Delete a farmer and his products
  function handleDelete(id) {
    fetch(`https://farm-pro1.herokuapp.com/farmers/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        const deleteFarmer = farmer.filter((product) => product.id !== id);
        setFarmer(deleteFarmer);
      });
  }
    //get all products
   useEffect(() => {
     fetch(`https://farm-pro1.herokuapp.com/product`)
       .then((response) => response.json())
       .then((data) => {
         setProduct(data);
       });
   }, []);



  return (
    //Route all the component
    <div className="App">
      <SearchAppBar images={images} />
      <Routes>
        <Route
          path="/"
          element={<Login loggedin={loggedin} logSet={setLoggedin} />}
        />
        <Route element={<ProtectedRoutes loggedin={loggedin} />} />
        <Route path="/home" element={<Home farmer={farmer} total={total} handleDelete={handleDelete} setTotal={setTotal}/>} />
        <Route
          path="/views"
          element={
            <ProdoctD
              farmer={farmer}
              setFarmer={setFarmer}
              product={product}
              total={total}
            />
          }
        />
        <Route
          path="/product"
          element={
            <ProductForms
              newProduct={addProduct}
              farmer={farmer}
              category={category}
              newFarmer={addFarmer}
              setFarmer={setFarmer}
              name={name}
              price={price}
              quantity={quantity}
              category_id={category_id}
              farmer_id={farmer_id}
              setName={setName}
              setPrice={setPrice}
              setQuantity={setQuantity}
              setCategory_id={setCategory_id}
              setFarmer_id={setFarmer_id}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
