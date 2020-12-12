import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, List, ListItem, ListItemText } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { title: `Order Materials`, path: `/materials` },
  { title: `Quality Control`, path: `/quality` },
];

const useStyles = makeStyles({
  actionLink: {
    textDecoration: `none`,
    fontSize: 50,
  },
  list: {
    display: 'flex',
    justifyContent: `center`,
  },
});

export default function Actions() {
  const classes = useStyles();
  return (
    <Container>
      <List
        aria-labelledby='main navigation'
        className={classes.list}
        component={'span'}>
        {navLinks.map(({ title, path }) => (
          <NavLink exact to={path} key={title} className={classes.actionLink}>
            <ListItem button>
              <ListItemText className={classes.actionLink} primary={title} />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Container>
  );
}
