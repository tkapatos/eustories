import React, { Component } from 'react';
import axios from 'axios';
import HomeComponent from "app/components/Home/HomeComponent";
import HeaderComponent from "app/components/Header/HeaderComponent";
import {Growl} from 'primereact/growl';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export class App extends Component {
  state = {
    username:'hi'
  }
 
  constructor(props){
    super(props);
  }

  componentDidMount(){
    axios.get('http://localhost:8080/users/current')
    .then(response => {
        // handle success
        this.setState({
          username:response.data.username
        }) ;
    })
    .catch(error => {
      this.growl.show({severity: 'error', summary: 'Error Message', detail: 'Error while trying to retrieve the user'});
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
        <HeaderComponent  username={this.state.username}/>
        <HomeComponent/>
      </div>
    );
  }
}

export default App;
