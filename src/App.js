import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      largo: 0,
      posicion: 0,
      ordenamiento: 'DESC',
      arr: '',
      pos: ''
    };
  }
  handleChangeLargo = event => {
    this.setState({
      largo: event.target.value,
    });
  };

  handleChangePosicion = event => {
    this.setState({
     posicion: event.target.value,
    });
  };

  handleChangeOrdenamiento = event => {
    this.setState({
      ordenamiento: event.target.value
    });


  };

  render() {

    return (
      <div className="App">
        <form>
          <div>
            <label htmlFor="largo">largo</label>
            <input
              key={"s"}
              id="3"
              type="number"
              name="largo"
              value={this.state.largo}
              onChange={this.handleChangeLargo}
            />
          </div>
          <div>
            <label htmlFor="posicion">posicion</label>
            <input
              id="3"
              key="posicion"
              type="number"
              name="posicion"
              value={this.state.posicion}
              onChange={this.handleChangePosicion}
            />
          </div>
          <div>
            <label htmlFor="ordenamiento">ordenamiento</label>
            <select
              name="ordenamiento"
              value={this.state.ordenamiento}
              onChange={this.handleChangeOrdenamiento} >
              <option value="desc">DESC</option>
              <option value="asc">ASC</option>
            </select>
          </div>
          <button
            type="button"
            onClick={this.handleAddShareholder.bind(this, this.state.largo, this.state.posicion, this.state.ordenamiento)}
            className="btn btn-primary">mostrar
            </button>
        </form>
        <p>
          {this.state.arr}
        </p>
        <p>
          {this.state.pos}
        </p>
      </div>
    )
  }

  handleAddShareholder = (largo, posicion, ordenamiento) => {
   let ant = 0;
    let nuevo = 1;
    let elemento = -1;
    let arreglo = [];
    arreglo.push(ant)
    for (let index = 1; index < largo; index++) {
      let val = ant + nuevo
      ant = nuevo;
      nuevo = val
      arreglo.push(val)
    }

    if (ordenamiento == 'asc') {
      arreglo.sort(function (a, b) { return a - b });

    } else {
      arreglo.sort(function (a, b) { return b - a });
    }


    let result = "";
    for (let index = 0; index < arreglo.length; index++) {
      const element = arreglo[index];
      if (element == posicion) {
        elemento = index;
      }
      result = result + element + "  "
    }

    this.setState({
      arr: result
    });
    let finalPos
    if (elemento == -1) {
      finalPos = ("no existe el elemento en el arreglo")
    } else {
      finalPos = ("la posiciòn del elemento indicado es " + (elemento + 1))
    }
    this.setState({
      pos: finalPos
    });
  };
}

export default App;
