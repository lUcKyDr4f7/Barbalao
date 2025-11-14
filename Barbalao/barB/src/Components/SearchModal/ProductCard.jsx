import styles from '../Css/styles.productCard.module.css';

export default function ProductCard({ produto }) {
  return (
    <div className={styles.productCard}>
      <div>
        <img src={produto.imagem} />
      </div>
      <div>
        <h2>
          {produto.nome}
        </h2>
        <p> R$ {produto.preco} </p>
      </div>
    </div>
  )
}