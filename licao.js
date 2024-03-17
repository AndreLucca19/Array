//Nomes adicionados
let nomes = ['Thiago, Bruno, Felipe'];

nomes.push('André');
nomes.push('João');

console.log(nomes);


//Tirando nomes (pop)'
let carros = ['Mercedes', 'Porsche', 'Lamborghini', 'Corsa'];
let removerUltimoDaLista = carros.pop();
console.log(carros);

//Adiciona um elemento ao inicio da Array
let numeros = [1,2,3]
numeros.unshift(0);
console.log(numeros);

//Retorna um novo Array
let letras1 = ['a','b'];
let letras2 = ['c','d'];
let adicionar = letras1.concat(letras2);
console.log(adicionar);

//Altera o conteudo de uma Array 
let letra1 = ['a', 'b', 'c', 'd'];
letra1.splice(1, 2);
console.log(letra1)

//Remove a primeira tarefa feita, e mostra as restantes a serem terminadas
let tarefas = ['Estudar', 'Academia', 'Ler'];
let proximaTarefa = tarefas.shift();
console.log(`Próxima tarefa: ${proximaTarefa}`);
console.log('Tarefas restantes:', tarefas);

//Cria uma nova array com os resultados multiplicados
let numero1 = [1,2,3];
let numeroVezes2 = numero1.map(numero1 => numero1 * 2);
console.log(numeroVezes2);

//Vai executar uma função de cada vez no codigo
let numero2 = [1,2,3];
numero2.forEach (numero2 => {console.log(numero2 * 2);});

//Vai encontrar a posição de um número na Array e mostrar seu índice
let numero3 = [1, 2, 3, 4];
let index = numero3.indexOf(2);
console.log(index);

//Ira criar uma segunda lista de frutas com apenas algumas da lista anterior 
let listaDeFrutas = ['abacaxi', 'morango', 'melao', 'uva', 'laranja', 'banana'];
let selecionarFrutas = listaDeFrutas.slice(1, 4);
console.log(selecionarFrutas);