
import {useState} from 'react'
import {callApi,validateInputs} from '../common/commonApis'
import DataTable from 'react-data-table-component';

export const StudentForm = () =>{

	const [inputs,setInputs] = useState({'FirstName':'','LastName':'','Email':'','Age':'','Bio':''})
	const handleOnChange = (e) =>{
		let obj = {}
		obj[`${e.target.name}`] = e.target.value
		setInputs({...inputs,...obj})
	}
	const createStudent = () =>{
		let validateObj = validateInputs(inputs)
		if(!validateObj.status){
			alert(validateObj.msg)
			return
		}
		callApi('/api/create/student',inputs)
		 .then(res => {
		 	if(res.status){
		 		alert(res.msg)
				setInputs({'FirstName':'','LastName':'','Email':'','Age':'','Bio':''})	 		
		 	}else{
		 		alert(res.msg)
		 	}
		 })
		 .catch(err => console.log(err))
	}
	return(
		<>
			<form>
				<input type="text" name="FirstName" value={inputs.FirstName} onChange={handleOnChange} placeholder='FirstName ...'/><br/>
				<input type="text" name="LastName" value={inputs.LastName} onChange={handleOnChange} placeholder='LastName ...'/><br/>
				<input type="text" name="Email" value={inputs.Email} onChange={handleOnChange} placeholder='Email ...'/><br/>
				<input type="text" name="Age" value={inputs.Age} onChange={handleOnChange} placeholder='Age ...'/><br/>
				<input type="text" name="Bio" value={inputs.Bio} onChange={handleOnChange} placeholder='Bio ...'/><br/>
				<input type="button" value="Submit" onClick={createStudent}/>
			</form>
		</>
	)
}

export const StudentsTable = ({studentData,setStudentsList}) =>{
	console.log(studentData)
	const HandleEdit = (data,e) =>{
		console.log(data)
		console.log(e)
	}
	const removeDataByID = (data,id) =>{
		if(data.id != id)
			return data
	}
	const HandleDelete = (data,e) =>{
		if(!confirm('Are you sure,you want to delete this student'))
			return;
		callApi('/api/delete/student',data)
		 .then(res => {
		 	if(res.status){
		 		alert(res.msg)
		 		location.reload()
		 		// data.filter(removeDataByID,data.id) 		
		 	}else{
		 		alert(res.msg)
		 	}
		 })
		 .catch(err => console.log(err))
	}
	const columns = [
	    {
	        name: 'FirstName',
	        selector: row => row.firstname,
	        sortable: true,
	    },
	    {
	        name: 'LastName',
	        selector: row => row.lastname,
	        sortable: true,
	    },
	    {
	        name: 'Email',
	        selector: row => row.email,
	        sortable: true,
	    },
	    {
	        name: 'Bio',
	        selector: row => row.bio,
	        sortable: true,
	    },
	    {
	        name: 'Age',
	        selector: row => row.age,
	        sortable: true,
	    },
	    {
	        name: 'Actions',
	        cell: (row) => (
	        	<>
		      		<button onClick={(e) => HandleEdit(row,e)}>Edit</button>
		      		<button onClick={(e) => HandleDelete(row,e)}>Delete</button>
	      		</>
		    ),
	    },
	];
	return (
		<>
			<h4>Students List</h4>
	        <DataTable
	            columns={columns}
	            data={studentData}
	            pagination
	        />
		</>
	)
}

// Students List Table Section //