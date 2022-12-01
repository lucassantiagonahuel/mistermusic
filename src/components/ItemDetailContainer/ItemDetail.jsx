import React, {useState, useContext} from 'react';
import cartContext from '../../Storage/CartContext';
import {Link} from "react-router-dom";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import ItemCount from "../ItemCount/ItemCount"

function ItemDetail({product}) {
    const [isInCart, setIsInCart] = useState(false);
    const { cart, addToCart,removeItem } = useContext(cartContext);


    let itemInCart = cart.find((item) => product.id === item.id);
    let stock = product.stock;
    if (itemInCart) stock -= itemInCart.count;

    function onAddToCart(count) {
    
        const itemForCart = {
          ...product,
          count,
        };
    
        addToCart(itemForCart);
        setIsInCart(true);
      }

      
  return (
        <div className="card-detail">
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
            {/* <IconButton onClick={handleFavorite} aria-label="add to favorites">
              <FavoriteIcon color={colorFavoriteIcon}/>
            </IconButton> */}
            {/* <Button variant="outlined" color="error">Agregar al carrito</Button> */}

        {!isInCart ? (
        <ItemCount
            text="Agregar al carrito"
            onAddToCart={onAddToCart}
            stock={stock}
        />
        ) : (
        <div>
            <Link to="/cart">
              <button>Ir al Carrito</button>
            </Link>
            <Link to="/">
              <button>Volver al catálogo</button>
            </Link>
            <button onClick={() => removeItem(product.id)} type="warning">Quitar del carrito</button>
        </div>
        )}

          </CardActions>
        </Grid>
      </Grid>
    </Card>
    </div>
  )
}

export default ItemDetail;