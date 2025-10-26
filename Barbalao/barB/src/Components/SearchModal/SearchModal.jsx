import styles from '../Css/styles.searchModal.module.css'

export default function SearchModal({setSearchModal}) {
  return (
    <div className={styles.screenBlur}>
      <div className={styles.modalCard}>
        <div>
          <h1> Produtos encontrados </h1>
        </div>
        <button onClick={() => setSearchModal(false)}>
          <i class="ri-close-line"></i>
        </button>
      </div>
    </div>
  )
}