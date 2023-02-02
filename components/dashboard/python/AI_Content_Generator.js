
import Link from 'next/link'
import {useState,useEffect} from 'react'
import {callApi,validateInputs,externalApiCall} from '../../../common/commonApis'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const AIContentGenerator = () =>{
	const [content,setContent] = useState('')
	const [contentResp,setContentResp] = useState('')
	const [loader,setLoader] = useState('')

    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
	const loaderIcon =  <Spin indicator={antIcon} />;

	const handleOnChange = (e) =>{
		setContent(e.target.value)
	}
	const resetContent = () =>{
		setContent("")
		setContentResp("")
	}
	const sModel = "text-davinci-003";
    const iMaxTokens = 2048;
    const sUserId = "1";
    const dTemperature = 0.5;    

    const gptData = {
        model: sModel,
        // prompt: `Give some description about ${content}`,
        prompt: content,
        max_tokens: iMaxTokens,
        user: sUserId,
        temperature:  dTemperature,
        frequency_penalty:1.0,
    }
	const generate_content = () =>{
		if(!content.trim()){
			alert('Content should not be empty')
			return;
		}else{
			setLoader(loaderIcon)
			setContentResp('')
			externalApiCall('https://api.openai.com/v1/completions',gptData)
			.then(res => {
				try{
					let text = res.choices[0].text
					setLoader('')
					setContentResp(text)
				}catch(err){
					setLoader('')
					console.log(err)
					console.log(res)
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
				{loader}
				{contentResp}
			</div>
		</>
	)
}

export default AIContentGenerator