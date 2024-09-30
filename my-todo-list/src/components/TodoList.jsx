import styled from "styled-components";

const ListContainer = styled.ul`
    width: calc(100% - 100px);
    margin: 12px 0px;
    padding: 0px 30px;
    border: 1px solid yellow;
`;

const TodoItem = styled.li`
    height: 30px;
    background-color: lightblue;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid black;
    padding: 0 10px;
    text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};  // 완료 시 취소선
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 5px;
`;

const Button = styled.button`
    padding: 2px 8px;
    border: none;
    cursor: pointer;
    background-color: ${({ type }) => (type === 'delete' ? 'red' : 'green')};
    color: white;
    border-radius: 5px;
`;

export default function TodoList({ list, removeItem, toggleComplete }) {
    return (
        <ListContainer>
            {
                list.map((todo, index) => 
                    <TodoItem key={index} completed={todo.completed}>
                        {todo.text}
                        <ButtonContainer>
                            <Button type="complete" onClick={() => toggleComplete(index)}>
                                {todo.completed ? '취소' : '완료'}
                            </Button>
                            <Button type="delete" onClick={() => removeItem(index)}>
                                삭제
                            </Button>
                        </ButtonContainer>
                    </TodoItem>
                )
            }
        </ListContainer>
    );
}
