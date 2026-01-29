import './styles.scss';

const Spinner = () => {
	return (
		<div>
			<div className="spinner-overlay" role="status" aria-label="loading">
				<div className="spinner" />
			</div>
		</div>
	);
}

export default Spinner;