import styles from './Card.module.css';
import {Link} from 'react-router-dom';

export default function Card(props){


    
    return <div className={`${styles.card}`}>
        
        <div className={`${styles.imgContainer}`}>
            <img src={props.img} alt={`${props.title}`} />
        </div>
        <h3>{props.title}</h3>
        <h4>Rating: {props.rating}</h4>
        <p>Release: {props.release.split('T')[0]}</p>

        <div className={`${styles.cardButtons}`}>
            <button className={`${styles.btnFav}`}>Fav</button>
            <Link className={`${styles.btnMore}`} to={`/videogames/detail/${props.id}`}>I</Link>
        </div>
        
    </div>
    }

/*
    CODER PARA HANDLER DE INFO: 
    fetch(`/games/detail?id=${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(response => response.json())
        .then(data => {
        // Aquí puedes hacer algo con la respuesta del servidor
        console.log(data);
        })
        .catch(error => {
        // Aquí puedes manejar el error si algo salió mal
        console.error(error);
        });

*/