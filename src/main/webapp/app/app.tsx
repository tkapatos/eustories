import React, { Component } from 'react';
import './app.scss';
import ModuleComponent from './Module/ModuleComponent';
import Module from './entities/Module';
import {Button} from 'primereact/button';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

class App extends Component {
  state = {
    modules:[
      {"code":"Admin","name":"Admin module","numOfStories":5},
      {"code":"esub","name":"submission","numOfStories":15},
      {"code":"ga","name":"Grant","numOfStories":25}
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      modules: [
        {"code":"Admin","name":"Admin module","numOfStories":5},
        {"code":"esub","name":newName,"numOfStories":15},
        {"code":"ga","name":"Grant","numOfStories":35}
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      modules: [
        {"code":"Admin","name":"Admin module","numOfStories":5},
        {"code":"esub","name":"submission","numOfStories":15},
        {"code":"ga","name":"Grant","numOfStories":45}
      ]
    } )
  }

  render () {
     return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <div>
          <Button label="Click" icon="pi pi-check" />
        </div>
        <button onClick={() => this.switchNameHandler('Evaluation')}>Switch Name</button>
        <ModuleComponent
          name={this.state.modules[0].name}
          numOfStories={this.state.modules[0].numOfStories} />
        <ModuleComponent
          name={this.state.modules[1].name}
          numOfStories={this.state.modules[1].numOfStories}
          click={this.switchNameHandler.bind(this, 'Evaluation 2')}
          changed={this.nameChangedHandler} ></ModuleComponent>
        <ModuleComponent
          name={this.state.modules[2].name}
          numOfStories={this.state.modules[2].numOfStories} />

      </div>

    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
