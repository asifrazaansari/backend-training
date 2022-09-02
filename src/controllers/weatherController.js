let axios = require("axios");
const { options } = require("../routes/route");


let getWeatherLondon = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'http://api.openweathermap.org/data/2.5/weather?q=london&appid=306203d475080c537728decc7e041abf'
        }
        let result = await axios(options);
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}

const getLondonTemp = async function (req, res) {
    try {
        let options = {
            method: "get",
            url: 'http://api.openweathermap.org/data/2.5/weather?q=london&appid=306203d475080c537728decc7e041abf'
        }
        let result = await axios(options);
        let data = result.data.main.temp
        res.status(200).send({ temp: data, status: true })
    } catch (error) {
        res.status(500)({ msg: error.message })
    }
}

const sortedCitiesWithTemp = async function (req, res) {

    try {
        const cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let citieswithTemp = []
        for (let i = 0; i < cities.length; i++) {
            let obj = { city: cities[i] }
            let options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=306203d475080c537728decc7e041abf`
            }
            let result = await axios(options)
            obj.temp = result.data.main.temp
            citieswithTemp.push(obj)
        }
        let sortedCities = citieswithTemp.sort(function (a, b){
            return a.temp - b.temp
        })
        res.status(200).send({ data: sortedCities, status: true })

    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
}

module.exports.getWeatherLondon = getWeatherLondon
module.exports.getLondonTemp = getLondonTemp
module.exports.sortedCitiesWithTemp = sortedCitiesWithTemp
