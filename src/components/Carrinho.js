
import { render } from '@testing-library/react';
import React from 'react'
import styled from 'styled-components';


const EstiloCarrinho = styled.div`
display: grid;
border: 1px solid black;
height: 450px;
width: 250px;
padding: 8px;
grid-auto-rows: 60px;
margin: 20px;
background-color: coral;

`




   
 class Carrinho extends React.Component {

    render() {
      return (
        <EstiloCarrinho>
        <div className="EstiloCarrinho">
          <h3>Carrinho:</h3>
          <p>Valor total: R$: 0,00 </p>
        </div>
        </EstiloCarrinho>
        
      );
    }
  }
   

export default Carrinho


