barisan = (angka=4) =>{
    let barisan = []

    for(let i=0 ; i<angka ; i++){
        barisan.push({})
        for(let j=0 ; j<angka ; j++){
            barisan[i][j] = '*'
        }
    }
    for(let a=0 ; a<angka-1 ; a++){
        for(let i=0 ; i<(angka-1)-a ; i++){
            barisan[a][i] = ''
        }
    }

    return barisan
}

console.log(barisan())