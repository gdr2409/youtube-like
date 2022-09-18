
import Header from '../header/header';
import Navigation from '../navigation/navigation';
import videos  from '../../datastore/videos';
import './home.css';

import { Card, Col, Row } from 'antd';
const { Meta } = Card;


const cardWidth = 28;
// const cardMargin = 2;
const colNumber = 3;

function cardRender (data) {
	const arrangedData = [];
	while(data.length) {
		arrangedData.push(data.splice(0, colNumber));
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
	return (
		<>
			<Header />
			<Navigation />
			<div className='main-content-parent'>
				<div className='main-content'>
					{cardRender(videos)}
				</div>
			</div>
		</>

	);
}

export default Home;
