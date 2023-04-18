import { useState } from 'react'

function Linn({linnaNimi, kirjeldus, pilt}) { //PascalCase
    //let kylastusi  = 3 <- nii ei saa defineerida reaktiivset muutujat
    const [kylastusi, setKylastusi] = useState(1)

    const suurenda = () => {
        //kylastusi += 1; <- nii ei saa muuta reaktiivse muutuja väärtus
        setKylastusi(kylastusi + 1)
        console.log("Külastusi: " + kylastusi)
    }

    const vahenda = () => {
        if (kylastusi < 1) {
            return;
        }
        setKylastusi(kylastusi - 1)
    }

    return (
        <div className="linn">
            <h1>{linnaNimi}</h1>
            <img src={pilt} alt={linnaNimi} />
            <div className="kirjeldus">
            {kirjeldus}
            </div>
            <div>
                <h3>Külastusi</h3>
                <button onClick={vahenda}>-</button>
                {kylastusi}
                <button onClick={suurenda}>+</button>
            </div>
        </div>
    )
}

export default Linn