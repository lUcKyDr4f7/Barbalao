import styles from '../../Css/styles.AdmEditProductModal.module.css';
import { z } from 'zod';

export default function AdmEditProductModal({setEditProduct}) {

  function makeProductSchema(categories) {
    return z.object({
      name: z.string()
        .min(3, "O nome deve ter pelo menos 3 caracteres")
        .max(100, "O nome pode ter no máximo 100 caracteres"),

      price: z.string()
        .regex(/^\d+([.,]\d{1,2})?$/, "O preço deve ser um número válido")
        .transform((val) => Number(val.replace(",", ".")))
        .refine((num) => num > 0, "O preço deve ser maior que zero"),

      description: z.string()
        .min(10, "A descrição deve ter pelo menos 10 caracteres"),

      image: z.any()
        .refine((file) => file instanceof File, "A imagem é obrigatória")
        .refine((file) => file.size < 5 * 1024 * 1024,
          "A imagem deve ter no máximo 5MB"
        ),

      category: z.string()
        .refine((val) => categories.includes(val), "Categoria inválida"),
    });
  }

  return (
    <div className={styles.modalBackdrop} onClick={() => setEditProduct(false)}>
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        <div>
          <h1> Editar produto </h1>
          <div className={styles.form}>
            <div>
              <label htmlFor="editProdName"> Nome: </label>
              <input type="name" name="editProdName" id="editProdName" />
            </div>
            <div>
              <label htmlFor="editProdPrice"> Preço: </label>
              <input type="price" name="editProdPrice" id="editProdPrice" />
            </div>
            <div>
              <label htmlFor="editProdDescription"> Descrição: </label>
              <input type="text" name="editProdDescription" id="editProdDescription" />
            </div>
            <div>
              <label htmlFor="editProdImg"> Imagem: </label>
              <input type="text" name="editProdImg" id="editProdImg" />
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