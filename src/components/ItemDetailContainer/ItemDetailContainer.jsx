import * as React from 'react';
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import {getSingleItemFromAPI} from '../../services/firebase';
import Loader from "../Loader/Loader";
import ItemDetail from './ItemDetail';


function ItemDetailContainer() {

 
  const [product, setProduct] = useState([null]);
  const [isLoading, setIsLoading] = useState(true);
  const [feedbackMsg, setFeedbackMsg] = useState(null);

  let params = useParams();
  let id = params.id;


  useEffect(() => {
    getSingleItemFromAPI(id)
      .then((product)=>{
        setProduct(product);
      })
      .catch((error) => 
      setFeedbackMsg(`Error: ${error.message}`)
      )
      .finally(() => setIsLoading(false));
  },[id]);

  if (isLoading)
  return (
      <Loader color="blue" size={128} />
  );



  return (
    <div>
      {feedbackMsg ? (
        <span style={{ backgroundColor: "pink" }}>{feedbackMsg}</span>
      ) : (
        <ItemDetail product={product} />
      )}
    </div>
  );
}
export default ItemDetailContainer;
