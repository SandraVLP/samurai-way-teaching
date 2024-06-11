import styled from "styled-components";
import {NavLink} from 'react-router-dom'

const StyledUl = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: white;
`

const StyledLi = styled.li`
    cursor: pointer;
    text-decoration: none;
`
const StyledLink = styled(NavLink)`
    color: black;
    cursor: pointer;
    text-decoration: none;

    &.active {
        color: rgb(4, 149, 159);
    }
`

export const S = {
    StyledUl,
    StyledLi,
    StyledLink
}