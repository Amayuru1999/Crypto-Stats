import React, { useEffect } from 'react';
import { LoginForm } from './components/auth/login-form/login-form.component';
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material';
import { Routes } from './routes/routes';
import { useGetUserQuery } from './apis/users.api';
import { useAppDispatch } from './app/hooks';
import { useNavigate } from 'react-router-dom';
import { setAuthState } from './slices/auth.slice';

const darkTheme=createTheme({
  palette:{
    mode:"dark",
  },
});

function App() {

  const {data:user}=useGetUserQuery(undefined);
  const dispatch=useAppDispatch()
  const navigate=useNavigate()
  useEffect(() => {
    if (user) {
      dispatch(setAuthState({ user }));
      navigate("/");
    }
  }, [user, dispatch, navigate]);

  return (
  
      <Routes/>
    
  )
}

export default App;
