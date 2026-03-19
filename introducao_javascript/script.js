// const resultado = calculoDemorado(1000)
// console.log(resultado)
//console.log('script principal terminado...')

// const calculoDemorado = (n) => {
//     return new Promise((resolve, reject) => {
//         if(n <= 0){
//             reject('Apenas valores positivos')
//         }
//         else{
//             let ac = 0
//             for(let i = 1; i <= n; i++)
//                 ac += i
//             resolve(ac)
//         }
//     })
// }
//then/catch
// const promiseResultante = calculoDemorado(1000)
// promiseResultante
// .then((res) => {console.log('Resultado: ' + res)})
// .catch((err) => {console.log('Erro: ' + err)})

/* //se n <= 0, então rejeitar dizendo "Apenas valores positivos"
//caso contrário, fazer a conta e devolver o resultado

const calculoRapidinho = (n) => {
    return n > 0 ? Promise.resolve((n * (n + 1) / 2)) : Promise.reject('Apenas valores positivos')
}
calculoRapidinho(10)
.then(res => {console.log(`Resultado: ${res}`)})
.catch(err => console.log(`Erro: ${err}`))
 */

/* //promises
function calculoRapidinho(numero){
    return numero >= 0 ? Promise.resolve((numero + 1) * (numero / 2)) : Promise.reject("somento numeros positivos por favor")
}
const resultado = calculoRapidinho(100)
resultado.then((res) => console.log(res))
.catch((erro) => console.log(erro))

const resultado2 = calculoRapidinho(-500)
resultado2.then(res => console.log(res)).catch(erro => console.log(erro))
 */

/* //somar os valores 1, 2, 3 ...,n, sendo um valor passado como parametro
//defini-la com o nome calculoDemorado
const calculoDemorado = (n) => {
    return new Promise((resolve, reject) => {
        let res = 0
        for(let i = 1; i <= n; i++) res += i
        resolve(res)
    })
}

const resultado = calculoDemorado(100)
//then e catch
resultado
.then((res) => {console.log(res)})
.catch(erro => console.log(`falhou ${erro}`))
console.log('fim do script principal') */


/* const fs = require('fs')
const nomeArquivo = 'arquivo.txt'
//função callback
const exibirConteudo = (erro, conteudo) => {
    console.log('A')
    if(erro){
        console.log(`Deu erro: ${erro}`)
    }
    else{
        console.log(conteudo.toString())
        const dobro = Number(conteudo.toString()) * 2
        const finalizar = (erro) => {
            console.log(erro ? "deu erro tentando salvar o dobro" : 'salvou o dobro com sucesso')
            console.log("C")
        }
        fs.writeFileSync('dobro.txt', dobro.toString(), finalizar)
        console.log("D")

    }
}

fs.readFile(nomeArquivo, exibirConteudo)
console.log('B') */

/* //represente uma calculadora como objeto JS, ela sabe somar e subtrair dois valores
//agende a execução da soma para daqui 5 segundos
//agende a execução da subtração para daqui meio segundo
//claro, exiba os valores no final
//no formato: 2 + 3 = 5
//1 - 1 = 0

const calc = {
    soma: (x, y) => x + y,
    sub: (x, y) => x - y,
  };
  
  setTimeout(() => {
    console.log(`2 + 3 = ${calc.soma(2, 3)}`);
  }, 5000);
  
  setTimeout(() => {
    console.log(`1 - 1 = ${calc.sub(1, 1)}`);
  }, 500); */


/* function demorada(tempo){
    const atualMaisTempo = new Date().getTime() + tempo
    while(new Date().getTime() <= atualMaisTempo);
    const d = 8 + 4
    console.log(`Tempo: ${tempo}`)
    return d
}
setTimeout(() => {demorada(2000)}, 2000)
setTimeout(() => {demorada(1000)}, 1000) */

/* setTimeout(() => {
    console.log("executada pela setTimeout")
}, 0)

const a = new Date() .getTime() + 5000
while(new Date() .getTime() <= a); 
console.log('Terminando o script principal') */

/* const a = 7 + 1 * 4
const b = 8 * 1

setTimeout(() => {
    const d = demorada()
    console.log(`d: ${d}`)
}, 1000)

const e = a + b
console.log(`e: ${e}`) */

/* const a = 7 + 6
const b = 7 + 1

const d = demorada()

const e = 2 + b + a 
console.log(`e: ${e}`) */

