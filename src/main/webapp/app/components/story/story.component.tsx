import React, { Component } from 'react';
import '../../app.scss';
import CriterionComponent from "./criterion.component";
import EditStoryComponent from './edit.story.component';
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

class StoryComponent extends Component {

  state = {
    showEdit: false
  };

 constructor(props){
     super(props);
     
 }


 editStory(jiraId){
   console.log(jiraId);
   this.setState({
    showEdit:true
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

    return (
      <div>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey={this.props.story.jiraId}>
                {this.props.story.jiraId} - {this.props.story.summary} ({this.props.story.points} points)
              </Accordion.Toggle>
              <Button variant="primary" onClick={(e) => this.editStory(this.props.story.jiraId, e)}>Edit</Button>
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
        <EditStoryComponent show={this.state.showEdit} style={{ opacity: 1 }} />
      </div>
     );
  }
}

export default StoryComponent;
