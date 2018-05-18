import React from "react"

export default class loadData extends React.Component {
    constructor() {
        super();
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler() {
        if(!this.props.loaddata) {
            return;
        } else {
            this.props.loaddata(true);
            
        }
    }
    render() {
        return(
            <div>
                <button className="btn btn-warning" onClick={this.onClickHandler}>Load</button>
            </div>
        )
    }
}