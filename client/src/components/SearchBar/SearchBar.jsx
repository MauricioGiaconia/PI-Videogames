import { useSelector } from 'react-redux';
import styles from './SearchBar.module.css';

// PARA FILTRAR POR JUEGOS DE LA API O DB PUEDO VERIFICAR SI EL ID ES NaN O NO!!!!!

export default function SearchBar(props){
    const genres = useSelector(state => state.genres);

    return <div className={`${styles.searchBarContainer}`}>
        <input onChange={(e) =>{props.onSearch(e.target.value)}} type="search" name="searchGame"/>  

        <select onChange={(e) => {props.onOrder(e.target.value)}} name="orderGames">
            <option value='false'>-- ORDEN --</option>
            <option value="ASC">Z-A</option>
            <option value="DESC">A-Z</option>    
        </select> 
        
        <select name="selectGenre">
            {genres.map((genre, index) => <option key={index} value={genre.id}>{genre.name}</option>)}
        </select>
    </div> 
}