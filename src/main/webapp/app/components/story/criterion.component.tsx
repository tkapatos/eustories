import React, { Component } from 'react';
import '../../app.scss';
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
class CriterionComponent extends Component {

 constructor(props){
     super(props);
 }
 
 render () {
    return (
        <div>
            <CardGroup>
                <Card>
                    <Card.Body>
                        <Card.Text>
                            {this.props.criterion.given}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Text>
                            {this.props.criterion.when}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Text>
                            {this.props.criterion.then}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
  }
}

export default CriterionComponent;
