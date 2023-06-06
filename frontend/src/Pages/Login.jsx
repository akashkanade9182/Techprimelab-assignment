import React,{useState} from 'react'
import "../Styles/Login.css"
import { Input,FormHelperText,FormErrorMessage,FormLabel,FormControl,InputGroup,InputRightElement,Box,Button, Hide } from '@chakra-ui/react'
import { ReactComponent as Showpassword } from '../assets/showpassword.svg';
import { ReactComponent as Hidepassword } from '../assets/hide-password.svg';
import { ReactComponent as Logoicon } from '../assets/Logo.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getLogin } from '../Redux/AuthReducer/action';

const Login = () => {
     const [show, setShow] = useState(false)
     const [email, setEmail] = useState('');
     const[password,setPassword]=useState("")
     const[isEmail,setisEmail]=useState(false)
    const [isPassword,setisPassword]=useState(false);
    const dispatch=useDispatch();
    const navigate=useNavigate();
const handleSubmit=()=>{
  if(email===""){
    setisEmail(true);
  }
  if(password===""){
    setisPassword(true)
  }
  if(email!=="" && password!==""){
    let data={
      email,password
    }
    dispatch(getLogin(data,navigate))
  }

}
const handleEmailChange=(e)=>{
  if(e.target.value!==""){
    setisEmail(false);
    setEmail(e.target.value)
  }else{
    setEmail(e.target.value)
  }
}

const handlePasswordChange=(e)=>{
  if(e.target.value!==""){
    setisPassword(false);
    setPassword(e.target.value)
  }else{
    setPassword(e.target.value)
  }
}

const handleHide=()=>{

}

   
  return (
    <div className="login">
<header>
  <div className="logo-box">
  <Logoicon/>
  <h1>Online Project Management</h1>
  </div>
  

</header>
<div className="login-box">
<h1>Login to get started</h1>
<FormControl mt="30px" isInvalid={isEmail}>
      <FormLabel fontWeight={"bold.100"} color={isEmail && "red"}>Email</FormLabel>
      <Input h="50px" type='email' value={email} onChange={handleEmailChange} />
      {!isEmail ? (
        <FormHelperText h="10px" >
        </FormHelperText>
      ) : (
        <FormErrorMessage color="red">Email is required.</FormErrorMessage>
      )}
    </FormControl>


    <FormControl mt="12px" isInvalid={isPassword}>
      <FormLabel fontWeight={"bold.100"} color={isPassword && "red"}>Password</FormLabel>
      <InputGroup size='md'>
      <Input h="50px" focusBorderWidth="1px" type={show ? 'text' : 'password'} value={password} onChange={handlePasswordChange} />
      <InputRightElement >
        <button className="hide-btn" onClick={()=>setShow(!show)} >
          {!show ? <Hidepassword/> : <div className="show-btn" ></div>}
        </button>
      </InputRightElement>
      </InputGroup>
      <Box display="flex" justifyContent={"space-between"} alignItems="center">
      {!isPassword ? (
        <FormHelperText h="10px">
        </FormHelperText>
      ) : (
        <FormErrorMessage  color="red">Password is required.</FormErrorMessage>
      )}
      <Box color="#035fb2" fontSize={"13px"}>
        Forgot password?
      </Box>
      </Box>
     
     
    </FormControl>
 
    <button onClick={handleSubmit} className='login-btn'>Login</button>
</div>

    </div>
   
  )
}

export default Login