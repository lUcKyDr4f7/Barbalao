import { useState, useEffect, createContext} from 'react';
import { AllProducts } from '../../assets/Data/AllProducts.js';
import { AllCategories } from '../../assets/Data/AllCategories.js';

export const ModalProdOpenCtx = createContext();
export const CartOpenCtx = createContext();

export default function ModalOpenProvider({children}) {

    /* const [produtos, setProdutos] = useState(AllProducts);
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
    }); */

    const [selectedProduct, setSelectedProduct] = useState(null);

    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {

        let theme = localStorage.getItem("theme");
        
        if (!theme?.includes('dark') && !theme?.includes('light')) {
            theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
            localStorage.setItem("theme", theme);
        }

        if(selectedProduct || isCartOpen) {
            theme = theme + ' modalOpen';
            localStorage.setItem("theme", theme);
        } else {
            theme = theme.replaceAll(' modalOpen', '');
            localStorage.setItem("theme", theme);
        }
        document.body.classList = theme;

    }, [selectedProduct, isCartOpen]);

    return (
        <ModalProdOpenCtx.Provider value={{selectedProduct, setSelectedProduct}}>
            <CartOpenCtx.Provider value={{isCartOpen, setIsCartOpen}}>
                {children}
            </CartOpenCtx.Provider>
        </ModalProdOpenCtx.Provider>
    )
}