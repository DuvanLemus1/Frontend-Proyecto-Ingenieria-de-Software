import {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  
  const [correoElectronico, setCorreoElectronico] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([correoElectronico, password].includes('')) {
        console.log('Todos los campos son obligatorios')
        return;
    }

    try {
        const { data } = await clienteAxios.post('http://localhost:6000/login/login', { 
          "correoElectronico": correoElectronico,
          "contrasenia": password
        });
        localStorage.setItem('token',data.token)
        setAuth(data)
        navigate('/admin')
    } catch (error) {
      console.log(error)
    }

}
  
  return (

    <>

      <div>
        <h1 className="text-sky-600 font-black text-6xl text-center">
          Inicia Sesión</h1>
      </div>

        <div>

          <form
                className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white "
                onSubmit={handleSubmit}>
            <div className="my-5">
              <label
                className="uppercase text-gray-600 block text-xl font-bold"
                htmlFor='email'
              >
                Correo Electrónico
              </label>
              <input
                id="email"
                type="email"
                placeholder="Escibe tu correo electrónico"
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              // value={email}
              // onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                className="uppercase text-gray-600 block text-xl font-bold"
                htmlFor='password'
              >
                Contraseña
              </label>
              <input
                id='password'
                type="Password"
                placeholder="Escribe tu contraseña"
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              // value={password}
              // onChange={e => setPassword(e.target.value)}
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
