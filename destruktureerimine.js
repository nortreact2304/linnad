const ylesanne = {
    kirjeldus: 'jaluta koera', 
    tehtud: false,
    tahtaeg: 'täna'
}


function valjastaYlesanne(yl) {
    console.log("Ülesanne: " + ylesanne.kirjeldus)
}

function valjastaYlesanne2({kirjeldus, tehtud}) {
    console.log("Ülesanne2: " + kirjeldus)
}




valjastaYlesanne(ylesanne)
valjastaYlesanne2(ylesanne)

const asjad = [
    'Nipitiri',
    (nimi) => {return "Tere, " + nimi}
]

//const tervitus = asjad[1]
//const nimi = asjad[0]
// ülevaloleva asemel võib destruktureerida massiivi:
const [nimi, tervitus] = asjad

console.log(tervitus(nimi))
