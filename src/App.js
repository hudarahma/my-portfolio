
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ContextProvider from './Context';
import Home from  './components/Home';
import Header from './components/Header';
import MyWorks from './components/MyWorks';
import WhatIDo from './components/WhatIDo';
import About from './components/About';

function App() {
  return (
    <ContextProvider>

      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='aboutme' element={<About />} />
            <Route path='myworks' element={<MyWorks />} />
            <Route path='whatido' element={<WhatIDo />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </ContextProvider>
  );
}

export default App;
