
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script'
import '../styles/global.css'
import Header from '../components/commonComponents/header.js'
import { useRouter } from 'next/router'
import SideNavBar from '../components/dashboard/sideNavBar.js'


function MyApp({ Component, pageProps }) {
	const router = useRouter()
  	return (
  		<>
	  		<Head>
	  			<link
				  rel="stylesheet"
				  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
				  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
				  crossorigin="anonymous"
				/>
	  			<Script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin/>
				<Script
				  src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
				  crossorigin/>

				<Script
				  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
				  crossorigin />
			  	<link rel="shortcut icon" href="/static/download.png" />
				<title>Python-Next-Nginx</title>
	  		</Head>
	  		<Header>
	  			{!['/login','/signup','/'].includes(router.asPath) ? <SideNavBar> <Component {...pageProps} paths={router.asPath} /> </SideNavBar> : <Component {...pageProps} paths={router.asPath}/>}	
  			</Header>
		</>
	)
}

export default MyApp
