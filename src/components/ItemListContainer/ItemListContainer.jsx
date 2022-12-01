import React,{useState,useEffect} from 'react'
import ItemList from './ItemList';
import {getItemsFromAPI,getItemsFromAPIByCategory} from '../../services/firebase';
import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

const ItemListContainer = () => {
  const [productsList,setProductsList] = useState([]);
  const [feedbackMsg, setFeedbackMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const {categoryid} = useParams();

  useEffect(() => {
    setIsLoading(true);
    if (categoryid) {
      getItemsFromAPIByCategory(categoryid)
      .then((product)=>{
        setProductsList(product);
      })
      .catch(
        error =>{
          setFeedbackMsg(error.message)
        })
      .finally(() => setIsLoading(false))
    } else {
      getItemsFromAPI()
      .then((product)=>{
        setProductsList(product);
      })
      .finally(() => setIsLoading(false))
    }
  },[categoryid]);

  if (isLoading)
  return (
    
      <Loader color="blue" size={128} />
  
  );

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item>
        <ItemList feedbackMsg={feedbackMsg} productsList={productsList}></ItemList>
      </Grid>
    </Grid>
  )
}

export default ItemListContainer;