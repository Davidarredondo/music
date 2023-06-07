import '../Musica/Musica.css'
import { useEffect,useState } from "react"
import { consultarCanciones } from "../services/serviocioCanciones"
export function Musica(){
    const [canciones,setCanciones]=useState(null)
    const[estacargando,setEscargando]=useState(true)
    useEffect(function(){

        consultarCanciones().then(function(respuesta){
            setCanciones(respuesta.tracks)
            setEscargando(false)
        })

    },[])
if(estacargando){
    return(
        <>
        <h1>Estoy cargando</h1>
        </>
    )
}else{

    return(
        <>
        <div className="row row cols-1 row-cols-md-3 g-3">
{
    canciones.map(function(cancion){
        return(
            <>
           
              <div className="col">
                    <div className="card h-20 shadow w-20 text-white">
            <h3 className='text-center'>{cancion.name}</h3>
            <img src="https://i.scdn.co/image/ab6761610000e5eb88b99535ed74688cf963d8c8" alt="" className="contenido img-fluid w-20 h-20"/>
            <h6 className='text-center'>Popularidad:{ cancion.popularity}</h6>
            <audio className='w-100 ' controls src={cancion.preview_url}></audio>
            </div>
            </div>
            
            </>
        )
    })
}
</div>
        </>
        
    )
}
   
}