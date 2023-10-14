//Documento feito em html, para rodar acesse o console do seu navegador e retire as barras duplas do script que for usar

//Verifica a velocidade de um veiculo

//	var speed = 60;
//	if (speed < 80){
//		console.log("Velocidade boa continue assim")
//	} else {
//		console.log(" Velocidade alta, reduza para a sua segurança")
//	}


//Verifica o horario do dia e imprimi uma mensagem

//	let hora = 19
//	if (hora > 6 && hora < 12){
//	console.log("Bom dia")
// } else if (hora > 12 && hora < 18){
//	console.log("Boa tarde")
// } else {
//	console.log("Boa noite")
// }


Troca de valores de variaveis usando operador de atribuição

//	let a = 1
//	let b = 2
//	let c = a
//	a = b
//	b = c
//	console.log(a)
//	console.log(b)


Verifica o acesso de um computador

//	let permissao = ""; //"aluno" ou "diretor"	
//	switch (permissao) {
//		case "aluno": // caso seja aluno
//		console.log("Bem vindo aluno")
//		break; //faz o comando parar quando ele reconhece o caso exato
		
//		case "diretor": // caso seja diretor
//		console.log("Bem vindo diretor")
//		break;
	
//		default: // caso nao seja nenhum dos casos acima
//		console.log("Usuario nao reconhecido")
//	}


Estrutura for que conta de 0 a 24

//	for (let i = 0; i < 25; i++) { // Declarada a variavel, declarado até onde ela vai, e a encrementação de 1 em 1 no operador ++
//		console.log(i);
//	}


Estrutura que decompoem um valor (primeiro verifica para depois executar)

//	let n = 10;
//	while (n > 1) {
//		n--;
//		console.log(n);
//}


Estrutura que decompoem um valor (primeiro executa e depois verifica) 

//	let i = 10;
//	do {
//		console.log(i);
//		i--;
//	} while (i > 0)


Estrutura for-in para acessar objetos 

//	var pessoa = new Object();
//	pessoa.nome = "Joao"; //chave = valor
//	pessoa.idade = 22;
	
//	for (let chave in pessoa){ // variavel criada para acessar objeto
//	console.log(chave, pessoa[chave]) //acessa a variavel, depois o objeto e seus valores 
	// console.log(chave, pessoa.nome) outra forma de acesso
//}


Estrutura for-of para acessar objetos 

//	const num = [22,1,2,8,9,5,6,88,66];
	
//	for (let indice of num){
//		console.log(indice);
//}


Estrutura para definir o maior entre dois numeros

//	let valorMaior = max(5, 7);
//	console.log(valorMaior);
	
//	function max(n1, n2){
//		return n1 > n2 ? n1 : n2;
//}


Estrutura FizzBuzz que divide um numero por 3 e por 5 

//	let resultado = fizzBuzz(15);
//	console.log(resultado);
//	
//	function fizzBuzz(entrada){
//		if ( typeof entrada !== 'number')
//		return "Não é um numero"
//		if (entrada % 3 === 0 && entrada % 5 === 0)
//		return "FizzBuzz"
//		if (entrada % 3 === 0)
//		return "Fizz"
//		if (entrada % 5 === 0)
//		return "Buzz"
		
//		return "O numero"+" "+entrada+" "+"não é divisivel por 3 e nem por 5";
//}


Estrutura para imprimir nomes e notas 

//	const alunos = ["Luna", "Caio", "Augusto", "Luis", "Bianca"]
//	const notas = [8.0, 7.5, 10, 6.0, 9.5]
//	console.log("Alunos da Escola Primaria ")
//	console.log(alunos)
//	console.log("E suas respectivas notas ")
//	console.log(notas)


Estrutura para verificar se é maior de idade 

//	let idade = 14;
//	if (idade >= 18) {
//		console.log("Você tem "+ idade +" anos, é maior de idade")
//	} else {
//		console.log("Você tem "+ idade +" anos, é menor de idade")
//	}


Estrutura para equações

//	let a = 8
//	let b = 24
//	let c = 5
//	let eq1 = (a+b)/c;
//		console.log(eq1)
//	let eq2 = (a+b)*c;
//		console.log(eq2)
//	let eq3 = (c*b)+a;
//		console.log(eq3)


Estrutura que diz quantos anos, meses e dias de vida alguém tem 

//	let anos = 21;
//	let meses = anos * 12;
//	let dias = anos * 365;
//		console.log("Voce tem "+ anos + " anos de idade, "+ meses + " meses de vida e "+ dias + " dias de vida")


