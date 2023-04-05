import styles from './Card.module.css';

export default function Card(props){
   
    return <div className={`${styles.card}`}>
       
        <div className={`${styles.imgContainer}`}>
            <img src={props.img} alt={`${props.title}`} />
        </div>
        <h3>{props.title}</h3>
        <h4>{props.rating}</h4>
        <p>Release: {props.release}</p>

        <div className={`${styles.cardButtons}`}>
            <button className={`${styles.btnFav}`}>Fav</button>
            <button className={`${styles.btnMore}`}>I</button>
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