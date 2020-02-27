import React, { Component } from 'react';
import '../../app.scss';
import axios from 'axios';
import {Growl} from 'primereact/growl';
import StoryComponent from "./story.component";
import {SERVER_API_URL} from "../../app.constants";

class StoriesComponent extends Component {
 
  state = {
    stories:[]
  }

  refreshStories(){
    console.log("called stories");
  }

  componentDidMount(){
    const initiativeCode = this.props.match.params.initiativeCode;
    this.retrieveStories(initiativeCode);
  }

  retrieveStories(initiativeCode){
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
         
        {this.state.stories.map((story, index) => {
          return <StoryComponent key={story.id} story={story} refresh={this.refreshStories}/>
        })}
        
        </div>
    );
  }
}

export default StoriesComponent;
