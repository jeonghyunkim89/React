import styled from "styled-components";

const Container = styled.div`
    width: calc(100% - 25px);
    padding: 25px;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid red;
`

const Title = styled.h1`
    color: blue;
    text-align: center;
    margin: 0;
    font-size: 50px;
`

function MyContainer({children, title}) {

    console.log(children);
    
    return (
        <>
            <Title>{title}</Title>
            <Container>
                {children}
            </Container>
        </>
    )
}

export default MyContainer;