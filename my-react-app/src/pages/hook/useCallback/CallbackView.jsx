import { useEffect, useState } from "react";

const CallbackView = (props) => {
    
    const[numbers, setNumbers] = useState([]);

    useEffect(() => {

        setNumbers(props.getNumbers());
        console.log("숫자가 변경되었습니다.");

    }, [props.getNumbers]);

    return(
        <>
            {
                numbers.map((item, index) => <div key={index}>{item}</div>)
            }
        </>
    )
}

export default CallbackView;