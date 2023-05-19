export  function Tienda() {

   let productos = [
    {nombre:"Camiseta oversize",
    precio:"$ 100.000",
    id:1,
    color:"Negro",
    foto:"https://firebasestorage.googleapis.com/v0/b/musicdaam-b8f0b.appspot.com/o/tienda1.webp?alt=media&token=4867cf3f-863b-4ac4-916c-cfb3164a1c52",
    descripcion:"Camiseta Oversize Eazy E Rap Hop Hop Nwa Compton Btz"},

    {nombre:"CD NWA ",
    precio:"$ 70.000",
    id: 2,
    color:"imagen NWA",
    foto:"https://firebasestorage.googleapis.com/v0/b/musicdaam-b8f0b.appspot.com/o/tienda2.webp?alt=media&token=9c6fdc8d-6b57-4496-9bde-ac323dd45347",
    descripcion:"N. W. A - Straight Outta Compton 20th Anniversary"},

    {nombre:"Camibuso NWA",
    precio:"$ 150.000",
    id: 3,
    color:"Negro",
    foto:"https://firebasestorage.googleapis.com/v0/b/musicdaam-b8f0b.appspot.com/o/tienda4.jfif?alt=media&token=d9e9376b-b3e6-48e8-932c-ca26cd86f9b1",
    descripcion:"Camibuso De Hombre100% Algodon Diseño: Nwa Compton"},

    {nombre:"Camiseta NWA",
    precio:"$ 120.000",
    id:4,
    color:"Blanco",
    foto:"https://firebasestorage.googleapis.com/v0/b/musicdaam-b8f0b.appspot.com/o/tienda3.jpg?alt=media&token=8f549eb9-231d-434c-9312-28704957bcd7",
    descripcion:"Camiseta blanca de hombre 100% algodon Diseño: NWA"},

    {nombre:"Gorra plana NWA",
    precio:"$ 100.000",
    id: 5,
    color:"Negra",
    foto:"https://firebasestorage.googleapis.com/v0/b/musicdaam-b8f0b.appspot.com/o/tienda5.jfif?alt=media&token=eb9c8f29-d064-4cdf-b858-7b0bb301db65",
    descripcion:"Gorra plana de broche con diseño NWA bordado"},

    {nombre:"Gorro",
    precio:"50.000",
    id: 6,
    color:"Negro",
    foto:"https://firebasestorage.googleapis.com/v0/b/musicdaam-b8f0b.appspot.com/o/tienda6.jpg?alt=media&token=be8578f0-9074-4e75-aed8-9e20b801d36c",
    descripcion:"Gorro negro 100% lana con diseño NWA"},
   
   ]
   return(
    <>
    <section className="row row cols-2 row-cols-md-3 g-3">
    

     {
      productos.map(function(producto){
        return(
          <div key={producto.id}>
                    <div className="col">
                    <div className="card h-60">
                        <h3 className="text-center fw-bold">{producto.nombre}</h3>
                    <img src={producto.foto} alt="" className="img-fluid w-50 h-50" />
                    <h4 className="text-center mt-5">{producto.precio}</h4>
                    <h2 className="text-center"> {producto.color}</h2>
                    <p className="mt-3">{producto.descripcion}</p>
                    
                    </div>
                    
                    </div>
                    
                    </div>
            
        )
      })
     }
     </section>
    </>
   )
}