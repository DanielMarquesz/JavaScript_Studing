// Uma closure (fechamento) trata-se de um tipo especial de objeto que combina duas coisas:
// a função e o ambiente onde a função foi criada. Este ambiente consiste de quaisquer variáveis 
// que estavam no escopo naquele momento em que a função foi criada.

function init(){

    const exemplo = "Meu amigo jooj."

    return function(){
        console.log(`1 - O valor da variável exemplo é: ${exemplo}`)

        return function(){
            console.log(`2 - O valor da variável exemplo é: ${exemplo}`)

            return function(){
                console.log(`3 - O valor da variável exemplo é: ${exemplo}`)
            }
        }
    }
}

init()()()()

// const initFn1 = init()
// const initFn2 = initFn1()
// const initFn3 = initFn2()
// initFn3()