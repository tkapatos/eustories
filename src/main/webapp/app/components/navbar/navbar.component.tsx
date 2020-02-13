import React, { Component } from 'react';
import {Menubar} from 'primereact/menubar';

class NavBarComponent extends Component {

    state = {
        items: [
            {label: 'Home', icon: 'pi pi-fw pi-home',url: 'http://primetek.com.tr'}
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