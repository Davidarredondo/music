import { useState,useEffect } from "react"

export function Hook(){

    // antes del retorno configuramos nuestras variables de estado
    // 2 variables una para contar y otra para modificar 
    const [contador,setContador]=useState(0)

    //Programando el detector de ejecuciones
    useEffect(function(){
        setContador(contador+1)
    },[])

    //funcion para decir que hacer cuando le de clic al boton
    function incrementarCuenta(){
        setContador(contador+1)
    }
    return(
        <>

        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <button type="button" className="btn btn-primary" onClick={incrementarCuenta}>clic</button>
                    <h2>La cuenta va en: {contador}</h2>
                </div>
            </div>
        </div>
        </>
    )
}