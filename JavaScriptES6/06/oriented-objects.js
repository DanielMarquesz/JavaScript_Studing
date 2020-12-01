

// Toda "Variável", instância criada por uma classe terá um elemento construtor chamado "__proto__",
// que é herdado da classe(função) pela qual foi gerada, que também possui um construtor chamado "prototype".


// function Animal(){
//     return this.qtdPatas = 4;
// }

// const cachorro = new Animal()

// console.log(`O cachorro possui: ${cachorro.qtdPatas} patas`)

// console.log(cachorro.__proto__ === Animal.prototype)    // True

// console.log(Animal.__proto__ === Function.prototype)    // True

/* Criação de classes Utilizando funções (Antiga Sintax)*/

// function Animal(qtdPatas){
//     this.qtdPatas = qtdPatas;
// }

// function Cachorro(morde){

//     Animal.call(this, 4);
//     this.morde = true;
// }

// function Galinha(voa){

//     Animal.call(this, 2);
//     this.voa = false;
// }

// const cachorro = new Cachorro;
// const galinha = new Galinha;

// console.log(cachorro)
// console.log(galinha)

/* Criação de classes Utilizando Class (Nova Sintax)*/

// class Anima {
//     constructor(qntPatas){
//         this.qntPatas = 4;
//     }
// }

// class Cachorr {
//     constructor(morde){
//         super(4)
//         this.morde = morde ;
//     }
// }

// const pug = new Cachorr(true)

/* =================================================================================== */

/* Utilização do atributo Static */

/* Que permite que uma classe seja chamada sem que ela seja instânciada */

// class Person{
//     static walk() {
//         console.log('walking ...');        
//     }
// }

// console.log(Person.walk())


/* =================================================================================== */


/* Modificadores de Acesso */

class Person{
    #name = '';             // Variável privada
    

    constructor(firstName){
        this.#name = firstName;        
    }

    setName(name, last) {         // Modificador de acesso para configurar o nome
        this.#name = name;        
    }

    getName(){
        return this.#name;  // Modificador de acesso para retornar o nome configurado
    }

}

var p = new Person('Daniel','Marques')

console.log(p)
console.log(p.getName())
console.log(p.name)

console.log(p.setName('solange'))
console.log(p.getName())
