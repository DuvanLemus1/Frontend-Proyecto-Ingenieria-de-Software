import { useEffect, useState } from "react"
import {useParams, Link} from "react-router-dom"
import axios from "axios"
import Alerta from "../components/alerta"

const ConfirmarCuenta = () => {
  
  const[alerta,setAlerta]=useState({});
  const[cuentaConfirmada, setCuentaConfirmada]= useState(false)

  const params =useParams();
  const {id} = params;

  useEffect(() =>{
    const confirmarCuenta = async() =>{
      try {
        const url = `http://localhost:6000/login/confirmar/${id}`;
        const {data} = await axios(url)
        setAlerta({
          msg: data.msg,
          error: false
        })
      } catch (error) {
        setAlerta({
          msg:error.response.data.msg,
          error:true
        })
        setCuentaConfirmada(true)
        
      }
    }
    confirmarCuenta();
  }, []);

  const {msg} = alerta

  return (
    <>
    <div>
      <h1 className="text-indigo-600 font-black text-center text-6xl">
        Cuenta confirmada en Try-It </h1>
    </div>

    <div>
      {msg && <Alerta alerta={alerta} />}
      {cuentaConfirmada && (
        <Link to="/"
        className="block text-center text-gray-500 mt-40 text-4xl font-bold hover:cursor-pointer hover:text-indigo-800">
        Inicia Sesión</Link>
      )}
    </div>
  </>
  )
}

export default ConfirmarCuenta