import Form from "../Components/Form/Form"
import NavB from "../Components/NavBar/navB"

export default function Login(){
    return <>
          <NavB/>
          <Form inputsRange="2" 
            title="Login" 
            btn="Logar" 
            types={["text", "password"]} 
            placeholders={["Nome", "Senha"]} />
    </>
}