import {useState} from 'react';
import Carrousel from './components/Carrousel/Carrousel.jsx';
import List from './components/List/List.jsx';
import { useData } from './hooks/useData.js';
import { useActions } from './hooks/useActions.js';


export default function App() {
	const { rankByTimeControl, isError, isLoading } = useData();

	const { selectedTimeControl, allowedTimeControls } = useActions();

	const [selectedCarrousel, setSelectedCarrousel] = useState(false);

	if (isLoading) return <>Recherche des meilleurs joueurs...</>;
	if (isError) return <>Erreur de chargement des données</>;
	const filteredRank = rankByTimeControl.filter(([key]) => allowedTimeControls.includes(key));

	return (
		<main className='app'>
			<div className="header">
				<div>
					<h1>Classement</h1>
					{
						selectedCarrousel ? (
							<Carrousel />
						) : (
							<List />
						)
					}

					<button className='change-view' onClick={() => setSelectedCarrousel(!selectedCarrousel)}>
						Changer de vue: {selectedCarrousel ? 'Liste' : 'Carrousel'}
					</button>
					</div>
			</div>

			<div className='content'>
				<div className='card'>
					<div
						style={{
							display: 'flex',
						}}
					>

						{selectedTimeControl !== null ? filteredRank.filter(([key]) => key === selectedTimeControl).map(([key, values]) => {
							return (
								<div
									style={{
										display: 'flex',
										flexDirection: 'column',
										width: '100%',
									}}
								>
									<div className="table-header">
										{key}
									</div>
									{values.map((x) => (
										<p>
											{x.name} - {x.score}
										</p>
									))}
								</div>
							);
						}) : filteredRank.map(([key, values]) => {
							return (
								<div
									style={{
										display: 'flex',
										flexDirection: 'column',
										width: '100%',
									}}
								>
									<div className="table-header">
										{key}
									</div>
									{values.map((x) => (
										<p>
											{x.username} - {x.score}
										</p>
									))}
								</div>
							);
						})}

					</div>
				</div>
			</div>
		</main>
	);
}
