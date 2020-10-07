// 로그인에 들어가는 id,password
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

idhandle = (e) =>{
    setId(e.currentTarget.value);
}
passwordhandle = (e) =>{
   setPassword(e.currentTarget.value);
}

const submit = (Login) => {
    return (
        // 사이트 주소 비워둠
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
          <input type="text" name="id"/>
          <label>비밀번호</label>
          <input type="password" name="password"/>
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

