import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import styles from '../../Css/styles.AdmEditProductModal.module.css';
import { z } from 'zod';

export default function AdmEditProductModal({ setEditProduct, produto }) {


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

      image: z.any(),

      category: z.string(),
    });
  }

  const categories = Object.values(JSON.parse(localStorage.getItem("categories")));

  const schema = makeProductSchema(categories)

  const form = useForm({
    resolver: zodResolver(schema),
  });

  async function handleSubmit(data) {

    console.log ("Dados enviados: ", data)

    // const data = {
    //   nome: formData.get("name"),
    //   preco: formData.get("price"),
    //   descricao: formData.get("description"),
    //   imagem: formData.get("image"), // File
    //   categoria: formData.get("category"),
    // };

    data.usuario = localStorage.getItem('id_user');

    // if (!result.success) {
    //   console.log(result.error.flatten().fieldErrors);
    //   return;
    // }

    // console.log("Validação OK:", result.data);

    // try {
    //   const res = await axios.post(`/api/products/atualizar/${produto.id_prod}/`, data);
    //   console.log ("Edit result:", res.data);
    // } catch (e) {
    //   console.log (e);
    // }
  }

  return (
    <div className={styles.modalBackdrop} onClick={() => setEditProduct(false)}>
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        <div>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <h1> Editar produto </h1>
            <div className={styles.form}>
              <div>
                <label htmlFor="editProdName"> Nome: </label>
                <input type="text" name="editProdName" id="editProdName" {...form.register("name")}/>
              </div>
              <div>
                <label htmlFor="editProdPrice"> Preço: </label>
                <input type="text" name="editProdPrice" id="editProdPrice" 
                  onInput={(e) => {
                    let v = e.target.value.replace(/\D/g, "");
                    v = (v / 100).toFixed(2) + "";
                    v = v.replace(".", ",");
                    e.target.value = v;
                  }}
                {...form.register("price")}/>
              </div>
              <div>
                <label htmlFor="editProdDescription"> Descrição: </label>
                <textarea rows="4" name="editProdDescription" id="editProdDescription" {...form.register("description")}/>
              </div>
              <div>
                <label> Imagem: </label>
                <div className={styles.fileInputWrapper}>
                  <input
                    type="file"
                    accept="image/*"
                    {...form.register("image")}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="editProdImg"> Categoria: </label>
                <div className={styles.selectWrapper}>
                  <select {...form.register("category")}>
                    {categories.map((cat) => <option key={cat.id_categoria} value={cat.id_categoria}> {cat.nome} </option>)}
                  </select>
                </div>
              </div>
            </div>
            <div className={styles.modalButtons}>
              <button type="submit" className={styles.editButton} >
                Confirmar
              </button>
              <button onClick={() => setEditProduct(false)} className={styles.deleteButton}>
                Cancelar
              </button>
            </div>
          </form>
        </div>
        <button className={styles.modalClose} onClick={() => setEditProduct(false)}>
          <i class="ri-close-line"></i>
        </button>
      </div>
    </div>
  )
}