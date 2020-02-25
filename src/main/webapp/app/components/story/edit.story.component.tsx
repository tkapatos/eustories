import React, { Component } from 'react';
import '../../app.scss';

class EditStoryComponent extends Component {

 constructor(props){
     super(props);
 }
 
 render () {
    if (!this.props.show) {
        return null;
    }
    return (
      <div>
          hello
      </div>
  
    );
  }
}

export default EditStoryComponent;
