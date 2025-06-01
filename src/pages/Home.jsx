import {React, useState} from 'react';

// Componentes
import  FormCodInvitado  from "../components/FormCodInvitado";
import  InvitadoValido  from "../components/InvitadoValido";


const Home = () => {
    const [isInvitadoValido, setIsInvitadoValido] = useState(false);
    const [invitado, setInvitado] = useState([]);

  return (
    <div>
        {isInvitadoValido ? (<InvitadoValido Invitado={invitado}/>):(<FormCodInvitado InvitadoValidate={setIsInvitadoValido} SetInvitado={setInvitado}/>)}
    </div>
  )
}

export default Home;