import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Alerta from '../components/alerta'
import Select from 'react-select'

import Swal from 'sweetalert2'

const Registrar = () => {
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const [contrasenia2, setContrasenia2] = useState('');
  const [telefono, setTelefono] = useState('');
  const [value, setValue] = useState('');
  const [valueMuni, setValueMuni] = useState('');
  const [habilita, setHabilita] = useState(true)
  const [alerta, setAlerta] = useState({}) 


  
  

  const handleSubmit = async e => {
    e.preventDefault();

    if ([nombreCompleto, correoElectronico, telefono, contrasenia, contrasenia2, value, valueMuni].includes('')) {
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return

    }
    
    if (contrasenia.length<6) {
      setAlerta({
        msg: 'La contrasenia es muy corta, debe contener al menos 6 caracteres',
        error: true
      })
      return

    }

    if (!contrasenia.includes('/')) {
      setAlerta({
        msg: 'La contrasena debe contener uno de estos caracteres: /, @',
        error: true
      })
      return

    }
    if(contrasenia !== contrasenia2){
      setAlerta({
        msg: 'Las contraseñas no son iguales, vuelve a escribirlas',
        error: true
      })
      return
    }

    if(telefono.length !== 8){
      setAlerta({
        msg: 'El teléfono debe constar de 8 dígitos, ingresa un numero de teléfono válido',
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
        "departamento" : value,
        "municipio" : valueMuni,
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
      setContrasenia2('');
      setTelefono('');
      setValue('')
      setValueMuni('')

    } catch (error) {
      setAlerta({
        msg:"Usuario ya registrado",
        error:true
      })
      
    }
  }
  

  const {msg} = alerta;

  
  const opcionesDepartamento = [

      { value: 'Atlántida', label: 'Atlántida' },
      { value: 'Colón', label: 'Colón'}, 
      { value: 'Comayagua', label: 'Comayagua'},
      { value: 'Copán', label: 'Copán' },
      { value: 'Cortés', label: 'Cortés' },
      { value: 'Choluteca', label: 'Choluteca'}, 
      { value: 'El Paraiso', label: 'El Paraiso'},
      { value: 'Francisco Morazán', label: 'Francisco Morazán'}, 
      { value: 'Gracias a Dios', label: 'Gracias a Dios'},
      { value: 'Intibucá', label: 'Intibucá' },
      { value: 'Islas de la Bahía', label: 'Islas de la Bahía' },
      { value: 'La Paz', label: 'La Paz'}, 
      { value: 'Lempira', label: 'Lempira'}, 
      { value: 'Ocotepeque', label: 'Ocotepeque'},
      { value: 'Olancho', label: 'Olancho' },
      { value: 'Santa Barbara', label: 'Santa Barbara' },
      { value: 'Valle', label: 'Valle'},
      { value: 'Yoro', label: 'Yoro'}
  ]



  const findMuni = (departament) => {
      const optionsMunicipios = {

          'Atlántida': [{ value: 'La Ceiba', label: 'La Ceiba' },
          { value: 'El Porvenir', label: 'El Porvenir' },
          { value: 'Esparta', label: 'Esparta' },
          { value: 'Jutiapa', label: 'Jutiapa' }, 
          { value: 'La Masica', label: 'La Masica' },
          { value: 'Tela', label: 'Tela' },
          { value: 'San Franciso', label: 'San Franciso' }, 
          { value: 'Arizona', label: 'Arizona' }], 

          'Colón': [{ value: 'Trujillo', label: 'Trujillo' },
          { value: 'Balfate', label: 'Balfate' },
          { value: 'Iriona', label: 'Iriona' },
          { value: 'Limón', label: 'Limón' }, 
          { value: 'Sabá', label: 'Sabá' },
          { value: 'Santa Fe', label: 'Santa Fe' },
          { value: 'Santa Rosa de Aguán', label: 'Santa Rosa de Aguán' }, 
          { value: 'Sonaguera', label: 'Sonaguera' }, 
          { value: 'Tocoa', label: 'Tocoa' }, 
          { value: 'Bonito Oriental', label: 'Bonito Oriental' }], 

          'Comayagua': [{ value: 'Comayagua', label: 'Comayagua' },
          { value: 'Ajuterique', label: 'Ajuterique' },
          { value: 'El Rosario', label: 'El Rosario' },
          { value: 'Esquías', label: 'Esquías' }, 
          { value: 'Humuya', label: 'Humuya' },
          { value: 'La Libertad', label: 'La Libertad' },
          { value: 'Lamaní', label: 'Lamaní' }, 
          { value: 'La Trinidad', label: 'La Trinidad' }, 
          { value: 'Lejamaní', label: 'Lejamaní' }, 
          { value: 'Meámbar', label: 'Meámbar' }, 
          { value: 'Minas de Oro', label: 'Minas de Oro' },
          { value: 'Ojo de Agua', label: 'Ojo de Agua' },
          { value: 'San Jerónimo', label: 'San Jerónimo' }, 
          { value: 'San José de Comayagua', label: 'San José de Comayagua' },
          { value: 'San José del Potrero', label: 'San José del Potrero' },
          { value: 'San Luis', label: 'San Luis' }, 
          { value: 'San Sebastián', label: 'San Sebastián' }, 
          { value: 'Siguatepeque', label: 'Siguatepeque' }, 
          { value: 'Villa de San Antonio', label: 'Villa de San Antonio' }, 
          { value: 'Lajas', label: 'Lajas' }, 
          { value: 'Taulabe', label: 'Taulabe' }], 

          'Copán': [{ value: 'Santa Rosa de Copán', label: 'Santa Rosa de Copán' },
          { value: 'Cabañas', label: 'Cabañas' },
          { value: 'Concepción', label: 'Concepción' },
          { value: 'Copán Ruinas', label: 'Copán Ruinas' }, 
          { value: 'Corquín', label: 'Corquín' },
          { value: 'Cucuyagua', label: 'Cucuyagua' },
          { value: 'Dolores', label: 'Dolores' }, 
          { value: 'Dulce Nombre', label: 'Dulce Nombre' }, 
          { value: 'El Paraiso', label: 'El Paraiso' }, 
          { value: 'Florida', label: 'Florida' }, 
          { value: 'La Jigua', label: 'La Jigua' },
          { value: 'La Unión', label: 'La Unión' },
          { value: 'Nueva Arcadia', label: 'Nueva Arcadia' }, 
          { value: 'San Agustín', label: 'San Agustín' },
          { value: 'San Antonio', label: 'San Antonio' },
          { value: 'San Jerónimo', label: 'San Jerónimo' }, 
          { value: 'San José', label: 'San José' }, 
          { value: 'San Juan de Opoa', label: 'San Juan de Opoa' }, 
          { value: 'San Nicolás', label: 'San Nicolás' }, 
          { value: 'San Pedro', label: 'San Pedro' }, 
          { value: 'Santa Rita', label: 'Santa Rita' }, 
          { value: 'Trinidad de Copán', label: 'Trinidad de Copán' }, 
          { value: 'Veracruz', label: 'Veracruz' }], 

          'Cortés': [{ value: 'San Pedro Sula', label: 'San Pedro Sula' },
          { value: 'Choloma', label: 'Choloma' },
          { value: 'Omoa', label: 'Omoa' },
          { value: 'Pimienta', label: 'Pimienta' }, 
          { value: 'Potrerillos', label: 'Potrerillos' },
          { value: 'Puerto Cortés', label: 'Puerto Cortés' },
          { value: 'San Antonio de Cortés', label: 'San Antonio de Cortés' }, 
          { value: 'San Francisco de Yojoa', label: 'San Francisco de Yojoa' }, 
          { value: 'San Manuel', label: 'San Manuel' }, 
          { value: 'Santa Cruz de Yojoa', label: 'Santa Cruz de Yojoa' }, 
          { value: 'Villanueva', label: 'Villanueva' },
          { value: 'La Lima', label: 'La Lima' }], 

          'Choluteca': [{ value: 'Choluteca', label: 'Choluteca' },
          { value: 'Apacilagua', label: 'Apacilagua' },
          { value: 'Concepción de María', label: 'Concepción de María' },
          { value: 'Duyure', label: 'Duyure' }, 
          { value: 'El Corpus', label: 'El Corpus' },
          { value: 'El Triunfo', label: 'El Triunfo' },
          { value: 'Marcovia', label: 'Marcovia' }, 
          { value: 'Morolica', label: 'Morolica' }, 
          { value: 'Namasigue', label: 'Namasigue' }, 
          { value: 'Orocuina', label: 'Orocuina' }, 
          { value: 'Pespire', label: 'Pespire' },
          { value: 'San Antonio de Flores', label: 'San Antonio de Flores'}, 
          { value: 'San Isidro', label: 'San Isidro' }, 
          { value: 'San José', label: 'San José' }, 
          { value: 'San Marcos de Colón', label: 'San Marcos de Colón' },
          { value: 'Santa Ana de Yusguare', label: 'Santa Ana de Yusguare'}], 

          'El Paraiso': [{ value: 'Yuscarán', label: 'Yuscarán' },
          { value: 'Alauca', label: 'Alauca' },
          { value: 'Danlí', label: 'Danlí' },
          { value: 'El Paraiso', label: 'El Paraiso' }, 
          { value: 'Guinope', label: 'Guinope' },
          { value: 'Jacaleapa', label: 'Jacaleapa' },
          { value: 'Liure', label: 'Liure' }, 
          { value: 'Morocelí', label: 'Morocelí' }, 
          { value: 'Oropolí', label: 'Oropolí' }, 
          { value: 'Potrerillos', label: 'Potrerillos' }, 
          { value: 'San Antonio de Flores', label: 'San Antonio de Flores' },
          { value: 'San Lucas', label: 'San Lucas'}, 
          { value: 'San Matías', label: 'San Matías' }, 
          { value: 'Soledad', label: 'Soledad' }, 
          { value: 'Teupasenti', label: 'Teupasenti' },
          { value: 'Texiguat', label: 'Texiguat'}, 
          { value: 'Vado Ancho', label: 'Vado Ancho' }, 
          { value: 'Yauyupe', label: 'Yauyupe' },
          { value: 'Trojes', label: 'Trojes'}], 

          'Francisco Morazán': [{ value: 'Tegucigalpa', label: 'Tegucigalpa' },
          { value: 'Alubarén', label: 'Alubarén' },
          { value: 'Cedros', label: 'Cedros' },
          { value: 'Curarén', label: 'Curarén' }, 
          { value: 'El Porvenir', label: 'El Porvenir' },
          { value: 'Guaimaca', label: 'Guaimaca' },
          { value: 'La Libertad', label: 'La Libertad' }, 
          { value: 'La Venta', label: 'La Venta' }, 
          { value: 'Lepaterique', label: 'Lepaterique' }, 
          { value: 'Maraita', label: 'Maraita' }, 
          { value: 'Marale', label: 'Marale' },
          { value: 'Nueva Armenia', label: 'Nueva Armenia'}, 
          { value: 'Ojojona', label: 'Ojojona' }, 
          { value: 'Orica', label: 'Orica' }, 
          { value: 'Reitoca', label: 'Reitoca' },
          { value: 'Sabanagrande', label: 'Sabanagrande'}, 
          { value: 'San Antonio de Oriente', label: 'San Antonio de Oriente' }, 
          { value: 'San Ignacio', label: 'San Ignacio' },
          { value: 'San Juan de Flores', label: 'San Juan de Flores'}, 
          { value: 'San Miguelito', label: 'San Miguelito'}, 
          { value: 'Santa Ana', label: 'Santa Ana' }, 
          { value: 'Santa Lucía', label: 'Santa Lucía' }, 
          { value: 'Talanga', label: 'Talanga' },
          { value: 'Tatumbla', label: 'Tatumbla'}, 
          { value: 'Valle de Ángeles', label: 'Valle de Ángeles' }, 
          { value: 'Villa de San Francisco', label: 'Villa de San Francisco' },
          { value: 'Vallecillo', label: 'Vallecillo'}], 

          'Gracias a Dios': [{ value: 'Puerto Lempira', label: 'Puerto Lempira' },
          { value: 'Brus Laguna', label: 'Brus Laguna' },
          { value: 'Ahuas', label: 'Ahuas' },
          { value: 'Juan Francisco Bulnes', label: 'Juan Francisco Bulnes' }, 
          { value: 'Villeda Morales', label: 'Villeda Morales' },
          { value: 'Wampusirpi', label: 'Wampusirpi' }],

          'Intibucá': [{ value: 'La Esperanza', label: 'La Esperanza' },
          { value: 'Camasca', label: 'Camasca' },
          { value: 'Colomoncagua', label: 'Colomoncagua' },
          { value: 'Concepción', label: 'Concepción' },
          { value: 'Dolores', label: 'Dolores' },
          { value: 'Intibucá', label: 'Intibucá' },
          { value: 'Jesús de Otoro', label: 'Jesús de Otoro' },
          { value: 'Magdalena', label: 'Magdalena' },
          { value: 'Masaguara', label: 'Masaguara' },
          { value: 'San Antonio', label: 'San Antonio' },
          { value: 'San Isidro', label: 'San Isidro' },
          { value: 'San Juan del Caite', label: 'San Juan del Caite' },
          { value: 'San Marcos de la Sierra', label: 'San Marcos de la Sierra' },
          { value: 'San Miguelito', label: 'San Miguelito' },
          { value: 'Santa Lucía', label: 'Santa Lucía' },
          { value: 'Yamaranguila', label: 'Yamaranguila' },
          { value: 'San Francisco de Opalaca', label: 'San Francisco de Opalaca' }],

          'Islas de la Bahía':[{value: 'Roatán', label: 'Roatán' },
          { value: 'Guanaja', label: 'Guanaja' },
          { value: 'José Santos Guardiola', label: 'José Santos Guardiola' },
          { value: 'Utila', label: 'Utila' }],

          'La Paz': [{ value: 'La Paz', label: 'La Paz' },
          { value: 'Aguanqueterique', label: 'Aguanqueterique' },
          { value: 'Cabañas', label: 'Cabañas' },
          { value: '"Cane", ', label: '"Cane", ' },
          { value: 'Chinacla', label: 'Chinacla' },
          { value: 'Guajiquiro', label: 'Guajiquiro' },
          { value: 'Lauterique', label: 'Lauterique' },
          { value: 'Marcala', label: 'Marcala' },
          { value: 'Mercedes de Oriente', label: 'Mercedes de Oriente' },
          { value: 'Opatoro', label: 'Opatoro' },
          { value: 'San Antonio del Norte', label: 'San Antonio del Norte' },
          { value: 'San José', label: 'San José' },
          { value: 'San Juan', label: 'San Juan' },
          { value: 'San Pedro de Tutule', label: 'San Pedro de Tutule' },
          { value: 'Santa Lucía', label: 'Santa Lucía' },
          { value: 'Santa Ana', label: 'Santa Ana' },
          { value: 'Santa Elena', label: 'Santa Elena' },
          { value: 'Santa María', label: 'Santa María' },
          { value: 'Santiago Puringla', label: 'Santiago Puringla' },
          { value: 'Yarula', label: 'Yarula' }],

          'Lempira': [{ value: 'Gracias', label: 'Gracias' },
          { value: 'Belén', label: 'Belén' },
          { value: 'Candelaria', label: 'Candelaria' },
          { value: 'Cololaca', label: 'Cololaca' },
          { value: 'Erandique', label: 'Erandique' },
          { value: 'Gualcinse', label: 'Gualcinse' },
          { value: 'Guarita', label: 'Guarita' },
          { value: 'La Campa', label: 'La Campa' },
          { value: 'La Iguala', label: 'La Iguala' },
          { value: 'Las Flores', label: 'Las Flores' },
          { value: 'San Isidro', label: 'San Isidro' },
          { value: 'La Unión', label: 'La Unión' },
          { value: 'La Virtud', label: 'La Virtud' },
          { value: 'Lepaera', label: 'Lepaera' },
          { value: 'Mapulaca', label: 'Mapulaca' },
          { value: 'Piraera', label: 'Piraera' },
          { value: 'San Andrés', label: 'San Andrés' },
          { value: 'San Francisco', label: 'San Francisco' },
          { value: 'San Juan Guarita', label: 'San Juan Guarita' },
          { value: 'San Manuel Colohete', label: 'San Manuel Colohete' },
          { value: 'San Rafael', label: 'San Rafael' },
          { value: 'San Sebastián', label: 'San Sebastián' },
          { value: 'Santa Cruz', label: 'Santa Cruz' },
          { value: 'Talgua', label: 'Talgua' },
          { value: 'Tambla', label: 'Tambla' },
          { value: 'Tomalá', label: 'Tomalá' },
          { value: 'Valladolid', label: 'Valladolid' },
          { value: 'Virginia', label: 'Virginia' },
          { value: 'San Marcos de Caiquín', label: 'San Marcos de Caiquín'}],

          'Ocotepeque': [{ value: 'Nueva Ocotepeque', label: 'Nueva Ocotepeque' },
          { value: 'Belén Gualcho', label: 'Belén Gualcho' },
          { value: 'Concepción', label: 'Concepción' },
          { value: 'Dolores Merendón', label: 'Dolores Merendón' },
          { value: 'Fraternidad', label: 'Fraternidad' },
          { value: 'Intibucá', label: 'Intibucá' },
          { value: 'La Encarnación', label: 'La Encarnación' },
          { value: 'La Labor', label: 'La Labor' },
          { value: 'Lucerna', label: 'Lucerna' },
          { value: 'Mercedes', label: 'Mercedes' },
          { value: 'San Fernando', label: 'San Fernando' },
          { value: 'San Francisco del Valle', label: 'San Francisco del Valle' },
          { value: 'San Jorge', label: 'San Jorge' },
          { value: 'San Marcos', label: 'San Marcos' },
          { value: 'Santa Fe', label: 'Santa Fe' },
          { value: 'Sensenti', label: 'Sensenti' },
          { value: 'Sinuapa', label: 'Sinuapa' }],

          'Olancho': [{ value: 'Juticalpa', label: 'Juticalpa' },
          { value: 'Campamento', label: 'Campamento' },
          { value: 'Colomoncagua', label: 'Colomoncagua' },
          { value: 'Catacamas', label: 'Catacamas' },
          { value: 'Concordia', label: 'Concordia' },
          { value: 'Dulce Nombre de Culmí', label: 'Dulce Nombre de Culmí' },
          { value: 'El Rosario', label: 'El Rosario' },
          { value: 'Esquipulas del Norte', label: 'Esquipulas del Norte' },
          { value: 'Gualaco', label: 'Gualaco' },
          { value: 'Guarizama', label: 'Guarizama' },
          { value: 'Guata', label: 'Guata' },
          { value: 'Guayape', label: 'Guayape' },
          { value: 'Jano', label: 'Jano' },
          { value: 'La Unión', label: 'La Unión' },
          { value: 'Mangulile', label: 'Mangulile' },
          { value: 'Manto', label: 'Manto' },
          { value: 'Salamá', label: 'Salamá' },
          { value: 'San Esteban', label: 'San Esteban' },
          { value: 'San Francisco de Becerra', label: 'San Francisco de Becerra' },
          { value: 'San Francisco de La Paz', label: 'San Francisco de La Paz' },
          { value: 'Santa María del Real', label: 'Santa María del Real' },
          { value: 'Silca', label: 'Silca' },
          { value: 'Yocón', label: 'Yocón' },
          { value: 'Patuca', label: 'Patuca' }],

          'Santa Bárbara': [{ value: 'Santa Bárbara', label: 'Santa Bárbara' },
          { value: 'Arada', label: 'Arada' },
          { value: 'Atima', label: 'Atima' },
          { value: 'Azacualpa', label: 'Azacualpa' },
          { value: 'Ceguaca', label: 'Ceguaca' },
          { value: 'Colinas', label: 'Colinas' },
          { value: 'Concepción del Norte', label: 'Concepción del Norte' },
          { value: 'Concepción del Sur', label: 'Concepción del Sur' },
          { value: 'Chinda', label: 'Chinda' },
          { value: 'El Níspero', label: 'El Níspero' },
          { value: 'Gualala', label: 'Gualala' },
          { value: 'Ilama', label: 'Ilama' },
          { value: 'Macuelizo', label: 'Macuelizo' },
          { value: 'Naranjito', label: 'Naranjito' },
          { value: 'Nueva Celilac', label: 'Nueva Celilac' },
          { value: 'Petoa', label: 'Petoa' },
          { value: 'Protección', label: 'Protección' },
          { value: 'Quimistán', label: 'Quimistán' },
          { value: 'San Francisco de Ojuera', label: 'San Francisco de Ojuera' },
          { value: 'San Luis', label: 'San Luis' },
          { value: 'San Marcos', label: 'San Marcos' },
          { value: 'San Nicolás', label: 'San Nicolás' },
          { value: 'San Pedro Centenario', label: 'San Pedro Centenario' },
          { value: 'Trinidad', label: 'Trinidad' },
          { value: 'Las Vegas', label: 'Las Vegas' },
          { value: 'Nueva Frontera', label: 'Nueva Frontera' }],

          'Valle': [{ value: 'Nacaome', label: 'Nacaome' },
          { value: 'Alianza', label: 'Alianza' },
          { value: 'Amapala', label: 'Amapala' },
          { value: 'Aramecina', label: 'Aramecina' },
          { value: 'Caridad', label: 'Caridad' },
          { value: 'Goascorán', label: 'Goascorán' },
          { value: 'Langue', label: 'Langue' },
          { value: 'San Francisco de Coray', label: 'San Francisco de Coray' },
          { value: 'San Lorenzo', label: 'San Lorenzo' }],

          'Yoro': [{ value: 'Yoro', label: 'Yoro' },
          { value: 'Arenal', label: 'Arenal' },
          { value: 'El Negrito', label: 'El Negrito' },
          { value: 'El Progreso', label: 'El Progreso' },
          { value: 'Jocón', label: 'Jocón' },
          { value: 'Morazán', label: 'Morazán' },
          { value: 'Olanchito', label: 'Olanchito' },
          { value: 'Santa Rita', label: 'Santa Rita' },
          { value: 'Sulaco', label: 'Sulaco' },
          { value: 'Victoria', label: 'Victoria' },
          { value: 'Yorito', label: 'Yorito' }]


      }

      return optionsMunicipios[departament];
  }

  const mostrarTerminos = ()=>{
    Swal.fire({
      icon: 'info',
      title: 'Términos y Condiciones',
      footer: '<b>No puedes crear una cuenta en nuestro sitio si no aceptas nuestras políticas de Registro</b>',
      html: '1. Comportamiento gentil y educado durante los procesos de compra-venta. <br> 2. No se permite publicar la venta de armas, drogas ni material pornográfico. <br>3. Las imágenes de un producto deben corresponder al producto real que se vende. <br> 4. Todos los usuarios están sujetos a ser objeto de denuncia en caso de infringir nuestras normas. <br><br> <b>Nota: </b>Nuestro sitio web no interviene en las transacciones y negocios de nuestros usuarios, por lo que <b>NO tomamos participación en ningún problema surgido durante la compra-venta de cualquier artículo</b>',
      confirmButtonText:"Volver a registro",
      confirmButtonColor:"green",
      allowOutsideClick:false,
      width: '70%'
    })
  }


  return (

    <>
      <div>
        <h1 className="text-orange-600 font-black text-center text-6xl">
          Crea Tu Cuenta</h1>
      </div>
       
      <form className="mt-20 md:mt-5 shadow-lg px-5 py-5 rounded-xl bg-green-500 "
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
            placeholder="Escribe tu contraseña"
            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
            value={contrasenia}
            onChange={e => setContrasenia(e.target.value)}
          />
        </div>
        <div>
          <label
            className="uppercase text-gray-600 block text-xl mt-5 font-bold"
            htmlFor='contrasenia2'
          >
            Repetir contraseña
          </label>
          <input
            id='contrasenia2'
            type="password"
            placeholder="Repite tu contraseña"
            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
            value={contrasenia2}
            onChange={e => setContrasenia2(e.target.value)}
          />
        </div>

        <div>
          <label
            className="uppercase text-gray-600 block text-xl font-bold mt-5"
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

        <div className="card m-10  mb-5 mx-5 ">
                <label htmlFor="Departamentos" className='font-bold uppercase text-sm block text-gray-600'>Departamento</label>
                <div className="card-body border rounded border-dark ">
                    <Select placeholder={'Elije una opción'} options={opcionesDepartamento}  onChange={(e) => {
                        setValue(e.value);
                    }} />
                </div>
            </div>
            

            <div className="card m-5 mb-5">
                <label className="font-bold rounded  uppercase block text-sm text-gray-600" htmlFor="Municipio">Municipio</label>
                <div className="card-body border-dark  rounded border">
                    <Select placeholder={'Elije una opción'} className='rounded'options={findMuni(value)} onChange={(e) => {
                        setValueMuni(e.value) 
                    }} />
                </div>
            </div>
            <div className='text-center'>
            <input id='habilita' name='habilita' type='checkbox' onChange={() => setHabilita(!habilita)}/>
              <label>
                <span className="text-center mx-3 text-gray-800 hover:cursor-pointer hover:text-indigo-800" onClick={()=>mostrarTerminos()}>
                Revisa y acepta nuestros términos y condiciones</span>
              </label> 
            </div>
            

        <input
        
          type="submit"
          value="Crear Cuenta"
          disabled ={habilita}
          className="bg-orange-600 w-full py-3 px-10  
                      rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer
                     hover:bg-orange-800 md:w-center transition-colors"
        />
      </form>
      {msg && <Alerta alerta={alerta}/>}
      <nav className="mt-10 lg:flex lg:justify-between">
        <Link to="/"
          className="block text-center text-gray-500 hover:cursor-pointer hover:text-indigo-800">
          ¿Ya tienes una cuenta? Inicia Sesión</Link>
      </nav>

    </>
  )
}

export default Registrar