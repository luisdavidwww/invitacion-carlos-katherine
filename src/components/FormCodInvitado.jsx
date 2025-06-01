import React from 'react';

// Hooks
import { useForm } from '../hook/useForm';
//Listado de Invitados
import { listInvitados } from '../Data/ListaInvitados';
//Estilos
import './FormCodInvitado.css'

const FormCodInvitado = ({InvitadoValidate, SetInvitado}) => {


    //Estado Inicial del Formulario
    const {codigo, onChange} = useForm({
        codigo:''
    })

    const Invitadosvalidate = (e) => {
        const invitadoEncontrado = listInvitados.find(
          (invitado) => invitado.codigoVerificacion === codigo
        );
      
        if (invitadoEncontrado) {
          SetInvitado(invitadoEncontrado);     // Guarda la información completa
          InvitadoValidate(true);              // Marca como válido
        } else {
          SetInvitado(null);                   // Limpia si no es válido
          InvitadoValidate(false);             // Marca como inválido
        }
      };

  return (
    <div>
        <div className='header-container'>
        <form onSubmit={Invitadosvalidate} className='formInvidatos'>
            <label htmlFor="" className='title-intro' >¡Nos encantaria que seas parte de este día tan especial!</label>
            <span className='title-input' >INGRESÁ TU CÓDIGO PARA CONTINUAR:</span>
            <input 
                type="text" 
                id="codigo"
                placeholder="Código de invitación"
                className='inputCodigo'
                value={codigo}
                onChange={(e) => onChange(e.target.value, 'codigo')}
            />
            <div className='containerbtn'>
                <button className='btn-outline-one' type='button' onClick={Invitadosvalidate}>VER INVITACIÓN</button>
            </div>
        </form>
        
        </div>  
        
    </div>
  )
}

export default FormCodInvitado