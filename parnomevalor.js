const saudacao = 'opa'  // contexto léxico 
 
function exec(){
     const saudacao = 'falaaa'
    return saudacao 
}

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Milton',
        numero: 41

    }
}

console.log(saudacao)
console.log(exec())