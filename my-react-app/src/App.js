import { BrowserRouter, Routes, Route } from 'react-router-dom';
// BrowserRouter as Router => Router 라는 이름으로 사용 가능!

import './App.css';
import Title from './components/Title';
import { Menubar } from './components/Menubar';
import ClassComp from './pages/ClassComp';
import FuncComp from './pages/FuncComp';
import UseStateHook from './pages/hook/UseStateHook';
import UseEffectHook from './pages/hook/UseEffectHook';
import UseRefHook from './pages/hook/UseRefHook';
import UseContextHook from './pages/hook/userContext/UseContextHook';
import UseMemoHook from './pages/hook/useMemo/UseMemoHook';
import UseCallbackHook from './pages/hook/useCallback/UseCallbackHook';

/*
  * react-router-dom 모듈
    : react로 생성된 SPA(Single Page Application) 내부에서 페이지 이동을
      가능하도록 만들어주는 모듈(라이브러리)

    - BrowserRouter
      : history API를 이용하여 history 객체를 생성
        라우팅을 진행할 컴포넌트 상위에 Router 컴포넌트를 생성하고 감싸주어야 함

    - Routes
      : 모든 Route의 상위 경로에 존재해야하고, location변경 시 하위에 있는 
        모든 Route중 현재 location과 맞는 Route를 찾아줌

    - Route
      : 현재 브라우저의 location(window.href.location 정보를 가져옴)
        => 상태에 따라 다른 element를 렌더링함
*/

function App() {
  return (
    <BrowserRouter>
      <header>
        {/* 아래 영역을 Title 이라는 컴포넌트로 분리 */}
        <Title value="나의 리액트 페이지" />
      </header>
      <main>
        {/* 메뉴를 표시할 부분을 Menubar 컴포넌트로 분리 */}
        <Menubar />
        <Routes>
          <Route path="/" element={<p>메인 페이지</p>} />
          <Route path="/cc" element={<ClassComp />} />
          <Route path="/fc" element={<FuncComp />} />
          <Route path="/us" element={<UseStateHook />} />
          <Route path="/ue" element={<UseEffectHook />} />
          <Route path="/ur" element={<UseRefHook />} />
          <Route path="/uc" element={<UseContextHook />} />
          <Route path="/um" element={<UseMemoHook />} />
          <Route path="/ucb" element={<UseCallbackHook />} />
        </Routes>
      </main>
      <footer>
        <p>&copy; KH</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
