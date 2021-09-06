import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(["Messi"]);

    // const handleAdd = () => {
    //     // setCategories([...categories,"HunterXHunter"]);
    //     setCategories(cats => [...cats,"HunterXHunter"]); //El setCategories recibe un callback en cual el primer
    //     //argumento es el valor del estado anterior (cats) y luego tiene que regresar el nuevo estado ([...cats,"HunterXHunter"])
    // }

    return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/> 
        {/* Lo que envie acá lo voy a recibir en las props de AddCategory */}

        <hr />

        <ol>
            {
                categories.map(category => 
                    <GifGrid
                        key={category}
                        category={category}                    
                    />
                    )
                // <li key={category}>{category}</li>) //El map me sirve para transformar cada elemento en el arreglo
                //Category va a tomar el valor de cada posición de categories y modificar su valor por medio de return
                //El map recibe dos argumentos: Category (elemento del array) y el indice (0,1,2,etc)
                //La Key sirve para saber que elemento está iterando
            }
        </ol>
    </>
    );
}

export default GifExpertApp;