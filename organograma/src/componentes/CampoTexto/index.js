import './CampoTexto.css';

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...` // exemplo interpolar strings com props

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input placeholder={placeholderModificada}/> 
        </div>
    )
}

export default CampoTexto;