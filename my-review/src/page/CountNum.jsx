import { useRef, useState } from "react";

const taStyle = {
    resize: 'none',
    minHeight: '500px',
    minWidth: '70%'
}

function CountNum() {
    const [text, setText] = useState('');

    const taRef = useRef();

    const changeText = (e) => {
        setText(e.target.value);
    }

    const resetPage = () => {
        setText('');

        taRef.current.focus();
    }

    return(
        <div>
            <textarea style={taStyle} onChange={changeText} value={text}
                        ref={taRef}/>
            <div>공백 포함 {text.length}자</div>
            <div>공백 제외 {text.replace(/ /g, '').length}자</div>
            <hr></hr>
            <button onClick={resetPage}>초기화</button>
        </div>
    )
}

export default CountNum;