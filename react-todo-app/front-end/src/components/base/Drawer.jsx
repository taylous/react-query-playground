import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  linkDeco: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: 'black'
  }
});

const DrawerComponent = ({ drawerOpen, handleDrawerClose }) => {
  const classes = useStyles();

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
    >
      <List>
        {['home', 'mypage'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <Link className={classes.linkDeco} to={`/${text}`}>{text}</Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['login', 'logout', 'register'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <Link className={classes.linkDeco} to={`/${text}`}>{text}</Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Drawer open={drawerOpen} onClose={handleDrawerClose}>
        {sideList()}
      </Drawer>
    </div>
  );
};


export default DrawerComponent;
