import { useSelector, useDispatch } from 'react-redux';
import styles from './NewGameForm.module.css';
import { useState, useEffect } from 'react';
import { getGenres, getPlatforms, getDevelopers, getStores, postNewGame } from '../../redux/actions';
import Loading from '../Loading/Loading';
import Options from '../Options/Options';
import Stars from '../Stars/Stars.jsx';


export default function NewGameForm(props){

    const fechaActual = new Date().toISOString().split("T")[0];
    const dispatch = useDispatch();
    const genres = useSelector((state) => state.genres);
    const platforms = useSelector((state) => state.platforms);
    const developers = useSelector((state) => state.developers);
    const stores = useSelector((state) => state.stores);
    const [loading, isLoading] = useState(true);
    const [newGame, setNewGame] = useState({
        title : '',
        description : '',
        release : '',
        img : '',
        aditionalImg : null,
        rating : 0,
        genres : [],
        platforms : [],
        stores : [],
        developer : 0
    })

    useEffect(() => {

        if (genres.length <= 0 || platforms.length <= 0 || developers.length <= 0 || stores.length <= 0){
            dispatch(getGenres());
            dispatch(getPlatforms());
            dispatch(getDevelopers());
            dispatch(getStores());
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
   
        if (newGame.title && newGame.description && newGame.release && newGame.img && newGame.rating && newGame.genres.length > 0 && newGame.platforms.length > 0 && newGame.developer && newGame.stores.length > 0){

            dispatch(postNewGame(newGame));
        }
     
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

    const onSelectHandler = (e) => {

        if (e.target.value !== null && e.target.value !== '-- OPCIONES --'){
            setNewGame({...newGame, developer : e.target.value});
        } else{
            setNewGame({...newGame, developer : null});
        }
    }

    const onChangeHandler = (e) =>{

        const auxNewG = {...newGame};
        auxNewG[e.target.name] = e.target.value;
  
        setNewGame(auxNewG);

      
    }

    const onStarHandler = (e) => {
        
        setNewGame({...newGame, rating: e.target.getAttribute('value')});
    }

    const handleImgChange = (e) =>{
        const file = e.target.files[0];
        const reader = new FileReader();
        const tag = e.target.name;

        reader.onload = (e) => {

            const auxNew = {...newGame};

            auxNew[tag] = e.target.result;
            setNewGame(auxNew);
        };
   
        reader.readAsDataURL(file);
    }
 
    return <div className={`${styles.formContainer}`}>
        <form action='' onSubmit={onSubmit}>
           
            <div className={`${styles.formGroup}`}>
                <label className={`${styles.formLabel}`}  htmlFor="ngameTitle">Titulo del juego: </label>
                <input onChange={onChangeHandler} className={`${styles.formInput}`} name='title' type="text"/>
            </div> <br />

            <div className={`${styles.formGroup}`}>
                <label className={`${styles.formLabel}`} htmlFor="description">Descripción: </label>
                <textarea onChange={onChangeHandler} className={`${styles.formInput}`} name="description" id="gameDescription" cols="30" rows="10"></textarea>
            </div> <br />
    
            <div className={`${styles.formGroup}`}>
                <label className={`${styles.formLabel}`} htmlFor="release">Fecha de lanzamiento: </label>
                <input onChange={onChangeHandler} className={`${styles.formInput}`} name='release' type='date'  min='1952-10-18' max={fechaActual}/>
            </div> <br />

            <div className={`${styles.formGroup}`}>
                <label className={`${styles.formLabel}`} htmlFor="img">Imagen: </label>
                <input onChange={handleImgChange} name='img' className={`${styles.formInput}`} type="file"/>
            </div> <br />

            <div className={`${styles.formGroup}`}>
                <label className={`${styles.formLabel}`} htmlFor="optionalImg">Imagen adicional (opcional): </label>
                <input onChange={handleImgChange} name='aditionalImg' className={`${styles.formInput}`} type="file"/> 
            </div> <br />

            <div className={`${styles.formGroup}`}>
                <label className={`${styles.formLabel}`} htmlFor="rating">Rating: </label>    
                <Stars numStars = '5'
                        onClick={onStarHandler}></Stars>
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
                
                <select onChange={onSelectHandler} className={`${styles.formSelect}`} name="developer" id="selectDev">
                    <option value={null}> -- OPCIONES -- </option>
                    {developers.map((dev) => <option key={dev.id} value={dev.id}>{dev.name}</option>)}
                </select>
                    

            </div> 

            <div className={`${styles.formGroup}`}>
                <label className={`${styles.formLabel}`} htmlFor="stores">Tiendas: </label>
                
                <Options opts={stores}
                        name='stores'
                        onClick={onCheckboxHandler}></Options>    
                    

            </div> 


            <button className={`${styles.formSubmit}`}>CREAR</button>
                
            <div className={`${styles.formMessage}`}>
                
            </div>
        </form>
    </div>
}