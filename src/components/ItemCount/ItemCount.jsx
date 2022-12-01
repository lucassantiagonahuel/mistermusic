import React,{useState} from 'react';
import Button from "../Button/Button";
import "./itemcount.css";


function ItemCount({ stock, onAddToCart, text }) {
    const [count, setCount] = useState(1);

    function handleAdd(evt) {
      console.log(evt);
      if (count < stock) setCount(count + 1);
    }
  
    function handleSubstract(evt) {
      console.log(evt);
      if (count > 1) setCount(count - 1);
    }



  return (
    <div className="itemcount_container">
    <div className="itemcount_control">
      <Button color="#903024" onClick={handleSubstract}>
        -
      </Button>
      <span>{count}</span>
      <Button color="#239044" onClick={handleAdd}>
        +
      </Button>
    </div>
      <Button variant="outlined" color="error" type="alert" onClick={() => onAddToCart(count)}>Agregar al carrito</Button> 
   </div>
  )
}

export default ItemCount;