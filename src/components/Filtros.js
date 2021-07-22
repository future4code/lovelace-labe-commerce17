import React from "react"
import styled from "styled-components";
import Styled from "styled-components"

const EstiloFiltros = styled.div `
    border: 2px solid black;
    padding: 20px 25px 30px 40px;
    width: 50vw;
    height: 80vh;

`



class Filtros extends React.Component{

    state = {
        InputValueMinimo: " ",
        InputValueMaximo: " ",
        InputValueBusca: " "
    };


    mudaValueMinimo = (event) => {
        this.setState({ InputValueMinimo: event.target.value });
      };
    
      mudaValueMaximo = (event) => {
        this.setState({ InputValueMaximo: event.target.value });
      };
    
      mudaValueBusca = (event) => {
        this.setState({ InputValueBusca: event.target.value });
      };

    render(){
      return(
  
          <div className = "EstiloFiltros">

              <h3>Filtros:</h3>

              <h3> Valor mínimo: </h3>
              <input type="number" onChange={this.mudaValueMinimo} value={this.state.InputValueMinimo} />

              <h3> Valor máximo: </h3>
              <input type="number" onChange={this.mudaValueMaximo} value={this.state.InputValueMaximo} />

              <h3> Busca por nome: </h3>
              <input type="text" onChange={this.mudaValueBusca} value={this.state.InputValueBusca} />

          </div>
     
    
      );
    }
  }
  
  
  
  export default Filtros;
  