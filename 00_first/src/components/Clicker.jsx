// import { Component } from 'react';

import { useState } from "react";

function Clicker() {
    const [count, setCount] = useState(0);
    return (
        // 반드시 요소 하나만 리턴해야 함
        <div>
            <p>클릭 횟수 : {count}</p>
            <button onClick={() => setCount(count+1)}>클릭</button>
        </div>

    );
}

/*
class Clicker extends Component {
    render() {
    
    }
}

*/

export default Clicker;