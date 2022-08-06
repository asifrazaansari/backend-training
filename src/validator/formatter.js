const cut = "  Asif Raza  ";

function trimmer(){
    console.log(cut.trim());
}

function lowerCase(){
    console.log(cut.toLowerCase())
}

function uppercase(){
    console.log(cut.toUpperCase())
}


module.exports.trim = trimmer;
module.exports.toLowerCase = lowerCase;
module.exports.toUpperCase = uppercase;