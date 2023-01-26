import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import Cookies from 'js-cookie';
import { Menu, Dropdown, Icon } from 'antd';
import header_css from './header.module.css'
import {callApi} from '../../common/commonApis'


const Header = () =>{
	const logout = () =>{
		callApi('/api/logout',{token:Cookies.get('csrf')})
		 .then(res => {
		 	alert(res.msg)
		 	location.href="/login"
		 })
		 .catch(err => console.log(err))
	}

	const menu = (
	  <Menu>
	    <Menu.Item key="1">
	      <a className={header_css.header_link} target="_self" href="/">home</a>
	    </Menu.Item>
	    {!Cookies.get('csrf_access_token') && 
	    	(	
			    <Menu.Item key="2">
			      <a className={header_css.header_link} target="_self" href="/login">login</a>
			    </Menu.Item>
	    )}
	    {!Cookies.get('csrf_access_token') && 
	    	(	
	    		<Menu.Item key="3">
	      			<a className={header_css.header_link} target="_self" href="/signup">signup</a>
    			</Menu.Item>	
	    )}
	    <Menu.Item key="4">
	      <a className={header_css.header_link} target="_self" href="/dashboard">Dashboard</a>
	    </Menu.Item>
	    {Cookies.get('csrf_access_token') && 
	    	(	
			    <Menu.Item key="5">
			      <a className={header_css.header_link} target="_self" onClick={logout}>logout</a>
			    </Menu.Item>
	    )}
	  </Menu>
	);

	return(
		<>
			<div className={header_css.header}>
				<div>Python-Next-Nginx</div>
				<div className="flex-last-left">
					<Dropdown overlay={menu}>
						<a className="ant-dropdown-link" href="#">
							<Avatar className={header_css.icon} size="small" icon={<UserOutlined />} />
						</a>
						</Dropdown>
				</div>
			</div>
		</>
	)
}

export default Header