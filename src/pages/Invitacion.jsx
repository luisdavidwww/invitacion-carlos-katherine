import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

//componentes
import Second from "../components/Second";
import ThirdC from "../components/ThirdC";
import Forth from "../components/Forth";

import '../components/Style.css'


const Invitacion = ({}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const invitado = location.state?.invitado;
  
    // Si no hay datos, redirigir o mostrar un mensaje
    if (!invitado) {
      return (
        <div>
          <p>No se encontró información del invitado.</p>
          <button onClick={() => navigate('/')}>Volver al inicio</button>
        </div>
      );
    }
  
    return (
        <>
            <div className='header-container-main'></div>
            <Second />
            <ThirdC />
            <Forth />
        </>
      
    );
  };
export default Invitacion