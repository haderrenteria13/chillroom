import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Welcome from './Components/Welcome';
import Themes from './Components/Themes';
import Login from './Components/Login';
import Register from './Components/Register';
import Assistants from './Components/Assistants';
import AssistantDetail from './Components/AssistantDetail';
import MainChat from './Components/MainChat';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/assistants" element={<Assistants />} />
        <Route path="/assistantDetail/:id" element={<AssistantDetail />} />
        <Route path="/themes" element={<Themes />} />
        <Route path="/main-chat" element={<MainChat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
