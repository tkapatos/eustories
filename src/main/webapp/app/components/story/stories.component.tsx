import React, { Component } from 'react';
import '../../app.scss';
import axios from 'axios';
import {Growl} from 'primereact/growl';
import Button from "react-bootstrap/Button";
import StoryComponent from "./story.component";
import {SERVER_API_URL} from "../../app.constants";
import Story from '../../entities/Story';
import EditStoryComponent from './edit.story.component';
import Initiative from 'app/entities/Initiative';
interface InputProps {
  match:any
}

interface StateProps {
  showAdd:boolean,
  initiativeCode:string,
  stories:Story[]
}

class StoriesComponent extends Component<InputProps,StateProps> {

  state = {
    stories:[],
    initiativeCode:' ',
    showAdd : false
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

  /*
  * Hides modal for adding a story
  */
 cancelAddStory = () => {
  this.setState({
    showAdd:false
  });
}

/*
 * called from edit story component when a story is added
 * saves the story in the back-end
 * closes the modal
*/
saveStory = (story:Story) => {
  this.setState({
    showAdd:false
  });
  const initiative = new Initiative();
  initiative.code = this.state.initiativeCode;
  story.initiative=initiative;
  axios.put(SERVER_API_URL+'/stories',story)
  .then(response => {
    this.growl.show({severity: 'success', summary: 'Success Message', detail: 'The story was added succesfully'});
    this.retrieveStories(this.state.initiativeCode);
  })
  .catch(error => {
    this.growl.show({severity: 'error', summary: 'Error Message', detail: 'Error while adding the story'});
    console.log(error);
  })
  .finally(function () {

  });

}

  render () {

    let editStoryComponent;
    if(this.state.showAdd){
      editStoryComponent = <EditStoryComponent show={true} cancel={this.cancelAddStory}
      storyToEdit={new Story()} save={this.saveStory}/>
    }

    return (
      <div className="container-fluid">
          <Growl ref={(el) => this.growl = el} />
        <div className="row">
          <div className="col-12">
            <Button onClick={(e) => this.setState({showAdd:true})}
             variant="primary" className="float-right" >New story</Button>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
           &nbsp;
          </div>
        </div>
        {this.state.stories.map((story, index) => {
          return <StoryComponent key={story.id} story={story} storyHasBeenUpdated={this.storyHasBeenUpdated} storyWasNotUpdated={this.storyWasNotUpdated}/>
        })}
        {editStoryComponent}
        </div>
    );
  }
}

export default StoriesComponent;
