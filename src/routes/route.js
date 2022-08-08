const express = require('express');
const { fromPairs } = require('lodash');
const lodash = require('lodash')
const abc = require('../introduction/intro')
const xyz = require('../logger/logger')
const info = require('../util/helper')
const data = require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    xyz.welcome();
    info.printDate();
    info.printMonth();
    info.getBatchInfo();
    data.trim();
    data.toLowerCase();
    data.toUpperCase();
    const months = ["jan", "feb", "mar", "apr", "may", "june", "july", "aug", "sep", "oct", "nov", "dec"]
    console.log(lodash.chunk(months, 3))
    const oddNumber = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    console.log(lodash.tail(oddNumber, -1))
    const duplicateArray = lodash.union([1,2],[2,3],[4,5],[6,7],[1,7]);
    console.log(duplicateArray)
    const pairs = [['a', 1], ['b', 2], ['c',3],['d',4]]
    console.log(lodash.fromPairs(pairs))
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason