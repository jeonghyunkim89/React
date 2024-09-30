import { useState } from 'react';
import {test5} from '../services/testApi';

const Practice2 = () => {

    const[list, setList] = useState([]);

    const testClick = async() => {
        console.log(await test5());
        
        const result = await test5();
            console.log(result);
        if(result.status === 200){
            setList(result.data.msg);
        }
    }

    return(
        <>
            <button onClick={testClick}>테스트</button>
            <br/>
            <table>
                <tr>
                    <th>이름</th>
                    <th>나이</th>
                    <th>직업</th>
                </tr>
                <tbody>
                {
                    list.map((item,index) =>{
                        return(
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.age}</td>                            
                                <td>{item.job}</td>
                            </tr>
                        )    
                    })      
                }
                </tbody>
            </table>
            
        </>
    )
}

export default Practice2;