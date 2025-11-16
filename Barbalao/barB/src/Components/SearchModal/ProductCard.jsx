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
        <h3> R$ {String(produto.preco.toFixed(2)).replace('.', ',')} </h3>
        <div className={styles.productButtons}>
          <button>
            <i class="ri-information-line"></i>  
            Ver detalhes 
          </button>
          <button>
            <i class="ri-shopping-cart-2-line"></i> 
            Adicionar ao carrinho 
          </button>
        </div>
      </div>
    </div>
  )
}