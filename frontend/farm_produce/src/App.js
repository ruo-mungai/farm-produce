import React,{useState,useEffect}from 'react';
import {Routes,Route} from "react-router-dom"
import Login from './components/login';
import Home from './components/Home';
import ProductForms from "./components/Productform.js"
import ProtectedRoutes from './components/ProtectedRoutes';
import SearchAppBar from './components/SearchAppBar'
import images from './farm.png'
import Search from './components/Search';
import Category from './components/Category';

function App() {
 

   const [loggedin, setLoggedin]=useState(false)
   const [farmer, setFarmer] = useState([]);
   const [category, setCategory] = useState([]);


    function addProduct(newProduct) {
    setFarmer([...farmer, newProduct])
  }

  useEffect(() => {
    fetch(`http://localhost:9292/category`)
    .then(response => response.json())
    .then((data) => {
     
     setCategory(data)
    
    })
  }, [])


   useEffect(() => {
    fetch(`http://localhost:9292/farmers`)
    .then(response => response.json())
    .then((data) => {
     
     setFarmer(data)
    
    })
  }, [])


  return (
    <div className="App">
      
      <SearchAppBar images={images} />
      <Routes>
        {/* <Route path="/" element= {<Login loggedin={loggedin} logSet={setLoggedin}/>}/> */}
        {/* <Route element={<ProtectedRoutes loggedin={loggedin}/>}> */}
          {/* <Route path="/search" element= {<Search/>}/> */}
        <Route path="/home" element= {<Home farmer={farmer}/>}/>
        {/* <Route path="/category" element= {<Category category={category}/>}/> */}
        <Route path="/product" element={<ProductForms newProduct={addProduct}/>}/>
        {/* </Route> */}
        </Routes>  
      
    </div>
  );
}

export default App;
