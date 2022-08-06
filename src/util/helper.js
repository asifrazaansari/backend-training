const today = new Date();

function printDate(){
    const date = today.getDate();
    console.log("Todays date is:" + " " +date)
}

function printMonth(){
    const month = today.getMonth() + 1
    console.log("Current month is:" + " " + month) 
}

function getBatchInfo(){
    console.log("Plutonium, Week3, Day3. The toipc for today is NodeJs module system and there dependencies")
}

module.exports.printDate = printDate;
module.exports.printMonth = printMonth;
module.exports.getBatchInfo  = getBatchInfo;


