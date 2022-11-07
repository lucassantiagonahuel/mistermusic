import * as React from 'react';
import { useState } from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { Button, Grid } from '@mui/material';
import {Link} from "react-router-dom"


function Item({product}) {

const [isFavorite,setIsFavorite] = useState(false); 
const handleFavorite = () =>{
    setIsFavorite(!isFavorite);
}

let colorFavoriteIcon = isFavorite === true ? "error" :"disable";
let urlDetail=`/detalle/${product.id}`

  return (
    <Card sx={{ maxWidth: 345,height:"100%"}}>
      <Grid container style={{height:"100%"}}>
        <Grid item style={{width:"100%",height:"20%"}}>
          <CardHeader title={product.name}/>  
        </Grid>
        <Grid item style={{width:"100%",height:"50%"}}>
          <CardMedia
            component="img"
            height="210"
            image={product.image}
            alt={product.name}
          />
        </Grid>
        <Grid item style={{width:"100%",height:"20%"}}>
          <CardContent>
            <Typography variant="h4" color="text.secondary">
              ${product.price}
            </Typography>
          </CardContent>
        </Grid>
        <Grid container justifyContent="center" style={{width:"100%",height:"10%"}}>
          <CardActions disableSpacing>
            <IconButton onClick={handleFavorite} aria-label="add to favorites">
              <FavoriteIcon color={colorFavoriteIcon}/>
            </IconButton>
              <Link to={urlDetail}>
                <Button variant="outlined" color="error">Ver mas</Button>
              </Link>
            <IconButton aria-label="share">
              <ShoppingCart />
            </IconButton>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
}
export default Item;
