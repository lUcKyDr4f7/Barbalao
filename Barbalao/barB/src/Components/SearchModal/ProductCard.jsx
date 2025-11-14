import styles from '../Css/styles.productCard.module.css';

export default function ProductCard({ produto }) {
  return (
    <div className={styles.productCard}>
      <div>
        <img src={produto.image} />
      </div>
      <div>
        <h2>
          {produto.name}
        </h2>
        <p> R$ {produto.price} </p>
      </div>
    </div>
  )
}