import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
function Login(){
    return(
        <div name="header">
          <LoginForm>
          <Form>
            <LoginLetter>Login</LoginLetter>
            아이디<br/>
            <IDInput type = "text" name = "id"/><br/>
            비밀번호<br/>
            <Passwords type = "text" name = "password"/><br/>  
            <Forgot>
            비밀번호를 잊으셨나요?
            </Forgot><br/>
            <Button type="submit">로그인</Button><br/>
            <Allow>회원이 아니십니까?</Allow><LinkJoin>회원가입</LinkJoin>
          </Form>
          </LoginForm>
        </div>
    );
}


export default Login;