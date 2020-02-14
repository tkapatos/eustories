import React, { Component } from 'react';

interface IHeaderProps {
  username?: string;
 }

class HeaderComponent extends Component<IHeaderProps> {
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
               Logged in as: <span className='color-primary'>{this.props.username} </span>
           </div>
       </header>
    );
  }
}

export default HeaderComponent;
