import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './formulario.css'

const Formulario = (props) => {



    const[nome, setNome] = useState('')
    const[cargo, setCargo] = useState('')
    const[imagem, setImagem] = useState('')
    const[time, setTime] = useState('')
    const[nomeTime, setNomeTime] = useState('')
    const[corTime, setCorTime] = useState('')


    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
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
                    type="text"
                    />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                    type="text"
                    />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                    type="text"
                    />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                    />
                <Botao>
                    Criar Card
                </Botao>
            </form>
            <form onSubmit={(evento) => {
                evento.preventDefault();
                props.cadastrarTime({ nome: nomeTime, cor: corTime })
            }}>
                <h2>Preencha os dados para criar um novo time</h2>
                <CampoTexto 
                    obrigatorio
                    label="Nome" 
                    placeholder="Digite o nome do time" 
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                    type="text"
                />
                <CampoTexto 
                    obrigatorio
                    label="Cor" 
                    placeholder="Digite a cor do time" 
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                    type="color"
                />
                <Botao>
                    Criar um novo time
                </Botao>
            </form>
        </section>
    )
}

export default Formulario