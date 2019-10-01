import React,{ Component } from 'react';
import './app.css';
import ReactImage from './react.png';

export default class Comp extends Component {


  componentDidMount(){

    setTimeout(() => { this.props.callback()},10000);
  }
  render() {
    return (
      <div>
        <h1>Helllo there {this.props.propOne}</h1>
      </div>
    );
  }
}
