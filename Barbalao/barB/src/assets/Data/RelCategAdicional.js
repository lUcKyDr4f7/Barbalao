class CategAdicional {
    constructor(id_add, id_categ, preco) {
        this.id_add = id_add;
        this.id_categ = id_categ;
        this.preco = preco;
    }
}

export function getRacFromCateg(idCateg, list=null) {
    if(list) {
        return RelCategAdicional.filter(r => r.id_categ == idCateg && list.includes(String(r.id_categ)));
    }
    return RelCategAdicional.filter(r => r.id_categ == idCateg);
}

export function getRacFromAdd(idAdd) {
    return RelCategAdicional.filter(r => r.id_add == idAdd);
}

export const RelCategAdicional = [
    new CategAdicional(1, 7, 9.00),
    new CategAdicional(1, 8, 9.00),
    new CategAdicional(1, 9, 9.00),
    new CategAdicional(1, 10, 9.00),
    new CategAdicional(1, 11, 9.00),
    new CategAdicional(1, 12, 9.00),
    new CategAdicional(1, 13, 9.00),
    new CategAdicional(1, 14, 9.00),

    new CategAdicional(2, 7, 5.00),
    new CategAdicional(2, 8, 5.00),
    new CategAdicional(2, 9, 5.00),
    new CategAdicional(2, 10, 5.00),
    new CategAdicional(2, 11, 5.00),
    new CategAdicional(2, 12, 5.00),
    new CategAdicional(2, 13, 5.00),
    new CategAdicional(2, 14, 5.00),

    new CategAdicional(3, 7, 5.00),
    new CategAdicional(3, 8, 5.00),
    new CategAdicional(3, 9, 5.00),
    new CategAdicional(3, 10, 5.00),
    new CategAdicional(3, 11, 5.00),
    new CategAdicional(3, 12, 5.00),
    new CategAdicional(3, 13, 5.00),
    new CategAdicional(3, 14, 5.00),

    new CategAdicional(3, 15, 3.00),
    new CategAdicional(3, 16, 3.00),
    new CategAdicional(3, 17, 3.00),

    new CategAdicional(4, 7, 5.00),
    new CategAdicional(4, 8, 5.00),
    new CategAdicional(4, 9, 5.00),
    new CategAdicional(4, 10, 5.00),
    new CategAdicional(4, 11, 5.00),
    new CategAdicional(4, 12, 5.00),
    new CategAdicional(4, 13, 5.00),
    new CategAdicional(4, 14, 5.00),

    new CategAdicional(5, 7, 5.00),
    new CategAdicional(5, 8, 5.00),
    new CategAdicional(5, 9, 5.00),
    new CategAdicional(5, 10, 5.00),
    new CategAdicional(5, 11, 5.00),
    new CategAdicional(5, 12, 5.00),
    new CategAdicional(5, 13, 5.00),
    new CategAdicional(5, 14, 5.00),

    new CategAdicional(5, 15, 3.00),
    new CategAdicional(5, 16, 3.00),
    new CategAdicional(5, 17, 3.00),

    new CategAdicional(6, 7, 5.00),
    new CategAdicional(6, 8, 5.00),
    new CategAdicional(6, 9, 5.00),
    new CategAdicional(6, 10, 5.00),
    new CategAdicional(6, 11, 5.00),
    new CategAdicional(6, 12, 5.00),
    new CategAdicional(6, 13, 5.00),
    new CategAdicional(6, 14, 5.00),

    new CategAdicional(6, 15, 3.00),
    new CategAdicional(6, 16, 3.00),
    new CategAdicional(6, 17, 3.00),

    new CategAdicional(7, 7, 6.00),
    new CategAdicional(7, 8, 6.00),
    new CategAdicional(7, 9, 6.00),
    new CategAdicional(7, 10, 6.00),
    new CategAdicional(7, 11, 6.00),
    new CategAdicional(7, 12, 6.00),
    new CategAdicional(7, 13, 6.00),
    new CategAdicional(7, 14, 6.00),

    new CategAdicional(7, 15, 3.00),
    new CategAdicional(7, 16, 3.00),
    new CategAdicional(7, 17, 3.00),

    new CategAdicional(7, 32, 10.00),
    new CategAdicional(7, 33, 10.00),
    new CategAdicional(7, 34, 10.00),

    new CategAdicional(8, 7, 6.00),
    new CategAdicional(8, 8, 6.00),
    new CategAdicional(8, 9, 6.00),
    new CategAdicional(8, 10, 6.00),
    new CategAdicional(8, 11, 6.00),
    new CategAdicional(8, 12, 6.00),
    new CategAdicional(8, 13, 6.00),
    new CategAdicional(8, 14, 6.00),

    new CategAdicional(8, 15, 3.00),
    new CategAdicional(8, 16, 3.00),
    new CategAdicional(8, 17, 3.00),

    new CategAdicional(8, 32, 10.00),
    new CategAdicional(8, 33, 10.00),
    new CategAdicional(8, 34, 10.00),

    new CategAdicional(9, 7, 6.00),
    new CategAdicional(9, 8, 6.00),
    new CategAdicional(9, 9, 6.00),
    new CategAdicional(9, 10, 6.00),
    new CategAdicional(9, 11, 6.00),
    new CategAdicional(9, 12, 6.00),
    new CategAdicional(9, 13, 6.00),
    new CategAdicional(9, 14, 6.00),

    new CategAdicional(9, 15, 3.00),
    new CategAdicional(9, 16, 3.00),
    new CategAdicional(9, 17, 3.00),

    new CategAdicional(9, 32, 12.00),
    new CategAdicional(9, 33, 12.00),
    new CategAdicional(9, 34, 12.00),

    new CategAdicional(10, 7, 6.00),
    new CategAdicional(10, 8, 6.00),
    new CategAdicional(10, 9, 6.00),
    new CategAdicional(10, 10, 6.00),
    new CategAdicional(10, 11, 6.00),
    new CategAdicional(10, 12, 6.00),
    new CategAdicional(10, 13, 6.00),
    new CategAdicional(10, 14, 6.00),

    new CategAdicional(10, 15, 3.00),
    new CategAdicional(10, 16, 3.00),
    new CategAdicional(10, 17, 3.00),

    new CategAdicional(10, 32, 12.00),
    new CategAdicional(10, 33, 12.00),
    new CategAdicional(10, 34, 12.00),

    new CategAdicional(11, 7, 6.00),
    new CategAdicional(11, 8, 6.00),
    new CategAdicional(11, 9, 6.00),
    new CategAdicional(11, 10, 6.00),
    new CategAdicional(11, 11, 6.00),
    new CategAdicional(11, 12, 6.00),
    new CategAdicional(11, 13, 6.00),
    new CategAdicional(11, 14, 6.00),

    new CategAdicional(12, 7, 11.00),
    new CategAdicional(12, 8, 11.00),
    new CategAdicional(12, 9, 11.00),
    new CategAdicional(12, 10, 11.00),
    new CategAdicional(12, 11, 11.00),
    new CategAdicional(12, 12, 11.00),
    new CategAdicional(12, 13, 11.00),
    new CategAdicional(12, 14, 11.00),

    new CategAdicional(13, 19, 16.00),

    new CategAdicional(14, 19, 16.00),
];