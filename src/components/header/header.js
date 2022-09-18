
import './header.css';

import { Input } from 'antd';
import { VideoCameraAddOutlined, BellOutlined, UserOutlined } from '@ant-design/icons';
const { Search } = Input;


function Header() {
	return (
		<div className='header'>
			<div className='header-logo'> {/*Logo div*/}
				Youtube
			</div>
			<div className='header-search'> {/*Search bar div*/}
				<Search placeholder='Search' />
			</div>
			<div className='header-extra'> {/*Extra div*/}
				<VideoCameraAddOutlined />
				<BellOutlined />
				<UserOutlined />
			</div>
		</div>
	);
}

export default Header;
