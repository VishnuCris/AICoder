import {useState,useEffect} from 'react'
import {callApi} from '../common/commonApis'
import Cookies from 'js-cookie';
import {StudentForm,StudentsTable} from './studentRelatedComponents'

const DashboardComponent = () =>{
	const [studentsList,setStudentsList] = useState([])

	useEffect(() => {
		console.log(Cookies.get('csrf_access_token'))
		callApi('/api/list/student',{token:'225a06da-f03a-4dc9-9a67-c51b8217dd75'})
		 .then(res => {
		 	setStudentsList(res.data)
		 })
		 .catch(err => console.log(err))
	},[])
	return(
		<>
			<h1>Dashboard</h1>		
			<StudentForm />
			<StudentsTable studentData={studentsList} setStudentsList={setStudentsList}/>
		</>
	)
}

export default DashboardComponent