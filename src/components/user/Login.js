import React from 'react';
import styled from 'styled-components';

import { Link } from "react-router-dom";

function Login(){
  export default () => {

    const [Id, setId] = useState("");
    const [Password, setPassword] = useState("");

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(setFooterVisible(false))
        dispatch(setHeaderVisible(false))
        return () => {
            dispatch(setHeaderVisible(true))
        dispatch(setFooterVisible(true))
        } 
     })

  handledid = (e) =>{
      setId(e.currentTarget.value);
  }
  handledpassword = (e) =>{
     setPassword(e.currentTarget.value);
  }

const submit = (Login) => {
    return (
        // 사이트 주소
         fetch("", Form)
           .then(alert("1"))
          .then(this.props.history.push("/"))
          .catch((err) => {
            throw alert("");
          })
      );
}



  return(
      <Login>
        <G1><img src={g1}/></G1>
        <G2><img src={g2}/></G2>
        <G3><img src={g3}/></G3>
        <Title>Login</Title>
        <LoginForm>
          <label>아이디</label>
          <input type="text" name="id" onchange = {handledid}/>
          <label>비밀번호</label>
          <input type="password" name="password" onchange = {handledpassword}/>
          <Forgot>비밀번호를 잊으셨나요?</Forgot>
          <LoginButton>로그인</LoginButton> 
          <Join>회원이 아니십니까?<Link to='/join'>회원 가입</Link></Join>
          <SocialLogin>
            <p>다음 계정으로 로그인</p>
            <img src={kakao}/>
          </SocialLogin>
        </LoginForm>
      </Login>
    );
}
}


export default Login;