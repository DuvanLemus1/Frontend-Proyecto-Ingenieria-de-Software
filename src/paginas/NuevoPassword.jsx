import { useState, useEffect } from "react"
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'
import Alerta from "../components/alerta"

const NuevoPassword = () => {

  const [contrasenia, setContrasenia] = useState('')
  const [tokenValido, setTokenValido] = useState(false)
  const [alerta, setAlerta] =useState({})
  const [contraseniaModificada, setContraseniaModificada] = useState(false)

  const params = useParams()
  console.log(params);
  const {token} = params

  useEffect(()=>{
    const comprobarToken = async() =>{
      try {
        await axios(`http://localhost:5000/login/comprobarPassword/${token} `)
        
        setTokenValido(true)

      } catch (error) {
        setAlerta({
          msg:error.response.data.msg,
          error: true

        })
      }
    }
    comprobarToken()

  }, [])

  const handleSubmit = async e =>{
    e.preventDefault()

    try {
      const url = `http://localhost:5000/login/almacenarPassword/${token} `

      const {data} = await axios.post(url, {contrasenia})
      console.log(data)
      setAlerta(
        {
          msg:data.msg,
          error:false
        }
      )

      setContraseniaModificada(true)

    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error:true
      })
    }
  }

  const {msg} = alerta
  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl text-center">
          Reestablece Tu Contraseña</h1>
      </div>
      
      {msg &&<Alerta alerta={alerta}/>}

      
        <div>

        <form
          className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white "
          onSubmit={handleSubmit}
        >
         <div>
              <label
                className="uppercase text-gray-600 block text-xl font-bold"
                htmlFor="contasenia"
              >
              Nueva Contraseña
              </label>
              <input
                id="contrasenia"
                type="password"
                placeholder="Escriba su nueva contraseña"
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                value={contrasenia}
                onChange={e => setContrasenia(e.target.value)}
              />
            </div>


          <input
            type="submit"
            value="Guardar nueva contraseña"
            className="bg-indigo-700 w-full py-3 px-10
            rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer
             hover:bg-indigo-800 md:w-auto"
          />
        </form>
      </div>
      

      {contraseniaModificada && (
        <Link to="/"
        className="block text-center text-gray-500 mt-40 text-4xl font-bold hover:cursor-pointer hover:text-indigo-800">
        Inicia Sesión</Link>
      )}
      
    </>

  )
}

export default NuevoPassword