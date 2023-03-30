import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
      <Nav></Nav>




        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/videogames' element= {<Cards></Cards>} />
        </Routes>
   
    </div>
  );
}

export default App;
