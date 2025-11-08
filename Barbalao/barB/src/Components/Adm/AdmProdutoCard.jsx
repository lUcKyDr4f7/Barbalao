import styles from '../Css/styles.AdmProdutoCard.module.css'

export default function AdmProdutoCard({produto}) {
    return(
        <div>
            <img src={produto.image} alt={produto.name} />
            <h2>{produto.name}</h2>
        </div>
    )
}