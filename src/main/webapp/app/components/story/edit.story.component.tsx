import React, { Component } from 'react';
import '../../app.scss';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";

interface InputProps {
   storyToEdit:any,
   show:false,
   cancel:any,
   save:any
}

interface StateProps {
   summary: '',
   description:'',
   explanations:'',
   toBeDiscussed:'',
   points:0,
   status:'',
   jiraId:''
}

class EditStoryComponent extends Component<InputProps,StateProps> {

 constructor(props){
     super(props);
     this.state = {
      summary: '',
      description:'',
      explanations:'',
      toBeDiscussed:'',
      points:0,
      status:'',
      jiraId:''
   };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
 }

 componentWillReceiveProps(nextProps){
   if(nextProps.storyToEdit){
    this.setState({
      summary:nextProps.storyToEdit.summary,
      description:nextProps.storyToEdit.description,
      explanations: nextProps.storyToEdit.explanations,
      toBeDiscussed: nextProps.storyToEdit.toBeDiscussed,
      points: nextProps.storyToEdit.points,
      status: nextProps.storyToEdit.status,
      jiraId:nextProps.storyToEdit.jiraId
    });
  }
 }

 handleInputChange(event) {
  const target = event.target;
  const value = target.value;
  const name = target.name;
  this.setState({
    [name]: value
  });
}

handleSubmit(event) {
  event.preventDefault();
  this.props.save(this.state);
}

 render () {

    let jiraId;
    if(this.props.storyToEdit){
      jiraId = this.props.storyToEdit.jiraId;
    }

    return (
      <Modal show={this.props.show}  dialogClassName="modal-70w" >
      <Modal.Header>Edit story {jiraId}</Modal.Header>
      <Modal.Body>
        <Form onSubmit={this.handleSubmit}>
        <Form.Row>
        <Col>
          <Form.Group controlId="summary">
          <Form.Label>Summary</Form.Label>
          <Form.Control as="textarea" rows="2" name='summary' value={this.state.summary} onChange={this.handleInputChange}/>
          </Form.Group>
          </Col>
          <Col>
          <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows="3" name='description' value={this.state.description} onChange={this.handleInputChange}/>
          </Form.Group>
          </Col>
          </Form.Row>

          <Form.Row>
          <Col>
          <Form.Group controlId="explanations">
          <Form.Label>Explanations</Form.Label>
          <Form.Control as="textarea" rows="3" name='explanations' value={this.state.explanations} onChange={this.handleInputChange}/>
          </Form.Group>
          </Col>
          <Col>
          <Form.Group controlId="toBeDiscussed">
          <Form.Label>To be discussed</Form.Label>
          <Form.Control as="textarea" rows="3" name='toBeDiscussed' value={this.state.toBeDiscussed} onChange={this.handleInputChange}/>
          </Form.Group>
          </Col>
         </Form.Row>

          <Form.Row>
          <Col>
          <Form.Group controlId="points">
          <Form.Label>Points</Form.Label>
          <Form.Control type="text"  name='points' value={""+this.state.points} onChange={this.handleInputChange}/>
          </Form.Group>
          </Col>
          <Col>
          <Form.Group controlId="status">
          <Form.Label>Status</Form.Label>
          <Form.Control as="select" rows="3" name='status' value={this.state.status} onChange={this.handleInputChange}>
            <option>TO_D0</option>
            <option>IN_PROGRESS</option>
            <option>RESOLVED</option>
            <option>IN_REVIEW</option>
            <option>COMPLETED</option>
          </Form.Control>
          </Form.Group>
          </Col>
          </Form.Row>

        </Form>
      </Modal.Body>
      <Modal.Footer>
      <Button variant="primary" onClick={this.handleSubmit}>Save changes </Button>
      <Button variant="secondary" onClick={this.props.cancel} >Close</Button>
      </Modal.Footer>
    </Modal>

    );
  }
}

export default EditStoryComponent;
