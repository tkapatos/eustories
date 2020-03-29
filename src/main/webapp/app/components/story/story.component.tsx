import React, { Component } from 'react';
import '../../app.scss';
import CriterionComponent from "./criterion.component";
import EditStoryComponent from './edit.story.component';
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import axios from 'axios';
import {SERVER_API_URL} from "../../app.constants";
import Story from '../../entities/Story';

interface InputProps {
  storyHasBeenUpdated:any,
  storyWasNotUpdated:any,
  story:Story,
}

interface StateProps {
  showEdit:boolean,
  storyToEdit:any
}

class StoryComponent extends Component<InputProps,StateProps> {

  state = {
    showEdit : false,
    storyToEdit:Story
  };

 constructor(props){
     super(props);
     
  }

 /*
 * Display modal for editing the story
 * pass the story to edit story component
 */
 editStory(storyToEdit,event){
  this.setState({
    showEdit:true,
    storyToEdit:storyToEdit
  });
}

 /*
  * Hides modal for editing the story
  */
 cancelEditStory = () => {
  this.setState({
    showEdit:false
  });
}

/*
 * called from edit story component when a story is saved
 * saves the story in the back-end
 * closes the modal
 * notifies the stories component that a story has been updated
*/
saveStory = (story) => {
  this.setState({
    showEdit:false
  });

  axios.put(SERVER_API_URL+'/stories',story)
  .then(response => {
    // notify the parent component to refresh the stories
    this.props.storyHasBeenUpdated();
   })
  .catch(error => {
    this.props.storyWasNotUpdated();
    console.log(error);
  })
  .finally(function () {

  });

}

 render () {
    /** display or not explanations */
    let explanations;
    if(this.props.story.explanations){
      explanations =<div className="card border-info mb-3">
                      <div className="card-body text-info">
                        <p className="card-text">{this.props.story.explanations}</p>
                      </div>
                    </div>
    }
    /** display or not to be discussed */
    let toBeDiscussed;
    if(this.props.story.toBeDiscussed){
      toBeDiscussed = <div className="card border-warning mb-3">
                        <div className="card-body text-warning">
                          <p className="card-text">{this.props.story.toBeDiscussed}</p>
                        </div>
                      </div>
    }

    /** display status   */
    let storyStatus;
    switch(this.props.story.status){
      case "TO_D0":
        storyStatus = <Badge variant="danger">To Do</Badge>
        break;
      case "IN_PROGRESS":
        storyStatus = <Badge variant="danger">In Progress</Badge>
      break;
      case "RESOLVED":
        storyStatus = <Badge variant="success">Resolved</Badge>
      break;
      case "IN_REVIEW":
        storyStatus = <Badge variant="info">In Review</Badge>
      break;
      case "COMPLETED":
        storyStatus = <Badge variant="success">Completed</Badge>
      break;
      default:
    }


    return (
      <div>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey={this.props.story.jiraId}>
                {this.props.story.jiraId} - {this.props.story.summary} ({this.props.story.points} points)
              </Accordion.Toggle>
              {storyStatus}&nbsp;
              <Button variant="primary" onClick={(e) => this.editStory(this.props.story, e)}>Edit</Button>
            </Card.Header>
            <Accordion.Collapse eventKey={this.props.story.jiraId}>
              <Card.Body>
                {this.props.story.criteria.map((criterion, index) => {
                  return <CriterionComponent key={index} criterion={criterion} />
                })}
                {explanations}
                {toBeDiscussed}
              </Card.Body>
            </Accordion.Collapse>
          </Card>

        </Accordion>
        <EditStoryComponent show={this.state.showEdit} cancel={this.cancelEditStory} save={this.saveStory} storyToEdit={this.state.storyToEdit}/>
      </div>
     );
  }
}

export default StoryComponent;
