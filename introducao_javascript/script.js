//funções
//arrow function
const dobrar = n => 2 * n
console.log(dobrar(6))
const triplicar = (n) => {console.log("vamos calcular o triplo de " + n)
    return 3 * n
}
console.log(triplicar(5))
//escreva uma funcao quue decida se um valor é par ou n
const numero_par = (numero) => numero % 2 === 0

/* const hello = nome => console.log('oi' + nome)
hello('Ana') */

/* const hello = () => {console.log('oi')}
hello() */


/* const dobrar = function(n){
    return 2 * n 
}
console.log(dobrar(2))
console.log(dobrar(undefined))
const triplicar = function(n = 5){
    return 3 * n
}
console.log(triplicar(4))
console.log(triplicar(undefined))

const produto = function(a, b){
    console.log(a * b)
}
produto(4, 3) */

/* function somar (a, b){
    return a + b
}
console.log(somar(2, 3)) */


/* //functions e arrow functions
function hello(){
    console.log('oi')
}
hello()
function hello(nome){
    console.log('oi, ' + nome)
}
hello('Ana') */


/* v1 = []
console.log(v1length)
v1[0] = 3.5
console.log(v1.length)
v1[10] = 'abc'
console.log(v1.length)
console.log(v1)
for(let i = 0; 1 < v1.length; i ++){
    console.log(v1[i])
}
 */



/* //comparação por igualdade
//Javascript == ou ===(usamos apenas esse)
console.log(1 == 1)
console.log(1 === 1)
console.log(1 == '1')
console.log(1 === '1') //false
console.log(true == 1)
console.log(1 == [1])
console.log(1 === [1]) //false
console.log(null == null)
console.log(null == undefined)
console.log([] == false)
console.log([] == []) //false
console.log([] === []) //false */

/* //coerção explicita
const n1 = 2
const n2 = '3'
const n3 = n1 + Number(n2)
console.log(`${n1} + ${n2} = ${n3}`) */




/* //coerção implicita
const n1 = 2
const n2 = '3'
const n3 = n1 + n2
console.log('${n1} + ${n2} = ${n3}') */




//tipos
//js é dinamicamente tipa
/* let a = 2 
console.log(typeof(a))
a = true 
console.log(typeof(a)) */





//declaração de variaveis
//cons, let e var
//var idade = 18
//console.log('Oi, ${nome}.')
//if (idade >= 18){
//    var nome = 'Maria'
//    console.log(`Parabens, ${nome}. Voce pode dirigir.`)
//}
//console.log("Até mais, " + nome + '.')


//var linguagem = 'Javascript'
//console.log('Aprendendo ${linguagem}')
//var linguagem = 'Java'
//console.log('Aprendendo' + linguagem)


//const nome = 'José'
//console.log(nome)
//nome = 'José Silva'
//console.log(nome)

//let nome = 'Maria'
//console.log(nome)
//nome = `meu nome é ${nome}.`
//console.log(nome)


//console.log('Hello, JS!')