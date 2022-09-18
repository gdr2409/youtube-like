
import './modal.css';
import VideoStore from '../../datastore/videos';

import { Form, Input, Button } from 'antd';

function __handleAddVideoSubmit (values) {
	VideoStore.addVideo({
		title: values.videoName,
		alt: values.videoThumbnail,
		src: values.videoThumbnail,
		category: values.videoCategory,
		link: values.videoLink
	});
}

function generateAddVideoModal(form, hideModal) {
	function handleAddVideoSubmit (values) {
		__handleAddVideoSubmit(values);
		hideModal();
		form.resetFields();
	}

	function handleCancel () {
		hideModal();
		form.resetFields();
	}

	return (
		<Form
			form={form}
			name='Add Video'
			labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
			onFinish={handleAddVideoSubmit}
			autoComplete='off'
			className='custom-modal-add-video-form'
		>
			<Form.Item
				label='Video Name'
				name='videoName'
				rules={[{ required: true, message: 'Please input video name!' }]}
			>
				<Input className='custom-modal-input' />
			</Form.Item>

			<Form.Item
				label='Video Category'
				name='videoCategory'
				rules={[{ required: true, message: 'Please input video Category!' }]}
			>
				<Input className='custom-modal-input' />
			</Form.Item>

			<Form.Item
				label='Video Link'
				name='videoLink'
				rules={[{ required: true, message: 'Please input video link!' }]}
			>
				<Input className='custom-modal-input' />
			</Form.Item>

			<Form.Item
				label='Video Thumbnail'
				name='videoThumbnail'
				rules={[{ required: true, message: 'Please input video thumbnail!' }]}
			>
				<Input className='custom-modal-input' />
			</Form.Item>

			<Form.Item>
				<Button
					className='custom-modal-button'
					style={{ width: '60px' }}
					type='primary'
					htmlType='submit'
				>
					Submit
				</Button>
				<Button
					className='custom-modal-button'
					style={{ width: '60px', marginLeft: '10px' }}
					type='primary'
					onClick={handleCancel}
				>
					Cancel
				</Button>
			</Form.Item>
		</Form>
	);
}

function CustomModal(props) {
	const { modalType, visibility, hideModal } = props;
	const [form] = Form.useForm();

	function generateCustomModal(modalType) {

		switch (modalType) {
			default: return generateAddVideoModal(form, hideModal)
		}
	}

	return (
		<div className='custom-modal' style={{ visibility }}>
			{generateCustomModal(modalType)}
		</div>
	);
}

export default CustomModal;
