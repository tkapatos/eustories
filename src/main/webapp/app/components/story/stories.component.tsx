import React, { Component } from 'react';
import '../../app.scss';
import axios from 'axios';
import {Growl} from 'primereact/growl';
import StoryComponent from "./story.component";
import {SERVER_API_URL} from "../../app.constants";

class StoriesComponent extends Component {

  state = {
    stories:[],
    initiativeCode:' '
  }

   growl:Growl;

  constructor(props){
       super(props);
       this.storyHasBeenUpdated = this.storyHasBeenUpdated.bind(this);
       this.storyWasNotUpdated = this.storyWasNotUpdated.bind(this);
   }

  /*
    * called from story.component when a story has been updated
   */
  storyHasBeenUpdated(){
     this.retrieveStories(this.state.initiativeCode);
     this.growl.show({severity: 'success', summary: 'Success Message', detail: 'The story was saved succesfully'});
  }

  /*
   * called from story.component when there was a server error when was updated
  */
  storyWasNotUpdated(){
     this.growl.show({severity: 'error', summary: 'Error Message', detail: 'The was an error during the update of the story'});
  }

  componentDidMount(){
    const code = this.props.match.params.initiativeCode;
    this.setState({
      initiativeCode : code
    });
    this.retrieveStories(code);
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
          return <StoryComponent key={story.id} story={story} storyHasBeenUpdated={this.storyHasBeenUpdated} storyWasNotUpdated={this.storyWasNotUpdated}/>
        })}

        </div>
    );
  }
}

export default StoriesComponent;
