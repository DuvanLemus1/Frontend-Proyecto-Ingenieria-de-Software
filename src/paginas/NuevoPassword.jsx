

const NuevoPassword = () => {
  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl text-center">
          Reestablece Tu Contraseña</h1>
      </div>

      <div>

        <form
          className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white "
        // onSubmit={handleSubmit}
        >
         <div>
              <label
                className="uppercase text-gray-600 block text-xl font-bold"
                htmlFor="password"
              >
              Nueva Contraseña
              </label>
              <input
                id="password"
                type="password"
                placeholder="Escriba su nueva contraseña"
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                //value={password}
                //onChange={e => setPassword(e.target.value)}
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
    </>

  )
}

export default NuevoPassword