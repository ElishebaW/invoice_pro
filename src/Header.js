import  React , { Component } from 'react';
import {Link} from 'react-router-dom';


class Header extends  Component {
    render() {
      return (
        <div className='address'>
        <p>Please Remit Payment to:</p>
        <p>123 Main St</p>
        <p>Arlington, VA 20032</p>
         <Link to="#">Pay Now :)</Link>
        </div>

    )
  }
}


export default Header;
