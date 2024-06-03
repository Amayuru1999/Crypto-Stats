import React from 'react';
import { LoginForm } from './components/auth/login-form/login-form.component';
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material';
import { Routes } from './routes/routes';

const darkTheme=createTheme({
  palette:{
    mode:"dark",
  },
});

function App() {
  return (
  
      <Routes/>
    
  )
}

export default App;
