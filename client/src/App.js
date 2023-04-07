import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import NewGameForm from './components/NewGameForm/NewGameForm';
import Detail from './components/Detail/Detail';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGenres } from './redux/actions';


function App() {
  const genres = useSelector(state => state.genres);
  const dispatch = useDispatch();

  useEffect(() => {
      if (genres.length <= 0){
          dispatch(getGenres());
      }
  }, []);

  return (
    <div className="App">
      <Nav></Nav>




        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/videogames' element={<Cards></Cards>} />
          <Route path='/newVideogame' element={<NewGameForm></NewGameForm>} />
          <Route path='/videogames/detail/:id' element={<Detail></Detail>}></Route>
        </Routes>

      
        <footer className="contact-footer">
          <div className="contact-info">
            <h3>Contacto</h3>
            <ul>
              <li>Dirección: Calle Falsa 123</li>
              <li>Teléfono: +1 555 1234</li>
              <li>Email: info@juegos.com</li>
            </ul>
          </div>
      </footer>
      
      
    </div>
  );
}

export default App;
