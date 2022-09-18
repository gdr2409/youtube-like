
import CustomLayout from '../layout/layout';
import './player.css';

import YouTube from 'react-youtube';
import { useSearchParams } from 'react-router-dom';


function Player(props) {
	const [searchParams, setSearchParams] = useSearchParams();
	const videoId = searchParams.get('id');

	const opts = {
		width: '70%',
		height: '480'
	};

	function _onReady(e) {
		// access to player in all event handlers via event.target
		e.target.pauseVideo();
	}

	return (
		<>
			<CustomLayout />
			<div className='player-parent'>
				<div className='youtube-player-parent'>
					<div className='youtube-player'>
						<YouTube videoId={videoId} opts={opts} onReady={_onReady} />
					</div>
				</div>
			</div>
		</>
	);
}

export default Player;
