import Title from "../../components/Title";
import { useState } from "react";
import { useRef } from "react";

const UseRefHook = () => {
    const[name, setName] = useState("아이유");
    const[gender, setGender] = useState("여자");

    const nameInput = useRef();

    const changeName = (e) => {
        setName(e.target.value);
    }

    const changeGender = (e) => {
        setGender(e.target.value);
    }

    const handlerReset = () => {
        setName('');
        setGender('남자');

        nameInput.current.focus();
    }

    const handlerSubmit = (e) => {
        alert(`${name} 님의 성별은 ${gender} 입니다.`);

        e.preventDefault(); // 기존 이벤트를 막는 방법 (=> 제출 x)
    }

    return(
        <>
            <Title value="UseRef" />

            <form onSubmit={handlerSubmit}>
                이름:
                <input 
                    type="text" 
                    value={name} 
                    onChange={changeName}
                    ref={nameInput}
                />

                <br/><br/>

                성별:
                <select value={gender} onChange={changeGender}>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>

                <br/><br/>

                <button type="submit">제출</button>
                <button type="reset" onClick={handlerReset}>초기화</button>
            </form>
        </>
    )
}

export default UseRefHook;