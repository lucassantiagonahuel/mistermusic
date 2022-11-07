import {React,useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGuitar }  from "@fortawesome/free-solid-svg-icons";
import { faDrum }  from "@fortawesome/free-solid-svg-icons";
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCart from './ShoppingCart';
import SearchInput from './SearchInput';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const pages = ['Bateria', 'Teclados', 'Guitarras', 'Vientos', 'Amplificadores'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static"             
            sx={{
                backgroundColor: 'brown'
            }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid item container md={3}>
            
            <Grid item>
              <IconButton color='primary' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                <FontAwesomeIcon icon={faGuitar} />
              </IconButton>
            </Grid>
            <Grid item>
              <Link to={"/"}>
                  <Typography
                  variant="h4"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'white',
                    textDecoration: 'none',
                  }}
                >
                    MRMUSIC
                </Typography>
              </Link>
            </Grid>

          </Grid>

          <Grid item container md={6}> 
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                      <MenuItem key={page} onClick={handleCloseNavMenu}>
                          <Typography  textAlign="center">{page}</Typography>
                      </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Link to={`/category/${page}`}>
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 3, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                </Link>
              ))}
            </Box>
         </Grid>
            <IconButton sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
            <FontAwesomeIcon icon={faGuitar} />
            <FontAwesomeIcon icon={faDrum} />
            </IconButton>
            <Link to={"/"}>
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href=""
                  sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                    MRMUSIC
                </Typography>
            </Link>


          <Grid item container alignItems="center" justifyContent="flex-end" md={3}>
            
            <Grid item>
              <SearchInput></SearchInput>
            </Grid>

            <Grid item>
              <ShoppingCart></ShoppingCart>
            </Grid>
          
          </Grid>
        </Toolbar>
      </Container>
      {/* <Grid container style={{paddingLeft:"3%"}}>
        <Grid 
              item 
              container 
              md={3}  
              alignItems="center"
              justifyContent="flex-start">

          
          <Grid item >
            <img src='https://i.ibb.co/KWg72z7/violencia.png' alt='Icono guitarra' width="65px"/>
          </Grid>

          <Grid item >
            <Typography variant='h4'>
              MRMUSIC
            </Typography>
          </Grid>

        </Grid>




        <Grid 
              item 
              container 
              alignItems="center" 
              justifyContent="space-around"  
              md={6} 
              >
          {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
        </Grid>

        <Grid item container alignItems="center" md={3}>
            <Grid item>
              <SearchInput/>
            </Grid>
            <Grid item>
              <ShoppingCart/>
            </Grid>
        </Grid>
      </Grid> */}
    </AppBar>
  );
}
export default NavBar;


