import React, { useState} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function FarmerForm({ textStyle, button, newFarmer }) {
  //define useState for adding a farmer
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [location, setLocation] = useState("");

  // function to handle new data from input
  function handleSubmit(event) {
    event.preventDefault();
    let newFame = {
      name: name,
      tel: tel,
      location: location,
    };

    //send a post request
    fetch("https://farm-pro1.herokuapp.com/f", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFame),
    })
      .then((response) => response.json())
      .then((data) => {
        newFarmer(data);
      });
    setName("");
    setTel("");
    setLocation("");
  }

  return (
    //input form
    <div> 
      <h2>Add Farmer Form</h2>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        className={textStyle}
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <TextField
        id="outlined-basic"
        label="Tel"
        variant="outlined"
        className={textStyle}
        onChange={(e) => setTel(e.target.value)}
        value={tel}
      />
      <TextField
        id="outlined-basic"
        label="Location"
        variant="outlined"
        className={textStyle}
        onChange={(e) => setLocation(e.target.value)}
        value={location}
      />
      <Button
        variant="contained"
        color="secondary"
        className={button}
        onClick={handleSubmit}
      >
        {" "}
        New Farmer
      </Button>
    </div>
  );
}
export default FarmerForm;
