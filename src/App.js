import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Footer from "./Footer";
import Catalog from "./Catalog";
import {Button} from "@mui/material";

const Home = () => {
  return (
      <div>
        <h1>Головна сторінка</h1>
        <p>Ласкаво просимо на наш сайт квітів!</p>
      </div>
  );
};


const App = () => {
  return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/"><Button variant="contained">Головна</Button></Link>
            </li>
            <li>
              <Link to="/catalog">Каталог</Link>
            </li>
          </ul>
        </nav>
        <Routes >
          <Route path="/" exact element=<Home/> />
          <Route path="/catalog" exact element=<Catalog/> />

        </Routes>

      <Footer/>
      </div>
  );
};

export default App;