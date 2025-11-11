import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import FormNav from "../Form/FormNav"

export default function CriaCateg() {
    const [categoriasPrincipais, setCategoriasPrincipais] = useState([])
    const [file, setFile] = useState(null)
    const [ehSubcategoria, setEhSubcategoria] = useState(false)
    const [categoriaPai, setCategoriaPai] = useState("")

    
    useEffect(() => {
        fetch('https://back-end-barbalao.onrender.com/api/categoria/principais/')
            .then(res => res.json())
            .then(data => {
                setCategoriasPrincipais(data)
            })
            .catch(err => {
                console.error('Erro ao carregar categorias:', err)
            })
    }, [])

    const handleFileChange = (e) => {
        setFile(e.target.files[0])
    }

    const handleSub = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())
        
        console.log("Dados do form:", data)

        if (file) {
            const leitor = new FileReader()

            leitor.onload = (ev) => {
                
                const payload = {
                    nome: data.nome,
                    imagem: ev.target.result,
                    usuario: localStorage.getItem('user'),
                    sub: ehSubcategoria && categoriaPai ? parseInt(categoriaPai) : null
                }

                console.log("Payload enviado:", payload)

                fetch('https://back-end-barbalao.onrender.com/api/categoria/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json'},
                    body: JSON.stringify(payload)
                })
                    .then((res) =>{
                        if (!res.ok) {
                            return res.json().then((err) => {
                                throw new Error(err.message || 'Falha ao criar categoria')
                            })
                        }
                        return res.json()
                    })
                    .then((json) => {
                        alert(`Categoria criada com sucesso!`)
                        e.target.reset()
                        setFile(null)
                        setEhSubcategoria(false)
                        setCategoriaPai("")
                    })
                    .catch((err) => {
                        alert(`Erro: ${err.message}`)
                    })
            }
            
            leitor.readAsDataURL(file)
        } else {
            alert("Selecione uma imagem")
        }
    }

    return(
        <>
            <div /*className={styles.background}*/>

                <div /*className={styles.formContainer}*/>
                    <form onSubmit={handleSub}>
                        <label htmlFor="nome">Nome da Categoria:</label>
                        <input 
                            type="text" 
                            name="nome" 
                            id="nome" 
                            required 
                        />

                        <label htmlFor="imagem">Imagem:</label>
                        <input 
                            type="file" 
                            name="imagem" 
                            id="imagem" 
                            accept="image/*" 
                            onChange={handleFileChange}
                            required
                        />

                        <div style={{ margin: '15px 0' }}>
                            <label>
                                <input 
                                    type="checkbox" 
                                    checked={ehSubcategoria}
                                    onChange={(e) => setEhSubcategoria(e.target.checked)}
                                />
                                Esta é uma subcategoria
                            </label>
                        </div>

                        {/* Select para escolher categoria pai */}
                        {ehSubcategoria && (
                            <div>
                                <label htmlFor="categoriaPai">Categoria Pai:</label>
                                <select 
                                    name="categoriaPai" 
                                    id="categoriaPai"
                                    value={categoriaPai}
                                    onChange={(e) => setCategoriaPai(e.target.value)}
                                    required={ehSubcategoria}
                                >
                                    <option value="">Selecione uma categoria</option>
                                    {categoriasPrincipais.map(categoria => (
                                        <option key={categoria.id_categoria} value={categoria.id_categoria}>
                                            {categoria.nome}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}

                        <button type="submit">Criar Categoria</button>
                    </form>
                </div>
            </div>
        </>
    )
}