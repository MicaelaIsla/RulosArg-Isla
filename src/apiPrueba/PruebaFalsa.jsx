import { useEffect, useState } from "react"


export const PruebaFalsa = () => {

    const [producto, setProducto] = useState(null)
  



    useEffect(() => {
        fetch(`{ stock.js}`)
            .then( (resp) => resp.json() )
            .then( (data) => {
                setProducto(data)
            })
    }, [])

    return (
        <div className="container my-5">
            <h2>Productos para el cabello</h2>
           

            {
                <div>
                    <h3>{producto.name}</h3>
                    <img src={producto.img} alt={producto.name}/>
                </div>
            }

            </div>
    )
} 