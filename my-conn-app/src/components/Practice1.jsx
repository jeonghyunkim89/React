import { useState } from "react";
import {test1, test2, test3, test4} from '../services/testApi';

function Practice1 (){

    const [data, setData] = useState('');

    const changeData = async () =>{
        /*
        const data = test1();
        setData(data);
        */

        /* Promise 객체를 전달받아 처리
       test2()
       .then(result=>{
            console.log(result);
            setData(result.msg);
       }) */

            /* async/await 사용
      const result = await test3();
      console.log(result);
      setData(result.msg);
      */

      //axios 사용
      const result = await test4();
      console.log(result);
      if(result.status === 200){
        //요청 성공시...
        setData(result.data.msg);
      }
    }

    return(
        <>
            <h3>연습용 페이지</h3>
            <br />
            <button onClick={changeData}>테스트</button>
            <br />
            <textarea value={data} cols={30} rows={10} readOnly></textarea>
        </>
    )
}

export default Practice1;