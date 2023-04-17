import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: "#0031DD",
    secondary: "#ED7200",
    black: "#21222D",
    white: "#F6F6F6",
    yellow: "#FFB800"
  },
  fonts:  {
    fontFamily: "'Raleway', sans-serif",
    fontSizes: ["12px", "16px", "20px", "22px", "25px", "30px"]
  },
  forms: {
    borderRadius: "15px",
    backgroundColor: `${({theme}) => theme.colors.white}`,
    color: `${({theme}) => theme.colors.black}`
  }
}
function App() {
  return (
    <ThemeProvider theme={theme}>
   <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path='/venue/:id' element={<Venue />}/>
      <Route path='/venues' element={<Venues />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/login' element={<Login />}/>
    </Route>
   </Routes>
    </ThemeProvider>
  );
}

export default App;
