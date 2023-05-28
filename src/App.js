import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Layout from "./components/Layout/Layout";
//Pages
import Home from "./pages/home";
import VenuePage from "./pages/venue";
import ProfilePage from "./pages/profile";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/venue/:id" element={<VenuePage />} />
          <Route path="/profile/:name" element={<ProfilePage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
