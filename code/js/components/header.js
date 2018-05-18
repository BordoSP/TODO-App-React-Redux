import React from "react"
import styled from "styled-components"

const H2 = styled.h2`
    color: #7cb526;
    font-weight: bold;
    transition: 0.7s all;

    &:hover {
        transform: scale(1.1);
    }
`;
    


export default class Header extends React.Component {
    render() {
        return(
            <H2>TODO App</H2>
        )
    }
}

