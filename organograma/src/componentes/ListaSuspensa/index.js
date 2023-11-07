import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <select required={props.required}>
                {props.itens.map(item => {
                 return <option key={index}>{item}</option>
                 })}
            </select>
        </div>
    )
}

export default ListaSuspensa;