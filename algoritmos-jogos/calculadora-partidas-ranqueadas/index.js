function calculaPartidas(numVitorias, numDerrotas){
    saldoVitorias = numVitorias - numDerrotas;

    if (saldoVitorias <= 10){
        console.log(`O Heroi tem saldo de ${saldoVitorias} vitórias e está no nivel Ferro`);
    } else if (saldoVitorias >= 11 && saldoVitorias < 20) {
        console.log(`O Heroi tem saldo de ${saldoVitorias} vitórias e está no nivel Bronza`);
    } else if (saldoVitorias >= 21 && saldoVitorias < 50){
        console.log(`O Heroi tem saldo de ${saldoVitorias} vitórias e está no nivel Prata`);
    } else if (saldoVitorias >= 51 && saldoVitorias < 80){
        console.log(`O Heroi tem saldo de ${saldoVitorias} vitórias e está no nivel Ouro`);
    } else if (saldoVitorias >= 81 && saldoVitorias < 90){
        console.log(`O Heroi tem saldo de ${saldoVitorias} vitórias e está no nivel Diamante`);
    } else if (saldoVitorias >= 91 && saldoVitorias < 100){
        console.log(`O Heroi tem saldo de ${saldoVitorias} vitórias e está no nivel Lendario`);
    } else {
        console.log(`O Heroi tem saldo de ${saldoVitorias} vitórias e está no nivel Imortal`);
    }
}

calculaPartidas(150, 10);