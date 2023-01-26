import {useState,useEffect} from 'react'
import {callApi} from '../common/commonApis'
import {StudentForm,StudentsTable} from './studentRelatedComponents'

const DashboardComponent = () =>{
	const [studentsList,setStudentsList] = useState([])
	useEffect(() => {
		callApi('/api/list/student')
		 .then(res => {
		 	if(res.hasOwnProperty('msg'))
		 		alert(res.msg)
		 	setStudentsList(res.data)
		 })
		 .catch(err => {
		 	alert(err)
		 	console.log(err)
		 })
	},[])

	return(
		<>
			<div style={{"display":"flex"}}>
				<div><h1>Dashboard</h1></div>
			</div>
			<StudentForm />
			<StudentsTable studentData={studentsList} setStudentsList={setStudentsList}/>
		</>
	)
}

export default DashboardComponent