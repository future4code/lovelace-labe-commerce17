import React from 'react';
import Styled from "styled-components"
import CardDoProduto from "./components/CardDoProduto"
import Carrinho from "./components/Carrinho"
import Filtros from "./components/Filtros"
import ItemDoCarrinho from "./components/ItemDoCarrinho"
import Produtos from "./components/Produtos"
import './App.css';

const produtos = [
  {
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
  }
];


class App extends React.Component{


  render(){
    return(

<div>



<h1>OL´´AAAAÁ</h1>
{CardDoProduto}


</div>





    );
  }
}



export default App;

