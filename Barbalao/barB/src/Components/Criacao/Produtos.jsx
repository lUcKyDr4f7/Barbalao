import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../Css/styles.CriaProd.module.css'
import styles2 from '../Css/styles.AdmPainel.module.css'
import FormNav from '../Form/FormNav';

export default function CriaProd() {
    const [file, setFile] = useState(null)
    const [fechar, setFechar] = useState(false)

    const handleFileChange = (e) => {
        setFile(e.target.files[0])
    }

    const handleSub = (e) => {
        e.preventDefault()

        
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log("Dados do form:", data); 

        if(file){
            const leitor = new FileReader()
            leitor.onload = (ev) => {

                data.imagem = ev.target.result

                const payload = {
                    nome: data.nome,
                    preco: data.preco,
                    descricao: data.descricao,
                    imagem: data.imagem,
                    categoria: data.categoria,
                    usuario: localStorage.getItem('user')
                }
                
                fetch('https://back-end-barbalao.onrender.com/api/products/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json'},
                    body: JSON.stringify(payload)
                })
                    .then((res) =>{

                        if (!res.ok) {
                            return res.json().then((err) => {
                                throw new Error(err.message || 'Falha ao criar produto');
                            });
                        }
                        return res.json();
                    })
                    .then((json) => {
                        alert(`Produto criado (id: ${json.ID})`)
                        e.target.reset()
                        setFile(null)
                    })
                    .catch((err) => {
                        alert(`Erro: ${err.message}`);
                    })

            }
            leitor.readAsDataURL(file)
        }
        

    }

    if (fechar) {
        return null
    }

    return(
        <>
          <div className={`${styles.background } `}>
            <div className={styles.formContainer}>
                <button className={styles.backButton}
                    onClick={() => setFechar(true)}
                >+</button>
                <h1>NOVO</h1>
                <form className={styles.form} onSubmit={handleSub}>

                    <label className={styles.label} htmlFor="nome">Nome:</label>
                    <input className={styles.input} 
                        type="text" 
                        name="nome" 
                        id="nome" 
                        required 
                    />

                    <label className={styles.label} htmlFor="preco">Preço:</label>
                    <input className={styles.input} 
                        type="number" 
                        name="preco" 
                        id="preco" 
                        min={1.0} 
                        step={0.01}
                    />

                    <label htmlFor="descricao">Descrição: </label>
                    <textarea name="descricao" id="descricao"></textarea>

                    <label className={styles.label} htmlFor="imagem">Imagem:</label>
                    <input className={styles.inputFile} 
                        type="file" 
                        name="imagem" 
                        id="imagem" 
                        accept="image/*"
                        onChange={handleFileChange} 
                        required
                    />
                    
                    <button className={styles.submitButton} type="submit">Criar</button>
                </form>
            </div>
            
            
         </div>
            
        </>
    )
} 
