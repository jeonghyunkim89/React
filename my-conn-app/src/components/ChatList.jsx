import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const MessageDiv = styled.div`
    float: right;
    text-align: right;
    border: 2px dotted pink;
`

const ResponseDiv = styled.div`
    float: left;
    text-align: left;
    border: 2px dotted skyblue;
`

const commonStyle = {
    borderRaius: '10px',
    padding: '15px',
    margin: '2px'
}

const ChatList = ({chatList, loading}) => {
    return(
        <Container>
            {   
                chatList.map((chat, index) => {
                    return (
                        <div key={index}>
                            <MessageDiv style={commonStyle}>
                                {chat.message}
                            </MessageDiv>
                            <br clear="both"/>
                            <ResponseDiv style={commonStyle}>
                                {chat.response}
                            </ResponseDiv>      
                        </div>
                    )
                })
            }
            {
                loading &&
                <div>
                    챗봇이 답장을 고민하고 있습니다..
                </div>
            }
        </Container>
    )
}

export default ChatList;