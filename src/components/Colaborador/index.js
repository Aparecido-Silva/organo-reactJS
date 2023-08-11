import './Colaborador.css'

const Colaborador = ({ nome, image, cargo, corFundo }) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho'
                style={{backgroundColor: corFundo}}
            >
                <img src={image} alt={nome} ></img>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador