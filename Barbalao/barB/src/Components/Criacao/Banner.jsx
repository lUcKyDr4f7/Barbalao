import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../Css/styles.CriaT.module.css'
import styles2 from '../Css/styles.AdmPainel.module.css'
import FormNav from '../Form/FormNav';

export default function CriaBanner() {
    const [files, setFiles] = useState([])
    const [fechar, setFechar] = useState(false)


    const handleSub = (e) => {
        e.preventDefault()

        
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log("Dados do form:", data); 

        if(files){
            const leitor = new FileReader()
            leitor.onload = (ev) => {

                data.imagem = ev.target.result

                const payload = {
                    titulo: data.titulo,
                    imagem: data.imagem,
                    sub_titulo: data.subtitulo,
                    usuario: localStorage.getItem('id_user')
                }
                
                fetch('https://back-end-barbalao.onrender.com/api/banner/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json'},
                    body: JSON.stringify(payload)
                })
                    .then((res) =>{

                        if (!res.ok) {
                            return res.json().then((err) => {
                                throw new Error(err.message || 'Falha ao criar banner');
                            });
                        }
                        return res.json();
                    })
                    .then((json) => {
                        alert(`Banner criado (id: ${json.ID})`)
                        e.target.reset()
                        setFiles([])
                    })
                    .catch((err) => {
                        alert(`Erro: ${err.message}`);
                    })

            }
            
            leitor.readAsDataURL(files)
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
                <h1>Banner</h1>
                <form className={styles.form} onSubmit={handleSub}>

                    <label className={styles.label} htmlFor="titulo">Título:</label>
                    <input className={styles.input} 
                        type="text" 
                        name="titulo" 
                        id="nome" 
                        required 
                    />

                    <label className={styles.label} htmlFor="subtitulo">Subtitulo:</label>
                    <input className={styles.input} 
                        type="text" 
                        name="subtitulo" 
                        id="subtitulo"
                    />

                    <label className={styles.label} htmlFor="imagem">Imagens :</label>
                    <input className={styles.inputFile} 
                        type="file" 
                        name="imagem" 
                        id="imagem" 
                        accept="image/*" 
                        required
                    />
                    
                    <button className={styles.submitButton} type="submit">Criar</button>
                </form>
            </div>
            
            
         </div>
            
        </>
    )
} 
