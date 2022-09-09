import React,{ useState,useEffect} from 'react'
import "../App.css"
import { Button } from '@material-ui/core'
import {useNavigate} from "react-router-dom"


function ProdoctD() {

 const [product, setProduct] = useState([]);
 const btnstyle={margin:'8px 0'}

  
 let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/views`; 
    navigate(path);
  }

 console.log(product)
  
  useEffect(() => {
    fetch(`http://localhost:9292/product`)
    .then(response => response.json())
    .then((data) => {
     
     setProduct(data)
    
    })
  }, [])

 


  return (
   
    <div className="app" >
     
        <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Category_id</th>
          <th>Farmer_id</th>
        </tr>
        {product.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
            <td>{product.category_id }</td>
            <td>{product.farmer_id}</td>
            <td>  <Button type='submit' color='primary' variant="contained" style={btnstyle}>Edit</Button> </td>
          </tr>
         
        ))}
      </tbody>
      
    </table>

    
 
    </div>
 
  );
}


export default ProdoctD