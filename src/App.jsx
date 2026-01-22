import Carrousel from './components/Carrousel/Carrousel.jsx';
import List from './components/List/List.jsx';
import { useData } from './hooks/useData.js';

export default function App() {
	const { rankByTimeControl, isError, isLoading } = useData();

	const ALLOWED = [
		'live_bullet',
		'live_blitz',
		'live_rapid',
		'daily',
		'tactics',
	];

	const filteredRank = rankByTimeControl.filter(([key]) => ALLOWED.includes(key));

	if (isLoading) return <>Recherche des meilleurs joueurs...</>;
	if (isError) return <>Erreur de chargement des données</>;
	return (
		<main className='app'>
			<h1>Classement</h1>

			<Carrousel />
			<List />

			<div className='content'>
				<div className='card'>
					<div
						style={{
							display: 'flex',
						}}
					>
						{filteredRank.map(([key, values]) => {
							return (
								<div
									style={{
										display: 'flex',
										flexDirection: 'column',
									}}
								>
									{key}
									{values.map((x) => (
										<p>
											{x.name} - {x.score}
										</p>
									))}
								</div>
							);
						})}{' '}
					</div>
				</div>
			</div>
		</main>
	);
}
