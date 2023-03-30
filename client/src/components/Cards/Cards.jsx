import Card from '../Card/Card.jsx';
import {useSelector, useDispatch} from 'react-redux';
import { getGames } from '../../redux/actions/index.js';
import { useEffect } from 'react';

export default function Cards(props){

    const dispatch = useDispatch();
    const games = useSelector((state) => state.games);
    const currentPage = useSelector((state) => state.currentPage);
    const gamesPerPage = useSelector((state) => state.gamesPerPage);

    useEffect(() => {
        if (games.length <= 0){
            dispatch(getGames());
        }
        
    }, []);

    const indexLastGame = currentPage * gamesPerPage;
    const indexFirstGame = indexLastGame - gamesPerPage;
    const currentGames = games.slice(indexFirstGame, indexLastGame);

    const PrintGames = () => currentGames.map((game) => {
                                return <Card key = {game.id}
                                            title = {game.name}
                                            rating = {game.rating}
                                            release = {game.released}></Card>
                            });
    

    return <div>
        <PrintGames></PrintGames>
    </div>

    

}