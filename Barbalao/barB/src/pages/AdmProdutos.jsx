import AdmProdutoCard from "../Components/Adm/AdmProdutoCard";

export default function AdmProdutos({produtos}){

    console.log(produtos);

    return(
        <div>
            <h1> Produtos </h1>
            {produtos.map((produto) => <AdmProdutoCard key={produto.id_prod} produto={produto}/>)}
        </div>
    )
}