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
     const timezone = this.timeZone();   
    return (
      <div className = "timeZone">          
        <h2> Bangkok </h2>
<p>{timezone.getDate()}/{timezone.getMonth()}/{timezone.getFullYear()}</p>
<p>{timezone.getHours()}:{timezone.getMinutes()}:{timezone.getSeconds()}</p>
      </div>
    );
  }

}