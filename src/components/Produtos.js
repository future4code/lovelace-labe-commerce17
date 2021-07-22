import React from 'react';
import CardDoProduto from './CardDoProduto';

class Produtos extends React.Component {
    
    render() {
      return (
        <div>
          <h3>Quantidade de produtos:{"numero de produtos"}</h3>
          <h3>Ordenação:</h3>
          {CardDoProduto}
        </div>
      );
    }
  }
  
  export default Produtos;