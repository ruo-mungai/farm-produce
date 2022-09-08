import React,{ useState,useEffect} from 'react'
import "../App.css"
import { Button } from '@material-ui/core'
import ProductForms from "./Productform.js"

function Home({farmer}) {

    
  
 const [total, setTotal] = useState([]);
 console.log(farmer)
 const btnstyle={margin:'8px 0'}

  
  useEffect(() => {
    fetch(`http://localhost:9292/total`)
    .then(response => response.json())
    .then((data) => {
     
     setTotal(data)
    
    })
  }, [])

 


  return (
    <div className="app" >
     
        <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Tel</th>
          <th>Location</th>
          <th>Product</th>
          <th>Category</th>
          <th>Quantity (Kg)</th>
          <th>Price</th>
        </tr>
        {farmer.map((farmer) => (
          <tr key={farmer.id}>
            <td>{farmer.name}</td>
            <td>{farmer.tel}</td>
            <td>{farmer.location}</td>
            {farmer.products.map((pro)=>
             <>
            <td>{pro.name}</td> 
            <td>{pro.category.name}</td>
            <td>{pro.quantity}</td>
             <td>{pro.price}</td>
            </>)}
            
          </tr>
        ))}
      </tbody>
    </table>
    <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Total farmers debt: {total}</Button>
 
    </div>
 
  );
}

export default Home