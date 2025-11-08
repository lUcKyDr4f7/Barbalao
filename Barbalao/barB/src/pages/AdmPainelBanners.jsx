import ProdS from "../Components/PSection/prodS"

export default function AdmPainelProdutos(props) {

    return(
        <div /* clasName={syles.Painelcont} */>
            <div /* clasName={syles.PainelPCont} */>
                <h1> 
                {
                    !props.tipo? "Produtos"
                    :
                    props.tipo<0? "Banners"
                    :
                    "Categorias"
                }
                </h1>
                <input type="text" /* clasName={syles.PainelInput} *//>
                <button /* clasName={syles.PaineliFiltro} */>Filtro</button>
                <button /* clasName={syles.PainelNovo} */>+ novo</button>
            </div>
            <div>
                {
                    !props.tipo? 
                        props.produto?
                            props.produtos.map((produto) =>
                                (
                                    <div /* calssNames={styles.PainelProd} */ key={props.produto.id_prod}>
                                        <div /* calssNames={styles.PainelProd} */>
                                            <div /* calssNames={styles.PainelProd} */>
                                                <div /* calssNames={styles.PainelProd} */>
                        
                                                <img
                                                    src={produto.image || 'https://via.placeholder.com/150'}
                                                    alt={produto.name || 'Produto sem nome'}
                                                    onError={(e) => (e.target.src = 'https://via.placeholder.com/150')}
                                                />
                        
                                                </div>
                                                <div /* calssNames={styles.PainelProd} */>
                                                    <h4 /* calssNames={styles.PainelProd} */>{produto.name}</h4>
                                                    <ul /* calssNames={styles.PainelProd} */></ul>
                                                    <h4 className={`${styles.priceWithDescount} ${styles.info}`}>
                                                        R${' '}
                                                        {parseFloat(produto.price || 0)
                                                        .toFixed(2)
                                                        .replace('.', ',')}
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )
                        :
                        <div /* calssNames={styles.PainelSemProd} */>
                            <p>Sem Produto</p>
                        </div>
                    :
                    props.tipo<0? "Banners"
                    :
                    "Categorias"
                }
            </div>
        </div>
    )
}