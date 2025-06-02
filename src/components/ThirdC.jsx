import React from 'react';

//componentes
import CarouselFuntion from "./CarouselFuntion";
//Estilos
import './Style.css';

const ThirdC = () => {
  return (
    <div className='Third-Container'>
      <div className='containerbtn-map'>
          <a className='btn-outline-map' type='button' href='https://maps.app.goo.gl/zzSDkv11gX2h7oY18' >VER UBICACIÓN </a>
      </div>
      <CarouselFuntion />
      <div className='containerbtn-song'>
          <a className='btn-outline-song' type='button' >SUGERIR CANCIÓN </a>
      </div>

    </div>
  )
}

export default ThirdC;