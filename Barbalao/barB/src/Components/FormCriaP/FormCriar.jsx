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

                // Controle de Localstorage apeans enquanto não tiver banco de dados. 
                // Eventualemte sera removido.
                let datas = [] 
                if(!localStorage.getItem("cards")){
                    datas.push(data)
                    submit(datas)
                }else {
                    datas = JSON.parse(localStorage.getItem("cards"))
                    datas.push(data)
                    submit(datas)
                }
                localStorage.setItem("cards", JSON.stringify(datas))
                // ---

                alert("Produto Computado")
            }
            leitor.readAsDataURL(file)
        }
        

    }

    return(
        <>
            <div className={``} onSubmit={handleSub}>
                <form action="">
                    <label htmlFor="nome">Nome: </label>
                    <input type="text" name="nome" id="nome" required/>

                    <label htmlFor="preco">Preco: </label>
                    <input type="number" name="preco" id="preco" min={1.0}/>

                    <label htmlFor="imagem">Imagem: </label>
                    <input type="file" name="imagem" id="imagem" accept="image/*" required/>

                    <button type="submit">Criar</button>
                </form>
            </div>

            <a href="#home" onClick={onClic}><button>Voltar</button></a>
            <button onClick={()=> localStorage.clear()}>Limpar Produtos</button>
        </>
    )
}