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


class App extends React.Component{


  render(){
    return(
      
<div>


< Filtros />


      
< Produtos />

 <CardDoProduto
          id ={1}
          nome ={'Produto 1'}
          preco ={200}
          imagem = {'https://picsum.photos/50/51'} 
        />
        <CardDoProduto
          id ={2}
          nome ={'Produto 2'}
          preco ={100}
          imagem = {'https://picsum.photos/50/58'} 
        />
        <CardDoProduto
         id ={3}
         nome ={'Produto 3'}
         preco ={250}
         imagem = {'https://picsum.photos/50/53'} 
        />
        <CardDoProduto
         id ={4}
         nome ={'Produto 4'}
         preco ={150}
         imagem = {'https://picsum.photos/50/52'} 
        />
   



</div>




    );
  }
}



export default App;