Estrutura que calcula o peso ideal 

//	let sexo = "masculino"; //"masculino" ou "feminino"
//	let altura = 1.92;
//	if (sexo === "masculino") {
//		let pesoIdeal = (72.7 * altura) - 58;
//		console.log(pesoIdeal);
//	} else {
//		if (sexo === "feminino"){
//			let pesoIdeal2 = (62.1 * altura) - 44.7;
//			console.log(pesoIdeal2);
//		} 		
//	}


Estrutura de saldos de clientes

//	let caio = new Object();
//		caio.conta = 30;
//		caio.pago = 15;
//		caio.deve = caio.conta - caio.pago;
//	let lucas = new Object();
//		lucas.conta = 40;
//		lucas.pago = 10;
//		lucas.deve = lucas.conta - lucas.pago;	
//	let maria = new Object();
//		maria.conta = 55;
//		maria.pago = 55;
//		maria.deve = maria.conta - maria.pago;	
//			
//			console.log(maria);


Estrutura de media de alunos

//	let nota1 = 6;
//	let nota2 = 5;
//	let nota3 = 5;
//	let nota4 = 6;
//	let raul = (nota1 + nota2 + nota3 + nota4) / 4;
//		if (raul >= 6){
//			console.log("Nota " + raul + " :Aprovado");
//		} else {
//			console.log("Nota " + raul + " :Reprovado");
//		}


Estrutura de saudação 

//	function dia (){
//		console.log("tenha um bom dia")
//	}
//	function tarde (){
//		console.log("tenha uma boa tarde")
//	}
//	function noite (){
//		console.log("tenha uma bom noite")
//	} 
//	
//	let nome = "Julia"
//	console.log("Olá " + nome );
//	dia();


Estrutura de tabuada

//	let n = 5; //numero de qual tabuada quer usar
//	for (let i = 0; i <= 10; i++) { // contagem de 1 a 10
//		console.log(i * n);
//	}


Estrutura de sucessor e antecessor de um numero 

//	let numero = 9;
//	let sucessor = numero + 1;
//	let antecessor = numero - 1;
//		console.log("O sucessor de " + numero + " é " + sucessor + " e o antecessor é " + antecessor);


Estrutura conversor de dollar para real 

//	let dollar = 10;
//	let real = dollar * 5.16;
//	 console.log(dollar + " dolares equivalem a " + real);


Estrutura conversor de real para dollar 

//	let real = 5;
//	let dollar = real * 0.19;
//		console.log(real + " reais equivalem a " + dollar);


Estrutura conversor de real para euro 

//	let real = 25;
//	let euro = real * 0.18;
//		console.log(real + " reais equivalem a " + euro + " euros");


Estrutura conversor de real para iene 

//	let real = 24;
//	let iene = real * 26;
//		console.log(real + " reais equivalem a " + iene + " ienes")


Estrutura conversor de graus celsius para fahrenheit 

//	let celsius = 40;
//	let fahrenheit = (1.8 * celsius) + 32;
//		console.log(celsius + " celsius equivale a " + fahrenheit + " fahrenheits");


<!- Estrutura conversor de graus celsius para kelvin ->

//	let celsius = 18;
//	let kelvin = celsius + 273.15;
//		console.log(kelvin);


<!- Estrutura conversor de graus kelvin para fahrenheit ->

//	let kelvin = 10;
//	let fahrenheit = ((kelvin - 273.15) * 9) / 5 + 32;
//		console.log(fahrenheit);


<!- Estrutura conversor de graus kelvin para celsius ->

//	let kelvin = 250;
//	let celsius = kelvin - 273.15;
//		console.log(celsius);


<!- Estrutura conversor de graus fahrenheit para celsius ->
<script>
//	let fahrenheit = 100;
//	let celsius = ((fahrenheit - 32) * 5) / 9;
//		console.log(celsius);
</script>

<!- Estrutura conversor de graus fahrenheit para kelvin ->
<script>
//	let fahrenheit = 50;
//	let kelvin = (((fahrenheit - 32) * 5) / 9) + 273.15;
//		console.log(kelvin);
</script>

<!- Estrutura arrays com familias de animais ->
<script>
//	let mamiferos = ["cachorro", "gato", "urso", "vaca"];
//	let aves = ["urubu", "pavão", "galinha", "beija_flor"];
//	let peixes = ["tubarão", "sardinha", "peixe_dourado"];
//		console.log(mamiferos);
</script>

