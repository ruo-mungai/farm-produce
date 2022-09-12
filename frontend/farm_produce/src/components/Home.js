import React from "react";
import "../App.css";
import { Button } from "@material-ui/core";

// send props to home
function Home({ farmer, setFarmer ,setTotal, total ,handleDelete}) {
  const btnstyle = { margin: "8px 0" };

//map the data in props
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Tel</th>
            <th>Location</th>
            <th>Product supplied</th>
          </tr>

          {farmer.map((farmer) => (
            <tr key={farmer.id}>
              <td>{farmer.name}</td>
              <td>{farmer.tel}</td>
              <td>{farmer.location}</td>
              <tr>
                <th>Product</th>
                <th>Quantity (Kg)</th>
                <th>Price</th>
              </tr>

              {farmer.products.map((pro) => (
                <div key={pro.id} style={{ display: "flex", width: "auto" }}>
                  <td>{pro.name}</td>
                  <td>{pro.quantity}</td>
                  <td>{pro.price}</td>
                </div>
              ))}

              <tfoot>
                <tr>
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    style={btnstyle}
                  >
                    {" "}
                    Total Ksh:
                    {farmer.products.reduce(
                      (total, currentValue) =>
                        (total = total + currentValue.price),
                      0
                    )}
                  </Button>
                </tr>
              </tfoot>
              <td>
                <Button
                  type="submit"
                  color="secondary"
                  variant="contained"
                  style={btnstyle}
                  onClick={(e) => handleDelete(farmer.id)}
                >
                  Delete Farmer
                </Button>
              </td>
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

export default Home;
