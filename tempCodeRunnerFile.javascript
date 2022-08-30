const array = [1,1,2,6,4,6,2]

function frequencyCounter(array){
    let obj= {};
    for (let i=0; i<array.length; i++){
        if(obj[array[i]]) return obj[array[i]]
        else return obj[array[i]] += 1
    }
    return obj
}

console.log(frequencyCounter(array))