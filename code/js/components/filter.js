import React from "react"
import styled from "styled-components"



export default class Filter extends React.Component {
    constructor() {
        super();
        this.onClickHandler = this.onClickHandler.bind(this);
    }
    onClickHandler() {
        this.props.activeTasks(this.refs.selectField.options[this.refs.selectField.selectedIndex].text);
    }

    render() {
        return(
            <div>
                <select className="selectFilter" ref="selectField">
                    <option>All</option>
                    <option>Active</option>
                    <option>Completed</option>
                    <option>Priority</option>
                </select>

                <button className="btn btn-primary" onClick = {this.onClickHandler}>Filter</button>
            </div>
        )
    }
}