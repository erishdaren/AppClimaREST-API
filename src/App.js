import Header from './components/Header';
import Formulario from './components/Formulario';
import React,{Component} from 'react';
import Error from './components/Error';

export default class Class extends Component {
state = {
  error: ''
}
componentDidMount() {
  this.setState({
    erro: false
  })
}
  datosConsulta = respuesta => {
    if (respuesta.ciudad === '' || respuesta.pais === '' ) {
     this.setState({
       error: true
     })   
    } else {
      console.log('correcto');
    }
    
  }
    render() {
      const error = this.state.error;
      let resultado;
      if (error) {
        resultado = <Error mensaje="Ambos campos deben ser llenados !"/>
      }
        return (
          <div className="App">
          <Header 
             title='Clima React' 
          />
     
          <Formulario 
          
                datosConsulta={this.datosConsulta}     
          />
          {resultado}
         
         </div>
        );
    }
}
