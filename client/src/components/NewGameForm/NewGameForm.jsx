import { useSelector, useDispatch } from 'react-redux';
import styles from './NewGameForm.module.css';
import { useState, useEffect } from 'react';
import { getGenres, getPlatforms, getDevelopers } from '../../redux/actions';
import Loading from '../Loading/Loading';
import Options from '../Options/Options';


export default function NewGameForm(props){

    const fechaActual = new Date().toISOString().split("T")[0];
    const dispatch = useDispatch();
    const genres = useSelector((state) => state.genres);
    const platforms = useSelector((state) => state.platforms);
    const developers = useSelector((state) => state.developers);
    const [loading, isLoading] = useState(true);
    const [newGame, setNewGame] = useState({
        name : '',
        description : '',
        release : '',
        img : '',
        aditionalImg : null,
        rating : 0,
        genres : [],
        platforms : [],
        developers : 0
    })

    useEffect(() => {

        if (genres.length <= 0 || platforms.length <= 0 || developers.length <= 0){
            dispatch(getGenres());
            dispatch(getPlatforms());
            dispatch(getDevelopers());
        } else{
            isLoading(false);
        }

    }, [genres, platforms]);



    if (loading){
        return <>
            <Loading></Loading>;
        </>
    }

    const onSubmit = (e) =>{
        e.preventDefault();
    }

    const onCheckboxHandler = (e) => {

       

        if (e.target.checked){

            setNewGame({...newGame, ...newGame[e.target.name].push(e.target.value)})

         
        } else{
            
            const auxGame = {...newGame};
            auxGame[e.target.name] = newGame[e.target.name].filter((value) => value !== e.target.value);
            setNewGame(auxGame)
        } 

       
    }
 
    return <div className={`${styles.formContainer}`}>
        <form action='' onSubmit={onSubmit}>
           
            <div className={`${styles.formGroup}`}>
                <label className={`${styles.formLabel}`}  htmlFor="ngameTitle">Titulo del juego: </label>
                <input className={`${styles.formInput}`} type="text"/>
            </div> <br />

            <div className={`${styles.formGroup}`}>
                <label className={`${styles.formLabel}`} htmlFor="gameDescription">Descripción: </label>
                <textarea className={`${styles.formInput}`} name="gameDescription" id="gameDescription" cols="30" rows="10"></textarea>
            </div> <br />
    
            <div className={`${styles.formGroup}`}>
                <label className={`${styles.formLabel}`} htmlFor="release">Fecha de lanzamiento: </label>
                <input className={`${styles.formInput}`} type='date'  min='1952-10-18' max={fechaActual}/>
            </div> <br />

            <div className={`${styles.formGroup}`}>
                <label className={`${styles.formLabel}`} htmlFor="img">Imagen: </label>
                <input className={`${styles.formInput}`} type="file"/>
            </div> <br />

            <div className={`${styles.formGroup}`}>
                <label className={`${styles.formLabel}`} htmlFor="optionalImg">Imagen adicional (opcional): </label>
                <input className={`${styles.formInput}`} type="file"/> 
            </div> <br />

            <div className={`${styles.formGroup}`}>
                <label className={`${styles.formLabel}`} htmlFor="rating">Rating: </label>    
            </div>     

            <div className={`${styles.formGroup}`}>
                <label className={`${styles.formLabel}`} htmlFor="genres">Generos: </label>
                
                <Options opts={genres}
                        name='genres'
                        onClick={onCheckboxHandler}></Options>    
                    

            </div> 


            <div className={`${styles.formGroup}`}>
                <label className={`${styles.formLabel}`} htmlFor="platforms">Plataformas: </label>
                
                <Options opts={platforms}
                        name='platforms'
                        onClick={onCheckboxHandler}></Options>    
                    

            </div> 

            <div className={`${styles.formGroup}`}>
                <label className={`${styles.formLabel}`} htmlFor="platforms">Desarrollador/a: </label>
                
                <select className={`${styles.formSelect}`} name="developer" id="selectDev">
                    {developers.map((dev) => <option key={dev.id} value={dev.id}>{dev.name}</option>)}
                </select>
                    

            </div> 

            <button className={`${styles.formSubmit}`}>CREAR</button>
                
            <div className={`${styles.formMessage}`}>
                
            </div>
        </form>
    </div>
}