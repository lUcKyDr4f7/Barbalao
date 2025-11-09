import { useState } from "react";
import { useAuth } from "../../Routes/AuthContext";
import Form from "./FormLogin"
import FormNav from "./FormNav";
import style from '../Css/styles.formContQ.module.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.withCredentials = true

export default function Container(){
    const [formValues, setFormValues] = useState(["", ""]);
    const [errorMessage, setErrorMessage] = useState("")
    const {authenticated, setAuthenticated} = useAuth()
    const navigate = useNavigate()
    
    function handleInputChange (index, value){
        const newValues = [...formValues];
        newValues[index] = value;
        setFormValues(newValues);
    };


     async function handleSubmit(){
        console.log(formValues); 
        try {
            const response = await axios.post('https://back-end-barbalao-upgw.onrender.com/api/login/', {
                nome: formValues[0],
                senha: formValues[1]
            },
            { withCredentials: true })

            if (response.data.message == "OK") {
                navigate("/adm")
                setAuthenticated(true)
                setErrorMessage("")
            } else {
                setErrorMessage(response.data.message)
                navigate("/login")
            }

            console.log("Resposta do servidor: ", response.data.message)

        } catch (error){
            navigate("/login")
            setErrorMessage("Erro ao enviar dados, tente novamente")
            console.log("Erro ao buscar dados: ", error)
        }

        
    }
    
    return<>
            <FormNav />
            <div className={style.cont}>
                 <Form 
                        inputsRange="2" 
                        title="Login" 
                        btn="Logar" 
                        types={["text", "password"]} 
                        placeholders={["Nome", "Senha"]}
                        aContent={errorMessage}
                        values={formValues}
                        onInputChange={handleInputChange}
                        click={handleSubmit}
                        />
            </div>
    </>
}
