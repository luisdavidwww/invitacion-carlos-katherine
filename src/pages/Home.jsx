import {React, useState} from 'react';

// Componentes
import  FormCodInvitado  from "../components/FormCodInvitado";


const Home = () => {
    const [isInvitadoValido, setIsInvitadoValido] = useState(false)

  return (
    <div>
        {isInvitadoValido ? (<div>componente con imagen</div>):null}
        <FormCodInvitado InvitadoValidate={setIsInvitadoValido}/>
    </div>
  )
}

export default Home;