import Link from 'next/link'
import {callApi,validateInputs} from '../common/commonApis'
import {useState} from 'react'
const SignUpComponent = () =>{
	const [inputs,setInputs] = useState({'name':'','mobile_number':'','password':'','email':'','Address1':'','Address2':'','pincode':''})
	const handleSignUp = (e) =>{
		let validateObj = validateInputs(inputs)
		if(!validateObj.status){
			alert(validateObj.msg)
			return
		}
		callApi('/api/signup',inputs)
		 .then(res => {
		 	console.log(res)
		 })
		 .catch(err => {
		 	console.log(err)
		 })
	}
	const handleOnChange = (e) =>{
		let obj = {}
		obj[`${e.target.name}`] = e.target.value
		setInputs({...inputs,...obj})
	}
	return(
		<>
			<form>
				<input type="text" name="name" value={inputs.name} onChange={handleOnChange} placeholder='name ...'/><br/>
				<input type="password" name="password" value={inputs.password} onChange={handleOnChange} placeholder='Password ...'/><br/>
				{/*<input type="password" name="retype-password" onChange={handleOnChange} placeholder='name'/><br/>*/}
				<input type="text" name="mobile_number" value={inputs.mobile_number} onChange={handleOnChange} placeholder='Mobile Number ...'/><br/>
				<input type="text" name="email" value={inputs.email} onChange={handleOnChange} placeholder='Email ...'/><br/>
				<input type="text" name="Address1" value={inputs.Address1} onChange={handleOnChange} placeholder='Address1 ...'/><br/>
				<input type="text" name="Address2" value={inputs.Address2} onChange={handleOnChange} placeholder='Address2 ...'/><br/>
				<input type="text" name="pincode" value={inputs.pincode} onChange={handleOnChange} placeholder='pincode ...'/><br/>
				<input type="button" value="Register" onClick={handleSignUp}/>
			</form>
			<Link href="/login">Login</Link>
		</>
	)
}

export default SignUpComponent