<!- Estrutura para rolar dados de 6 lados ->
<script>
//	let vez = 10; // quantidade de dados
//	function umDeSeis() {
//		return Math.floor(Math.random() * 6 + 1); // numero aleatorio até 6, sem o numero 0
//	}
//	for(let i = 0; i < vez; i++){  // rola os dados
//		console.log(umDeSeis());
//	}
</script>

<!- Estrutura para rolar dados de 20 lados ->
<script>
//	let vez = 1; // quantidade de dados
//	function umDeVinte() {
//		return Math.floor(Math.random() * 20 + 1); // numero aleatorio até 20, sem o numero 0
//	}
//	for(let i = 0; i < vez; i++){  // rola os dados
//		console.log(umDeVinte());
//	}
</script>

<!- Estrutura para rolar varios dados de quaisquer lados  ->
<script>
//	let vez = 3; // quantidade de dados	
//	let dado = 8; // qual dado quer rolar 4, 6, 8, 10, 12, 20
//	function rolarDado() {
//		return Math.floor(Math.random() * dado + 1); // numero aleatorio até 20, sem o numero 0
//	}
//	for(let i = 0; i < vez; i++){  // rola os dados
//		console.log(rolarDado());
//	}
</script>

<!- Estrutura para sortear numero ->
<script>
//	let sorteio = 100;
//	function sortearNumero() {
//		return Math.floor(Math.random() * sorteio + 1);
//	}
//	console.log("O número sorteado foi " + sortearNumero());
</script>

<!- Estrutura de exponenciação ->
<script>
//	let base = 2;
//	let expoente = 3;
//	function exponenciacao() {
//		return Math.pow(base,expoente);
//	}
//	console.log(exponenciacao());
</script>

<!- Estrutura de alerta para paginas web -> 
<script>
//	let saudacao = "Olá seja bem vindo(a)";
//	let nome = "Lucia";
//	window.alert(saudacao);
//	window.alert("Fico feliz em lhe ver " + nome);
</script>

<!- Estrutura para mundar conteudos de elementos ->
<script>
//	<h1 id="demo">Elemento a ser substituido fora das tags script</h1>
//	document.getElementById("demo").innerHTML = "Olá Mundo";
</script>

<!- Estrutura para chamada de alunos ->
<script>
//	const chamada = ["Julia", "Ana", "Lucas", "Beatriz", "Mario", "Tulio", "Fernanda"];
//	console.log(chamada.sort()); //organiza em ordem alfabetica
</script>

<!- Estrutura para ordenar numeros ->
<script>
//	const numeros = [40, 100, 1, 5, 25, 10];
//	console.log(numeros.sort(function comparar(a, b){ //Pega o primeiro e o segundo numero para comparar
//		return a - b //Faz a conta dos numeros, se for negativo a resposta, o numero menor vem na frente
//		}));
</script>

<!- Estrutura para retornar o maior numero do array ->
<script>
//	const numeros = [40, 100, 1, 5, 25, 10, 200];
//	function numeroMaximo() {
//		return Math.max.apply(null, numeros); //Retorna o maior numero do array
//	}
//	console.log(numeroMaximo());
</script>

<!- Estrutura para criar objetos ->
<script>
//	const pessoa = {
//   	nome: "John",
//   	sobrenome: "Doe",
//   	idade: 22,
//  	sexo: "masculino"
//	};
//	console.log(pessoa);
</script>

<!- Estrutura para verificar acesso de conta e agencia bancaria ->
<script>
//	let conta = 1234;
//	let agencia = 555;
//	let contaVerificar = 1234;
//	let agenciaVerificar = 55;
//	const verificacao = conta == contaVerificar && agencia == agenciaVerificar;

//	if (conta == contaVerificar && agencia == agenciaVerificar){
// 	    console.log("Resultado " + verificacao + " Acesso autorizado");
//	} else {
//   	console.log("Resultado " + verificacao + " Acesso negado, tente novamente");
//	}
</script>

<!- Estrutura para medir velocidade v2 ->
<script>
//	let velocidade = 80;
//	const velocidadeMaxima = 70;
//	const limitePorPontos = 5;
//	const pontos = Math.floor((velocidade - velocidadeMaxima) / limitePorPontos); // Math.floor arredonda o resultado
//
//	function verificarVelocidade(){
//  	if (velocidade <= velocidadeMaxima){
//      	console.log("ok");
//    	} else {
//       if (pontos >= 12){
//           console.log("Carteira suspensa");
//       } 	else {
//           	 console.log("Você recebeu " + pontos + " pontos na sua cateira");
//       	}
//  	}
//	}
//	console.log(verificarVelocidade());
</script>

