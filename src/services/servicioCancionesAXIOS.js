import axios from "axios"
export async function consultarConAxios(){

    //URI DEL SERVICIO
    const IDARTISTA="4EnEZVjo3w1cwcQYePccay"
    const URI = `https://api.spotify.com/v1/artists/${IDARTISTA}/top-tracks?market=us&User-Agent&Authorization`


    const TOKEN= "Bearer BQDlppcpmzK5jTv9M-TgxZ2x7gQCevTBHM1gGzgHmgbXpf62LLPG8_8UXkEqZVXelI2lqLjYmEx8LPOBQrORBgiPBz2pHQ-AbRNOtgrG2wudav1xt3I"


    //CONSTRUYO LA PETICION
    const PETICION={
        headers:{"Authorization":TOKEN}
    }

   

    //ORDENAR MI RESPUESTA
    try {
         //UTILIZAMOS LA PROMESA ENCARGADA DE CONSUMIR EL API
    let respuesta=await axios.get(URI,PETICION)
    let canciones=respuesta.data
    return canciones

    }catch(error){
        throw new Error("upsss fallamos" + error)
    }
}