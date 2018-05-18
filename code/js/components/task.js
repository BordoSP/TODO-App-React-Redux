import React from "react"

export default class Task extends React.Component {
    constructor() {
        super();
        this.onClickCheckHandler = this.onClickCheckHandler.bind(this);
        this.onClickDeleteHandler = this.onClickDeleteHandler.bind(this);
        
    }

    onClickCheckHandler() {
        if(!this.props.checkTask) {
            return;
        } else {
            this.props.checkTask(this.props.task.id);
        }
    }

    onClickDeleteHandler() {
        if(!this.props.deleteTask) {
            return;
        } else {
            this.props.deleteTask(this.props.task.id);
        }
    }

    styleChecked() {
        const stylesTrue = {
            textDecoration: "line-through"
        };

        const stylesFalse = {
            textDecoration: "none"
        };

        if(this.props.task.checked) {
            return stylesTrue;
        } else {
            return stylesFalse;
        }
    }

    priorStyle() {
        switch (this.props.task.priority) {
            case "1":
                return "low";
            case "2":
                return "low";
            case "3":
                return "low";
            case "4":
                return "med";
            case "5":
                return "med";
            case "6":
                return "med";
            case "7":
                return "med";
            case "8":
                return "high";
            case "9":
                return "high";
            case "10":
                return "high";
        }
    }

    priorName() {
        switch (this.props.task.priority) {
            case "1":
                return "Low";
            case "2":
                return "Low";
            case "3":
                return "Low";
            case "4":
                return "Medium";
            case "5":
                return "Medium";
            case "6":
                return "Medium";
            case "7":
                return "Medium";
            case "8":
                return "High";
            case "9":
                return "High";
            case "10":
                return "High";
        }
    }
    render() {
        return(
            <div className="taskList">
                <li style={this.styleChecked()}  onClick={this.onClickCheckHandler} >
                    {this.props.task.textTask}
                </li>
                <p className={this.priorStyle()} title = {this.props.task.priority}>Priority: {this.priorName()}</p>
                <button className="deleteBtn btn btn-danger" onClick={this.onClickDeleteHandler}>Delete</button>
            </div>
            
            
        )
    }
}

