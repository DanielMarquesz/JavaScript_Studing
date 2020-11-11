
// Criação de um objeto

const myObjects = {
    firstName: "Daniel",
    lastName: "Marques"
}

// Recupera as chaves do objeto
console.log("Propriedades do Objeto User: ", Object.keys(myObjects))

console.log("Valores das propriedades do Objeto user: ", Object.values(myObjects))

console.log("Valores e Chaves dos objetos: ", Object.assign(myObjects))

// Previnindo alterações em um Objeto

const newObj = {foo: 'bar'}
// Object.freeze(newObj)

newObj.foo = 'Change'
console.log(newObj.foo)

// Deletando um novo objeto
delete newObj.foo

console.log(newObj)