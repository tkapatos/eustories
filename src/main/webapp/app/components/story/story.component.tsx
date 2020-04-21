import React, { Component } from 'react';
import '../../app.scss';
import CriterionComponent from "./criterion.component";
import EditStoryComponent from './edit.story.component';
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import {DataTable} from 'primereact/datatable';
import {InputTextarea} from 'primereact/inputtextarea';
import {Column} from 'primereact/column';
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
  storyToEdit:any,
  criteria:any
}

class StoryComponent extends Component<InputProps,StateProps> {

  state = {
    showEdit : false,
    storyToEdit:Story,
    criteria:[]
  };

  clonedCriteria = {};

 constructor(props){
     super(props);
     this.onRowEditInit = this.onRowEditInit.bind(this);
     this.onRowEditSave = this.onRowEditSave.bind(this);
     this.onRowEditCancel = this.onRowEditCancel.bind(this);  
     this.editorForRowEditing = this.editorForRowEditing.bind(this);
     this.deleteCriterionButton = this.deleteCriterionButton.bind(this);
  }

  componentDidMount(){
      this.setState({
        criteria:this.props.story.criteria
      });
  }

  
/* triggered upon every change in a textarea */
onEditorValueChangeForRowEditing(props, value) {
  const updatedCriteria = [...props.value];
  updatedCriteria[props.rowIndex][props.field] = value;
  this.setState({criteria: updatedCriteria});
}

/** triggered when the user clicks to edit */
onRowEditInit(event) {
 this.clonedCriteria = {...event.data};
}

/** triggered when the user clicks to save a criterion*/
onRowEditSave(event) {
  this.saveCriteria([...this.state.criteria]);
}

/** triggered when the user clicks to cancel */
onRowEditCancel(event) {
  const criteria = [...this.state.criteria];
  criteria[event.index] = this.clonedCriteria;
  delete this.clonedCriteria;
  this.setState({
      criteria: criteria
  })
 
}

editorForRowEditing(props, field) {
  return <InputTextarea type="text" rows={5} cols={30} value={props.rowData[field]} 
  onChange={(e) => this.onEditorValueChangeForRowEditing(props, e.target.value)} />;
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

saveCriteria = (criteria) =>{
  axios.put(SERVER_API_URL+'/stories/'+this.props.story.jiraId+"/criteria",criteria)
  .then(response => {
    this.setState({
      criteria:criteria
    });
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

deleteCriterion(index:number){
  let criteria = [...this.state.criteria];
  criteria = criteria.filter(obj => obj.index !== index);
  this.saveCriteria(criteria);
}

addCriterion(){
  console.log('add criterion');
  let criterion = {
    index:this.state.criteria.length+1,
    given:'TYPE GIVEN',
    when:'TYPE WHEN',
    then:'TYPE THEN'
  };
  const criteria = [...this.state.criteria];
  criteria.push(criterion);
  this.setState({
    criteria:criteria
  });
}

deleteCriterionButton(rowData,column){
  return <div>
      <Button variant="danger" size="sm" onClick={() => this.deleteCriterion(rowData.index)}>Delete</Button>
    </div>;
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
       <div className="row">
                <div className="col-12">
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
                {/* this.props.story.criteria.map((criterion, index) => {
                  return <CriterionComponent key={index} criterion={criterion} />
                }) */}
                 <div className="row">
                  <div className="col-12">
                    <Button variant="primary" onClick={() => this.addCriterion()}
                     className="float-right" size="sm">New criterion</Button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    &nbsp;
                  </div>
                </div>
                 <DataTable className="card-text" value={this.state.criteria} 
                 onRowEditInit={this.onRowEditInit} onRowEditSave={this.onRowEditSave} onRowEditCancel={this.onRowEditCancel}
                 editMode="row" >
                    <Column field="given" header="Given" 
                    editor={(props) => this.editorForRowEditing(props, 'given')} />
                    <Column field="when" header="When" 
                    editor={(props) => this.editorForRowEditing(props, 'when')}/>
                    <Column field="then" header="Then" 
                    editor={(props) => this.editorForRowEditing(props, 'then')}/>
                    <Column rowEditor={true} style={{'width': '70px', 'textAlign': 'center'}}></Column>
                    <Column style={{'width': '80px', 'textAlign': 'center'}} 
                    body={this.deleteCriterionButton} />
                 </DataTable>
                {explanations}
                {toBeDiscussed}
              </Card.Body>
            </Accordion.Collapse>
          </Card>

        </Accordion>
        <EditStoryComponent show={this.state.showEdit} cancel={this.cancelEditStory} save={this.saveStory} storyToEdit={this.state.storyToEdit}/>
      </div></div>
     );
  }
}

export default StoryComponent;
