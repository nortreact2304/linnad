function Linn({linnaNimi, kirjeldus, pilt}) { //PascalCase
    return (
        <div className="linn">
            <h1>{linnaNimi}</h1>
            <img src={pilt} alt={linnaNimi} />
            <div className="kirjeldus">
            {kirjeldus}
            </div>
        </div>
    )
}

export default Linn