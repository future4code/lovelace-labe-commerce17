import React from 'react';
import CardDoProduto from './CardDoProduto';
import styled from "styled-components";

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