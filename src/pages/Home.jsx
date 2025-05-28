import {React, useState} from 'react';

// Componentes
import  FormCodInvitado  from "../components/FormCodInvitado";


const Home = () => {
    const [isInvitadoValido, setIsInvitadoValido] = useState(false)

  return (
    <div>
        {isInvitadoValido ? (<div>j
            j
            j
            j
            j
            j
            j
            j
            j
            Nueva Ventana
            j
            j
            j
            j
            j
            j
            j
            j
            j
            j
            j
            j
            j
            j
            j
            j

            
        </div>):null}
        <FormCodInvitado InvitadoValidate={setIsInvitadoValido}/>
    </div>
  )
}

export default Home;