import { API_URL } from '../../envVariables';
import styles from '../Css/styles.formCriar.module.css'

export default function FormCriar({produtcs}) {

    const handleSub = (e) => {
        e.preventDefault()

        // Tranforma os valores e names dos inputs em objeto, sendo eles valor e chave respectivamente.
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log("Dados do form:", data); 
        // ---

        // Pega o primeiro arquivo, o files do input cria sempre uma fileList, mesmo que só se tenha enviado um 
        // arquivo, por isso o file[0]
        const file = e.target.imagem.files[0]

        if(file){
            const leitor = new FileReader()
            leitor.onload = (ev) => {

                data.imagem = ev.target.result

                const payload = {
                    nome: data.nome,
                    imagem: data.imagem,
                    preco: data.preco,
                    descricao: data.descricao
                }
                
                fetch(`${API_URL}/api/products/`, {
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
                    })
                    .catch((err) => {
                        alert(`Erro: ${err.message}`);
                    })

            }
            leitor.readAsDataURL(file)
        }
        

    }

    return(
        <>
            <div className={styles.formContainer}>
                <h1>Criar Produto</h1>
                <form className={styles.form} onSubmit={handleSub}>
                    <label className={styles.label} htmlFor="nome">Nome:</label>
                    <input className={styles.input} type="text" name="nome" id="nome" required />

                    <label className={styles.label} htmlFor="preco">Preço:</label>
                    <input className={styles.input} type="number" name="preco" id="preco" min={1.0} />

                    <label htmlFor="descricao">Descrição: </label>
                    <textarea name="descricao" id="descricao"></textarea>

                    <label className={styles.label} htmlFor="imagem">Imagem:</label>
                    <input className={styles.inputFile} 
                        type="file" 
                        name="imagem" 
                        id="imagem" 
                        accept="image/*" 
                        required/>
                    
                    <button className={styles.submitButton} type="submit">Criar</button>
                </form>
                <a href="/" >
                    <button className={styles.backButton}>Voltar</button>
                </a>
            </div>
            
            
        </>
    )
    // return(
    //     <div>
    //         <div>
    //             <input  />
    //         </div>

            

    //     </div>
    // )
}
