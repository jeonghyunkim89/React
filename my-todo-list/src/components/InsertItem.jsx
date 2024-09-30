import styled from "styled-components";
import { useState } from "react";
import { IoBowlingBallOutline } from "react-icons/io5";

const InsertInput = styled.input`
    border: none;
    border-radius: 50px 0px 0px 50px;
    background-color: violet;
    height: 40px;
    min-width: 250px;
    box-sizing: border-box;
`;

const InsertBtn = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    cursor: pointer;
    border-radius: 0px 50px 50px 0px;
    background-color: black;
    color: white;
`;

const InsertContainer = styled.div`
    width: 100%;
    display: inline-flex;
    justify-content: center;
`;

const InsertItem = (props) => {
    const [todoItem, setTodoItem] = useState('');

    const addTodo = () => {
        if (todoItem.trim()) {
            props.addItem(todoItem);  // 공백이 아닌 경우에만 추가
            setTodoItem('');          // 추가 후 입력란 초기화
        }
    };

    return (
        <InsertContainer>
            <InsertInput value={todoItem} placeholder="할일 입력" onChange={(e) => setTodoItem(e.target.value)} />
            <InsertBtn onClick={addTodo}>
                <IoBowlingBallOutline size={24} />
            </InsertBtn>
        </InsertContainer>
    );
};

export default InsertItem;
