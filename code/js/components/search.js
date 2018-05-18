import React from "react"

export default class Search extends React.Component {
    constructor() {
        super();
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler() {
        this.props.activeSearch("inSearch");
        this.props.valueSearch(this.refs.searchInput.value);
    }
    render() {
        return(
            <div>
                <input type="text" className="inputTask" size="20" placeholder="Live Search" ref="searchInput" onChange={this.onChangeHandler}/>
            </div>
        )
    }
}