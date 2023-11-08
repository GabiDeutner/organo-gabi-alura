import './Time.css'

const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria}
    
    return (
        props.colaboradores.lenght > 0 && <section className='time' style={css}>
            <h3 style = {{borderColor: props.corprimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador
                    corDeFundo={props.corPrimaria}
                    key={colaborador.nome}
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem}
                />)}
            </div>
        </section>
    )
}

export default Time