import React,{ Component } from 'react';
import './app.css';
import ReactImage from './react.png';

export default class DateTime extends Component {
  timeZone() {
    //destination timezone offset, Bangkok = +7
    const destOffset = +7; 

   const today = new Date();  
    const localoffset = -(today.getTimezoneOffset()/60);
    
    const offset = destOffset-localoffset;
    const dt = new Date( new Date().getTime() + offset * 3600 * 1000)

    return dt;
 }

 render() {
    return (
      <div>
        <h2> Bangkok  {this.timeZone().d}</h2>
      </div>
    );
  }

}