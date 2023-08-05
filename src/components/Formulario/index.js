import { useState } from "react"
import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import './Formulario.css'

const Formulario = (props) => {

    const [cargo, setCargo] = useState('')
    const [nome, setNome] = useState('')
    const [image, setImage] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (e) => {
        e.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo, 
            image,
            time
        })
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
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
                    placeholder="Informe o endereço da imagem"
                    valor={image}
                    aoAlterado={valor => setImage(valor)}
                /> 
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />.
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario 