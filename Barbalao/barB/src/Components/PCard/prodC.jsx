export default function ProdC({imagem, nome, preco, promoPreco}) {
    return (
         <>
            <div className={styles.productCard}>
                <div className={styles.productImg}>
                    <img src={imagem} alt="" />
                </div>
                <div className={styles.productInfo}>
                    <h4 className={styles.info}>{nome}</h4>

                    <ul className={`${styles.productStars} ${styles.info}`}></ul>
                    <div className={`${styles.productOptions} ${styles.info}`}>
                        <div className={`${styles.option} ${styles.info}`}>
                            <p>Branco / Verde</p>
                        </div>
                        <div className={`${styles.option} ${styles.info}`}>
                            <p><span>9</span> Tamanhos</p>
                        </div>
                    </div>
                    <h5 className={`${styles.normalPrice} ${styles.info}`}><s>{preco}</s></h5>
                    <h4 className={`${styles.priceWithDescount} ${styles.info}`}>{promoPreco}</h4>
                    <i className={`ri-shopping-cart-2-fill ${styles.shopIcon}`}></i>
                </div>
            </div>
        
        
        
        </>
    )
}