const user = {
    name: 'Daniel',
    lastName: 'Marques'
};

function getUserWithFullName(user){
    return {
        ...user,        // Spread Operator
        fullName: `${user.name} ${user.lastName}`  //literalString
    }
}

const userWithFullName = getUserWithFullName(user)
console.log(userWithFullName, user)

// Conceito de Imutabilidade: Passando um parametro para uma função, a função gera um novo objeto com base no parametro, mas sem alterar o arquivo do parametro original.