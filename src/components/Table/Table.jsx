import { useData } from '../../hooks/useData.js';
import { useActions } from '../../hooks/useActions.js';
import './styles.scss';
import Spinner from '../Spinner/Spinner.jsx';
import { useTheme } from '../../hooks/useTheme.js';

const Table = () => {
	const { rankByTimeControl, isError, isLoading } = useData();
	const { selectedTimeControl, allowedTimeControls } = useActions();
	const {isDark } = useTheme();

	console.log(isDark);

	if (isLoading) return <Spinner/>;
	if (isError) return <>Erreur de chargement des données</>;

	const filteredRank = rankByTimeControl.filter(([key]) => allowedTimeControls.includes(key));

	return (
		<div className='content'>
			<div className={`card ${selectedTimeControl !== null ? 'card--selected' : ''} ${isDark ? 'card--dark' : 'card--light'}`}>
				{selectedTimeControl !== null ? filteredRank.filter(([key]) => key === selectedTimeControl).map(([key, values]) => {
					return (
						<div className='table-content time-control-selected'>
							<div className={`table-header ${isDark ? 'table-subtitle-header--dark' : 'table-subtitle-header--light'}`}>
								{key}
							</div>
							<div className={`table-subtitle-header ${isDark ? 'table-subtitle-header--dark' : 'table-subtitle-header--light'}`}>
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
						<div className={`table-content time-control-selected ${isDark ? 'table-content--dark' : 'table-content--light'}`} key={key}>
							<div
								className={`table-header ${isDark ? 'table-subtitle-header--dark' : 'table-subtitle-header--light'}`}
							>
								{key}
							</div>
							<div
								className={`table-subtitle-header ${isDark ? 'table-subtitle-header--dark' : 'table-subtitle-header--light'}`}
							>
								<div className='table-subtitle'>Username</div>
								<div className='table-subtitle'>Score</div>
							</div>
							{values.map((x) => (
								<div
									className='table-row'
									key={x.name}
								>
									<div className='table-cell'>
										{x.username}
									</div>
									<div className='table-cell'>{x.score}</div>
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