class Adicional {
    constructor(id_add, nome_add, categ_preco, tipo) {
        this.id_add = id_add;
        this.nome = nome_add;
        this.categ_preco = categ_preco;
        this.tipo = tipo;
    }
}

export const AllAdicionais = [
    new Adicional(1, 'Troca por Hambúrguer Gourmet 160g', {1: 9.00}),
    new Adicional(2, 'Lanche no Prato', {1: 5.00}),
    new Adicional(3, 'Milho', {1: 5.00, 2: 3.00}),
    new Adicional(4, 'Batata Palha', {1: 5.00}),
    new Adicional(5, 'Ovo', {1: 5.00, 2: 3.00}),
    new Adicional(6, 'Presunto', {1: 5.00, 2: 3.00}),
    new Adicional(7, 'Cheddar', {1: 6.00, 2: 3.00, 4: 10.00}),
    new Adicional(8, 'Catupiry', {1: 6.00, 2: 3.00, 4: 10.00}),
    new Adicional(9, 'Palmito', {1: 6.00, 2: 3.00, 4: 12.00}),
    new Adicional(10, 'Bacon', {1: 6.00, 2: 3.00, 4: 12.00}),
    new Adicional(11, 'Hambúrguer', {1: 6.00}),
    new Adicional(12, 'Hambúrguer Gourmet 160g', {1: 11.00}),
    new Adicional(13, 'Leite', {19: 16.00}),
    new Adicional(14, 'Laranja', {19: 16.00}),
]