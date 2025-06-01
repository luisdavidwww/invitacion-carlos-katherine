import React from 'react';

const InvitadoValido = ({ Invitado }) => {
  return (
    <div className='header-container-two'>
      <h2>{Invitado.nombres}</h2>
      <p>Número de invitados: {Invitado.numInvitados}</p>
    </div>
  );
};

export default InvitadoValido;