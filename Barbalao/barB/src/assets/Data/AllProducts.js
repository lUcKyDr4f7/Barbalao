// import axios from 'axios';
// async function AProducts() {
//   try {
//     const response = await axios.get('https://back-end-barbalao-upgw.onrender.com/api/getProducts');
//     let Produtos = response.data;
//   } catch (error) {
    
//   }
// }

class Product {
    constructor(id_prod, nome_prod, preco_prod, descricao_prod, imagem_prod, categoria) {
        this.id_prod = id_prod;
        this.nome = nome_prod;
        this.preco = preco_prod;
        this.descricao = descricao_prod;
        this.imagem = imagem_prod;
        this.categoria = categoria;
    }
}

export const AllProducts = [
    new Product(1, 'X-Bacon', 32, 'Hambúrguer, queijo, bacon, alface e tomate', '', 7),
    new Product(2, 'X-Burguer', 26, 'Hambúrguer e queijo', '', 7),
    new Product(3, 'X-Burguer 3 Queijos', 31, 'Hambúrguer, catupiry, provolone e muçarela', '', 7),
    new Product(4, 'X-Burguer Calabresa', 33, 'Hambúrguer, calabresa, queijo, cebola frita, alface e tomate', '', 7),
    new Product(5, 'X-Catupiry Salada', 32, 'Hambúrguer, queijo, catupiry, alface e tomate', '', 7),
    new Product(6, 'X-Cebola Frita', 33, 'Hambúrguer, cebola frita, queijo, alface e tomate', '', 7),
    new Product(7, 'X-Egg Bacon', 34, 'Hambúrguer, queijo, bacon, ovo, alface e tomate', '', 7),
    new Product(8, 'X-Egg Salada', 33, 'Hambúrguer, queijo, ovo, alface e tomate', '', 7),
    new Product(9, 'X-Salada', 28, 'Hambúrguer, queijo, alface e tomate', '', 7),
    new Product(10, 'X-Salada Cheddar', 32, 'Hambúrguer, cheddar, queijo, alface e tomate', '', 7),
    new Product(11, 'X-Salada da Casa', 33, 'Hambúrguer, queijo, milho, batata palha, catupiry, alface e tomate', '', 7),
    new Product(12, 'X-Salada Especial', 33, 'Hambúrguer, queijo, bacon, catupiry, batata palha, alface e tomate', '', 7),
    new Product(13, 'X-Tudo', 39.50, 'Hambúrguer, presunto, queijo, milho, batata palha, ovo, bacon, catupiry, alface e tomate', '', 7),
    new Product(14, 'X-Calabresa', 35, 'Calabresa, queijo, alface e tomate', '', 8),
    new Product(15, 'X-Calabresa Especial', 37, 'Calabresa, queijo, cebola frita, catupiry, alface e tomate', '', 8),
    new Product(16, 'X-Catupiry da Casa', 35, 'Presunto, queijo, bacon, catupiry, batata palha, alface e tomate', '', 8),
    new Product(17, 'Americano', 32.50, 'Presunto, queijo, bacon, ovo, alface e tomate', '', 8),
    new Product(18, 'Bauru', 30.50, 'Presunto, queijo e tomate', '', 8),
    new Product(19, 'Misto Quente', 29.50, 'Presunto e queijo', '', 8),
    new Product(20, 'Misto Quente Especial', 31, 'Presunto, queijo e catupiry', '', 8),
    new Product(21, 'X-Frango', 37, 'Filet de frango, queijo, alface e tomate', '', 9),
    new Product(22, 'X-Frango Especial', 41, 'Filet de frango, queijo, milho, catupiry, batata palha, palmito, alface e tomate', '', 9),
    new Product(23, 'X-Frango da Casa', 41, 'Filet de frango, presunto, queijo, bacon, ovo, alface e tomate', '', 9),
    new Product(24, 'X-Frango Balão', 41, 'Filet de frango, calabresa, catupiry, orégano, provolone, alface e tomate', '', 9),
    new Product(25, 'X-Frango 3 Queijos', 40, 'Filet de frango, provolone, catupiry e muçarela', '', 9),
    new Product(26, 'X-Galinhão', 40, 'Frango cozido e desfiado, queijo, milho, catupiry, alface e tomate', '', 9),
    new Product(27, 'Burguer Original', 35, 'Hambúrguer artesanal 160g, queijo e molho da casa', '', 10),
    new Product(28, 'Burguer Clássico', 40, 'Hambúrguer artesanal 160g, queijo, tiras de bacon, catupiry, molho da casa, tomate, rúcula e cebola roxa', '', 10),
    new Product(29, 'Burguer Premium', 44, 'Hambúrguer artesanal 160g, queijo, tiras de bacon, catupiry empanado, molho da casa, tomate e rúcula', '', 10),
    new Product(30, 'Pernil Original', 35, 'Pernil e vinagrete', '', 11),
    new Product(31, 'Pernil Clássico', 40, 'Pernil, vinagrete e queijo', '', 11),
    new Product(32, 'Pernil Premium', 44, 'Pernil, vinagrete, queijo, rúcula e molho da casa', '', 11),
    new Product(33, 'Choripán Original', 35, '', '', 12),
    new Product(34, 'Choripán Clássico', 40, '', '', 12),
    new Product(35, 'Choripán Premium', 44, '', '', 12),
]
