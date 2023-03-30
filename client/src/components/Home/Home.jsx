import styles from './Home.module.css';
import headerPC from '../../img/retropc.png';
import characterHome from '../../img/characterHome.png';
import piVideogamesHome from '../../img/piVideogamesHome.png';

export default function Home(props){

    return <div>
        <div id={`${styles.headerBlock}`}>

            <div id={`${styles.pcContainer}`}>
                <img src={headerPC} alt="" />
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
        
    </div>
}