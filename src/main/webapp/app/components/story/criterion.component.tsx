import React, { Component } from 'react';
import '../../app.scss';


class CriterionComponent extends Component {

 constructor(props){
     super(props);
 }
 
 render () {
    return (
    <div>
        <div className="card-group">
            <div className="card">
                <div className="card-body">
                    <p className="card-text">{this.props.criterion.given}</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <p className="card-text">{this.props.criterion.when}</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <p className="card-text">{this.props.criterion.then}</p> 
                </div>
            </div>
        </div>  
  </div>
    );
  }
}

export default CriterionComponent;
