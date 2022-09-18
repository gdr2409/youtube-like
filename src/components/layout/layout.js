
import { useState } from 'react';
import Header from '../header/header';
import CustomModal from '../modal/modal';

function CustomLayout(props) {

	const [modalVisibility, setModalVisibility] = useState('hidden');
	const [modalType, setModalType] = useState('');
	function handleAddVideoClicking () {
		if (modalVisibility !== 'visible') {
			setModalVisibility('visible');
			setModalType('addVideo');
		}
	}

	function hideModal (e) {
		setModalVisibility('hidden');
		setModalType('');
	}
	return (
		<>
			<Header
				addVideoClicked={handleAddVideoClicking}
			/>
			<CustomModal
				modalType={modalType}
				visibility={modalVisibility}
				hideModal={hideModal}
			/>
		</>
	);
}

export default CustomLayout;
