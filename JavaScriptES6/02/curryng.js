//É a técnima de transformar uma função com N parametros em apenas uma função que recebe um parametro e para cada
// parametro recebemos uma função.

// Função comum
// function soma(a, b){
//     return a + b;

// }

// Função curryng 

function soma(a){       // Após oreceber A, dali em diante só será criada uma nova função aceitando um segundo parâmetro "b".
    return function(b){
        return a + b
    }
}

const soma2 = soma(2)

console.log(soma2(2))
console.log(soma2(3))
console.log(soma2(4))
console.log(soma2(5))