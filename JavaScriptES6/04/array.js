const users = ['Daniel','Sonia','Leticia']

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Lais',
        age: 24,
        gender: gender.WOMAN
    },
    {
        name: 'Thais',
        age: 24,
        gender: gender.WOMAN
    },
    {
        name: 'Daniel',
        age: 23,
        gender: gender.MAN
    }
]


// Qntd de itens no array
console.log('Items:', persons.length);


// Verifica se é um array
console.log('A variável passada é um array! ' + Array.isArray(persons))


// Iterando os itens do Array
persons.forEach((person, index, arr ) => {
    console.log(`Nome: ${person.name} index: ${index}`);
});


// Filtrando Array - Somente faz a busca dos dados
const mens = persons.filter(person => person.gender === gender.WOMAN);
console.log(`Resultados da Busca: `, mens)


// Retorna um novo Array - Ao incluir ou remover um novo campo, um novo array é gerado.
const personWithCourse = persons.map(person =>{
    person.course = 'Introdução ao Javascript'
    return person;
})


// Retorno do Array com retorno de um curso.
console.log('Novo Array com Cursos:', personWithCourse)


// Gerar outro tipos de array
const totalAge = persons.reduce((jooj, person)=>{    // Soma a idade de todas as pessoas e as retorna.
    jooj += person.age
    jooj += 1
    return jooj
}, 0)

console.log('\n Soma das idades:', totalAge)


// Agregando outras operações

const totalEvenAges = persons
    .filter(person => person.age % 2 === 0)
    .reduce((age, person) => {
        age += person.age
        return age
    }, 0)

console.log('Valores pares', totalEvenAges)