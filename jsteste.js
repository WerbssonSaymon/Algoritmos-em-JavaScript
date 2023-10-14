class carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca,cor,gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    calcPercurso(distancia, precoCombustivel){
        return distancia * this.gastoMedioPorKm * precoCombustivel;
    }
}
const uno = new carro('Fiat', 'prata', 1/12);
console.log(uno.calcPercurso(70, 5));

/************************************/

//import e export no NODEJS
//importar > const {nome do que está sendo importado} = require('nome do arquivo'); conceito destructuring
//exportar > module.exports = {
//    nome do que quer exportar
//}

/************************************/