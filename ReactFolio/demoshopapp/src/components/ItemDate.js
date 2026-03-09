import './ItemDate.css'

function ItemDate(props) {

    const day=props.day;
    const month=props.month;
    const Year=props.Year;


    return (<div className='mfg-date'>
        <span>{day} </span>
        <span>{month} </span>
        <span>{Year}</span>
    </div>)
}



export default ItemDate;