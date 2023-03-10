import React, { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from './globalStyles'
import iconeCerto from "./assets/icone_certo.png"
import iconeErro from "./assets/icone_erro.png"
import iconeQuase from "./assets/icone_quase.png"
import logo from "./assets/logo.png"
import party from "./assets/party.png"
import sad from "./assets/sad.png"
import setaPlay from "./assets/seta_play.png"
import setaVirar from "./assets/seta_virar.png"
import Logo from "./Logo"
import Deck from "./Deck"
import Rodape from "./Rodape"

function App() {
  const cards = [
    { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
    { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
    { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
    { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
    { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
    { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
  ]
  const perguntas = ["Pergunta 1", "Pergunta 2", "Pergunta 3", "Pergunta 4", "Pergunta 5", "Pergunta 6", "Pergunta 7", "Pergunta 8"]
  const [numPerguntasRespondidas, setNumPerguntasRespondidas] = useState(0)
  return (
    <Wrapper>
      <GlobalStyle />
      <ContainerApp>
        <Logo />
        <Deck numPerguntasRespondidas={numPerguntasRespondidas} setNumPerguntasRespondidas={setNumPerguntasRespondidas} perguntas={perguntas} cards={cards} />
      </ContainerApp>
      <Rodape numPerguntasRespondidas={numPerguntasRespondidas} setNumPerguntasRespondidas={setNumPerguntasRespondidas} perguntas={perguntas}/>
    </Wrapper>
  );
}
const ContainerApp = styled.div`
display:flex;
justify-content: center;
align-items:center;
flex-direction:column;
`;
const Wrapper = styled.div`
position:relative;
min-height: 100vh
`;



export default App;
