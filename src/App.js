import React,{Component} from "react";
import './App.css';
import Person from './Person/Person';

class App extends Component {
 state = {
    persons: [
      {name :'Max', age : 28  },
      {name :'Manu', age : 29  },
      {name :'Stephanie', age : 20  }
    ],
    otherState: 'alun otro valor'
  };

  switchNameHandler = () => {
    // console.log('Fui picado');
    //Asi no se hacen las cosas para asignar un valor this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons :[
                {name :'Maximillian', age : 28  },
                {name :'Manuel', age : 29  },
                {name :'Stephanie', age : 27  }
              ]
      });
  }

  render(){
      return (
          <div className="App">
          <h1> Hola Soy una Aplicacion de React</h1>
              <button onClick={this.switchNameHandler} > Switch Name </button>
              <Person name={this.state.persons[0].name} age= {this.state.persons[0].age}/>
              <Person name= {this.state.persons[1].name} age= {this.state.persons[1].age} > Hobbie: Racing </Person>
              <Person name= {this.state.persons[2].name} age= {this.state.persons[2].age} />
          </div>
            );
        }
}

export default App;
