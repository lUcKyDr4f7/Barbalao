import { useState, useEffect } from 'react';
import styles from '../Components/Css/styles.AdmCateg.module.css';

export default function AdmCateg({ categorias, subCateg }) {
    const [catgeL, setCategL] = useState(categorias || JSON.parse(localStorage.getItem("categories")) || []);
    const [subL, setSubL] = useState(subCateg || JSON.parse(localStorage.getItem("subcategories")) || []);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
    const [carregando, setCarregando] = useState(false)

    useEffect(() => {
        if (categorias) {
            setCategL(categorias);
        }
    }, [categorias]);

    useEffect(() => {
        if (subCateg) {
            setSubL(subCateg);
        }
    }, [subCateg]);

    const deletarItem = async (id, tipo) => {

        setCarregando(true)
        try {
            const response = await fetch(`http://localhost:5000/api/categoria/remove/${id}`, {
                method: 'DELETE',
                credentials: 'include'
            });

            const data = await response.json();

            if (response.ok) {
                if (tipo === 'categoria') {
                    const novasCategorias = categoriasState.filter(cat => cat.id_categoria !== id);
                    const novasSubcategorias = subcategoriasState.filter(sub => 
                        sub.sub_categoria_de !== id && sub.categoria_id_categoria !== id
                    );
                    
                    setCategL(novasCategorias);
                    setSubL(novasSubcategorias);
                    localStorage.setItem("categories", JSON.stringify(novasCategorias));
                    localStorage.setItem("subcategories", JSON.stringify(novasSubcategorias));
                } else {
                    const novasSubcategorias = subcategoriasState.filter(sub => sub.id_categoria !== id);
                    setSubL(novasSubcategorias);
                    localStorage.setItem("subcategories", JSON.stringify(novasSubcategorias));
                }
                
                alert(`${tipo === 'categoria' ? 'Categoria' : 'Subcategoria'} excluída com sucesso!`);
            } else {
                alert(`Erro ao excluir: ${data.message}`);
            }
        } catch (error) {
            console.error('Erro ao excluir:', error);
            alert('Erro ao excluir. Tente novamente.');
        } finally {
            setCarregando(false);
        }
    };



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
            
            {/* Lista de Categorias Principais */}
            <div className={styles.secao}>
            
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

                                    <div className={styles.categoriaAcoes}>
                                        <button className={styles.botaoEditar}>
                                            Editar
                                        </button>
                                        <button 
                                            className={styles.botaoExcluir}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                deletarItem(categ.id_categoria, 'categoria');
                                            }}
                                            disabled={carregando}    
                                        >
                                            {carregando ? 'Excluindo...' : 'Excluir'}
                                        </button>
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
                                                        <button 
                                                            className={styles.botaoExcluir}
                                                            onClick={() => deletarItem(sub.id_categoria, 'subcategoria')}
                                                            disabled={carregando}
                                                        >
                                                            {carregando ? 'Excluindo...' : 'Excluir'}
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