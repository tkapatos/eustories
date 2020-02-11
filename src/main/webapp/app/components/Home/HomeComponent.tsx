import React, { Component } from 'react';
import '../../app.scss';
import Module from '../../entities/Module';
import axios from 'axios';

class HomeComponent extends Component {
 
  public modules: Array<Module> = [];

  state = {
    modules:this.modules
  }

  componentDidMount(){
    axios.get('http://localhost:8080/modules')
    .then(response => {
        // handle success
        this.setState({
          modules:response.data.modules
        }) ;
    })
    .catch(error => {
       console.log(error);
    })
    .finally(function () {
      // always executed
    });

  }
 
  render () {
    return (
      <div>
         <h1>Hi, I'm a the home</h1>
      </div>
    );
  }
}

export default HomeComponent;
