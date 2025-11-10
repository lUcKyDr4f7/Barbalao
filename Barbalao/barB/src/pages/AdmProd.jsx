import styles from '../Components/Css/styles.AdmProd.module.css';

export default function AdmProd({ produtos }) {
  return (
    <div className={styles.produtosGrid}>
      {produtos?.map((produto) => (
        <div className={styles.produtoCard} key={produto.id}>
          <div className={styles.produtoImagem}>
            <img
              src={produto.image || 'https://via.placeholder.com/150'}
              alt={produto.name || 'Produto sem nome'}
              onError={(e) => (e.target.src = 'https://via.placeholder.com/150')}
            />
          </div>

          <div className={styles.produtoInfo}>
            <h4 className={styles.produtoNome}>{produto.name}</h4>
            <h4 className={styles.produtoPreco}>
              R${parseFloat(produto.price || 0).toFixed(2).replace('.', ',')}
            </h4>
            <i className={`ri-shopping-cart-2-fill ${styles.produtoIconeCarrinho}`}></i>
          </div>
        </div>
      ))}
    </div>
  );
}
