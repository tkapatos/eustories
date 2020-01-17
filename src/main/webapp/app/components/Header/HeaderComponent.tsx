import React, { Component } from 'react';

class HeaderComponent extends Component {
  render () {
    return (
       <header>
          <a href="/">
               <div className="logo"></div>
          </a>
          <div>
               <h1 className="full">EU stories</h1>
           </div>
           <div className="right-content">
               Logged in as: <span className='color-primary'> </span>
           </div>
       </header>

    );
  }
}

export default HeaderComponent;
