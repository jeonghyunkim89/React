import { useEffect, useState } from 'react';
import './App.css';
import Clicker from './components/Clicker';
import UserList from './components/UserList';

function App() {
  // const [count, setCount] = useState(0);
  // // [상태명, 상태변경시 사용할 함수명] = useState(초기값);

  // useEffect(() => {
  //   document.title = '클릭회수' + count;
  // })
  // // => 렌더링될 떄마다 실행


  function Test() {
    return (
      <p>여기는 테스트 컴포넌트 입니다.</p>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <Clicker />
        <Test />
      </header>
        <UserList />
    </div>
  );
}

export default App;
