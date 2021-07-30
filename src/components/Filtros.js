import React from "react"
import styled from "styled-components";


const EstiloFiltros = styled.div `
border: 1px solid black;
height: 450px;
width: 250px;
padding: 8px;
grid-auto-rows: 40px;
margin: 20px;
background-color: coral;
`
    
const EstiloInput = styled.label`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-bottom: 8px;
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
  
          <EstiloFiltros>

              <h3>Filtros:</h3>
              <EstiloInput>
              <h3> Valor mínimo: </h3>
              <input type="number" onChange={this.mudaValueMinimo} value={this.state.InputValueMinimo} />
              </EstiloInput>
              <EstiloInput>
              <h3> Valor máximo: </h3>
              <input type="number" onChange={this.mudaValueMaximo} value={this.state.InputValueMaximo} />
              </EstiloInput>
              <EstiloInput>
              <h3> Busca por nome: </h3>
              <input type="text" onChange={this.mudaValueBusca} value={this.state.InputValueBusca} />
              </EstiloInput>
          </EstiloFiltros>
     
    
      );
    }
  }
  
  
  
  export default Filtros;
  