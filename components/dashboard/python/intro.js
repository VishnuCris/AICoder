
import Link from 'next/link'
import AIContentGenerator from './AI_Content_Generator'

const PythonComponent = ({path}) =>{
	let componentToDisplay = 'Welocome to the python Introduction'
	if(path == '/python/AI_Content'){
		componentToDisplay = <AIContentGenerator/>
	}

	return(
		<>	
			<div>The Following are the topics we have implemented in python</div>
			<ul>
				<li><Link href="/python/intro">Introduction</Link></li>
				<li><Link href="/python/AI_Content">AI Content Generation</Link></li>
			</ul>
			
			{componentToDisplay}

		</>
	)
}

export default PythonComponent