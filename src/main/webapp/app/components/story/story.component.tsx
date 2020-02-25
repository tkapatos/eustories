import React, { Component } from 'react';
import '../../app.scss';
import CriterionComponent from "./criterion.component";
import EditStoryComponent from './edit.story.component';

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
      <div className="accordion" id={"accordion"+this.props.story.jiraId}>
      <div className="card">
        <div className="card-header" id={"heading"+this.props.story.jiraId}>
          <h2 className="mb-0">
            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target={"#collapse"+this.props.story.jiraId} aria-expanded="false" aria-controls={"collapse"+this.props.story.jiraId}>
              {this.props.story.jiraId} - {this.props.story.summary} ({this.props.story.points} points) 
            </button>
            <button type="button" className="btn btn-primary" onClick={(e) => this.editStory(this.props.story.jiraId, e)}>Edit</button>
          </h2>
        </div>
        <div id={"collapse"+this.props.story.jiraId} className="collapse" aria-labelledby={"#heading"+this.props.story.jiraId} data-parent={"#accordion"+this.props.story.jiraId}>
          <div className="card-body">
             {this.props.story.criteria.map((criterion, index) => {
                return <CriterionComponent key={index} criterion={criterion}/>
              })}
              
              {explanations}
              
              {toBeDiscussed}

          </div>
        </div>
      </div>
      </div>
      <EditStoryComponent show={this.state.showEdit} style={{opacity:1}}/>
   </div>
  


    );
  }
}

export default StoryComponent;
