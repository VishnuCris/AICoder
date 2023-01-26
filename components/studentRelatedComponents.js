
import {useState} from 'react'
import {callApi,validateInputs} from '../common/commonApis'
import DataTable from 'react-data-table-component';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
		      		<StudentEditForm row={row}/>
		      		<Button variant="danger" onClick={(e) => HandleDelete(row,e)}>Delete</Button>
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

export const StudentEditForm = ({row}) =>{
  const [show, setShow] = useState(false);
  const handleClose = () => {
  	setShow(false)
  };
  const handleShow = () => {
  	setShow(false)
  	setShow(true)
  };
  const [inputs,setInputs] = useState(row)
  const handleOnChange = (e) =>{
  	let obj = {}
	obj[`${e.target.name}`] = e.target.value
	setInputs({...inputs,...obj})
  }
  const HandleEdit = () =>{
  		let validateObj = validateInputs(inputs)
		if(!validateObj.status){
			alert(validateObj.msg)
			return
		}
		callApi('/api/update/student',inputs)
		 .then(res => {
		 	if(res.status){
		 		alert(res.msg)
		 		location.reload()
		 	}else{
		 		alert(res.msg)
		 	}
		 })
		 .catch(err => console.log(err))
	}
  return (
    <>
      	<Button variant="primary" onClick={handleShow}>
        	Edit
      	</Button>

      	<Modal show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        >
        	<Modal.Header >
          		<Modal.Title>Edit Student</Modal.Title>
    		</Modal.Header>
        	<Modal.Body>
        		<form>
					<input type="text" name="firstname" value={inputs.firstname} onChange={handleOnChange} placeholder='FirstName ...'/><br/>
					<input type="text" name="lastname" value={inputs.lastname} onChange={handleOnChange} placeholder='LastName ...'/><br/>
					<input type="text" name="email" value={inputs.email} onChange={handleOnChange} placeholder='Email ...'/><br/>
					<input type="text" name="age" value={inputs.age} onChange={handleOnChange} placeholder='Age ...'/><br/>
					<input type="text" name="bio" value={inputs.bio} onChange={handleOnChange} placeholder='Bio ...'/><br/>
				</form>
        	</Modal.Body>
        	<Modal.Footer>
          		<Button variant="secondary" onClick={handleClose}>
            		Close
          		</Button>
          		<Button variant="primary" onClick={HandleEdit}>
            		Save Changes
          		</Button>
    		</Modal.Footer>
      	</Modal>
    </>
  );
}


// Students List Table Section //