//5 * 4 * 3 * 2 * 1
const fatorial = n => {
    if(n < 0)
        return Promise.reject('Valor nao pode ser negativo')
    let res = 1
    for(let i = 2; i <= n; i++){
        res = res * i 
    }
    return Promise.resolve(res)
}
//uma função para chamar com then Catch
function chamadaComThenCatch(){
    fatorial(5)
    .then((res) => console.log(`Resultado: ${res}`))
    .catch((erro) => console.log(`Erro: ${erro}`))

    fatorial(-5)
    .then((res) => console.log(`Resultado: ${res}`))
    .catch((erro) => console.log(`Erro: ${erro}`))
}
//uma função para chamar com async/await
const chamadaComAsyncAwait = async () => {
    try{
        const f1 = await fatorial(5)
        console.log(f1)
    }
    catch(erro){
        console.log(`Erro: ${erro}`)
    }
    try{
        const f2 = await fatorial(-5)
    }
    catch(erro){
        console.log(`Erro: ${erro}`)
    }
}
chamadaComAsyncAwait()

//chamadaComThenCatch()

/* async function hello(nome){
    return `oi, ${nome}`
}

const umaPromise = hello('Ana')
umaPromise.then((texto => console.log(`${texto}`))) */
