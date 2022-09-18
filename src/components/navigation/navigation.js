
import './navigation.css';

import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Navigation One', 'sub1', <MailOutlined />),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />),
  getItem('Navigation Three', 'sub4', <SettingOutlined />),
];


function Navigation() {
	return (
		<div className='navigation'>
			<Menu
				defaultSelectedKeys={['sub1']}
				mode='vertical'
				items={items}
			/>
		</div>
	);
}

export default Navigation;
