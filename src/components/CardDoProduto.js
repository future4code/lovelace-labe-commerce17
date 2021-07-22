import React from 'react';
import styled from "styled-components";
import Produtos from './Produtos';
import App from '../App';

const CardProduto = styled.div`
  background-color: coral;
  padding: 20px;
  border: 1px solid black;


`
const Photo = styled.img`
width: 10%;
height: 10%;
`
class CardDoProduto extends React.Component {
    
    
    render() {
      return (
        <CardProduto>
          <Photo src={this.props.imagem} alt={'Imagem do usuario'}/>
         <h2> {this.props.nome} </h2>
         <h4> R${this.props.preco},00 </h4>
          <button onClick="">Adicionar ao carrinho</button>          
        </CardProduto>
      );
    }
  }
  
  export default CardDoProduto;