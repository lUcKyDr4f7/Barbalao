


export default function AdmCateg(categorias, subCateg) {
    const catgeL = categorias || localStorage.getItem("categories")
    const subL = subCateg || localStorage.getItem("subcategories")


    return(
        <div>
            {catgeL.length != 0? 
                catgeL.map( (categ) => {
                    <div key={categ.id_categoria}>
                        <img src={categ.imagem} alt={categ.nome} />
                        <h2>{(categ.nome).slice(0,1).toUpperCase() + (categ.nome).slice(1)}</h2>
                    </div>
                })

                :

                <p>Sem Categorias</p>
            }
        </div>
    )
}