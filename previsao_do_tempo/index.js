const axios = require('axios')

const baseURL = 'https://api.openweathermap.org/data/2.5/forecast'

const q = 'Itu'

const appid = '213df9ec83f7ee2da98f5948dfbb243f'

const units = 'metric'

const lang = 'pt_br'

const cnt = 3

const url = `${baseURL}?q=${q}&appid=${appid}&units=${units}&lang=${lang}&cnt=${cnt}`

axios.get(url)
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
    return list1[0].main
})
.then(tempM => {
    console.log(tempM.temp_max)
})