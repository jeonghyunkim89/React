import styled from "styled-components";

const Container = styled.div`
    width: 95%;
    border: 1px dotted pink;
    padding: 15px;
    border-radius: 10px;
    height: 50px;
    margin: 0 auto;
    position: relative;
`
//outline: 커서가 있을때도 안보이는 css
const MyInput = styled.input`
    border: none;
    outline: none; 
    width: 100%;
    height: 100%;
`

const InputBar=({message, changeMessage, sendMessage})=>{

    const handlerKeyDown = (e) => {
        console.log(e);
        if (e.keyCode === 13) {
            sendMessage();
        }
    }

    return(
        <Container>
            <MyInput type="text" placeholder="챗봇과 대화하기"
                     value={message}
                     onKeyDown={handlerKeyDown} onChange={changeMessage} />
        </Container>
    )
}

export default InputBar;