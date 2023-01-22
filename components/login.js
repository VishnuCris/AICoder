
import Link from 'next/link'
import {callApi,validateInputs} from '../common/commonApis'
import {useState} from 'react'


const LoginComponent = () =>{
	const [inputs,setInputs] = useState({'email':'','password':''})
	const handleLogin = (e) =>{
		let validateObj = validateInputs(inputs)
		if(!validateObj.status){
			alert(validateObj.msg)
			return
		}
		callApi('/api/login',inputs)
		 .then(res => {
		 	if(res.status){
		 		alert(res.msg)
		 		location.href='/dashboard'
		 	}else{
		 		alert(res.msg)
		 	}
		 })
		 .catch(err => console.log(err))
	}
	const handleOnChange = (e) =>{
		let obj = {}
		obj[`${e.target.name}`] = e.target.value
		setInputs({...inputs,...obj})
	}
	return(
		<>
			<form>
				<input type="text" name="email" value={inputs.email} onChange={handleOnChange} placeholder='Email ...'/><br/>
				<input type="password" name="password" value={inputs.password} onChange={handleOnChange} placeholder='Password ...'/><br/>
				<input type="button" value="Login" onClick={handleLogin} />
			</form>
			<span>New to AI Coder ?</span>
			<Link href="/signup">Register with us</Link>
		</>	
	)
}

export default LoginComponent