import { useState } from 'react'
import LoginPage from './Scenes/Login'
import './App.css'
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import Navbar from './Components/Sidebar';
import TaskWidgets from './Scenes/Widgets/TaskWidgets';
import TaskWidget from './Scenes/Widgets/TaskWidget';
import CreateTask from './Scenes/Widgets/CreateTask';
import HomePage from './Scenes/Home';

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/Tasks' element={<TaskWidgets/>} />
            <Route path='/t' element={<TaskWidget/>} />
            <Route path='/k' element={<CreateTask/>} />
            </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>

  )
}

export default App
