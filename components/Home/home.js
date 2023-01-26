import Python_Next_NginxLogo from '../../assets/pyNextNginx.png'
import PythonLogo from '../../assets/python.jpg'
import NextLogo from '../../assets/nextjs.png'
// import NginxLogo from '../../assets/pyNextNginx.png'
import Image from 'next/image'
import home_css from './home.module.css'

const HomeComponent = () =>{
	const Python_Next_NginxWidth = '400';
	const Python_Next_NginxHeight = '400';

	const contentWidth = '200';
	const contentHeight = '100';


	return(
		<>
			<div className="flex">
				<div className={home_css.image_div}>
					<Image src={Python_Next_NginxLogo} alt="PythonNextNginx Logo" width={Python_Next_NginxWidth} height={Python_Next_NginxHeight} />
				</div>
				<div className={home_css.content_div}>
					<article>
						<header>
							<Image src={PythonLogo} alt="Python Logo" width={contentWidth} height={contentHeight} />
						</header>
						<p>Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!</p>
					</article>
					<article>
						<header>
							<Image src={NextLogo} alt="Next Logo" width={contentWidth} height={contentHeight} />
						</header>
						<p>Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!</p>
					</article>
				</div>
			</div>
		</>	
	)
}

export default HomeComponent