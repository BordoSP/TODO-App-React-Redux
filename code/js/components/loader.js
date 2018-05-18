import React from "react"
import styled, { keyframes } from "styled-components"

const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const LoaderDivTrue = styled.div`
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: 65px;
    z-index: 1000;
    height: 20px;
    width: 20px;
    // background-color: red;
    margin: 20px auto 0 auto;
    border-radius: 50px;
    border: 5px solid white;
    border-top: 5px solid #90d42a;
    animation: ${rotate} 1s linear infinite;
`;

const LoaderDivFalse = LoaderDivTrue.extend`
    display: none;
`;


export default class Loader extends React.Component {
    constructor() {
        super();
    }

    checkIsLoading() {
        if(this.props.isLoading) {
            return <LoaderDivTrue />
        } else {
            return <LoaderDivFalse />
        }
    }
    render() {
        return(
            <div onClick={this.checkIsLoading}>
                {this.checkIsLoading()}
            </div>
        )
    }
}