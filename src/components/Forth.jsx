import React from 'react';



//componentes
import CarouselFuntion from "./CarouselFuntion";

//Estilos
import './Style.css';

const Forth = () => {
  return (
    <div className='Forth-Container'>
      <div className='containerbtn-photo'>
          <a className='btn-outline-photo' type='button' >SUBIR FOTOS </a>
      </div>

      <div className='containerbtn-Bank'>
          <a className='btn-outline-Bank' type='button' >VER DATOS BANCARIOS </a>
      </div>

      <div className='containerbtn-Ca'>
          <a className='btn-outline-Ca' type='button' >CONFIRMAR ASISTENCIA </a>
      </div>

        <CarouselFuntion condition={"algo"}/>
     
    </div>
  )
}

export default Forth;