import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import {Menubar} from 'primereact/menubar';
import HomeComponent from "app/components/home/home.component";
class NavBarComponent extends Component {

    state = {
        items: [
            {label: 'Home', icon: 'pi pi-fw pi-home',routerLink: ['/']}
        ]
    };
    
    render () {
        return (
            <div className="container-fluid">
              <div>
              <Menubar model={this.state.items}/>
               </div>
               
            </div>
             
        );
      }
}

export default  NavBarComponent;