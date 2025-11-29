import styles from '../Css/styles.productCard.module.css';

export default function ProductCard({ produto, setSearchModal, setSelectedProduct }) {

  function handleViewDetails() {
    setSelectedProduct(produto);
    setSearchModal(false);
  }
  
  function addCart(idProd) {
      let cart = JSON.parse(localStorage.getItem("cart"))
      if(!cart) {
          cart = {};
      }
      if(cart[idProd]) {
          cart[idProd] += 1;
      } else {
          cart[idProd] = 1;
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      setSearchModal(false);
  }

  return (
    <div className={styles.productCard}>
      <img src={produto.imagem} alt={produto.nome}/>
      <div className={styles.productInfo}>
        <h2>{produto.nome}</h2>
        <h3>R$ {String(produto.preco.toFixed(2)).replace('.', ',')}</h3>
        <div className={styles.productButtons}>
          <button onClick={handleViewDetails}>
            <i class="ri-information-line"></i>  
            Ver detalhes 
          </button>
          <button onClick={() => addCart(produto.id_prod)}>
            <i class="ri-shopping-cart-2-line"></i> 
            Adicionar ao carrinho 
          </button>
        </div>
      </div>
    </div>
  )
}
