
import axios from 'axios';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Alerta from '../components/alerta';



const OlvidePassword = () => {

  const [correoElectronico, setCorreoElectronico] = useState('');
  const [alerta, setAlerta] =useState({});

  const handleSubmit = async e => {
    e.preventDefault();

    if(correoElectronico===''){
      setAlerta({
        msg: 'El correo es obligatorio',
        error: true
      })
      return
    }

    try {
      console.log(correoElectronico)

      const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/login/olvidePassword`, correoElectronico)
      
      console.log(data);
    } catch (error) {

      console.log(error.response);
      
    }
  }

  const {msg} = alerta;
  
  return (

    <>
        <div>
          <h1 className="text-indigo-600 font-black text-6xl text-center">
            Recupera Tu Acceso</h1>
        </div>

          {msg && <Alerta alerta={alerta}/>}
        

          <form
            className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white "
            onSubmit={handleSubmit}
          >
            <div className="my-5">
              <label
                className="uppercase text-gray-600 block text-xl font-bold"
                htmlFor='correoElectronico'
              >
                Correo Electrónico
              </label>
              <input
                id='correoElectronico'
                type="email"
                placeholder="Ingresa tu correo electrónico"
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                value={correoElectronico}
                onChange={e => setCorreoElectronico(e.target.value)}
              />
            </div>
            <input
              type="submit"
              value="Enviar Instruciones de Recuperación"
              className="bg-indigo-700 w-full py-3 px-10
                rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer
                 hover:bg-indigo-800 md:w-auto"
            />
          </form>

          <nav className="mt-10 lg:flex lg:justify-between">
            <Link to="/registrar"
              className="block text-center mb-5 text-gray-500 hover:cursor-pointer hover:text-indigo-800">
              ¿No tienes una cuenta en nuestro sitio? Regístrate</Link>

            <Link to="/"
              className="block text-center text-gray-500 hover:cursor-pointer hover:text-indigo-800">
              ¿Ya tienes una cuenta? Inicia Sesión</Link>
          </nav>
        
    </>

  )
}

export default OlvidePassword