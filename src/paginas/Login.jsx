import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Alerta from '../components/alerta'
import useAuth from '../hooks/useAuth'

const Login = () => {
  
  const [correoElectronico, setCorreoElectronico] = useState('')
  const [contrasenia, setContrasenia] = useState('')
  const [alerta, setAlerta] = useState({})

  const {setAuth} = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([correoElectronico, contrasenia].includes('')) {
        console.log('Todos los campos son obligatorios')
        setAlerta({
          msg: 'Todos los campos son obligatorios',
          error: true
        })
        return;
    }

    try {
        const { data } = await axios.post('http://localhost:5000/login/login', { 
          "correoElectronico": correoElectronico,
          "contrasenia": contrasenia
        });

        console.log(data)
        setAlerta({})
        localStorage.setItem('token',data.token)
        setAuth(data)
        //navigate('/admin')
    } catch (error) {
      setAlerta({
        msg:error.response.data.msg,
        error: true
      })
    }

}
  
  const {msg} = alerta;

  return (

    <>

      <div>
        <h1 className="text-sky-600 font-black text-6xl text-center">
          Inicia Sesión</h1>
      </div>
      {msg && <Alerta alerta={alerta} />}
        <div>

          <form
                className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white "
                onSubmit={handleSubmit}>
            <div className="my-5">
              <label
                className="uppercase text-gray-600 block text-xl font-bold"
                htmlFor='correoElectronico'
              >
                Correo Electrónico
              </label>
              <input
                id="correoElectronico"
                type="email"
                placeholder="Escibe tu correo electrónico"
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                value={correoElectronico}
                onChange={e => setCorreoElectronico(e.target.value)}
              />
            </div>
            <div>
              <label
                className="uppercase text-gray-600 block text-xl font-bold"
                htmlFor='contrasenia'
              >
                Contraseña
              </label>
              <input
                id='contrasenia'
                type="Password"
                placeholder="Escribe tu contraseña"
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                value={contrasenia}
                onChange={e => setContrasenia(e.target.value)}
              />
            </div>

            <input
              type="submit"
              value="Iniciar Sesion"
              className="bg-sky-600 w-full py-3 px-10
                rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer
                 hover:bg-sky-800 md:w-auto transition-colors"
            />
          </form>

          <nav className="mt-10 lg:flex lg:justify-between">
            <Link to="/registrar"
              className="block text-center mb-5 text-gray-500 hover:cursor-pointer hover:text-indigo-800">
              ¿No tienes una cuenta en nuestro sitio? Regístrate
            </Link>

            <Link to="/olvide-password"
              className="block text-center text-gray-500 hover:cursor-pointer hover:text-indigo-800">
              ¿Olvidaste tu cotraseña?
            </Link>
          </nav>
        </div>

    </>


  )
}

export default Login
