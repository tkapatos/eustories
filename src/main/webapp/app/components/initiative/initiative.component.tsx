import React, { Component } from 'react';
import '../../app.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Growl} from 'primereact/growl';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {SERVER_API_URL} from "../../app.constants";

interface InputProps {
  match:any
}

class InitiativeComponent extends Component<InputProps> {
 
  state = {
    initiatives:[]
  }

  growl:Growl;

  componentDidMount(){
    const moduleCode = this.props.match.params.moduleCode;
   
    axios.get(SERVER_API_URL+'/initiatives/'+moduleCode)
    .then(response => {
        // handle success
        this.setState({
          initiatives:response.data
        }) ;
       
    })
    .catch(error => {
      this.growl.show({severity: 'error', summary: 'Error Message', detail: 'Error while trying to retrieve the initiatives'}); 
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

  }

  linkToStories(rowData,column){
    return <div>
        <Link to={"/stories/"+rowData.code}>{rowData.code}</Link>
      </div>;
  }
 
  render () {
    return (
      <div className="container-fluid">
          <Growl ref={(el) => this.growl = el} />
          <div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Pick the appropriate initiative</h5>
                <DataTable className="card-text" value={this.state.initiatives}>
                  <Column field="code" header="Code" body={this.linkToStories} />
                  <Column field="description" header="Description" />
                </DataTable>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default InitiativeComponent;
