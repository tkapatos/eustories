import React, { Component } from 'react';
import '../../app.scss';
import Module from '../../entities/Module';
import axios from 'axios';
import {Growl} from 'primereact/growl';
import {SERVER_API_URL} from "../../app.constants";

class HomeComponent extends Component {
 
  public modules: Array<Module> = [];

  state = {
    modules:this.modules
  }

  componentDidMount(){
    axios.get(SERVER_API_URL+'/modules')
    .then(response => {
        // handle success
        this.setState({
          modules:response.data.modules
        }) ;
    })
    .catch(error => {
      this.growl.show({severity: 'error', summary: 'Error Message', detail: 'Error while trying to retrieve the modules'}); 
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

  }
 
  render () {
    return (
      <div>
          <Growl ref={(el) => this.growl = el} />
         <h1>Hi, I'm a the home</h1>
      </div>
    );
  }
}

export default HomeComponent;
