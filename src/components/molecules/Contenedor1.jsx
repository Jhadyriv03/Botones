import React from 'react'
import "./contenedor1.css"
import Boton from '../atoms/Boton'

const contenedor1 = () => {
  return (
    <div className='categorias-conteiner'>
        <Boton type={"boton-medianas"} name_button={"Mediana"}/>
        <Boton type={"boton-grandes"} name_button={"Grandes"}/>
        <Boton type={"boton-familiares"} name_button={"Familiares"}/>
        <Boton type={"boton-stadium"} name_button={"Stadium"}/>
    </div>
  )
}

export default contenedor1