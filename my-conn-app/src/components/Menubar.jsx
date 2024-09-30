import { Link } from 'react-router-dom';
import styled from 'styled-components';

// styled(컴포넌트명)`css...`
const MyLink = styled(Link)`
    background-color: teal;
    color: #eee;
    padding: 10px;
    text-decoration: none;
    border-radius: 8px;
    
    &:hover {
        color: teal;
        background-color: #eee;
    }
`


export const Menubar = () => {
    return (
        <nav>
            <MyLink to="/">Home</MyLink>    |&nbsp;
            <MyLink to="/pt1">연습</MyLink>   |&nbsp;
            <MyLink to="/pt2">연습2</MyLink>
        </nav>  
    )
}