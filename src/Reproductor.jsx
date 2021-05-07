import {useContext} from "react"
import { useAudio } from "react-use"
import styles from './Reproductor.module.css'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import PauseIcon from '@material-ui/icons/Pause'
import {currentSongContext} from "./context/currentSongContext"

const Reproductor = () => {
	const {
		currentSong: { previewURL, name},
	} = useContext(currentSongContext)

	const [ audio, state, controls ] = useAudio({
		src: previewURL,
		autoPlay: true
	})

    if (!name.length) {
		return null;
	}

	return (
		<div className={styles.reproductor}>
			<div>
				{audio}
				<h2>{name}</h2>
				<h3></h3>
			</div>
		
			<div>
				<button className={styles.button} onClick={state.paused ? controls.play : controls.pause}>
					{state.paused ? <PlayArrowIcon/> : <PauseIcon/>}
				</button>
				
				<input
					type="range"
					value={state.volume}
					onChange={(e) => controls.volume(Number(e.target.value))}
					min="0.0"
					max="1.0"
					step="0.05"
				/>
				{state.time ? <h3>{state.time}</h3>: <h3>Loading...</h3>}
			</div>
		</div>
	);
};

export default Reproductor;
