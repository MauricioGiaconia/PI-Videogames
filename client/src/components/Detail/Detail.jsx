import { useEffect } from "react";
import { getGame } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams} from "react-router-dom";
import styles from './Detail.module.css';



export default function Detail(props){

    const gameDetail = useSelector((state) => state.gameById);
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() =>{

        if (isNaN(id)){
            dispatch(getGame(id, true));
        } else{
            dispatch(getGame(id, false));
        }

    }, []);

    return <div className={`${styles.detailContainer}`}>
        testeo
    </div>
}