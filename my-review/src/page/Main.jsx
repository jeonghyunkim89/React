import { useState, useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../App";

function Main() {

    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');

    const userCtx = useContext(UserContext);
    const user = userCtx.data;  //userCtx.data => user

    function IdInput(e) {
        setId(e.target.value);
    }

    function PwdInput(e) {
        setPwd(e.target.value);
    }

    function handlerLogin(){
        userCtx.setData({id: id, pwd: pwd});
        //userCtx.setData => setUser
        //입력된 id, passwd를 context에 저장
    }

    return(
        <>
            {
                user.id === '' ? 

                <div>
                    <input type="text" placeholder="아이디" value={id} onChange={IdInput} /><br/>
                    <input type="password" placeholder="비밀번호" value={pwd} onChange={PwdInput} /><br/>
                    <input type="button" value="로그인" onClick={handlerLogin}/>
                </div>

                :

                <div>
                        <p>{user.id}님 반갑습니다 ^^</p>
                        <input type="button" value="로그아웃" onClick={()=>{userCtx.setData({id: '', pwd: ''})}} />
                </div>            
            }
        </>
    )
}

export default Main;
