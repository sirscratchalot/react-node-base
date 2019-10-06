import React,{ Component } from 'react';
import './app.css';
import ReactImage from './react.png';
import Comp from "./Comp.jsx";
import DateTime from './dateTime.jsx';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      simple:null,
      destOffset:"",

    }    
  }
componentWillmount() {
    this.setState({simple:"Not gotten"});
  }
  componentDidMount() {
    this.setState({propOne:this.props.propOne});
    fetch('/api/pomodoro')
      .then(res => res.json())
      .then(simple => this.setState({ simple: simple.simple }));
    setTimeout(() => { this.setState({propOne:"GOODBYE"})},5000);
  }

  render() {
    return (
      <div>
        <h1>{this.props.propOne}</h1>
        <Comp propOne={this.state.propOne} callback={() => { this.setState({propOne:"I WAS CALLED BACK"})}}/>
        <DateTime/>  
      </div>
     
    );
  }
}
