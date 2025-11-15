import styles from '../Css/styles.AdmEditProductModal.module.css';

export default function CloseBtn(props) {
    return(
        <button className={styles.modalClose} onClick={() => props.onClick(false)}>
          <i class="ri-close-line"></i> 
        </button>
    )
}