import Title from "../../components/Title";
import { useState } from "react";

/*
    - Hook ? 함수형 컴포넌트에서 상태(state), 생명주기(life cycle)
             의 기능을 사용할 수 있게 해줌
             class 내에서 동작 안됨! class 없이 리액트 특징적인 부분을
             사용할 수 있게 해줌
    
    - useState 사용법
        const [변수명, set변수명] = useState(초기값);

        * 변수명 : 상태명(state)
        * set변수명 : 해당 상태를 변경할 함수명
        
        * state => 컴포넌트의 상태값
        * useState => 컴포넌트의 상태를 생성하고 관리할 수 있게 해주는 리액트 훅(react hook)
        
    - 컴포넌트를 상태값이 변경되면 이를 확인하고 요소를 리렌더링 해줌
*/

function UseStateHook() {
    
    const[count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);

        console.log(count);
    }

    const decrease = () => {
        setCount(count - 1);
    }

    return (
        <>
            <Title value="UseState" />
            <div>
                <span>COUNT: {count}</span>
                <div>
                    {/* <button onClick={increase}>+</button> */}
                    <button onClick={() => {increase()}}>+</button>
                    <button onClick={decrease}>-</button>
                </div>
            </div>
        </>
    )
}

export default UseStateHook;