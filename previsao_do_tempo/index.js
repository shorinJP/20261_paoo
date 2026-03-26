require('dotenv').config()
const axios = require('axios')

const baseURL = 'https://api.openweathermap.org/data/2.5/forecast'

const q = 'Itu'

const appid = process.env.APPID

const units = 'metric'

const lang = 'pt_br'

const cnt = 3

const url = `${baseURL}?q=${q}&appid=${appid}&units=${units}&lang=${lang}&cnt=${cnt}`

const exercicioComAsyncAwait = async () => {
    try {
        const res = await axios.get(url)
        console.log(res)
        console.log("++++++++++++++++++++++++++++++++++++")
        console.log(res.data)
        console.log("++++++++++++++++++++++++++++++++++++")
        console.log(res.data.cnt)
        console.log("++++++++++++++++++++++++++++++++++++")
        console.log(res.data.list[0])
        console.log("++++++++++++++++++++++++++++++++++++")
        console.log(res.data.list[0].main.temp_max)

        let previsoes = res.data.list
        for (let previsao of previsoes) {
        console.log(`
            tempMin: ${previsao.main.temp_min},
            tempMax: ${previsao.main.temp_max},
            weather: ${previsao.weather[0].description}
        `)
        }
    }catch (erro) {
        console.log(`Erro: ${erro}`)
    }
}
exercicioComAsyncAwait()
    
/* axios.get(url)
.then(res => {
    console.log(res)
    console.log("-----------------")
    return res.data
})
.then(res => {
    console.log(res)
    console.log("-----------------")
    return res
})
.then(abc => {
    console.log(abc.cnt)
    console.log("-----------------")
    return abc.list
})
//complete o then para exibir o objeto que se encontra na primeira posição do list
.then(list1 => {
    console.log(list1[0])
    console.log("-----------------")
    return list1
})
.then(tempM => {
    console.log(tempM.temp_max)
    return tempM;
})
//mais um then interando sobrea a lista de previsões (fazer um for..of)
//para cada previsão, exibir temp minima, temp maxima e descrição 
.then(previsoes => {
    for(let previsao of previsoes){
        console.log(`
            Temp min: ${previsao.main.temp_min}. 
            Temp max: ${previsao.main.temp_max}.
            Description: ${previsao.weather[0].description}
        `)
        console.log('+++++++++++++++++++++++++')
        
    }
}) */