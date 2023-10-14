class Heroi {
    construtor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar(tipo){
        if (tipo == "mago"){
            let ataque = "magia";
            console.log(`O ${tipo} atacou usando ${ataque}`);
        } else if (tipo == "guarreiro"){
            let ataque = "espada";
            console.log(`O ${tipo} atacou usando ${ataque}`);
        } else if (tipo == "monge"){
            let ataque = "artes marciais";
            console.log(`O ${tipo} atacou usando ${ataque}`);
        } else if (tipo == "ninja") {
            let ataque = "shuriken";
            console.log(`O ${tipo} atacou usando ${ataque}`);
        }
    }
}

let naruto = new Heroi("naruto", 17, "ninja");
naruto.atacar("ninja");

let asta = new Heroi("asta", 17, "mago");
asta.atacar("mago");