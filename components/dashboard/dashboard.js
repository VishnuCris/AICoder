import {useState,useEffect,useRef} from 'react'
import {callApi} from '../../common/commonApis'
import {StudentsTable} from '../students/studentRelatedComponents'
import SideNavBar from './sideNavBar'

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
			<StudentsTable studentData={studentsList} setStudentsList={setStudentsList}/>
			{/*<span style={{fontSize:'30px',cursor:'pointer'}} onClick={openNav}>&#9776;</span>*/}
		</>
	)
}

export default DashboardComponent