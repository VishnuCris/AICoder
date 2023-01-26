 
import dashboard_css from './dashboard.module.css'
import {useState} from 'react';
import Link from 'next/link'

const SideNavBar = () =>{

  const [width,setWidth] = useState(0)
  const closeNav = () =>{
    setWidth(0)
  }

  const openNav = () =>{
    setWidth(250)
  }

  return(
    <>
    <div>
      <div style={{'width':width}} className={dashboard_css.sidenav}>  
        <div className={`flex ${dashboard_css.dashBoardHeadDiv}`}>
          <div className={dashboard_css.dashBoardHead}>Dashboard</div>
          <div className="flex-last-left"><a href="#" className={`${dashboard_css.closebtn}`} onClick={closeNav}>&times;</a></div>
        </div>
        <Link className={dashboard_css.dashboardLink} href="/python">Python</Link> 
        <Link className={dashboard_css.dashboardLink} href="/javascript">JS</Link> 
        <Link className={dashboard_css.dashboardLink} href="/nginx">Nginx</Link> 
        <Link className={dashboard_css.dashboardLink} href="/git">GIT</Link> 
{/*        <a href="/python">Python</a>
        <a href="/javascript">JS</a>
        <a href="/nginx">Nginx</a>
        <a href="/git">GIT</a>*/}
      </div>
      <span className={dashboard_css.navOpenBtn} onClick={openNav}>&#9776;</span>
    </div>
    </>
  )
}

export default SideNavBar