import React, { useState } from 'react';
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
  fontSize: '1.8rem',
  padding: '15px 128px',
}));

const subMenus = {
  Animal: [
    { text: 'Add Animal', link: '/addAnimal' },
    { text: 'Delete Animal', link: '/delete/animal' },
    { text: 'Move Animal', link: '/moveAnimal' },
    { text: 'Get All Animals', link: '/getAll/animal' },
    { text: 'Get Animal by Name', link: '/getAnimalByName' },
  ],
  Cell: [
    { text: 'Add Cell', link: '/addCell' },
    { text: 'Get All Cells', link: '/getAll/cell' },
    { text: 'Change Temperature in Cell', link: '/changeTemperatureInCell' },
    { text: 'Delete Cell', link: '/delete/cell' },
  ],
  Diet: [
    { text: 'Add Diet', link: '/addDiet' },
    { text: 'Get All Diets', link: '/getAll/diet' },
    { text: 'Get Diet', link: '/getDiet' },
    { text: 'Delete Diet', link: '/delete/diet' },
  ],
  Food: [
    { text: 'Add Food', link: '/addFood' },
    { text: 'Get All Food', link: '/getAll/food' },
    { text: 'Find Food by Name', link: '/findFoodByName' },
    { text: 'Delete Food', link: '/delete/food' },
  ],
  FoodRetailer: [
    { text: 'Add Food Retailer', link: '/addFoodRetailer' },
    { text: 'Get All Food Retailers', link: '/getAll/foodRetailer' },
    { text: 'Change Price', link: '/changePrice' },
    { text: 'Get Food Retailer by Id', link: '/getFoodRetailerById' },
    { text: 'Delete Food Retailer', link: '/delete/foodRetailer' },
  ],
  Job: [
    { text: 'Add Job', link: '/addJob' },
    { text: 'Get All Jobs', link: '/getAll/job' },
    { text: 'Get Job by Id', link: '/getJobById' },
    { text: 'Get Jobs by Animal Id', link: '/getJobsByAnimalId' },
    { text: 'Get Jobs by Worker Id', link: '/getJobsByWorkerId' },
    { text: 'Delete Job', link: '/delete/job' },
  ],
  Worker: [
    { text: 'Add Worker', link: '/addWorker' },
    { text: 'Get All Workers', link: '/getAll/worker' },
    { text: 'Get Workers by Name', link: '/getWorkersByName' },
    { text: 'Get Worker by Id', link: '/getWorkerById' },
    { text: "Change Worker's Salary", link: '/changeWorkersSalary' },
    { text: 'Promote Worker', link: '/promoteWorker' },
    { text: 'Delete Worker', link: '/delete/worker' },
  ],
};


export default function Appbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState({});

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const toggleSubMenu = (menu) => {
    setSubMenuOpen({ ...subMenuOpen, [menu]: !subMenuOpen[menu] });
  };

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
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Great Zoo
            </Link>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          {Object.keys(subMenus).map((menuItem, index) => (
            <div key={index}>
              <ListItem button onClick={() => toggleSubMenu(menuItem)}>
                <LargerListItemText primary={menuItem} />
              </ListItem>
              <Divider />
              {subMenuOpen[menuItem] &&
                subMenus[menuItem].map((subItem, subIndex) => (
                  <ListItem
                    button
                    key={subIndex}
                    component={Link}
                    to={subItem.link}
                  >
                    <ListItemText primary={subItem.text} />
                  </ListItem>
                ))}
            </div>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}