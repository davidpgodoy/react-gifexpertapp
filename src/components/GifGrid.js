import React from 'react' 
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({category}) => {

    // const [images, setimages] = useState([]);
    const {data:imgs, loading} = useFetchGifs(category);

    
    // useEffect(() => { //El useEfect permite ejecutar cierto código de manera condicional
    //     getGifs(category)
    //         .then(setimages);
    // },[category]); //como primer parametro recibe una función y como segundo param recibe un arreglo de dependencia
    //si lo dejo vacío significa que el useEffect se va a ejecutar una única vez
    //En este caso si la categoria cambia va a volver a ejecutar el efecto de getGifs

    

    // getGifs();

    return (
    <>
        <h3 className="animate__animated animate__fadeIn">{category}</h3>

        {loading && <p className="animate__animated animate__flash">Loading...</p>}

        <div className="card-grid">
            
                {
                    imgs.map( img => 
                        <GifGridItem 
                        key={img.id}
                        {...img} //De esta manera estoy mandando cada una de las propiedades del img como una prop independiente
                         />) 
                    // <li key={id}>{title}</li>)
                }
            
        </div>
    </>
    )
}
