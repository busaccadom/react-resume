import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Home from './components/Home/Home.js';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            <Link to="/">Dominic Busacca</Link>
            <Link to="/">Dominic Busacca</Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
