
import VideoStore from '../../datastore/videos';
import './home.css';
import CustomLayout from '../layout/layout';
import Navigation from '../navigation/navigation';

import { Card, Col, Row } from 'antd';
import { useState } from 'react';
const { Meta } = Card;


const cardWidth = 28;
// const cardMargin = 2;
const colNumber = 3;

function cardRender (category, data) {
	const arrangedData = [];
	let dataToUse = [...data];
	if (category && category !== 'Home') {
		dataToUse = dataToUse.filter((d) => d.category === category);
	}
	while(dataToUse.length) {
		arrangedData.push(dataToUse.splice(0, colNumber));
	}
	const toRet = [];
	for (const row of arrangedData) {
		const rowRender = [];
		for (const obj of row) {
			const { title, src, alt } = obj;
			rowRender.push(
				(
					<Col span={8}>
						<Card
							style={{ width: `${cardWidth}%` }}
							cover={
								<img style={{ maxWidth: '90%', height: 'auto' }}
									alt={alt}
									src={src}
								/>
							}
						>
							<Meta
								title={title}
							/>
						</Card>
					</Col>
				)
			)
		}

		toRet.push(
				<Row gutter={36}>
					{rowRender}
				</Row>
		)
	}
	return toRet;
}

function Home() {
	const [category, setCategory] = useState();

	return (
		<>
			<CustomLayout/>
			<Navigation
				setCategory={setCategory}
			/>
			<div className='main-content-parent'>
				<div className='main-content'>
					{cardRender(category, VideoStore.videos)}
				</div>
			</div>
		</>

	);
}

export default Home;
