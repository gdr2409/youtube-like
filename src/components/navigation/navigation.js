
import './navigation.css';
import categories from '../../datastore/categories';

import { Menu } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [];

for (const category of categories) {
  items.push(
    getItem(category, category, <AppstoreOutlined />),
  );
}

function Navigation(props) {
  const { setCategory } = props;

  function onMenuItemSelected ({ item, key, keyPath, selectedKeys, domEvent }) {
    setCategory(key);
  }
	return (
		<div className='navigation'>
			<Menu
				defaultSelectedKeys={['Home']}
				mode='vertical'
				items={items}
        onSelect={onMenuItemSelected}
			/>
		</div>
	);
}

export default Navigation;
