import { useEffect, useState } from "react";
const API='https://dummyjson.com/products';

const Cardinicio = ({item}) => {
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
    
    <div className="card bg-slate-700 w-96 shadow rounded-md m-2">
                <div className="card-body">
                            <div className="" key={item.id}>
                                <figure><img src={item.images[0]} alt={item.title} /></figure>
                                <h2 className="card-title">{item.title}</h2>
                                <p>{item.description}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                
                </div>
            </div>

    </>
  )
}

export default Cardinicio