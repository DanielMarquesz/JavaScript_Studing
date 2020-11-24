// Operador in

//algo in algumaLista;

//Arrays 
var arvore = new Array("pau Brasil", "Toreiro", "Mongólia", "Monte - Carlo", false)

console.log(0 in arvore)            //Retorna true, pois o index [0] está no array
console.log(5 in arvore)            //Retorna false, pois o index [5] não está no array
console.log("Toreiro" in arvore)    //Retorna false, pois o elemento procurado não é uma posição de array, apesar de estar contido nele.
console.log(arvore[0] === "pau Brasil" ? true : false )
console.log(arvore[4] === false ? "Verdade" : "É mentira" )
console.log("length" in arvore )    // length é uma propriedade de array


// Objetos Predefinidos
console.log("PI" in Math)           // true
const objs = new String("coral")
"lenght" in objs                    // true

// Objetos Personalizados
const personali = {marca: "Honda", modelo:"Accord", ano: 1998}
console.log("marca" in personali)   // true
console.log("Honda" in personali)   // false

// Verificando se é alguma instância
//objeto instanceof tipoObjeto

var dia = new Date(2018, 12, 26)
if (dia instanceof Date){
    console.log("Dia é uma instância de Date()")
}