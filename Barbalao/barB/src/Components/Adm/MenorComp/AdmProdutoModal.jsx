import { Carousel } from 'react-responsive-carousel';
import styles from '../../Css/styles.AdmProdutoModal.module.css';

export default function AdmProdutoModal({produto, setViewProduct}) {
  return (
    <div className={styles.modalBackdrop} onClick={() => setViewProduct(false)}>
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        <Carousel className={styles.carousel} showArrows={false} showThumbs={true} showStatus={false} swipeable={true} showIndicators={false}>
            <div className={styles.imagemC}>
                <img src={produto.imagem}/>
            </div>
            <div className={styles.imagemC}>
                <img src={produto.imagem}/>
            </div>
        </Carousel>
        <div>
          <h1> {produto.nome} </h1>
          <p> {produto.descricao} </p>
          <div className={styles.modalButtons}>
            <button className={styles.editButton}>
              <i class="ri-pencil-line"></i> Editar produto 
            </button>
            <button className={styles.deleteButton}>
              <i class="ri-delete-bin-line"></i> Deletar produto
            </button>
          </div>
        </div>

        <button className={styles.modalClose} onClick={() => setViewProduct(false)}>
          <i class="ri-close-line"></i> 
        </button>
      </div>
    </div>
  )
}