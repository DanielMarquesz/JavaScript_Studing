
// Cria um objeto
let users = {

    name: [         // Propriedade de um Objeto
         "Daniel",
         "Julia",
         "Juliana"
    ],

    passwords: {    // Propriedade de um Objeto

        Daniel: 1234,
        Julia: 321
    }
}

// console.log(users.name[2], users.name[0])
// console.log(users.passwords.usuario)


// Alterando as Propriedades de um objeto

// users.name[0] = "Laís"      // Substitui Daniel por Laís
// console.log(users.name)


// Criando uma nova propriedade de um objeto

users.passwords = "Nova Senha"
console.log(users)

users['passwords'] = 'Senha Nova'
console.log(users)
