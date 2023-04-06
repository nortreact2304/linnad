function Linn(props) { //PascalCase
    return (
        <div className="linn">
            <h1>{props.linnaNimi}</h1>
            <img src={props.pilt} />
            <div className="kirjeldus">
            {props.kirjeldus}
            </div>
        </div>
    )
}

export default Linn