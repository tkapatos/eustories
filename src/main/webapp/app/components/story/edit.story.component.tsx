import React, { Component } from 'react';
import '../../app.scss';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class EditStoryComponent extends Component {

 constructor(props){
     super(props);
     console.log("constructor");
     console.log(props);
 }

 componentWillReceiveProps(nextProps){
  console.log("componentWillReceiveProps");
  console.log(nextProps);
 }
 
 render () {

    let jiraId;
    if(this.props.storyToEdit){
      jiraId = this.props.storyToEdit.jiraId;
    }
  
    return (
      <Modal show={this.props.show}>
      <Modal.Header>Edit story {jiraId}</Modal.Header>
      <Modal.Body>asdfasdf</Modal.Body>
      <Modal.Footer>
      <Button variant="secondary" onClick={this.props.click}>Close</Button>
      </Modal.Footer>
    </Modal>
  
    );
  }
}

export default EditStoryComponent;
