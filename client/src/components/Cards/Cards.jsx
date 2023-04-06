import Card from '../Card/Card.jsx';
import {useSelector, useDispatch} from 'react-redux';
import { getGames } from '../../redux/actions/index.js';
import { useEffect, useState } from 'react';
import styles from './Cards.module.css';
import Loading from '../Loading/Loading.jsx';

export default function Cards(props){

    const dispatch = useDispatch();
    const games = useSelector((state) => state.games);
    const gamesPerPage = useSelector((state) => state.gamesPerPage);
    const [isLoading, setIsLoading] = useState(true);
    const [numPage, setNumPage] = useState(1);
    const [gamesToShow, setGamesToShow] = useState([]);

 
    const totalGames = Math.round(games.length / gamesPerPage);

    useEffect(() => {
        
        if (games.length <= 0){

            dispatch(getGames());
            
            
        } else{
            const indexLastGame = numPage * gamesPerPage;
            const indexFirstGame = indexLastGame - gamesPerPage;
            setGamesToShow(games.slice(indexFirstGame, indexLastGame));

            
            setIsLoading(false);
        }
        
     
        
    }, [games, numPage]);

 
    if (isLoading){
        return <>
            <Loading></Loading>
           </>
            
        
    }

    const PrintGames = () => gamesToShow.map((game) => {
        return <Card key = {game.id}
                    id = {game.id}
                    title = {game.name}
                    rating = {game.rating}
                    release = {game.released}
                    img = {game.background_image ? game.background_image : game.img}></Card>
    });

    return <div className={`${styles.cardsContainer}`}>
        <PrintGames></PrintGames>

        <div className={`${styles.pagination}`}>
            {numPage > 1 ? <button onClick={() => {setNumPage(1)}}>│◀</button> : false}
            {numPage > 1 ?<button onClick={() => {setNumPage(numPage - 1)}}>◀</button> : false}
            {numPage < totalGames ? <button onClick={() => {setNumPage(numPage + 1)}}>▶</button> : false}
            {numPage < totalGames ? <button onClick={() => {setNumPage(totalGames)}}>▶│</button> : false}
        </div>
    </div>

    

}