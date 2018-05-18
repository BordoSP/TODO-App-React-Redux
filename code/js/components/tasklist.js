import React from "react"
import ReactDOM from "react-dom"
import Task from "./task"


export default class TaskList extends React.Component {
    render() {
        console.log(this.props.task);
        return(
             <ul>
                {this.props.task.map((task, index) => <Task key = {index} task = {task}  deleteTask = {this.props.deleteTask} checkTask = {this.props.checkTask}/>)}
            </ul> 
            
        )
            
        
    }
}

