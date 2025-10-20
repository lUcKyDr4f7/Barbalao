export default function FormCriar({onClic, submit}) {

    const handleSub = (e) => {
        e.preventDefault()

        // Tranforma os valores e names dos inputs em objeto, sendo eles valor e chave respectivamente.
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
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
                    preco: data.preco
                }
                
                fetch('http://localhost:3001/api/products', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
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
                        alert(`Produto criado (id: ${json.id})`)
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
            <div className={``} >
                <form action="" onSubmit={handleSub}>
                    <label htmlFor="nome">Nome: </label>
                    <input type="text" name="nome" id="nome" required/>

                    <label htmlFor="preco">Preco: </label>
                    <input type="number" name="preco" id="preco" min={1.0}/>

                    <label htmlFor="imagem">Imagem: </label>
                    <input type="file" name="imagem" id="imagem" accept="image/*" required/>

                    <button type="submit">Criar</button>
                </form>
            </div>

            <a href="/" onClick={onClic}><button>Voltar</button></a>
            
        </>
    )
}