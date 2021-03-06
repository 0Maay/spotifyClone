import { useContext } from "react"
import { currentSongContext } from "./context/currentSongContext"
import { useFavorites } from "./context/favoritesContext"
import styles from './Search.module.css'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'


const Song = ({ song }) => {
	const { setCurrentSong } = useContext(currentSongContext);
	const { favoriteSongs, setFavoriteSongs } = useFavorites();

	const addToFavoriteSongs = () => {
		if(favoriteSongs.find(el => el.id === song.id) === undefined)
			setFavoriteSongs([...favoriteSongs, song]);
	};
	
	const removeFromFavorites = () => {
		setFavoriteSongs(favoriteSongs.filter((fs) => fs.id !== song.id));
	};	
	
	return (
		<div
			className={styles.song}
			style={{
				backgroundColor: song.colorBg
			}}
		>
			<h3 className={styles.title}>
				{song.name}
			</h3>
			<h5 className={styles.subtitle}>
				{song.artistName}
			</h5>
			<div className={styles.buttons}>
				<button className={styles.button} onClick={() => setCurrentSong(song)}><PlayArrowIcon/></button>
				<button className={styles.button} 
					onClick={ favoriteSongs.find(el => el.id === song.id) ? removeFromFavorites : addToFavoriteSongs}>
						{favoriteSongs.find(el => el.id === song.id)
						? <FavoriteIcon/>
						:<FavoriteBorderIcon/>}
				</button>
			</div>
		</div>
	);
};

export default Song;
