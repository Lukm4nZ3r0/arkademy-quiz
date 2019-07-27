count_vowels = (kata='programmer') =>{
    let vokal = ['a','i','u','e','o']
    let splitArray = kata.toLowerCase().split('')
    let result = 0
    
    for(let i=0; i<splitArray.length ; i++){
        if(vokal.includes(splitArray[i])){
            result++
        }
    }

    return result
}

console.log(count_vowels())