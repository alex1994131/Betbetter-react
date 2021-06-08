import React, { Component } from 'react';



import '../../myaccount/cookieconsent.min.css';
import './filteredit.css'
import MyAccountHeader from './myaccount-part/header.js';
import MyFillterEdit from './myaccount-part/fillter-edit/fillteredit.js';


class Public extends Component {
  render() {
    return (
      <div>
        <MyAccountHeader/>
        
        <div className = "container-holder">                           
          <MyFillterEdit/>        
        </div>
      </div>
    );
  }
}

export default Public;