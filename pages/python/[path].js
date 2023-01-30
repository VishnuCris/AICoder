import PythonComponent from '../../components/dashboard/python/intro'

const PythonPage = ({paths}) =>{
	console.log(paths)
	console.log('path')
	return(
		<>
			<PythonComponent path={paths}/>
		</>
	)
}

export default PythonPage