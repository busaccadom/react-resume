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

import AdbIcon from '@mui/icons-material/Adb';
import HomePage from './components/HomePage/HomePage';
import { DataObject, HomeWork, History, Language, Bookmark, ContactPage } from '@mui/icons-material';

import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Languages from './components/Languages/Languages';
import Education from './components/Education/Education'
import ContactMe from './components/ContactMe/ContactMe'

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

            <ListItem key='Languages' disablePadding>
              <ListItemButton component="a" href="/Languages">
                <ListItemIcon>
                  <DataObject />
                </ListItemIcon>
                <ListItemText primary='Languages' />
              </ListItemButton>
            </ListItem>
          
            <ListItem key='Skills' disablePadding>
              <ListItemButton component="a" href="/Skills">
                <ListItemIcon>
                  <Language />
                </ListItemIcon>
                <ListItemText primary='Skills' />
              </ListItemButton>
            </ListItem>
          
            <ListItem key='Education' disablePadding>
              <ListItemButton component="a" href="/Education">
                <ListItemIcon>
                  <Bookmark />
                </ListItemIcon>
                <ListItemText primary='Eductation' />
              </ListItemButton>
            </ListItem>

            <ListItem key='ContactMe' disablePadding>
              <ListItemButton component="a" href="/Contact">
                <ListItemIcon>
                  <ContactPage />
                </ListItemIcon>
                <ListItemText primary='Contact' />
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
                <Route exact path='/Skills' element={<Skills/>} />
                <Route exact path='/Education' element={<Education/>} />
                <Route exact path='/Contact' element={<ContactMe/>} />
              </Routes>
            </Box>
          </Grid>
        </Grid>
        <Toolbar />
      </Box>

    </Box>
  );
}
