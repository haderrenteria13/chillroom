import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Welcome from './components/welcome/Welcome';
import NavBar from './components/NavBar'
import Themes from './components/Themes';
import Login from './components/Login';
import Register from './components/register/Register';
import Assistants from './components/Assistants';
import AssistantDetail from './components/AssistantDetail';
import MainChat from './components/MainChat';

function App() {
  return (
    <>
    <BrowserRouter>
        <NavBar/>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/assistants" element={<Assistants />} />
        <Route path="/assistantDetail/" element={<AssistantDetail />} />
        <Route path="/themes" element={<Themes />} />
        <Route path="/main-chat" element={<MainChat />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
