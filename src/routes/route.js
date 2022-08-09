const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/movies', function(req, res){
    const movies = ['Harry Potter', 'The Shining', 'Batman', 'Iron Man']
    res.send(movies)
})

router.get('/movies/:indexNumber', function(req, res){
    const movies = ['Harry Potter', 'The Shining', 'Batman', 'Iron Man']
    let requestParams = req.params
    let movieName = requestParams.indexNumber
    for (let i in movies){
        if(movieName == i){
            return res.send(movies[i])
        }
    }
    res.send('Error: Put a valid index number')
    
})

router.get('/films', function(req, res){
    const films = [{
        id: 1,
        name: "The Shining"
    }, {
        id: 2,
        name: "Incendies"
    }, {
        id: 3,
        name: "Rang de Basanti"
    }, {
        id: 4,
        name: "Finding Nemo"
    }]

    res.send(films)
})

router.get('/films/:filmId', function (req, res) {
    const films = [{
        id: 1,
        name: "The Shining"
    }, {
        id: 2,
        name: "Incendies"
    }, {
        id: 3,
        name: "Rang de Basanti"
    }, {
        id: 4,
        name: "Finding Nemo"
    }]

    let requestParams = req.params
    let filmName = requestParams.filmId
    for (let i in films) {
        if (filmName == films[i].id) {
            return res.send(films[i])
        }
    }
    res.send('Error: No movie exists with this id')
})

router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})

module.exports = router;