import { useSelector } from 'react-redux';
import styles from './SearchBar.module.css';


// PARA FILTRAR POR JUEGOS DE LA API O DB PUEDO VERIFICAR SI EL ID ES NaN O NO!!!!!

export default function SearchBar(props){
    const genres = useSelector(state => state.genres);


   return <div className={`${styles.searchBarContainer}`}>
        <input type="search" name="searchGame"/>   
        
        <select name="selectGenre">
            {genres.map((genre, index) => <option key={index} value={genre.id}>{genre.name}</option>)}
        </select>
    </div> 
}