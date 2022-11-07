import { Grid } from '@mui/material'
import React from 'react'
import Item from "../Item/Item"

function ItemList(props) {
  return (
    <Grid container justifyContent="center">

 {(props.productsList).map(product => (
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
