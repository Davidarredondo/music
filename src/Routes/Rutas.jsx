import { Route, Routes } from "react-router-dom"
import { Hook } from "../Hook/Hook"
import { Home } from "../Home/Home"
import { Members } from "../Members/Members"
import {Menu} from "../shared/Menu/Menu"
import { Tienda } from "../Shop/Tienda"
import { Musica } from "../Musica/Musica"
import { History } from "../History/History"
import { Footer } from "../shared/Footer/Footer";
import {Fans} from "../Fans/Fans"
import { Carga } from "../Hook/Carga"

export function Rutas(){
    return(
        // path es la ruta o el camino para enrutar
        <>
        <Menu/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/integrantes" element={<Members />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/musica" element={<Musica />} />
        <Route path="/historia" element={<History />} />
        <Route path="/fans" element={<Fans />} />
        <Route path="/hooks" element={<Hook/>} />
        <Route path="/carga" element={<Carga/>} />
        
      </Routes>
      <Footer/>
      </>
    )
}