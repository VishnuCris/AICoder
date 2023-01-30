
import Link from 'next/link'
import {useState,useEffect} from 'react'
import {callApi,validateInputs} from '../../../common/commonApis'

const AIContentGenerator = () =>{
	const [content,setContent] = useState('')
	const [contentResp,setContentResp] = useState('')

	const handleOnChange = (e) =>{
		setContent(e.target.value)
	}
	const resetContent = () =>{
		setContent("")
		setContentResp("")
	}
	const generate_content = () =>{
		if(!content.trim()){
			alert('Content should not be empty')
			return;
		}else{
			callApi('/api/AI_Content/create',{'content':content})
			.then(res => {
				if(res.status){
					setContentResp(res.content)
				}else{
					console.log(res)
					alert(res.message)
				}
			})
			.catch(err => console.log(err))
		}
	}
	return(
		<>	
			<form>
				<div className="flex">
					<div><textarea type="text" name="content" value={content} onChange={handleOnChange} rows="4" cols="50" style={{outline:'none'}}></textarea></div>
					<div><input type="button" name="reset" value="reset" onClick = {resetContent}/></div>
				</div>
				<input type="button" name="Generate" value="Generate" onClick={generate_content} />
			</form>
			<div>
				{contentResp}
			</div>
		</>
	)
}

export default AIContentGenerator