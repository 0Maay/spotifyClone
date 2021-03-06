import Song from './Song'
import {useFavorites} from "./context/favoritesContext"

const Favorites = () => {
	const { favoriteSongs } = useFavorites()

	return (
		<main>
			<h1>Favorite Songs</h1>
			<section
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(3, 1fr)',
					gap: '1rem'
				}}
			>
				{favoriteSongs.length > 0 ? (
					favoriteSongs.map((song) => <Song key={song.id} song={song} />)
				) : (
					<p>You don't have favorite songs yet</p>
				)}
			</section>
		</main>
	);
};

export default Favorites;
