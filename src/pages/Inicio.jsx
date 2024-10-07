import React from 'react'
import Carrusel from '../componentes/Carrusel'
import Cardinicio from '../componentes/CardInicio'
import { useEffect, useState } from "react";
import Sidebar from '../componentes/Sidebar';
      const API='https://dummyjson.com/products';


const Inicio = () => {
  const [datos, setDatos] = useState([])
  const getDatos = async () =>{
      try {
        const response = await fetch(API);
        const data = await response.json();
        setDatos(data.products);
      } catch (error) {
        console.error(error)
      }
    };
    useEffect(()=>{
    getDatos();
    },[]);
  return (
    <>
    
    <Sidebar/>
    <Carrusel/>
    <div className='container mx-auto columns-3'>
      {datos && datos.map((item) => (

        <Cardinicio
          key={item.id}
          item={item}
        />
        
      ))}
    </div>
      
      
     




    </>
  )
}

export default Inicio