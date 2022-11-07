import React,{useState,useEffect} from 'react'
import ItemList from './ItemList';
import getProductsFromAPI,{getItemsFromAPIByCategory} from '../../data/products';
import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [productsList,setProductsList] = useState([]);
  const {categoryid} = useParams();

  useEffect(() => {
    if (categoryid) {
      console.log(`CATEGORY ${categoryid}`);
      getItemsFromAPIByCategory(categoryid).then((product)=>{
        setProductsList(product);
      });
    } else {
      getProductsFromAPI().then((product)=>{
        setProductsList(product);
      });
    }
  },[categoryid]);

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item>
        <ItemList productsList={productsList}></ItemList>
      </Grid>
    </Grid>
  )
}

export default ItemListContainer;