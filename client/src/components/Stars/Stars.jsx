import { useState } from 'react';
import styles from './Stars.module.css';


export default function Stars(props){

    const [clicked, setClicked] = useState(false);

    const onStarHover = (e) =>{

        const searchedNum = e.target['id'].match(/\d+/);
        const num = parseInt(searchedNum[0])
      
       
        for (let i = 1; i <= num; i++){

           
            document.getElementById('star'+i).classList += ' ' + styles.starSelected;
            

        }
        
    }

    const onStarOut = () =>{

        if (!clicked){
          
            for (let i = 1; i <= 5; i++){
                document.getElementById('star'+i).classList.remove(styles.starSelected);
            }
        }
       
    }

    const onStarClick = (e) => {
        
       
        if (!clicked){
            setClicked(true);
            if (props.onClick){
                e.target.color = '#f8c93c'
                props.onClick(e);
            }
        } else{
            setClicked(false);
        }
        
    }

    const GenerateSpans = () =>{

        let spans = [];

        for (let i = 1; i<=parseInt(props.numStars); i++){
           spans.push(<span key={i} onClick={onStarClick} onMouseEnter={onStarHover} onMouseOut={onStarOut} id={`star${i}`} className={`${styles.star}`} value={i}>★</span>);
        }

        return spans;
    }

    return <div>
        <GenerateSpans></GenerateSpans>
    </div>
}