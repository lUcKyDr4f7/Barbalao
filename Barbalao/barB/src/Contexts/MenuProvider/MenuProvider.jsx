import { useState, createContext} from 'react';
import { AllProducts } from '../../assets/Data/AllProducts.js';
import { AllCategories } from '../../assets/Data/AllCategories.js';

export const MenuCtx = createContext();

export default function MenuProvider({children}) {

    const [produtos, setProdutos] = useState(AllProducts);
    const [categorias, setCategorias] = useState(AllCategories.filter((categ) => categ.sub_categoria_de == null));
    const [subCateg, setSubCateg] = useState(AllCategories.filter((categ) => categ.sub_categoria_de != null));

    const [cardapio, setCardapio] = useState(() => {
        let a = {};
        categorias.map(c => {
            a[c.nome] = {};
            a[c.nome].self = c;
            subCateg.filter(s => s.sub_categoria_de == c.id_categoria).map(s => {
            a[c.nome][s.nome] = {};
            a[c.nome][s.nome].self = s;
            a[c.nome][s.nome].self.imagem = c.imagem;
            a[c.nome][s.nome].prod = produtos.filter(p => p.categoria == s.id_categoria);
            });
        });
        return a;
    });

    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <MenuCtx.Provider value={{cardapio, setCardapio, selectedProduct, setSelectedProduct}}>
            {children}
        </MenuCtx.Provider>
    )
}