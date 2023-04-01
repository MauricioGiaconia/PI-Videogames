import styles from './Home.module.css';
import headerPC from '../../img/retropc.png';
import characterHome from '../../img/characterHome.png';
import piVideogamesHome from '../../img/piVideogamesHome.png';
import News from '../News/News';

export default function Home(props){

    return <div id={`${styles.homeContainer}`}>
        <div id={`${styles.headerBlock}`}>

            <div id={`${styles.pcContainer}`}>
                <img src={headerPC} alt="retro pc" />
            </div>

            <div className={`${styles.backgroundPoly}`}>
            </div>
            <div id={`${styles.logoContainer}`}>
                <img className={`${styles.characterLogo}`} src={characterHome} alt="character" />
                <div className={`${styles.piVideogames}`}>
               
                    <img src={piVideogamesHome} alt="logo" />
                </div>
                
            </div>
            
           
       
        </div>

        <div>
            <News></News>
            <News></News>
            <News></News>
        </div>
       
    </div>
}