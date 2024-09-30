import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { Menubar } from './components/Menubar';
import Practice1 from './components/Practice1';
import Practice2 from './components/Practice2';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Menubar />
        <Routes>
          <Route path="/" element={<p>안녕 리액트?</p>} />
          <Route path="/pt1" element={<Practice1/>} />
          <Route path="/pt2" element={<Practice2/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
