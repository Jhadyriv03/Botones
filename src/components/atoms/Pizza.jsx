import React from 'react'
import "./Pizza.css"
import SignoA from "../../static/icons/signoatras.svg";
import Boton from './Boton';
const Barralogo = () => {
  return (
    <div className = 'pizza-signo'>
        <div className='pizza-signo-conteiner'>
            <Boton icono ={SignoA} type={"boton-atras"}/>
            <samp>Pizzas</samp>

        </div>
        
    </div>
  )
}

export default Barralogo