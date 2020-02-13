import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import axios from 'axios';
import HomeComponent from "app/components/home/home.component";
import HeaderComponent from "app/components/header/header.component";
import NavBarComponent from "app/components/navbar/navbar.component";
import {Growl} from 'primereact/growl';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {SERVER_API_URL} from "./app.constants";

export class App extends Component {
  state = {
    username:''
  }
 
  constructor(props){
    super(props);
  }

  componentDidMount(){
    axios.get(SERVER_API_URL+'/users/current')
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
      <BrowserRouter>
      <div>
        <Growl ref={(el) => this.growl = el} />
        <HeaderComponent  username={this.state.username}/>
        <NavBarComponent  />
        <div>&nbsp;</div>
        <HomeComponent/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
