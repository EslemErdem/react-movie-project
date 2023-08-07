import React from 'react';
import Header from './Components/Header.js';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Categories from './Components/Categories.js';
import Home from './Components/Home.js';
import New from './Components/New.js';




function App(){
  
 


  return (
   
      <Router>
        <Header />
        
          <Routes>
            <Route path='/' element ={<Home/>}/>
            {/* Anasayfa için '/' rotası */}
            <Route path="/Home" element={<Home/>} />
            {/* Kategoriler için '/categories' rotası */}
            <Route path="/categories" element={<Categories/>} />
            <Route path="/new" element={<New/>}/>
          </Routes>
      </Router>
    

  );
}


export default App;
