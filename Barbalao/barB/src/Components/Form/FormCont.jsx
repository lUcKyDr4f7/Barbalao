import Form from "./FormLogin"
import style from '../Css/styles.formContQ.module.css'
import { useState } from "react";
import axios from "axios";
import { useNavigate  } from "react-router-dom";

export default function Container(){
    const [formValues, setFormValues] = useState(["", ""]);
    const [btnLink, setBtnLink] = useState("/")
    const navigate = useNavigate()
    
    function handleInputChange (index, value){
        const newValues = [...formValues];
        newValues[index] = value;
        setFormValues(newValues);
    };


     async function handleSubmit(){
        console.log(formValues); 
        try {
            const response = await axios.post('http://localhost:3001/api/login', {
                nome: formValues[0],
                senha: formValues[1]
            })

            const newRoute = response.data.route 
            setBtnLink(newRoute)
            navigate(newRoute)
            console.log("Resposta do servidor: ", response.data.message)
        } catch (error){
            setBtnLink(data.route)
            console.log("Erro ao buscar dados: ", error)
        }

        
    }
    
    return<>
        <nav className={style.formNav}>
          <a className={style.formLink} href="/">início</a>
          <a className={style.formLink} href="/about-us">Sobre nós</a>
        </nav>
            <div className={style.cont}>
                <div className={style.textCont}>
                    <h1 className={style.contTitle}>Bem Vindo!</h1>
                    <h4 className={style.contSubtitle}>Quais mudanças serão feitas hoje?</h4>
                </div>
                 <Form inputsRange="2" 
                        title="Login" 
                        btn="Logar" 
                        types={["text", "password"]} 
                        placeholders={["Nome", "Senha"]}
                        values={formValues}
                        onInputChange={handleInputChange}
                        click={handleSubmit}
                        />
            </div>
    </>
}
