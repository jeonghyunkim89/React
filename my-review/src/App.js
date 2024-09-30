// src/App.js
import './App.css';
import ButtonNav from './ButtonNav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Timer from './page/Timer';
import CountNum from './page/CountNum';
import Main from './page/Main';
import { createContext, useState } from 'react';

export const UserContext = createContext();

let defaultUser = {
  id: '',
  pwd: ''
}

function App() {
  const [user, setUser] = useState(defaultUser);
  const defaultContext = {
    data: user,
    setData: setUser
  }
  
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <br />
          <ButtonNav />
          <br />
          <hr />
        </header>

        <UserContext.Provider value={defaultContext}>
          <main>
            <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/1" element={<Timer/>}/>
              <Route path="/2" element={<CountNum />} />
            </Routes>
          </main>
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
