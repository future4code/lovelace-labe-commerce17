import React from 'react';
import Produtos from './Produtos';
import App from '../App';

class CardDoProduto extends React.Component {
    
    state = {
        produtos: [{
            id:1,
            nome:"Produto 1",
            preco:100,
            imagem: "URL IMAGEM",
        
          },
          {
            id:2,
            nome:"Produto 2",
            preco:200,
            imagem: "URL IMAGEM2",
          },
          {
            id:3,
            nome:"Produto 3",
            preco:300,
            imagem: "URL IMAGEM3",
          },
          {
            id:4,
            nome:"Produto 4",
            preco:400,
            imagem: "URL IMAGEM4",
          }]
      };

    render() {
      return (
        <div>
          <img>{this.state.produtos.imagem}</img>
          <h3>{this.state.produtos.nome}</h3>
          <span>{this.state.produtos.preco}</span>
          <button onClick="">Adicionar ao carrinho</button>          
        </div>
      );
    }
  }
  
  export default CardDoProduto;