// variaveis

var valorModificavel = 3;
let valorModificavel = 5;
const valorContinuo = 3,14;

// tipos de variaveis
caracteres = 'joao'
numero = 25
booleano = true
indefinido = undefined
nulo = null

// tipagem dinamica

muda os tipos das variaveis 
typeof nomeDaVariavel
indica o tipo da variavel

// objetos no javascript

var meuCarro = new Object(); //objeto criado
meuCarro.fabricacao = "Ford"; //propriedades do objeto
meuCarro.modelo = "Mustang";
meuCarro.ano = 1969;

// arrays ou vetores

let numero = [10,12,8,55,34] // varios valores em uma mesma variavel

numero[3] // nome do array e o valor que quero buscar, sempre começando da posição 0
console.log(numero[3]}) 

// funções 

function nomeDaFuncao(){  //() é a area para colocar parametros
	//bloco de comando que a função fará
}

function resetCor(cor){ //funçoes com parametros
	corSite = cor;
};

resetCor('azul')
console.log(corSite); // o resultado serã azul

// funçoes sem e com retorno

function dizerNome(){
	console.log('joao')
};
dizerNome(); //imprimira o nome joao

function MultiplicarPorDois(valor){ // parametro para receber o valor 
	return valor * 2;
}
MultiplicarPorDois(5); // retornará o valor 10, foi passado 5 para multiplicar por 2

//operadores aritmeticos
+, -, *, /, ** 
//operadores encremento e decremento
-- ++
//operadores atribuição
= 
+=
-=
//operadores igualdade
=== //compara tipos e valores
== //nao compara tipos, somente valores
//operadores ternario
>
<
<=
>=

let pontos = 300;
let tipo = pontos > 100 ? 'premium' : 'comum'; // Se pontos for maior que 100 entao aparecerá premium senão aparecerá comum
// operadores logicos
&& //retorna verdadeiro se as duas condições for verdadeiras
|| //retorna verdadeiro se uma das variaveis for true
NOT(!) // negação ||

let maiorDeIdade = true;
let cnh = true;
let aprovado = maiorDeIdade && cnh;
console.log(aprovado); //se as duas primeiras variaveis forem verdadeiras o resultado será true

// comparação não booleanos 
// compara se os valores são existentes ou não
false || true ou false || tipo de dado (caractere, numero,etc)
// falsy são valores undefined, null, 0, false, '', NaN, 
// truthy é tudo o que não for falsy 

// Estrutura condicional if ... else
// Se uma condição for verdadeira acontece o primeiro blobo senão acontece o segundo bloco 

if (condição) {
	bloco de comandos
}
else if (outraCondição){
	bloco de condição 
} else {
	bloco de comando 
}

// Estrutura condicional switch ... case
// blocos ativados dependendo do caso

switch (valor) {
	case valor:
	bloco de comando
	break; // Para a verificação dr for verdadeia
	
	case outroValor:
	bloco de comando
	break;
	
	default: // caso não tenha a opção acima
	bloco de comando
}

// laços de repetição for

	for (variavel; condição; encremento){
	bloco de comandos
}

	for (let n = 1; n < 10; n++){
	console.log("Ola");
}

// laço de repetição While 

variaveis
	while (condição) {
	bloco de comandos
	}

let n = 10;
	while (n > 1) {
		n--;
		console.log("Ola");
}

// laço de repetição Do ... While

variaveis
	do {
		bloco de comandos
	} while (condição)
	
let i = 10;
	do {
		console.log(i);
		i--;
	} while (i > 0)

// laço de repetição For ... in

objeto = new Object();
	propriedades dos objeto
	
	for (let variavelCriadaParaAcessar in Objeto){
	bloco de comandos
}

var pessoa = new Object();
	pessoa.nome = "Joao";
	pessoa.idade = 22;
for (let chave in pessoa){
	console.log(chave,pessoa[chave])
}

// laço de repetição For ... of

	objeto;
	for (let variavelCriadaParaAcessar of Objeto){
		bloco de comandos;

	const num = [22,1,2,8,9,5,6,88,66];
	for (let indice of num){
		console.log(indice);
