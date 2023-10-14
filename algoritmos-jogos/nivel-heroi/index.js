let nome = "Saymon";
let experiencia = 15000;

if (experiencia <= 1000) {
    console.log(`O Heroi de noma ${nome} está no nivel Ferro`);
} else if (experiencia >= 1001 && experiencia <= 2000) {
    console.log(`O Heroi de noma ${nome} está no nivel Bronze`);
} else if (experiencia >= 2001 && experiencia <= 5000) {
    console.log(`O Heroi de noma ${nome} está no nivel Prata`);
} else if (experiencia >= 5001 && experiencia <= 7000) {
    console.log(`O Heroi de noma ${nome} está no nivel Ouro`);
} else if (experiencia >= 7001 && experiencia <= 8000) {
    console.log(`O Heroi de noma ${nome} está no nivel Platina`);
} else if (experiencia >= 8001 && experiencia <= 9000) { 
    console.log(`O Heroi de noma ${nome} está no nivel Ascendente`);
} else if (experiencia >= 9001 && experiencia <= 10000) {
    console.log(`O Heroi de noma ${nome} está no nivel Imortal`);
} else {
    console.log(`O Heroi de noma ${nome} está no nivel Radiante`);
}