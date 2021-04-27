import React from 'react';
import ReactDOM from 'react-dom';
import  './index.css';
class Employee extends React.Component {
  state={counter:0};
  addEmployee = () => {
      this.setState({counter:this.state.counter+1});
      
  }
  render() {
    return <div>
        <h2>Employee Component...</h2>
        <button onClick={this.addEmployee}>Add Employee</button>  
        <p>
            <label>Add Employee Button is Clicked : <b>{this.state.counter}</b></label></p>        
    </div>
  }
}
const element = <Employee></Employee>
ReactDOM.render(element,document.getElementById('root'));
