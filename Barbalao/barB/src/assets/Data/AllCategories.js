import Lanche from '../categorias/burger.png';
import Pastel from '../categorias/pastel.png';
import Salgado from '../categorias/coxinha.png';
import Porção from '../categorias/porcao.png';
import Bebida from '../categorias/drink.png';
import Doces from '../categorias/chocolate.png';

class Categoria {
    constructor(id_categoria, nome, sub_categoria_de, imagem=null) {
        this.id_categoria = id_categoria;
        this.nome = nome;
        this.sub_categoria_de = sub_categoria_de;
        this.imagem = imagem;
    }
}

export const AllCategories = [
    new Categoria(1, 'Lanches', null, Lanche), new Categoria(2, 'Pastéis', null, Pastel), new Categoria(3, 'Bebidas', null, Bebida),
    new Categoria(4, 'Porções', null, Porção), new Categoria(5, 'Salgados', null, Salgado), new Categoria(6, 'Doces', null, Doces),

    new Categoria(7, 'Hambúrguer', 1), new Categoria(8, 'Especiais', 1), new Categoria(9, 'Frango', 1), new Categoria(10, 'Gourmet', 1),
    new Categoria(11, 'Pernil', 1), new Categoria(12, 'Choripán', 1), new Categoria(13, 'Contrafilé', 1), new Categoria(14, 'Costela Bovina', 1),

    new Categoria(15, 'Tradicionais', 2), new Categoria(16, 'Gourmet', 2), new Categoria(17, 'Doces', 2),
    
    new Categoria(18, 'Refrigerantes', 3), new Categoria(19, 'Sucos', 3), new Categoria(20, 'Energéticos', 3),
    new Categoria(21, 'Outras Bebidas Não Alcoólicas', 3), new Categoria(22, 'Doses', 3), new Categoria(23, 'Cachaças Especiais', 3),
    new Categoria(24, 'Vinhos da Casa', 3), new Categoria(25, 'Batidas', 3), new Categoria(26, 'Coquetéis', 3),
    new Categoria(27, 'Drinks', 3), new Categoria(28, 'Whiskys', 3), new Categoria(29, 'Cervejas Lata', 3),
    new Categoria(30, 'Cervejas 600mL', 3), new Categoria(31, 'Cervejas Long Neck', 3),

    new Categoria(32, 'Meias', 4), new Categoria(33, 'Inteiras', 4), new Categoria(34, 'Pratos Executivos', 4),

    new Categoria(35, 'Salgados', 5),
    
    new Categoria(36, 'Chocolates', 6), new Categoria(37, 'Sobremesas', 6),
]
