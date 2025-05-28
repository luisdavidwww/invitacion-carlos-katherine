import React from 'react';

// Hooks
import { useForm } from '../hook/useForm';
//Listado de Invitados
import { listInvitados } from '../Data/ListaInvitados';

const FormCodInvitado = ({InvitadoValidate}) => {


    //Estado Inicial del Formulario
    const {codigo, onChange} = useForm({
        codigo:''
    })

    const Invitadosvalidate = (e) => {
        const codigoEsValido = listInvitados.some(
            (invitados) => invitados.codigoVerificacion === codigo
          );

        if(codigoEsValido) {
            InvitadoValidate(true);
            window.alert('¡Código correcto!'); // Alerta emergente
        } else {
            InvitadoValidate(false);
            window.alert('¡Código incorrecto!'); // Alerta emergente
        }
      };


  return (
    <div>
        <form onSubmit={Invitadosvalidate}>
            <label htmlFor="">INGRESÁ TU CÓDIGO PARA CONTINUAR:</label>
            <input 
                type="text" 
                id="codigo"
                placeholder="Ingrese su correo electrónico"
                value={codigo}
                onChange={(e) => onChange(e.target.value, 'codigo')}
            />
            <button type='button' onClick={Invitadosvalidate}>VER INVITACIÓN</button>
        </form>
    </div>
  )
}

export default FormCodInvitado