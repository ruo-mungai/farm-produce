import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FarmerForm from "./FarmerForm.js";

// css from material ui
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
 //passing props from app.js
function ProductForms({
  textStyle,
  button,
  newProduct,
  farmer,
  category,
  newFarmer,
  setFarmer,
  name,
  price,
  quantity,
  category_id,
  farmer_id,
  setName,
  setPrice,
  setQuantity,
  setCategory_id,
  setFarmer_id,
}) {
  const classes = useStyles();

  // const [name, setName] = useState("");
  // const [price, setPrice] = useState("");
  // const [quantity, setQuantity] = useState("");
  // const [category_id, setCategory_id] = useState("");
  // const [farmer_id, setFarmer_id] = useState("");

  //functions to handle farmer and category select form
  const handleChange = (event) => {
    setFarmer_id(event.target.value);
  };
  const handleChangeCat = (event) => {
    setCategory_id(event.target.value);
  };

  //farmer and category select forms
  const farm = (
    <FormControl variant="filled" className={classes.formControl}>
      <InputLabel htmlFor="filled-age-native-simple">Farmer</InputLabel>
      <Select native value={farmer_id.farmer} onChange={handleChange}>
        <option aria-label="None" value="" />
        {farmer.map((far) => (
          <option value={far.id}>{far.name}</option>
        ))}
      </Select>
    </FormControl>
  );
  const cate = (
    <FormControl variant="filled" className={classes.formControl}>
      <InputLabel htmlFor="filled-age-native-simple">category</InputLabel>
      <Select native value={category_id.category} onChange={handleChangeCat}>
        <option aria-label="None" value="" />
        {category.map((cat) => (
          <option value={cat.id}>{cat.name}</option>
        ))}
      </Select>
    </FormControl>
  );

  // console.log(farmer_id);

  // console.log(category_id);

  // function to handle new product
  function handleSubmit(event) {
    event.preventDefault();
    let newProduc = {
      name: name,
      quantity: quantity,
      price: price,
      category_id: category_id,
      farmer_id: farmer_id,
    };
 // post request to add new product
    fetch("https://farm-pro1.herokuapp.com/p", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduc),
    })
      .then((response) => response.json())
      .then((data) => {
        newProduct(data);
      });
    setName("");
    setPrice("");
    setQuantity("");
    setCategory_id("");
    setFarmer_id("");
  }

  return (

    //post to dom
    <div>
      <h2>Add product Form</h2>
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
        label="Quantity (kg)"
        variant="outlined"
        className={textStyle}
        onChange={(e) => setQuantity(e.target.value)}
        value={quantity}
      />
      <TextField
        id="outlined-basic"
        label="Price"
        variant="outlined"
        className={textStyle}
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      />
      {cate}
      {farm}
      {/* <TextField
        id="outlined-basic"
        label="Caterogy_id"
        variant="outlined"
        className={textStyle}
        onChange={(e) => setCategory(e.target.value)}
        value={category_id}
      /> */}
      {/* <TextField
        id="outlined-basic"
        label="Farmer_id"
        variant="outlined"
        className={textStyle}
        onChange={(e) => setFarmer(e.target.value)}
        value={farmer_id}
      /> */}
      <Button
        variant="contained"
        color="secondary"
        className={button}
        onClick={handleSubmit}
      >
        Buy product
      </Button>
      <FarmerForm setFarmer={setFarmer} newFarmer={newFarmer} />
    </div>
  );
}
export default ProductForms;
