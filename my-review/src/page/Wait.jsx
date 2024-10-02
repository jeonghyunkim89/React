import { useState, useEffect } from "react";
import styled from "styled-components";

const table = styled.table`
   
`

function Wait(){

    //useState : 상태관리 훅
    // const [상태명, set상태명] = useState(초기값);
    const [list, setList] = useState([
        {name: "아이유", num: 10, phone: "010-1010-1010"},
        {name: "차은우", num: 5, phone: "010-3030-3030"},
        {name: "카리나", num: 3, phone: "010-7070-7070"}
    ]); //대기 명단 관련 상태

    const [name, setName] = useState('');  //이름 입력 관련 상태
    const [num, setNum] = useState(0); //인원수 입력 관련 상태
    const [phone, setPhone] = useState(''); //연락처 입력 관련 상태


    //list상태가 변경될 때마다 실행
    //랜더링 두번되는게 싫으면 index.js파일에서 <React.StrictMode>를 주석처리한다.
    /*useEffect(()=>{
        console.log("******");
        console.log(list);
        console.log("******");
    }, [list]);
    */
    //function registerUser(){}
    const registerUser = () => {
        
        const newUser = {name: name, num: num, phone: phone}

        //list.push(newUser)

        //기존 데이터에 추가된 대기 명단을 반영
        setList([...list, newUser]);

        //입력 요소들을 초기화하기 위해 상태 변경
        setName('');
        setNum('');
        setPhone('');
    }

    return(
        <>
            <div align="center">
                <h3>엘식당 대기 명단 표</h3>
                <table border="1">
                    <thead style={{backgroundColor:'lightgrey'}}>
                        <tr>
                            <th>이름</th>
                            <th>인원 수</th>
                            <th>연락처</th>
                        </tr>
                    </thead>    
                        <tbody>
                            {
                                list.map((item, index) => {
                                    return (
                                        <tr key = {'wait'+index}>
                                            <td>{item.name}</td>
                                            <td style={{color: item.num > 5 ? 'red' : item.num > 3 ? 'orange' : 'blue' }}>{item.num}</td>
                                            <td className={item.num > 5 ? 'c-red' : 'c-blue' }>{item.phone === ''? '' : '♥'+item.phone}</td>
                                        </tr>
                                )
                            })
                            }
                        </tbody>
                </table>
                <hr></hr>

                <h4>새 대기자 추가</h4>
                    <div>
                        <input type="text" placeholder="이름 입력" value={name} onChange={(e)=> { setName(e.target.value); }} />
                        <input type="text" placeholder="인원 수 입력" value={num} onChange={(e)=> { setNum(e.target.value); }} />
                        <input type="text" placeholder="연락처 입력" value={phone} onChange={(e)=> { setPhone(e.target.value); }}/>
                        <button onClick={registerUser}>등록</button>
                     </div>
            </div>
        </>
    )
}

export default Wait;