import styles from '../Css/styles.AdmProdutoCard.module.css'

export default function AdmProdutoCard({produto}) {
    return(
        <div className={styles.productsDiv}>
            <div className={styles.productCard}>
                <div className={styles.productImg}>
                <img
                    src={produto.image || 'https://via.placeholder.com/150'}
                    alt={produto.name || 'Produto sem nome'}
                    onError={(e) => (e.target.src = 'https://via.placeholder.com/150')}
                />
                </div>
                <div className={styles.productInfo}>
                <h4 className={styles.info}>{produto.name}</h4>
                <ul className={`${styles.productStars} ${styles.info}`}></ul>
                <h4 className={`${styles.priceWithDescount} ${styles.info}`}>
                    R${' '}
                    {parseFloat(produto.price || 0)
                    .toFixed(2)
                    .replace('.', ',')}
                </h4>
                <i className={`ri-shopping-cart-2-fill ${styles.shopIcon}`}></i>
                </div>
            </div>
        </div>
    )
}