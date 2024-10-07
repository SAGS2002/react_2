import React from 'react'

import { useEffect, useState } from "react";


const FiltroCategorias = () => {



  return (
    <div>
         <li key={index}><Link to={`/Categories/${item}`}className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow bg-neutral-950">{item}</Link></li>
        
    </div>
  )
}

export default FiltroCategorias
