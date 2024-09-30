import { useState } from "react";
import Title from "../../../components/Title";
import MemoView from "./MemoView";

function UseMemoHook() {

    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    function textInput(e) {
        setText(e.target.value);
    }

    function increase() {
        setCount(count + 1);
    }

    function decrease() {
        setCount(count - 1);
    }

    return(
        <>
            <Title value="UseMemo" />

            <button onClick={increase}>+</button>&nbsp;
            <button onClick={decrease}>-</button> <br/>
            <input type='text' onChange={textInput}/>

            <MemoView num={count} text={text} />
        </>
    )
}

export default UseMemoHook;