import {
  AppBar,
  Container,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Toolbar,
  Fab,
} from '@material-ui/core';
import { Home, KeyboardArrowUp } from '@material-ui/icons';
import React from 'react';
import { NavLink } from 'react-router-dom';
import HideOnScroll from './HideOnScroll';
import SideDrawer from './SideDrawer';
import BackToTop from './BackToTop';
import ConnectToMetaMask from './ConnectToMetaMask';

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  navListDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: '#B4CBFF',
  },
});

const navLinks = [
  { title: `Order Materials`, path: `/materials` },
  { title: `Quality Control`, path: `/quality` },
];

const NavBar = () => {
  const classes = useStyles();

  return (
    <>
      <HideOnScroll>
        <AppBar position='fixed'>
          <Toolbar component='nav'>
            <Container maxWidth='md' className={classes.navbarDisplayFlex}>
              <IconButton edge='start' aria-label='home'>
                <NavLink
                  exact
                  to='/'
                  style={{ color: `black` }}
                  activeStyle={{ color: 'black' }}>
                  <Home fontSize='large' />
                </NavLink>
              </IconButton>
              <ConnectToMetaMask size={'32'} />

              <Hidden smDown>
                <List
                  component='nav'
                  aria-labelledby='main navigation'
                  className={classes.navListDisplayFlex}>
                  {navLinks.map(({ title, path }) => (
                    <NavLink
                      exact
                      to={path}
                      key={title}
                      className={classes.linkText}
                      activeStyle={{ color: 'white' }}>
                      <ListItem button>
                        <ListItemText primary={title} />
                      </ListItem>
                    </NavLink>
                  ))}
                </List>
              </Hidden>
              <Hidden mdUp>
                <SideDrawer navLinks={navLinks} />
              </Hidden>
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar id='back-to-top' />

      <BackToTop>
        <Fab color='secondary' size='large' aria-label='scroll back to top'>
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </>
  );
};

export default NavBar;
