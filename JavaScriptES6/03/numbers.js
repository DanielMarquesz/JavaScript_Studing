const myNumber = 12.4032

// Passar Número para String
const numberAsString = myNumber.toString()
console.log(numberAsString, typeof(numberAsString))

// Retornar número com o número de casas decimais
const fixedToDecimals = myNumber.toFixed(3)
console.log(fixedToDecimals, typeof(fixedToDecimals))

// Transforma uma string em Float
console.log("String para float: ", parseFloat("12.565"))

// Transforma uma string em Inteiro
console.log("String para inteiro: ", parseInt("12.565"))