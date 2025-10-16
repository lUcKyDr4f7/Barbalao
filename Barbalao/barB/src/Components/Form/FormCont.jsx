import Form from "./FormLogin"
import style from '../Css/styles.formContQ.module.css'
import { useState } from "react";
import axios from "axios";

export default function Container(){
    const [formValues, setFormValues] = useState(["", ""]);
    const [btnLink, setBtnLink] = useState("")
    
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

            setBtnLink(data.route)
            console.log("Resposta do servidor: ", response.data)
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
                        btnlink={btnLink}
                        aLink='/'
                        values={formValues}
                        onInputChange={handleInputChange}
                        click={handleSubmit}
                        />
            </div>
    </>
}
