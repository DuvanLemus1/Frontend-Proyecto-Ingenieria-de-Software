import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Alerta from '../components/alerta'

const Registrar = () => {
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const [telefono, setTelefono] = useState('');
  /*const [departamento, setDepartamento] = useState('')
  const [municipio, setMunicipio] = useState('')*/
  const [alerta, setAlerta] = useState({}) 



  const handleSubmit = async e => {
    e.preventDefault();

    if ([nombreCompleto, correoElectronico, telefono, contrasenia].includes('')) {
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return
    }
    

    //CrearUsuario en la API
    try {
      const respuesta = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/personas/guardarPersona`, {
        "nombreCompleto" : nombreCompleto,
        "correoElectronico" : correoElectronico,
        "telefono" : telefono,
        "calificacion" : null,
        "departamento" : "Francisco Morazan",
        "municipio" : "Distrito Central",
        "rol" : "cliente",
        "estado" : true,
        "contrasenia" : contrasenia,
        "token" : null
      })
      console.log(respuesta.data)
      setAlerta({
        msg: "Cuenta creada exitosamente, revisa tu correo para confirmarla",
        error: false,
      })

      setNombreCompleto('');
      setCorreoElectronico('');
      setContrasenia('');
      setTelefono('');

    } catch (error) {
      setAlerta({
        msg:"Usuario ya registrado",
        error:true
      })
      
    }
  }
  
  const {msg} = alerta;

  return (

    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">
          Crea Tu Cuenta</h1>
      </div>
        {msg && <Alerta alerta={alerta}/>}
      <form className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white "
        onSubmit={handleSubmit}>
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor='nombreCompleto'>
            Nombre Completo
          </label>
          <input
            id="nombreCompleto"
            type="text"
            placeholder="Escribe tu nombre"
            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
            value={nombreCompleto}
            onChange={e => setNombreCompleto(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor='email'
          >
            Correo Electrónico
          </label>
          <input
            id='correoElectronico'
            type="email"
            placeholder="Correo de Registro"
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
            type="password"
            placeholder="Tu contraseña"
            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
            value={contrasenia}
            onChange={e => setContrasenia(e.target.value)}
          />
        </div>

        <div>
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor='telefono'>
            Teléfono
          </label>
          <input
            id='telefono'
            type="text"
            placeholder="Número de teléfono"
            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
            value={telefono}
            onChange={e => setTelefono(e.target.value)}
          />
        </div>

        <input
          type="submit"
          value="Crear Cuenta"
          className="bg-indigo-600 w-full py-3 px-10  
                      rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer
                     hover:bg-indigo-800 md:w-auto transition-colors"
        />
      </form>

      <nav className="mt-10 lg:flex lg:justify-between">
        <Link to="/"
          className="block text-center text-gray-500 hover:cursor-pointer hover:text-indigo-800">
          ¿Ya tienes una cuenta? Inicia Sesión</Link>
      </nav>

    </>
  )
}

export default Registrar