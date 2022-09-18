
import './header.css';

import { Input } from 'antd';
import { VideoCameraAddOutlined, BellOutlined, UserOutlined } from '@ant-design/icons';
const { Search } = Input;

function Header(props) {
	const { addVideoClicked } = props;

	return (
			<div className='header'>
				<div className='header-logo'> {/*Logo div*/}
					Youtube
				</div>
				<div className='header-search'> {/*Search bar div*/}
					<Search placeholder='Search' />
				</div>
				<div className='header-extra'> {/*Extra div*/}
					<div
						className='header-extra-action'
						onClick={addVideoClicked}
					>
						<VideoCameraAddOutlined />
					</div>
					<div className='header-extra-action'><BellOutlined /></div>
					<div className='header-extra-action'><UserOutlined /></div>
				</div>
			</div>
	);
}

export default Header;
