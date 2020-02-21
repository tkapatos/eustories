import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import HomeComponent from "app/components/home/home.component";
import AdminComponent from "app/components/admin/admin.component";
import InitiativeComponent from "app/components/initiative/initiative.component";
class NavBarComponent extends Component {
    
    render () {
        return (
            <div className="container-fluid">
               <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/admin" className="nav-link">Admin</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
               </div>
               <div>&nbsp;</div>
               <div>
               <Route path="/" exact component={HomeComponent}></Route>
               <Route path="/admin"  component={AdminComponent}></Route>
               <Route path="/initiatives/:moduleCode"  component={InitiativeComponent}></Route>
               </div>
            </div>
          );
      }
}

export default  NavBarComponent;