
import React from 'react';

const Register = () => {
  return (
    <div className="bg-[url('./src/assets/fondo.jpg')] bg-cover bg-center h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col h-screen items-center justify-center">
          <h1 className="text-white text-5xl font-bold">Regístrate</h1>
          <form className="mt-8">
            <div className="flex flex-col">
              <input className="border-[1px] border-white bg-white/5 backdrop-blur-sm p-2 rounded-md mb-4" placeholder="example@gmail.com" />
            </div>
            <div className="flex flex-col">
              <input className="border-[1px] border-white bg-white/5 backdrop-blur-sm  p-2 rounded-md mb-5" placeholder="Pon aquí tu contraseña.." type="password" />
            </div>
            <div className="flex flex-col">
              <input className="border-[1px] border-white bg-white/5 backdrop-blur-sm  p-2 rounded-md mb-5" placeholder="Repite tu contraseña..." type="password" />
            </div>
            <button className="bg-[#7EBAFB] text-[#14121C] font-bold px-[160px] py-2 rounded-md">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
