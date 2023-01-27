 
import dashboard_css from './dashboard.module.css'
import header_css from '../../components/commonComponents/header.module.css'
import {useState} from 'react';
import Link from 'next/link'
import { Select } from 'antd';

const SideNavBar = ({children}) =>{

  const {Option,OptGroup} = Select
  const [width,setWidth] = useState(250)
  const closeNav = () =>{
    setWidth(0)
  }

  const openNav = () =>{
    setWidth(250)
  }

  const handleChange = (val) =>{
    console.log(val)
  }

  return(
    <>
    <div className={dashboard_css.parentDiv}>
      <div className={dashboard_css.sidenav}>  
        <div className={dashboard_css.navOptions}>
          <div className={dashboard_css.dashBoardHead}>Dashboard</div>
          <div><Link href="/dashboard">Home</Link></div>
          <div><Link href="/python/Intro">Python</Link></div>
          <div><Link href="/javascript/Intro">JS</Link></div>
          <div><Link href="/nginx/Intro">Nginx</Link></div>
          <div><Link href="/git/Intro">GIT</Link></div> 
        </div>
      </div>
      <div className={`flex-last-left ${dashboard_css.navChildComponent}`}>
          {children}
      </div>
    </div>
    </>
  )
}

export default SideNavBar