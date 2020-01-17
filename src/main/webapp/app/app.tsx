import React, { Component } from 'react';
import HomeComponent from "app/components/Home/HomeComponent";
import HeaderComponent from "app/components/Header/HeaderComponent";

class App extends Component {
  render () {
    return (
      <div>
        <HeaderComponent/>
        <HomeComponent/>
      </div>
    );
  }
}

export default App;
