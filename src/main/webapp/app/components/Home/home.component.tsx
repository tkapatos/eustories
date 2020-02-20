import React, { Component } from 'react';
import '../../app.scss';
import axios from 'axios';
import {Growl} from 'primereact/growl';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {SERVER_API_URL} from "../../app.constants";

class HomeComponent extends Component {
 
  state = {
    modules:[]
  }

  componentDidMount(){
    axios.get(SERVER_API_URL+'/modules')
    .then(response => {
        // handle success
        this.setState({
          modules:response.data
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
      <div className="container-fluid">
          <Growl ref={(el) => this.growl = el} />
          <div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Pick the appropriate module</h5>
                <DataTable className="card-text" value={this.state.modules}>
                  <Column field="code" header="Code" />
                  <Column field="name" header="Name" />
                  <Column field="description" header="Description" />
                </DataTable>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
