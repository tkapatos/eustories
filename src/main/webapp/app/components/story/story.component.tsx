import React, { Component } from 'react';
import '../../app.scss';
import axios from 'axios';
import {Growl} from 'primereact/growl';
import {Column} from 'primereact/column';
import {SERVER_API_URL} from "../../app.constants";

class StoryComponent extends Component {
 
  state = {
    stories:[]
  }

  componentDidMount(){
    const initiativeCode = this.props.match.params.initiativeCode;

    axios.get(SERVER_API_URL+'/stories/'+initiativeCode)
    .then(response => {
        // handle success
        this.setState({
          stories:response.data
        }) ;
     })
    .catch(error => {
      this.growl.show({severity: 'error', summary: 'Error Message', detail: 'Error while trying to retrieve the stories'}); 
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
                <h5 className="card-title">Stories for ....</h5>
                hello stories
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default StoryComponent;
