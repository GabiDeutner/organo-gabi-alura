import CampoTexto from './componentes/CampoTexto';
import './Formulario.css'

const Formulario = () => {

    const times = (
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    )

    const (nome,setNome) = useState('')
    const (cargo,setCargo) = useState('')
    const (imagem,setImagem) = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log('Form foi submetido')
    }



    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o enderço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa obrigatorio={true} label="Time" itens={times}/>
                <Botao> Criar Card </Botao>
            </form>
        </section>
    )
}

export default Formulario;