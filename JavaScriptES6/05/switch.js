const fruit = 'uva'


switch (fruit){

    case 'Mamão':
        console.log("R$ 3,00 / KG")
        break;
    case 'banana':
    case 'uva':
    case 'morango':
        console.log("R$ 10,00 / KG")
        break;
    default:
        console.log('Produto inexistente!')
        break;
}