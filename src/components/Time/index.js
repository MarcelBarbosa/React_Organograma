import Colaborador from '../Colaborador';
import './time.css';
import hexToRgba from 'hex-to-rgba';


const Time = ({ id, colaboradores, nome, cargo, imagem, cor, aoDeletar, mudarCor, aoFavoritar }) => {
    const css = { backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(cor, '0.4') }

    return (
        (colaboradores.length > 0) ? <section className='time' style={css}>
            <input type='color' className='input-cor' value={cor} onChange={evento => mudarCor(evento.target.value, id)} />
            <h3 style={{ borderColor: cor }}>{nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {

                    return <Colaborador
                        aoFavoritar={aoFavoritar}
                        favorito={colaborador.favorito}
                        key={indice}
                        id={colaborador.id}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        cor={cor}
                        aoDeletar={aoDeletar}
                    />
                })}
            </div>
        </section>
            : ''
    )
}

export default Time