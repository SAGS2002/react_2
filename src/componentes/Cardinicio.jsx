import { useEffect, useState } from "react";
const API='https://dummyjson.com/products';

const Cardinicio = () => {
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
        <div className="container mx-auto"> 
            <div className="card-compact bg-base-200 w-96 shadow-xl ">
                <div className="card-body">
                        {datos && datos.map((item)=>(
                            <div className="card-compact" key={item.id}>
                                <figure><img src={item.images[0]} alt={item.title} /></figure>
                                <h2 className="card-title">{item.title}</h2>
                                <p>{item.description}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        ))}
                
                </div>
            </div>
        </div>

    </>
  )
}

export default Cardinicio