import React from 'react';
import CardDoProduto from './CardDoProduto';
import styled from "styled-components";


const produtos = [
  {
    id:1,
    nome:"Produto 1",
    preco:100,
    imagem: "https://picsum.photos/200/151",

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
  }
];


class Produtos extends React.Component {

  state={

    ordem: "Crescente"
  }

  mudarOrdem = () => {
    if(this.state.ordem === "Crescente") {
      this.setState({ordem: "Decrescente" })
    }else{
      this.setState({ordem: "Crescente" })
    }
  }
  
    
    render() {
      return (
        <div>
          <h3>Quantidade de produtos: {"4"}</h3>
          
          <select value={this.state.ordem} onChange={this.mudarOrdem}>
          <option value="Crescente">Crescente</option>
          <option value="Decrescente">Decrescente</option>
          </select>


          {CardDoProduto}
        </div>
      );
    }
  }
  
  export default Produtos;