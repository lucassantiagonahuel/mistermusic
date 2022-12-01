import { Grid } from '@mui/material'
import React from 'react'
import Item from "../Item/Item"
import Loader from '../Loader/Loader';

function ItemList(props) {
  let emptyArray = props.productsList.length === 0;

  return (
    <Grid container justifyContent="center">

      {emptyArray ?
        props.feedbackMsg ?
        <span style={{ backgroundColor: "pink" }}>{props.feedbackMsg}</span>
        :
        <Loader color="green" size={128} />
      : 
      (props.productsList).map(product => (
        <Grid  item container justifyContent="space-around" md={3} style={{ marginTop: "15px", marginBottom: "5px" }}>
            <Grid item md={9}>
                <Item  key={product.id} product={product} />
            </Grid>
        </Grid>
      ))}


    </Grid>
  )
}

export default ItemList
