import { useState } from 'react';
import styles from '../Components/Css/styles.AdmCateg.module.css';

export default function AdmCateg({ categorias, subCateg }) {
    const catgeL = categorias || JSON.parse(localStorage.getItem("categories")) || [];
    const subL = subCateg || JSON.parse(localStorage.getItem("subcategories")) || [];
    
    const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

    // Agrupar subcategorias por categoria pai
    const subcategoriasPorCategoria = subL.reduce((acc, sub) => {
        const paiId = sub.sub_categoria_de || sub.categoria_id_categoria;
        if (!acc[paiId]) {
            acc[paiId] = [];
        }
        acc[paiId].push(sub);
        return acc;
    }, {});

    return (
        <div className={styles.container}>
            <h1 className={styles.tituloPrincipal}>Gerenciar Categorias</h1>
            
            {/* Lista de Categorias Principais */}
            <div className={styles.secao}>
                <h2 className={styles.tituloSecao}>Categorias Principais</h2>
                
                {catgeL.length !== 0 ? (
                    <div className={styles.categoriasGrid}>
                        {catgeL.map((categ) => (
                            <div 
                                key={categ.id_categoria}
                                className={`${styles.categoriaCard} ${
                                    categoriaSelecionada === categ.id_categoria ? styles.categoriaSelecionada : ''
                                }`}
                                onClick={() => setCategoriaSelecionada(
                                    categoriaSelecionada === categ.id_categoria ? null : categ.id_categoria
                                )}
                            >
                                <div className={styles.categoriaHeader}>
                                    {categ.imagem && (
                                        <img 
                                            src={categ.imagem} 
                                            alt={categ.nome} 
                                            className={styles.categoriaImagem}
                                        />
                                    )}
                                    <div className={styles.categoriaInfo}>
                                        <h3 className={styles.categoriaNome}>
                                            {categ.nome.charAt(0).toUpperCase() + categ.nome.slice(1)}
                                        </h3>
                                        <p className={styles.categoriaContador}>
                                            {subcategoriasPorCategoria[categ.id_categoria]?.length || 0} subcategorias
                                        </p>
                                    </div>
                                    <button className={styles.botaoExpandir}>
                                        {categoriaSelecionada === categ.id_categoria ? '▲' : '▼'}
                                    </button>
                                </div>

                                {/* Subcategorias */}
                                {categoriaSelecionada === categ.id_categoria && 
                                 subcategoriasPorCategoria[categ.id_categoria] && (
                                    <div className={styles.subcategoriasContainer}>
                                        <h4 className={styles.subcategoriasTitulo}>Subcategorias:</h4>
                                        <div className={styles.subcategoriasLista}>
                                            {subcategoriasPorCategoria[categ.id_categoria].map((sub) => (
                                                <div 
                                                    key={sub.id_categoria}
                                                    className={styles.subcategoriaItem}
                                                >
                                                    <span className={styles.subcategoriaNome}>
                                                        {sub.nome.charAt(0).toUpperCase() + sub.nome.slice(1)}
                                                    </span>
                                                    <div className={styles.subcategoriaAcoes}>
                                                        <button className={styles.botaoEditar}>
                                                            Editar
                                                        </button>
                                                        <button className={styles.botaoExcluir}>
                                                            Excluir
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className={styles.semDados}>
                        Nenhuma categoria encontrada
                    </div>
                )}
            </div>

            {/* Lista Completa de Subcategorias */}
            <div className={styles.secao}>
                <h2 className={styles.tituloSecao}>Todas as Subcategorias</h2>
                {subL.length !== 0 ? (
                    <div className={styles.subcategoriasCompletas}>
                        <div className={styles.subcategoriasGrid}>
                            {subL.map((sub) => {
                                const categoriaPai = catgeL.find(
                                    cat => cat.id_categoria === (sub.sub_categoria_de || sub.categoria_id_categoria)
                                );
                                
                                return (
                                    <div key={sub.id_categoria} className={styles.subcategoriaCard}>
                                        <div className={styles.subcategoriaContent}>
                                            <div>
                                                <p className={styles.subcategoriaNomeCompleta}>
                                                    {sub.nome.charAt(0).toUpperCase() + sub.nome.slice(1)}
                                                </p>
                                                {categoriaPai && (
                                                    <p className={styles.subcategoriaPai}>
                                                        Pertence a: {categoriaPai.nome}
                                                    </p>
                                                )}
                                            </div>
                                            <div className={styles.subcategoriaAcoesCompleta}>
                                                <button className={styles.botaoEditar}>
                                                    Editar
                                                </button>
                                                <button className={styles.botaoExcluir}>
                                                    Excluir
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ) : (
                    <div className={styles.semDados}>
                        Nenhuma subcategoria encontrada
                    </div>
                )}
            </div>
        </div>
    );
}