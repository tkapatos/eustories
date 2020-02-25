import React, { Component } from 'react';
import '../../app.scss';
import CriterionComponent from "./criterion.component";

class StoryComponent extends Component {

 constructor(props){
     super(props);
 }
 
 render () {
    let explanations;
    if(this.props.story.explanations){
      explanations =<div className="card border-info mb-3">
                      <div className="card-body text-info">
                        <p className="card-text">{this.props.story.explanations}</p>
                      </div>
                    </div>
    }

    let toBeDiscussed;
    if(this.props.story.toBeDiscussed){
      toBeDiscussed = <div className="card border-warning mb-3">
                        <div className="card-body text-warning">
                          <p className="card-text">{this.props.story.toBeDiscussed}</p>
                        </div>
                      </div>
    }

    return (
      <div className="accordion" id={"accordion"+this.props.story.id}>
      <div className="card">
        <div className="card-header" id={"heading"+this.props.story.id}>
          <h2 className="mb-0">
            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target={"#collapse"+this.props.story.id} aria-expanded="false" aria-controls={"collapse"+this.props.story.id}>
              {this.props.story.jiraId} - {this.props.story.summary} ({this.props.story.points} points)
            </button>
          </h2>
        </div>
        <div id={"collapse"+this.props.story.id} className="collapse" aria-labelledby={"#heading"+this.props.story.id} data-parent={"#accordion"+this.props.story.id}>
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
  


    );
  }
}

export default StoryComponent;
