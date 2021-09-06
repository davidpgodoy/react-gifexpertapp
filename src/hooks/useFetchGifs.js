//Custom hook
import { useEffect, useState } from "react"
import {getGifs} from '../helpers/getGifs'


export const useFetchGifs = (category) => { //Los custom hooks funcionan como si fueran functional components

    const [state, setState] = useState({
        data:[],
        loading:true
    });

    useEffect(() => { //1.se hace el efecto para que cambie solo cuando cambia la categoria
        getGifs(category) //2. hace la petición http
            .then(imgs => { //3. tenemos las imgs
                
                // setTimeout(() => {//4. se pone el timeout para que quede un poco más lento
                    setState({ //5. cuando ya tenemos la data se llama al setState cambiando la información de data y loading
                        data:imgs,
                        loading:false
                    })
                    
                // }, 500);

            })
    },[category]);

    // setTimeout(() => {
    //     setState({
    //         data:[1,2,3,4,5],
    //     loading:false
    //     })
    // }, 3000);

    return state; //retorna {data:[], loading:true}

}