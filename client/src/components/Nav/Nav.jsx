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
            <li><Link  className={splitLocation[1] === 'home' ? `${styles.selected}` : ''} to='/'> <img src={homeImg} alt="home" /></Link></li>     
            <li><Link  className={splitLocation[1] === 'videogames' ? `${styles.selected}` : ''} to='/videogames'> <img src={videogameImg} alt="home" /></Link></li>    
    
        </ul>
    </nav>
}