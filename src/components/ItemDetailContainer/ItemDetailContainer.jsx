import * as React from 'react';
import { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { Button, Grid } from '@mui/material';
import {useParams} from "react-router-dom";
import {getSingleItemFromAPI} from '../../data/products';


function ItemDetailContainer() {

  const [isFavorite,setIsFavorite] = useState(false); 
  const [product, setProduct] = useState([]);
  let params = useParams();
  let id = params.id;
  let colorFavoriteIcon = isFavorite === true ? "error" :"disable";
  const handleFavorite = () =>{
      setIsFavorite(!isFavorite);
  }

  useEffect(() => {
    getSingleItemFromAPI(id)
      .then((product)=>{
        setProduct(product);
      })
      .catch((error) => alert(error));
  },[id]);




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
            <Button variant="outlined" color="error">Agregar al carrito</Button>
            {/* <IconButton aria-label="share">
              <ShoppingCart />
            </IconButton> */}
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
}
export default ItemDetailContainer;
