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

//Altera o conteudo de uma Array Splice
let letra1 = ['a', 'b', 'c', 'd'];
letra1.splice(1, 2);
console.log(letra1)