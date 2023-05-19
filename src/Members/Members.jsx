import 'animate.css'
import './Members.css'
export function Members(){

    let integrantes=[
        {nombre:"Eazy-e",
        roll:"cantante",
        id:1,
        foto:"https://firebasestorage.googleapis.com/v0/b/musicdaam-b8f0b.appspot.com/o/eazy%20e.jfif?alt=media&token=1f2ff80c-4f74-4d0c-a614-b9cb5c47a7df",
        nacimiento:"7 septiembre de 1964,compton,california",
    descripcion:"Eric Lynn Wright más conocido por su nombre artístico Eazy-E, fue un rapero, productor y mánager estadounidense. Saltó a la fama con el grupo de gangsta rap N.W.A a finales de los 80. El estilo lírico y vocal de Eazy-E es reconocido al instante por su voz relativamente aguda (tenor) y sus letras centradas en las armas, drogas, policía, actos violentos y sexo. Eazy-E es uno de los pioneros del gangsta rap y en la actualidad permanece como uno de los iconos más distintivos e influyentes del hip hop."},

        {nombre:"Ice cube",
        roll:"cantante",
        id:2,
        foto:"https://firebasestorage.googleapis.com/v0/b/musicdaam-b8f0b.appspot.com/o/ice%20cube.jfif?alt=media&token=aa459086-900f-404e-a532-869b355686c3",
        nacimiento:"Los Ángeles, California, 15 de junio de 1969",
        descripcion:"O'Shea Jackson Sr. , conocido profesionalmente como Ice Cube, es un rapero y actor estadounidense.1 Comenzó su carrera a finales de los años 80 como miembro del polémico grupo de gangsta rap, N.W.A., y posteriormente lanzó su exitosa carrera en solitario en la música y en el cine, Su participación en N.W.A. y las letras que compuso ayudaron a popularizar el subgénero del gangsta rap2 y sus primeros álbumes AmeriKKKa's Most Wanted y Death Certificate, además de ser éxitos comerciales y críticos fueron importantes álbumes políticos a principios de los años 90, además de sus inicios en el cine en el mismo período.En los últimos años, su carrera como actor ha sido el centro de sus actividades, pese a que no ha abandonado su carrera como rapero. Es considerado como uno de los íconos más influyentes en la industria del hip hop, particularmente por su rap intrépido y enfadado, y por tocar temas políticos y raciales en sus letras. Sus discos han vendido más de 12 millones de copias en todo el mundo"},

        {nombre:"Dr. dre",
        roll:"dj",
        id:3,
        foto:"https://firebasestorage.googleapis.com/v0/b/musicdaam-b8f0b.appspot.com/o/dr%20dre.jpg?alt=media&token=99008296-49d6-4dc4-b022-f991b9e1b809",
        nacimiento:"Compton, California, 18 de febrero de 1965",
        descripcion:"Andre Romelle Young (Compton, California; 18 de febrero de 1965), más conocido por su nombre artístico Dr. Dre, es un rapero, productor y empresario estadounidense.En 1986 se reunió con el rapero Ice Cube, que colaboró con él para grabar canciones para Ruthless Records, un sello discográfico de rap a cargo del rapero Eazy-E. N.W.A., junto con su compañero de la costa oeste el rapero Ice Cube son ampliamente acreditados como artistas seminales del género gangsta rap, un subgénero blasfemia-pesado del hip hop, repleta de representaciones arenosas de la delincuencia urbana y el estilo de vida gansteril."},

        {nombre:"Mc ren",
        roll:"cantante",
        id:4,
        foto:"https://firebasestorage.googleapis.com/v0/b/musicdaam-b8f0b.appspot.com/o/mc%20ren.jfif?alt=media&token=1641b109-6245-4545-af73-289702c5b4c8",
        nacimiento:"Compton, California, 16 de junio de 1969",
        descripcion:"Nació y creció en Compton, y tras finalizar su último año en el instituto Domínguez de Compton, durante esos años era un miembro no activo de los Kelly Park Compton Crips junto a Eazy-E, formó parte del grupo de gangsta rap N.W.A.. Contribuyó contundentemente en el álbum Straight Outta Compton (1989), y se convirtió en un miembro mucho más valioso tras la marcha de Ice Cube del grupo en 1989. N.W.A. se convirtió en el primer grupo de gangsta rap en conseguir éxito comercial. Sin embargo, como el álbum Efil4zaggin fue número 1 en las listas de Billboard en 1991, el conflicto financiero entre Dr. Dre y Ruthless Records condujo a la disolución del grupo. MC Ren posteriormente grabaría su álbum debut con la ayuda de Eazy-E en 1992, titulado Kizz My Black Azz. Sorprendentemente, con poca promoción comercial, el disco fue platino. Su siguiente álbum, Life Sentence, fue desechado y Ren se convirtió a la Nación del Islam orientado por DJ Train, su DJ. En 1993 lanzó el álbum Shock of the Hour."},

        {nombre:"Dj yella",
        roll:"dj",
        id:5,
        foto:"https://firebasestorage.googleapis.com/v0/b/musicdaam-b8f0b.appspot.com/o/dj%20yella.jpg?alt=media&token=55056ee5-a879-401a-9112-6a5e6c82bc81",
        nacimiento:"Compton, California; 11 de diciembre de 1967",
        descripcion:"Junto con Dr. Dre, Yella produjo los tres álbumes que hicieron saltar a la fama al polémico grupo de gangsta rap, N.W.A, y el álbum debut en solitario de Eazy-E, Eazy-Duz-It, todo esto sumado a millones de ventas. En 1996 grabó un álbum, One Mo Nigga Ta Go, dedicado a su amigo y colega fallecido Eazy-E. Tras este lanzamiento, desapareció de la escena de la música, para años más tarde convertirse en director de películas pornográficas. Aunque sigue sin estar interesado en volver al mundo de la música, se reunió con el antiguo miembro de N.W.A. MC Ren para grabar el tema Bangin, que lo incluyó en la banda sonora de una de sus películas porno."},

        {nombre:"Arabian prince",
        roll:"cantante",
        id:6,
        foto:"https://firebasestorage.googleapis.com/v0/b/musicdaam-b8f0b.appspot.com/o/arabian%20prince.webp?alt=media&token=93bf2871-0ee7-42f6-9cfb-f0963bfd4806",
        nacimiento:"Compton, California, 17 de junio de 1965",
        descripcion:"Arabian Price (nacido como Mik Lezan) es un electro hop (tipo de música dance mezclada con hip hop que surge en Southern California entrada la década de los 80’) y rapero de Los Ángeles, California. Empezó su carrera en RapSur Records, compañía montada por Russ Parr, donde sacó clásicos de electrónica como Innovator & Strange Life. Un par de años después él se unió a los Niggaz with Attitude (N.W.A.) de Compton. Pero The Arabian Prince dejó el grupo para emprender una carrera en solitario en 1988. Su debut Brother Arab on Orpheus fracasó en 1989, pero hoy la gente demanda el disco. El álbum incluía Brother Arab y Where's My Bytches, además de un trabajo en el Straight Outta Compton y producciones para artistas de la costa oeste.En el 2000, Arabian Prince examinaba videojuegos para FOX Interactive y actualmente dirige el estudio de animación 3D."}
    ]

    function quehagocuandosedeelevento(evento){
       console.log(evento.target.classList.add("blancoYnegro"))

    }

    
    function otroevento(evento){
        console.log(evento.target.classList.remove("blancoYnegro"))
       }
    return(
        <>

   <div className="row row cols-1 row-cols-md-3 g-3">

    {
        integrantes.map(function(integrante){
            return(
                <div key={integrante.id}>
                    <div className="col">
                    <div className="card h-100 shadow w-100">
                        <h3 className="text-center fw-bold">{integrante.nombre}</h3>
                    <img src={integrante.foto} alt="" className="img-fluid w-100 h-100 animate__animated animate__fadeInDown" onMouseOver={quehagocuandosedeelevento}  onMouseLeave={otroevento} />
                    <h4 className="text-center mt-5">{integrante.nacimiento}</h4>
                    <h2 className="text-center">Roll: {integrante.roll}</h2>
                    <p className="mt-3">{integrante.descripcion}</p>
                    
                    </div>
                    
                    </div>
                    
                    </div>
            )
        })
    }

   </div>
        
        
        </>
    )
}