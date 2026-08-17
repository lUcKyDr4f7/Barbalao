import { RelCategAdicional, getRacFromCateg, getRacFromAdd } from "./RelCategAdicional.js";

class Adicional {
    constructor(id_add, nome_add) {
        this.id_add = id_add;
        this.nome = nome_add;
    }
}

export function getAdicionais(idCateg, list=null) {
    let rac = getRacFromCateg(idCateg, list).reduce((acc, r) => {
        acc[r.id_add] = r.preco;
        return acc;
    }, {});
    return AllAdicionais.map(a => {
        if(rac[a.id_add]) {
            return {...a, 'preco': rac[a.id_add]};
        }
    }).filter(a => a != undefined);
}

export const AllAdicionais = [
    new Adicional(1, 'Troca por Hambúrguer Gourmet 160g'),
    new Adicional(2, 'Lanche no Prato'),
    new Adicional(3, 'Milho'),
    new Adicional(4, 'Batata Palha'),
    new Adicional(5, 'Ovo'),
    new Adicional(6, 'Presunto'),
    new Adicional(7, 'Cheddar'),
    new Adicional(8, 'Catupiry'),
    new Adicional(9, 'Palmito'),
    new Adicional(10, 'Bacon'),
    new Adicional(11, 'Hambúrguer'),
    new Adicional(12, 'Hambúrguer Gourmet 160g'),
    new Adicional(13, 'Leite'),
    new Adicional(14, 'Laranja'),
]