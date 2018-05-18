import React from "react"

export default class InputTask extends React.Component {
    constructor() {
        super();
        this.onHandleClick = this.onHandleClick.bind(this);
    }

    onHandleClick(){
        if(!this.props.addTask || this.refs.taskInput.value === "") {
            return;
        } else {
            this.props.addTask(this.refs.taskInput.value, this.refs.priority.options[this.refs.priority.selectedIndex].text);
            this.refs.taskInput.value = "";
        }
    }

    render() {
        return(
            <div>
                <input type="text" className="inputTask" ref="taskInput" size="30" placeholder="write here..." />
                <select title="Choose priority of your task" className="inputPrior" ref="priority">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
                <button className="addBtn" onClick = {this.onHandleClick}>Add</button>
               
                
            </div>
            
        )
    }
}


