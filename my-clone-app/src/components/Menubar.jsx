import { Link } from "react-router-dom";
import styled from 'styled-components';

const MyLink = styled(Link)`
    text-decoration: none;
    color: #fff;

    &:hover{
        color: red;
    }
`

const menuStyle = {
    display: 'flex',
    minWidth: '500px',
    justifyContent: 'space-between',
    flex: 0.5
}

function Menubar(){
    return(
        <nav style={menuStyle}>
            <MyLink to="/menu">홈</MyLink>
            <MyLink to="/tv">TV 프로그램</MyLink>
            <MyLink to="/movie">영화 프로그램</MyLink>
            <MyLink to="/newContent">최신 콘텐츠</MyLink>
            <MyLink to="/favorite">내가 찜한 콘텐츠</MyLink>
        </nav>
    )
}

export default Menubar;