<!- Estrutura que classifica uma lista de numeros em par ou impar ->
<script>
//  let numero = 2;
//  function exibirTipo(){
//    for (let i = 0; i <= numero; i++) {
//        if (i % 2 === 0){ // ver se o modulo da divisao é 0
//            console.log(i + " É PAR");
//        } else {
//            console.log(i + " É IMPAR");
//        }
//    }
//}
//console.log(exibirTipo());
</script>

<!- Estrutura que classifica um numero em par ou impar->
<script>
//  let numero = 1;
//  function exibirTipo(){
//    if (numero % 2 === 0){ // ver se o modulo da divisao é 0
//       console.log(numero + " É PAR");
//    } else {
//        console.log(numero + " É IMPAR");
//    }
//  }
//  console.log(exibirTipo());
</script>	

<!- Estrutura que mostra as propriedades especificas de um objeto ->
<script>
//	const filme = {
//    titulo: "Vingança",
//    ano: 2012,
//    diretor: "Nicolas"
//	}
//	function propriedades(obj){
//   	for (prop in obj){
//      	if (typeof obj[prop] === "string"){ //obj[prop] significa a propriedade do objeto
//      	    console.log(prop, obj[prop]); //mostra a propriedade e depois o valor dela (objeto ligado a propriedade)
//      	}
//   	}
//	}
//	console.log(propriedades(filme));
</script>

<!- Estrutura que soma os multiplos de 3 e 5 de um numero ->
<script>
//   let numero = 5;
//    let multiploDe3 = 0;
//    let multiploDe5 = 0;
//	  function somar(){    
//    for (let i = 0; i <= numero; i++){
//        if (i % 3 === 0){
//            multiploDe3 += i; // Guarda todos os multiplos nessa variavel
//        }
//        if (i % 5 === 0){
//            multiploDe5 += i; // Guarda todos os multiplos nessa variavel
//        }
//    }
//    console.log("A soma de todos os multiplos de 3 e 5 de " + numero + " é: " + (multiploDe3 + multiploDe5));
//	  }
//	  console.log(somar());
</script>

<!- Estrutura de media de notas com array ->
<script>
//  const array = [10, 10, 10];
//  function calcularMedia(array){
//    let soma = 0;
//    for (let valor of array){ // o valor de cada item de "notas" será passado para a "soma"
//        soma += valor;
//    }
//    return soma / (array.length); // calculo da media atraves do .length (tamanho do array "notas")
//  }
//  function mediaDoAluno(notas){
//    const media = calcularMedia(array); // recebendo "notas" da outra função
//    if (media < 59) return "nota F";
//    if (media < 69) return "nota D";
//    if (media < 79) return "nota C";
//    if (media < 89) return "nota B";
//    return "nota A"
//  }
//  console.log(mediaDoAluno(array));
</script>

<!- Estrutura para contar caracteres de uma string ->
<script>
//  let texto = "Classificação do brasileirao do ano de 2023";
//  let tamanhoDoTexto = texto.length;
//  console.log("O texto: " + texto);
//  console.log("possui " + tamanhoDoTexto + " caracteres");
</script>

<!- Estrutura para cortar um trecho de uma string ->
<script>
//  let texto = "Apple, Banana, Kiwi";
//  let parte = texto.slice(7, 13); //corta o texto da primeira posição "7" para a segunda posição "13"
//  console.log("A parte cortada do texto: " + texto + " , foi " + parte);
</script>

<!- Estrutura para modificar um trecho de uma string ->
<script>
//  let texto = "Está de dia";
//  let novoTexto = texto.replace("de dia", "de noite"); //muda trecho de uma string por outra string
//  console.log(novoTexto);
</script>

<!- Estrutura para mostra notas de escalas musicais ->
<script>
//	let escalaC = ["C", "D", "E", "F", "G", "A", "B"];
//	let escalaD = ["D", "E", "F#", "G", "A", "B", "C#"];
//	let escala = "D";
//		switch (escala) {
//		case "C": // caso seja C
//		console.log(escalaC);
//		break; //faz o comando parar quando ele reconhece o caso exato
//		
//		case "D": // caso seja D
//		console.log(escalaD);
//		break;
//	
//		default: // caso nao seja nenhum dos casos acima
//		console.log("Não encontramos essa escala");
//		}
</script>

