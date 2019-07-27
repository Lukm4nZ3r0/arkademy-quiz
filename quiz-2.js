urutan = (values=5) =>{
    let teks = []
    let newteks = []
    let jumlahtitik
    let result = ''
    for(let i=0 ; i<values ; i++){
        teks.push()
        for(let j=1 ; j<values+1 ; j++){
            jumlahtitik=j-i // 5,4,3,2,1
        }
        for(let k=0 ; k<jumlahtitik ; k++){
            teks[i]+='*'
        }
        newteks[i] = teks[i].replace('undefined','')
        result+=newteks[i]+'\n'
    }

    return result
}

console.log(urutan(5))