/* const a = 2 + 7
const b = 6 + 5
console.log(a + b) */

/* console.log('eu primeiro')
console.log('agora eu...')
console.log("sempre vou ser a última...:(") */

/* //objetos Javascript
let calculadora = {
    somar: (a,b) => a + b,
    subtrair: function(a,b){return a - b}
}

let res1 = calcularoda.somar(1, 2)
console.log(res1)
console.log(calculadora.subtrair(2, 1))
console.log(calculadora['subtrair'](2, 1)) */

/* //uma concessionario tem cnpj e um endereço. Ela possui alguns carros em estoque. cada carro tem
//marca, modelo e ano de fabricação
let concessionaria = {
    CNPJ: '18.715.383/0001-40',
    endereco: {
        logradouro: 'Avenida Afonso Pena',
        numero: 1212,
        bairro: 'Centro, BH'
    },
    carros: [
        {marca: "Fiat",  modelo: "Siena",  ano: 2008, proprietarios: [
            {
                nome: 'João', telefone: 65656565
            },
            {
                nome: 'Rodrigo', telefone: 5555555
            }
        ]},
        {marca: "Ford",  modelo: "Fusion",  ano: 2015, proprietarios: 0},
        {marca: "Chevrolet",  modelo: "Onix",  ano: 2025, proprietarios: 0},
        {marca: "Volkswagen",  modelo: "Golf GT",  ano: 2018, proprietarios: 0}
    ]
} */

/* //uma pessoa se chama Maria, tem 21 anos e mora na Rua B, numero 20
let pessoa ={
    nome: 'Maria',
    idade: 21,
    endereco: {
        logradouro: 'Rua B',
        numero: 20,
        bairro: 'Vila J'
    }
}
console.log(`${pessoa.nome} mora na ${pessoa.endereco.logradouro}.`)
console.log(`${pessoa['nome']} tem ${pessoa['idade']} anos. Ela mora na ${pessoa.endereco['logradouro']}, numero ${pessoa['endereco'].numero}.`) */


/* //uma pessooa cujo o nome é joão e tem 17 anos
let pessoa = {
    nome: 'João',
    ideda: 17
} */




/* //closure
function eAgora(){
    let cont = 1
    function f1(){
        console.log(cont)
    }
    cont++
    function f2(){
        console.log(cont)
    }
    cont++
    return{f1, f2}
}
let res = eAgora()
res.f1()
res.f2() */

/* function saudacoesFactory(saudacao, nome){
    let outra 
    return function(){
        console.log(`${saudacao}, ${nome}`)
    }
}
let olaJoao = saudacoesfactory('oi', 'João')
let tchauJoao = saudacoesFactory('tchau', 'João')
olaJoao()
tchauJoao() */

/* function f(){
    let nome= 'João'
    function g(){
        console.log(nome)
    }
    g()
}
f() */

/* let umaFuncao = function(){
    console.log("Fui armazenada numa variavel")
}
umaFuncao()

function f (funcao){
    funcao()
}

f(umaFuncao)

function g(){
    function outraFuncao(){
        console.log('fui criada pela g')
        return () => console.log ("e agora?")
    }
    return outraFuncao 
}

f(g()()) */

/* f(g())

const gResult = g()
gResult()
g()()() */

/* const valores = [1, 2, 3, 4]
const soma = valores.reduce((ac, v) => ac = v)
console.log(soma) */

/* const nomes = ['Ana Maria', 'Antonia', 'Rodrigo','Alex', 'Cristina']
const todosComecamComA = nomes.some(n => n.startsWith('A'))
console.log(todosComecamComA) */
/* const todosComecamComA = nomes.every(n => n.startsWith('A'))
console.log(todosComecamComA) */
/* //[A, A, R, A, C]
const res = nomes.map(nome => nome.charAt(0))
console.log(res) */
/* const apenasComA = nomes.filter(n=> n.startsWith('A'))
console.log(apenasComA) */

//funções
//arrow function
/* const dobrar = n => 2 * n
console.log(dobrar(6))
const triplicar = (n) => {console.log("vamos calcular o triplo de " + n)
    return 3 * n
}
console.log(triplicar(5))
//escreva uma funcao quue decida se um valor é par ou n
const numero_par = (numero) => numero % 2 === 0 */

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
console.log(v1.length)
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