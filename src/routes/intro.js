
//This is private 
const batchName = "Plutonium"

const printName = function(){
    console.log('Batch is', batchName)
}



//This is the method to do public
module.exports.name = batchName


module.exports.printName = printName //We can aslo give same name