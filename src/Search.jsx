import { useRef, useState, useEffect } from 'react'
import styles from './Search.module.css'
import Song from './Song'
import randomColor from "randomcolor"
import SearchIcon from '@material-ui/icons/Search'

const Search = () => {
	const queryRef = useRef(null)
	const [ songs, setSongs ] = useState([])

	const search = async () => {
		setSongs([])
		const queryString = queryRef.current.value
		if(queryString === "" ){
			return
		}
			
		let baseURL = 'https://api.napster.com'
		let key = 'apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm'
		let query = `query=${queryString}`
		let url = baseURL + `/v2.2/search/verbose?${key}&${query}`
		let response = await fetch(url)
		let json = await response.json()
		setSongs(json.search.data.tracks.map((rsong) => ({...rsong, colorBg: randomColor() })))
	}

	useEffect(() => {
		//console.log(songs);
	}, [songs]);

	return (
		<div>
			<input placeholder="My favorite song" className={styles.input} ref={queryRef} />
			<button className={styles.button} onClick={search}><SearchIcon/></button>
			<section className={styles.songsContainer}>
				{songs.map((song, index) => (
					<Song
						key={index}
						song={song}
					/>
				))}
			</section>
		</div>
	)
}

export default Search;
