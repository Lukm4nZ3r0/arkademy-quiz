barisan = () =>{
    let teks = ''
    let newteks = ''
    for(let i = 0 ; i<5 ; i++){
        newteks = newteks+'*'
        teks += newteks+'\n'
    }

    return teks
}

console.log(barisan())