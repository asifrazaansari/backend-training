const express = require('express');
const router = express.Router();
const WeatherController = require("../controllers/weatherController")



router.get("/Weather/london", WeatherController.getWeatherLondon)
router.get("/weather/londonTemp", WeatherController.getLondonTemp)
router.get("/weather/sortedCities", WeatherController.sortedCitiesWithTemp)


module.exports = router;