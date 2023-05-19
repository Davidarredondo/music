import React from 'react'
import ReactDOM from 'react-dom/client'

// importando bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'



import { BrowserRouter } from "react-router-dom"
import {Rutas} from "./Routes/Rutas"

import { Home } from './Home/Home'
ReactDOM.createRoot(document.getElementById('root')).render(

  //al unico que se llama es al enrutador y se llama al componente rutas
  <React.StrictMode>
    <BrowserRouter>
   <Rutas/>
   </BrowserRouter>
  </React.StrictMode>,
)
