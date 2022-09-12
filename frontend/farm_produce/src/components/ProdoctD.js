import React from "react";
import "../App.css";
import { Button } from "@material-ui/core";

// pass data from props
function ProdoctD({ product ,total}) {
  const btnstyle = { margin: "8px 0" };

  return (
    //map the data to dom
    <div className="app">
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
              <td>{product.category_id}</td>
              <td>{product.farmer_id}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button
        type="submit"
        color="primary"
        variant="contained"
        style={btnstyle}
        fullWidth
      >
        Total Ksh: {total}
      </Button>
    </div>
  );
}

export default ProdoctD;
