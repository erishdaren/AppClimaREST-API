import Header from './components/Header';
import Formulario from './components/Formulario';
import React,{Component} from 'react';
import Error from './components/Error';
import Clima from './components/Clima';
export default class Class extends Component {
state = {
  error: '',
  consulta : {},
  resultado : {}
}
componentDidMount() {
  this.setState({
    erro: false
  })
}
//checar aqui por que no se muestra el resultado en el componente Clima
componentDidUpdate(prevProps, prevState ) {
   if(prevState.consulta !== this.state.consulta){
    this.consultarApi();
  }
}
consultarApi = () =>{
const {ciudad, pais} = this.state.consulta;
if(!ciudad || !pais) return null;
    //leer la url y agrgar el API KEY
    const appId = 'efabf770d1e4fa5d2218f5bbf08dbecc';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&APPID=${appId}`;
    //query con fetch api
    fetch(url)
    .then(respuesta =>{ return respuesta.json()})
    .then(datos => this.setState({
      resultado : datos
    }))
    .catch(error => {console.log(error)})
    }
  datosConsulta = respuesta => {
    if (respuesta.ciudad === '' || respuesta.pais === '' ) {
     this.setState({
       error: true
     })   
    } else {
    this.setState({
      consulta : respuesta,
      error : false
    })
    }
  }
    render() {
      const error = this.state.error;
      let resultado;
      if (error) {
        resultado = <Error mensaje="Ambos campos deben ser llenados !"/>
      } else {
        resultado = <Clima resultado = {this.state.resultado}/>
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
