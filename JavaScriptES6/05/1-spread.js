// Operador que serve para "Concatenar" e "Iterar" de forma melhor variáveis, funções e objetos 

var partes = ['ombro','joelho']

var musica = ['cabeça', ...partes, 'e','pés']

console.log(musica)

function fn(x, y, z){
    console.log(x, y, z)
}
var args = ["das", 1, 2, true, 4]
fn(...args)

console.log(args[3])