import { useData } from '../../hooks/useData.js';
import { useActions } from '../../hooks/useActions.js';
import './styles.scss';

const Table = () => {
	const { rankByTimeControl, isError, isLoading } = useData();

	const { selectedTimeControl, allowedTimeControls } = useActions();

	if (isLoading) return <>Recherche des meilleurs joueurs...</>;
	if (isError) return <>Erreur de chargement des données</>;

	const filteredRank = rankByTimeControl.filter(([key]) => allowedTimeControls.includes(key));

	return (
		<div className='content'>
			<div className={`card ${selectedTimeControl !== null ? 'card--selected' : ''}`}>
				{selectedTimeControl !== null ? filteredRank.filter(([key]) => key === selectedTimeControl).map(([key, values]) => {
					return (
						<div className='table-content time-control-selected'>
							<div className="table-header">
								{key}
							</div>
							<div className='table-subtitle-header'>
								<div className='table-subtitle'>Username</div>
								<div className='table-subtitle'>Score</div>
							</div>
							{values.map((x) => (
								<div className='table-row' key={x.name}>
									<div className='table-cell'>
										{x.username}
									</div>
									<div className='table-cell'>
										{x.score}
									</div>
								</div>
							))}
						</div>
					);
				}) : filteredRank.map(([key, values]) => {
					return (
						<div className='table-content time-control-selected'>
							<div className="table-header">
								{key}
							</div>
							<div className='table-subtitle-header'>
								<div className='table-subtitle'>Username</div>
								<div className='table-subtitle'>Score</div>
							</div>
							{values.map((x) => (
								<div className='table-row' key={x.name}>
									<div className='table-cell'>
										{x.username}
									</div>
									<div className='table-cell'>
										{x.score}
									</div>
								</div>
							))}
						</div>
					);
				})}
			</div>
		</div>
	)
}

export default Table;