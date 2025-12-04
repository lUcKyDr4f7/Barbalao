import Lanche from '../categorias/burger.png';
import Pastel from '../categorias/pastel.png';
import Salgado from '../categorias/coxinha.png';
import Porção from '../categorias/porcao.png';
import Bebida from '../categorias/drink.png';
import Doces from '../categorias/chocolate.png';

class Categorie {
    constructor(id_categoria, nome, sub_categoria_de, imagem=null) {
        this.id_categoria = id_categoria;
        this.nome = nome;
        this.sub_categoria_de = sub_categoria_de;
        this.imagem = imagem;
    }
}

export const AllCategories = [
    new Categorie(1, 'Lanches', null, Lanche), new Categorie(2, 'Pasteis', null, Pastel), new Categorie(3, 'Bebidas', null, Bebida),
    new Categorie(4, 'Porções', null, Porção), new Categorie(5, 'Salgados', null, Salgado), new Categorie(6, 'Doces', null, Doces),
    new Categorie(7, 'Hambúrguer', 1),
    new Categorie(8, 'Especiais', 1),
    new Categorie(9, 'Frango', 1),
    new Categorie(10, 'Gourmet', 1),
    new Categorie(11, 'Pernil', 1),
    new Categorie(12, 'Choripán', 1),
    new Categorie(13, 'Contrafilé', 1),
    new Categorie(14, 'Costela Bovina', 1),
    new Categorie(15, 'Tradicionais', 2),
    new Categorie(16, 'Gourmet', 2),
    new Categorie(17, 'Doces', 2),
    new Categorie(18, 'Refrigerantes', 3),
    new Categorie(19, 'Sucos', 3),
    new Categorie(20, 'Energéticos', 3),
    new Categorie(21, 'Outras Bebidas Não Alcoólicas', 3),
    new Categorie(22, 'Doses', 3),
    new Categorie(23, 'Cachaças Especiais', 3),
    new Categorie(24, 'Vinhos da Casa', 3),
    new Categorie(25, 'Batidas', 3),
    new Categorie(26, 'Coquetéis', 3),
    new Categorie(27, 'Drinks', 3),
    new Categorie(28, 'Whiskys', 3),
    new Categorie(29, 'Cervejas Lata', 3),
    new Categorie(30, 'Cervejas 600mL', 3),
    new Categorie(31, 'Cervejas Long Neck', 3),
    new Categorie(32, 'Meias', 4),
    new Categorie(33, 'Inteiras', 4),
    new Categorie(34, 'Pratos Executivos', 4),
    new Categorie(35, 'Salgados', 5),
    new Categorie(36, 'Chocolates', 6),
    new Categorie(37, 'Sobremesas', 6),
]
