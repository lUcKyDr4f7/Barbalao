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
    new Product(33, 'Choripán Original', 35, 'Hambúrguer de linguiça calabresa 160g, queijo e molho da casa', '', 12),
    new Product(34, 'Choripán Clássico', 40, 'Hambúrguer de linguiça calabresa 160g, queijo, vinagrete e rúcula', '', 12),
    new Product(35, 'Choripán Premium', 44, 'Hambúrguer de linguiça calabresa 160g, queijo, tiras de bacon, catupiry, molho da casa, tomate, rúcula e cebola roxa', '', 12),
    new Product(36, 'X-Churrasco', 41.50, 'Contrafilé, queijo, alface e tomate', '', 13),
    new Product(37, 'X-Churrasco Especial', 44.50, 'Contrafilé, queijo, cebola frita, catupiry, alface e tomate', '', 13),
    new Product(38, 'X-Churrasco do Balão', 47, 'Contrafilé, queijo, ovo, catupiry, batata palha, bacon, alface e tomate', '', 13),
    new Product(39, 'X-Churrasco do Chefe', 47, 'Contrafilé, cebola, palmito, queijo, catupiry, alface e tomate', '', 13),
    new Product(40, 'X-Churrasco da Casa', 47, 'Contrafilé, presunto, provolone, bacon, ovo, alface e tomate', '', 13),
    new Product(41, 'X-Churrasco Quente', 47, 'Contrafilé, cebola, bacon, lâminas de pimenta, queijo, alface e tomate', '', 13),
    new Product(42, 'X-Churrasco Vinagrete', 46, 'Contrafilé, queijo, vinagrete, alface e tomate', '', 13),
    new Product(43, 'X-Churrasco Legal', 48, 'Contrafilé, palmito, bacon, batata palha, catupiry, queijo, alface e tomate', '', 13),
    new Product(44, 'Costela Original', 39, 'Costela desfiada, queijo e molho da casa', '', 14),
    new Product(45, 'Costela Clássico', 44, 'Costela desfiada, queijo, tiras de bacon, catupiry, molho da casa, tomate, cebola roxa e rúcula', '', 14),
    new Product(46, 'Carne', 23.50, 'Pastel de carne', '', 15),
    new Product(47, 'Carne com Queijo', 25.50, 'Pastel de carne com queijo', '', 15),
    new Product(48, 'Carne com Queijo e Bacon', 26.50, 'Pastel de carne com queijo e bacon', '', 15),
    new Product(49, 'Carne com Catupiry', 25.50, 'Pastel de carne com catupiry', '', 15),
    new Product(50, 'Carne com Catupiry e Bacon', 26.50, 'Pastel de carne com catupiry e bacon', '', 15),
    new Product(51, 'Carne com Bacon', 25.50, 'Pastel de carne com bacon', '', 15),
    new Product(52, 'Calabresa', 21.50, 'Pastel de calabresa', '', 15),
    new Product(53, 'Calabresa com Queijo', 22.50, 'Pastel de calabresa com queijo', '', 15),
    new Product(54, 'Calabresa com Catupiry', 22.50, 'Pastel de calabresa com catupiry', '', 15),
    new Product(55, 'Calabresa com Cheddar', 23.50, 'Pastel de calabresa com cheddar', '', 15),
    new Product(56, 'Queijo', 21.50, 'Pastel de queijo', '', 15),
    new Product(57, 'Queijo com Bacon', 23, 'Pastel de queijo com bacon', '', 15),
    new Product(58, '3 Queijos', 24.50, 'Pastel de muçarela, provolone e catupiry', '', 15),
    new Product(59, '4 Queijos', 26.50, 'Pastel de muçarela, provolone, catupiry e cheddar', '', 15),
    new Product(60, 'Queijos, Milho e Bacon', 24, 'Pastel de queijo, milho e bacon', '', 15),
    new Product(61, 'Frango', 21.50, 'Pastel de frango', '', 15),
    new Product(62, 'Frango com Queijo', 23, 'Pastel de frango com queijo', '', 15),
    new Product(63, 'Frango com Catupiry', 23, 'Pastel de frango com catupiry', '', 15),
    new Product(64, 'Frango com Catupiry e Bacon', 23, 'Pastel de frango com catupiry', '', 15),
    new Product(65, 'Frango com Cheddar', 25, 'Pastel de frango com cheddar', '', 15),
    new Product(66, 'Frango, Catupiry e Milho', 25, 'Pastel de frango, catupiry e milho', '', 15),
    new Product(67, 'Frango, Cheddar e Bacon', 26, 'Pastel de frango, cheddar e bacon', '', 15),
    new Product(68, 'Especial', 25, 'Pastel de carne, queijo e palmito', '', 15),
    new Product(69, 'Pizza', 22.50, 'Pastel de pizza', '', 15),
    new Product(70, 'Palmito com Catupiry', 23.50, 'Pastel de palmito com catupiry', '', 15),
    new Product(71, 'Palmito com Queijo', 23, 'Pastel de palmito com queijo', '', 15),
    new Product(72, 'Palmito com Cheddar', 24.50, 'Pastel de palmito com cheddar', '', 15),
    new Product(73, 'Palmito com Milho e Catupiry', 24.50, 'Pastel de palmito com milho e catupiry', '', 15),
    new Product(74, 'Palmito com Bacon e Queijo', 24.50, 'Pastel de palmito com bacon e queijo', '', 15),
]
