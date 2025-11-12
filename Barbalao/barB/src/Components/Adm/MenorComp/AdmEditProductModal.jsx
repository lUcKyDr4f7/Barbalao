import styles from '../../Css/styles.AdmEditProductModal.module.css';

export default function AdmEditProductModal({setEditProduct}) {

  return (
    <div className={styles.modalBackdrop} onClick={() => setEditProduct(false)}>
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        <div>
          <h1> Editar produto </h1>
          <div className={styles.form}>
            <div>
              <label htmlFor="editProdName"> Nome: </label>
              <input type="text" name="editProdName" id="editProdName" />
            </div>
            <div>
              <label htmlFor="editProdName"> Preço: </label>
              <input type="text" name="editProdName" id="editProdName" />
            </div>
            <div>
              <label htmlFor="editProdName"> Descrição: </label>
              <input type="text" name="editProdName" id="editProdName" />
            </div>
            <div>
              <label htmlFor="editProdName"> Nome: </label>
              <input type="text" name="editProdName" id="editProdName" />
            </div>
          </div>
          <div className={styles.modalButtons}>
            <button className={styles.editButton} >
              Confirmar 
            </button>
            <button className={styles.deleteButton}>
              Cancelar
            </button>
          </div>
        </div>
        <button className={styles.modalClose} onClick={() => setEditProduct(false)}>
          <i class="ri-close-line"></i> 
        </button>
      </div>
    </div>
  )
}