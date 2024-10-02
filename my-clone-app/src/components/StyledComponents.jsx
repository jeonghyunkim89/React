import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    min-height: 100vh;
    color: #fff;
    padding: 1.2em;
`
//100vh = 뷰포트기준 100% 라는 의미

/*********** 헤더 영역 *************/
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`

export const Logo = styled.span`
  font-family: 'godoMaum';
  font-size: 30px;
  color: #3eb489;

  &:hover {
    color: red;
    cursor: pointer;
  }
`

/************ 메인 영역 *************/
export const Main = styled.main`
    flex: 1
`

/************ 푸터 영역 *************/
export const FooterText = styled.p`
    font-size: 12px;
`