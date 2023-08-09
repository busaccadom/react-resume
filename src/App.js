import './App.css';
import * as React from 'react';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Routes, Route } from 'react-router-dom';
import Languages from './components/Languages/Languages';
import Experience from './components/Experience/Experience'
import AdbIcon from '@mui/icons-material/Adb';
import HomePage from './components/HomePage/HomePage';
import { HomeWork } from '@mui/icons-material';
import { History } from '@mui/icons-material';

const drawerWidth = 240;

export default function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
          >
              DOM
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem key='Home' disablePadding>
              <ListItemButton component="a" href="/">
                <ListItemIcon>
                  <HomeWork />
                </ListItemIcon>
                <ListItemText primary='Home' />
              </ListItemButton>
            </ListItem>

            <ListItem key='Experience' disablePadding>
              <ListItemButton component="a" href="/Experience">
                <ListItemIcon>
                  <History />
                </ListItemIcon>
                <ListItemText primary='Experience' />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
        <Grid container>
          <Grid xs={6}>
            <Box p={3} m={3} pt={5}>
              <Routes>
                <Route exact path='/' element={<HomePage/>} />
                <Route exact path='/Languages' element={<Languages/>} />
                <Route exact path='/Experience' element={<Experience/>} />
              </Routes>
            </Box>
          </Grid>
        </Grid>
        <Toolbar />
      </Box>

    </Box>
  );
}
