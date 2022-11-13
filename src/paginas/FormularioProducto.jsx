import React from 'react'
import { FileUpload } from 'primereact/fileupload';


const FormularioProducto = () => {
  
  return (

    <>
      <section class="h-screen">

        <div class="px-6 h-full text-gray-800">
          <div class="flex space-x-3">
            <div>
              <img 
                src="src/assets/TryIt.png"
                class="w-full rounded-xl "
                alt="Sample image"
              />
            </div>

            <div class="">


              <form>

                <div
                  className="flex text-center"
                >
                  <p className="text-center font-semibold mx-4 mb-0">Registra Un Producto</p>
                </div>


                <div class="grid grid-cols-2 gap-4">

                  <div class="mb-6">
                    <input
                      type="text"
                      className="form-control block  px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id=""
                      //value={correoElectronico}
                      //onChange={e => setCorreoElectronico(e.target.value)}
                      placeholder="Nombre"
                    />
                  </div>

                  <div class="mb-6">
                    <input
                      type="text"
                      className="form-control block  px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id=""
                      //value={correoElectronico}
                      //onChange={e => setCorreoElectronico(e.target.value)}
                      placeholder="Precio del producto"
                    />
                  </div>
                </div>

                <div class="mb-6">
                  <div class="grid grid-cols-2 gap-4">

                   

                    <div class="mb-3 w-96">
                   <label for="formFileLg" class="form-label inline-block mb-2 text-gray-700">Seleccione imagenes</label>

                    <FileUpload name="demo" url="./upload" mode="basic" multiple accept="image/*" />
                    </div>

                    <select className=" form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    >
                      <option selected>Seleccione una categoria </option>
                      <option value="1">Tecnologia</option>
                      <option value="2">Ropa</option>
                      <option value="3">Accesorios</option>
                    </select>
                  </div>
                </div>

  

                <div class="form-group mb-6">
                  <textarea className=" form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlTextarea13"
                    //value={correoElectronico}
                    //onChange={e => setCorreoElectronico(e.target.value)}
                    rows="3"
                    placeholder="Descripción"
                  ></textarea>
                </div>



                <div class="text-center lg:text-left">
                  <button
                    type="button"
                    class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Registrar
                  </button>
                  <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                    Volver 
                    <a
                      href="/"
                      class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                    >A Pagina Principal</a
                    >
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default FormularioProducto