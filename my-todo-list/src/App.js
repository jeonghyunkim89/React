import './App.css';
import { useState } from 'react';
import MyContainer from './components/MyContainer';
import InsertItem from './components/InsertItem';
import TodoList from './components/TodoList';

function App() {
  const [list, setList] = useState([
    { text: '샘플', completed: false },
    { text: '데이터', completed: false }
  ]);

  // 할 일 추가 함수
  const addItem = (item) => {
    setList([...list, { text: item, completed: false }]);
  };

  // 할 일 삭제 함수
  const removeItem = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  // 할 일 완료 토글 함수
  const toggleComplete = (index) => {
    const newList = list.map((item, i) => 
      i === index ? { ...item, completed: !item.completed } : item
    );
    setList(newList);
  };

  return (
    <div className="App">
      <MyContainer title="My TodoList">
        <InsertItem addItem={addItem} />
        <TodoList list={list} removeItem={removeItem} toggleComplete={toggleComplete} />
      </MyContainer>
    </div>
  );
}

export default App;