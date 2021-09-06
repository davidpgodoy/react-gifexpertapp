

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=rrwqikV7aEw0bmhguePxgcoH7JaKEkFY`; //encodeURI reemplaza los espacios por %20 entre otras cosas
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url //Con el signo ? pregunto que si vienen las imagenes, entonces que lo utilice
        }
    })

    return gifs; //regresa una promesa que resuelve la colección de mis imagenes al ser async
}