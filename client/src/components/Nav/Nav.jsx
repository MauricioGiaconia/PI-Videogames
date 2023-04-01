import { Link, useLocation } from "react-router-dom"
import styles from './Nav.module.css';
import homeImg from '../../img/home.png';
import videogameImg from '../../img/videogame.png';

export default function Nag(props){


    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    return <nav className={`${styles.navContainer}`}>
       <ul>
            <li><Link  className={splitLocation[1] === 'home' ? `${styles.selected} ${styles.logo}` : `${styles.logo}`} to='/'>HOME</Link></li>     
            <li><Link  className={splitLocation[1] === 'videogames' ? `${styles.selected} ${styles.logo}` : `${styles.logo}`} to='/videogames'> GAMES</Link></li>    
    
        </ul>
    </nav>
}