import React from 'react'
import { Link } from "react-router-dom"
import '../assets/css/text.css'
import FiltroCategorias from './FiltroCategorias'
import { useEffect, useState } from "react";
const API = ('https://dummyjson.com/products/categories')

const Header = () => {
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
        <div className="navbar bg-slate-900 text-white">
          <div className="navbar navbar-start">
            <Link to={"/"} className="btn btn-ghost text-xl">Añisbaba.com</Link>
            <a className='btn btn-ghost'>Enviar a <p className='text-xl'>Venezuela</p></a>

          </div>
          <div className="navbar-center border-2 border-black bg-neutral-content">
          
          <div className="dropdown ">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle ">
                Todos
                
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow bg-neutral-950">
                
                 {datos && datos.map((item) =>
                  <FiltroCategorias
                    key={item.id}
                    item={item}
                  />
                
                )}
                  
              </ul>
            </div>
          
            <div className='navbar-center'>
            <input type="text" placeholder="Search" className="input w-24 md:w-full" />
            </div>
            
            <div className="navbar-right">
            <button className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
          
          </div>
          <div className="dropdown dropdown-hover ">
                <div tabIndex={0} role="button" className="btn m-1">Idioma</div>
                <ul tabIndex={0} className="dropdown-content menu rounded-box z-[1] w-52 p-2 shadow bg-neutral-950">
                    <li><a>Español</a></li>
                    <li><a>Ingles</a></li>
                </ul>
            </div>
            
            <a className="btn btn-ghost text-xl bg-neutral-content">Pedidos</a>
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <div className="indicator">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 "
                        fill="none "
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="badge badge-sm indicator-item">8</span>
                    </div>
                </div>
                <div
                    tabIndex={0}
                    className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                    <div className="card-body">
                    <span className="text-lg font-bold">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                        <button className="btn btn-primary btn-block">View cart</button>
                    </div>
                    </div>
                </div>
                </div>
            <Link to={"/Login"} className="btn btn-ghost text-xl">Login</Link>
          </div> 
        </div>


        

</>
  )
}

export default Header