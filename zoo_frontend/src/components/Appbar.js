import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const LargerListItemText = styled(ListItemText)(({ theme }) => ({
  fontSize: '1.8rem', // Adjust the font size to make it larger
  padding: '15px 128px', // Adjust the padding to make it larger
}));

export default function Appbar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { text: 'Animal', link: '/animal' },
    { text: 'Worker', link: '/worker' },
    { text: 'Diet', link: '/diet' },
    { text: 'Food', link: '/food' },
    { text: 'Food Retailer', link: '/food_retailer' },
    { text: 'Job', link: '/job' },
    { text: 'Cell', link: '/cell' },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Great Zoo
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          {menuItems.map((item, index) => (
            <div key={index}>
              <ListItem button component={Link} to={item.link}>
                <LargerListItemText primary={item.text} />
              </ListItem>
              {index < menuItems.length - 1 && <Divider />}
            </div>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}