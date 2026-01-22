// ---------------------------------------------------------------------------------------------------------------------
//!                                                       Imports
// ---------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------- React & redux ----------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------

// --------------------------------------------------- Redux State Management ------------------------------------------

// ---------------------------------------------------------------------------------------------------------------------

// --------------------------------------------------- Components ------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------- Hooks & Utils ----------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------------

// ------------------------------------------------- Styles & Assets ---------------------------------------------------
import { useSelector, useDispatch } from 'react-redux';

import {
	prev,
	next,
	setSelectedTimeControl,
	reset,
} from '../../DataManagement/reducers/timeControlsReducer';

import './styles.scss';
// ---------------------------------------------------------------------------------------------------------------------

const Carrousel = () => {
	const dispatch = useDispatch();
	const selectedIndex = useSelector(
		(state) => state.timeControlsReducer?.selectedIndex ?? 0
	);
	const allowedTimeControls = useSelector(
		(state) => state.timeControlsReducer.timeControls
	);

	const current = allowedTimeControls[selectedIndex] || allowedTimeControls[0];
	const handleSelectTimeControl = (x) => {
		dispatch(setSelectedTimeControl(x));
	};
	const selectedTimeControl = useSelector(
		(state) => state.timeControlsReducer.selectedTimeControl
	);

	return (
		<div className="carrousel-container">
			<div className='carrousel'>
				<button
					className='carrousel-button'
					onClick={() => {
						dispatch(prev())
						handleSelectTimeControl(current);
					}}>
					{'<'}
				</button>
				Carrousel : {selectedTimeControl ?? 'All'}
				<button
					onClick={() => {
						dispatch(next())
						handleSelectTimeControl(current);
					}}>
					{'>'}
				</button>
			</div>
			<div className='carrousel-reset-button-container'>
				<button className='carrousel-reset-button' onClick={() => dispatch(reset())}>All</button>
			</div>
		</div>
	);
};

export default Carrousel;