<!- Estrutura que diz o sucessor de um numero entre 0 e 59 ->
<script>
//	let numero = 0; // de 0 a 59
//	let sucessor = (numero + 1) % 61; // faz que ao digitar 60 o resultado seja 0 
//	console.log("O numero sucessor de " + numero + " é " + sucessor);
</script>

<!- Estrutura pra ler se o numero é positivo, negativo ou nulo ->
<script>
//	let numero = 12;
//	if (numero > 0){
//		console.log("O numero " + numero + " é positivo");
//	} else {
//		if (numero < 0){
//		console.log("O numero " + numero + " é negativo");
//	} 	else {
//		console.log("O numero " + numero + " é nulo");
//	}
//	}
</script>

<!- Estrutura que diz qual é o maior numero ->
<script>
//	let n1 = 10;
//	let n2 = 68;
//	if(n1 > n2){
//		console.log("O numero " + n1 + " é maior que " + n2);
//	} else {
//		console.log("O numero " + n2 + " é maior que " + n1);
//	}
</script>

<!- Estrutura para gerar placa de carro ->
<script>
//	const numeros = 9;
//	const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';	
//    function gerarNumero() {
//		return Math.floor(Math.random() * numeros + 1);
//	}  
//    function gerarLetra() {
//        return caracteres.charAt(Math.floor(Math.random() * caracteres.length)); //gera uma letra aleatoria e pega ela com o charAt()
//    }
//    function gerarPlaca(){
///       let p1 = gerarNumero();
//        let p2 = gerarNumero();
//        let p3 = gerarNumero();
//        let p4 = gerarLetra();
//        let p5 = gerarNumero();
//        let p6 = gerarLetra();
//        let p7 = gerarLetra();
//        let placa = "" + p1 + p2 + p3 + p4 + p5 + p6 + p7; 
//        return placa;
//    }
//	console.log("Placa gerada com sucesso: " + gerarPlaca());
</script>

<!- Estrutura para modificar termos de uma string ->
<script>
//	let texto = "Gosto de filmes de ação, pois o genero ação é o mais legal para mim";
//	texto = texto.replaceAll("ação", "romance");
//	console.log(texto);
</script>

<!- Estrutura de interpolação de variaveis e string ->
<script>
//	let nome = "John";
//	let sobrenome = "Doe";
//	let texto = `Bem vindo ${nome}, ${sobrenome}! esperamos que sua estadia seja agravel Sr. ${sobrenome}`;
//	console.log(texto);
</script>

<!- Estrutura de lista de itens de matrizes ->
<script>
//	const frutas = ["Banana", "Orange", "Apple", "Mango"];
//	let fLen = frutas.length;
//	let lista = "";
//	for (let i = 0; i < fLen; i++) {
// 		lista += frutas[i] + " ";
//	}
//		console.log(lista);
</script>

<!- Estrutura para calcular a área de um retângulo ->
<script>
//	function areaRetangulo (base, altura) {
//  return base * altura;
//	}
//	console.log(areaRetangulo(5,5));
</script>

<!- Estrutura para calcular a área de um triângulo ->

//	function areaTriangulo (base, altura) {
//  return (base * altura) / 2;
//	}
//	console.log(areaTriangulo(5,5));


<!- Estrutura para adicionar e retirar um item da primeira posição de um array ->

//	const frutas = ["Banana", "Laranja", "Maçã", "Manga"];
//	frutas.shift();
//	console.log(frutas);
//	frutas.unshift("Uva");
//	console.log(frutas);


<!- Estrutura para juntar arrays ->

//	const alunos = ["Ana", "Raul", "Cris"];
//	const professores = ["João","Maria"];
//	const diretores = ["Cecilie", "Lone"];
//	const todos = alunos.concat(professores, diretores);
//	console.log(todos);


<!- Estrutura para saber o maior numero do array ->

//	const numeros = [2, 45, 88, 6, 14, 43];
//	function maiorNumero(array){
//   return Math.max.apply(null, array); 
//	}
//	console.log(maiorNumero(numeros));


<!- Estrutura para saber o menor numero do array ->

//	const numeros = [2, 45, 88, 6, 14, 43];
//	function menorNumero(array){
//    return Math.min.apply(null, array); 
//	}
//	console.log(menorNumero(numeros));
