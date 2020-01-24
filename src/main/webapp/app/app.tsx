import React, { Component } from 'react';
import axios from 'axios';
import HomeComponent from "app/components/Home/HomeComponent";
import HeaderComponent from "app/components/Header/HeaderComponent";

class App extends Component {
  state = {
    username:'hi'
  }

  constructor(props){
    super(props);
  }

  componentDidMount(){
    axios.get('http://localhost:8080/users/current')
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
       // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

  }
  
  render () {
    return (
      <div>
        <HeaderComponent  username={this.state.username}/>
        <HomeComponent/>
      </div>
    );
  }
}

export default App;
