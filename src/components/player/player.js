
import CustomLayout from '../layout/layout';
import './player.css';

import YouTube from 'react-youtube';


function Player(props) {

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
						<YouTube videoId='2g811Eo7K8U' opts={opts} onReady={_onReady} />
					</div>
				</div>
			</div>
		</>
	);
}

export default Player;
