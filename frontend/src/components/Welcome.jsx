import React from 'react';

const Welcome = () => {
  return (
    <div className="bg-[url('./src/assets/landing-page.png')] bg-cover bg-center h-screen">
      <div className='container mx-auto'>
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-white text-[80px] font-bold">Bienvenido a</h1>
          <h2 className="text-[#7EBAFB] text-[60px] font-bold">ChillRoom</h2>
          <p className="text-slate-400 text-sm">La transmisión del conocimiento se transforma en una experiencia apasionante.</p>

          <div className='pt-8'>
            <a className="border-[3px] border-white bg-white/5 backdrop-blur-sm text-sm rounded-full font-medium text-white px-12 py-2 hover:bg-white hover:text-black transition-colors flex items-center" href="#">
              Explora, aprende y conecta  
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Welcome;
