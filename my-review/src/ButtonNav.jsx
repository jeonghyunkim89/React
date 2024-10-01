import styled from "styled-components"
import { Link } from "react-router-dom";

const Links = styled(Link)`
    background-color: teal;
    color: #eee;
    margin: 10px;
    padding: 10px;
    text-decoration: none;
    border-radius: 8px;

    &:hover {
        color: teal;
        background-color: #eee;
    }  
`

function ButtonNav() {
    return(
        <nav>
            <Links to="/">홈</Links>
            <Links to="/1">타이머</Links>
            <Links to="/2">글자 수 세기</Links>
            <Links to="/stopwatch">스톱워치</Links>
        </nav>
    )
};

export default ButtonNav;