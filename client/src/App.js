import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: []
    }
  }


  componentDidMount() {
    fetch('tasks')
    .then(res => {
      return res.json();
    })
    .then ( allTasks => {
      console.log(JSON.stringify(allTasks));
      this.setState({       // setting up the task
        tasks: allTasks
      });
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         </header>
         <h1> Tasks </h1>
         <TaskList tasks={this.state.tasks}/>
      </div>
    );
  }
}


class TaskList extends Component {

  render() {
    return (
      <ul>
        {console.log(this)}
        {this.props.tasks.map( task => (
          <li key={task._id}> {task.name} </li>
        ))}
      </ul>
    );
  }
}

export default App;
