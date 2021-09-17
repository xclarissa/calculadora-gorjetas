import { useState } from 'react';
import './App.css';
import styled from 'styled-components';

const Div = styled.div`
  text-align: center;
`
const Title = styled.h1`
  color: #363636;
`
const P = styled.p`
  color: #363636;
`
const Input = styled.input`
  width: 200px;
  height: 20px;
  color: white;
  background-color: #A9A9A9;
  border: none;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`

function App() {
  
  const [conta, setConta] = useState()
  const [porcentagem, setPorcentagem] = useState(10)

  return (
    <Div className="App">
      <Title>Calculadora de Gorjeta</Title>

      <P>Valor da conta:</P>
      <Input type="number" value={conta} onChange={(e) => {setConta(parseFloat(e.target.value))}} />

      <P>Porcentagem da gorjeta: </P>
      <Input type="number" value={porcentagem} onChange={(e) => {setPorcentagem(e.target.value)}} />
      <hr />

      {conta > 0 &&
        <>
          <P>Subtotal: R$ {conta}</P>
          <P>Gorjeta ({porcentagem}%): R${Number(conta.toFixed(1)) * porcentagem / 100}</P>
          <P>Total: R$ {Number(conta + (conta * porcentagem/100)).toFixed(2)} </P>
        </>
      }
    </Div>
  );
}

export default App;
