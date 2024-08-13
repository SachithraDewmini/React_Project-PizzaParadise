import React, { useState } from 'react';
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import '../../styles/HeaderStyles.css';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
      <Typography color={"goldenrod"} variant='h6' component="div" sx={{ my: 2 }}>
        <LocalPizzaIcon />
        PIZZA PARADISE
      </Typography>
      <Divider/>
      <ul className='mobile-navigation'>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/menu'}>Menu</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'/contact'}>Contact</Link>
        </li>
      </ul>
    </Box>
  )

  return (
    <>
      <Box>
        <AppBar component={'nav'} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton 
              color='inherit' 
              aria-label='open-drawer' 
              edge="start" 
              sx={{ mr: 2, display: {sm:'block'} }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography color={"goldenrod"} variant='h6' component="div" sx={{ flexGrow: 1 }}>
              
              <LocalPizzaIcon/>
              PIZZA PARADISE
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <ul className='navigation'>
                <li>
                  <Link to={'/'}>Home</Link>
                </li>
                <li>
                  <Link to={'/menu'}>Menu</Link>
                </li>
                <li>
                  <Link to={'/about'}>About</Link>
                </li>
                <li>
                  <Link to={'/contact'}>Contact</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant='temporary'
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: 'none', sm: 'block' }, "& .MuiDrawer-paper":{boxSizing:'border-box', width:'150px'}
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
        <Toolbar/>
        </Box>
        
      </Box>
    </>
  );
}