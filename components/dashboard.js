import {useState,useEffect} from 'react'
import {callApi} from '../common/commonApis'
import Cookies from 'js-cookie';
import {StudentForm,StudentsTable} from './studentRelatedComponents'

const DashboardComponent = () =>{
	const [studentsList,setStudentsList] = useState([])

	useEffect(() => {
		callApi('/api/list/student',{token:'225a06da-f03a-4dc9-9a67-c51b8217dd75'})
		 .then(res => {
		 	setStudentsList(res.data)
		 })
		 .catch(err => console.log(err))
	},[])

	const logout = () =>{
		callApi('/api/logout',{token:'225a06da-f03a-4dc9-9a67-c51b8217dd75'})
		 .then(res => {
		 	alert(res.msg)
		 })
		 .catch(err => console.log(err))
	}
	return(
		<>
			<div style={{"display":"flex"}}>
				<div><h1>Dashboard</h1></div>
				<div style={{"marginLeft":"auto"}}><input type="button" value="logout" onClick={logout}/></div>
			</div>
			<StudentForm />
			<StudentsTable studentData={studentsList} setStudentsList={setStudentsList}/>
		</>
	)
}

export default DashboardComponent