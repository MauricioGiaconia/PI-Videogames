import Card from '../Card/Card.jsx';
import {useSelector, useDispatch} from 'react-redux';
import { getGames } from '../../redux/actions/index.js';
import { useEffect, useState } from 'react';
import styles from './Cards.module.css';

export default function Cards(props){

    const dispatch = useDispatch();
    const games = useSelector((state) => state.games);
    const currentPage = useSelector((state) => state.currentPage);
    const gamesPerPage = useSelector((state) => state.gamesPerPage);
    const [isLoading, setIsLoading] = useState(true);

 

    useEffect(() => {
        
        if (games.length <= 0){

            dispatch(getGames());
            
            
        } else{
            setIsLoading(false);
        }
        
        console.log('Entre!');
        
    }, [games]);

    const indexLastGame = currentPage * gamesPerPage;
    const indexFirstGame = indexLastGame - gamesPerPage;
    const currentGames = games.slice(indexFirstGame, indexLastGame);

    const PrintGames = () => currentGames.map((game) => {
                                return <Card key = {game.id}
                                            title = {game.name}
                                            rating = {game.rating}
                                            release = {game.released}
                                            img = {game.background_image}></Card>
                            });

    if (isLoading){
        return <div className={`${styles.cardsContainer}`}>
            <h1>Estoy cargando wey</h1>
      
            <br />
            <br />
            <p>hadsa</p>

            
        </div>
    }
    

    return <div className={`${styles.cardsContainer}`}>
        <PrintGames></PrintGames>

        <div className={`${styles.pagination}`}>
            <button>▶</button>
        </div>
    </div>

    

}