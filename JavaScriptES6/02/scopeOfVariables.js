
//                                                 // Escopo Global

// (() => {

//     var test = "Valor dentro do Var"            // Escopo de Função
//     console.log(`Valor dentro da Função: ${test}`)

//     if (true){
        
//         let test = `Valor dentro do Let: `      // Escopo de bloco
//         console.log(`Valor do test dentro do if: ${test}`)
//     }

//     console.log(`Valor dentro do If após execução: ${test}`)

// })()


/* Variável Const */

// Const não permite a alteração de um tipo primitivo atribuído(String, inteiros...)
// mas caso um objeto seja instanciado dentro do const, é possível que qlteremos suas propriedades

const name = "Daniel Marques"

//name = "Dnaiel" // Não permitido

const users = {     // criação de objetos
    "fabrica": {
        name: 'Vidal',
        pass: '1234'
    },
    "mercado": {
        name: 'Vidal',
        pass: '1234'
    }
}

users.fabrica.name = "Cival"  // const permite alteração de objetos, mas não permite que um objeto seja sobescrito

const fornecedores =  ["Casas Bahia", "Americanas", "Marisa"]

// é possível adicionar e remover itens de um array

fornecedores.push("Oracle") // Adicionando

fornecedores.shift() // Removendo (O primeiro)

// fornecedores = ["daniel","marques"] mas não é possível sobescrever um array

console.log(name)
console.log(users)
console.log(fornecedores)