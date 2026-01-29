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
import { useDispatch } from 'react-redux';

import {
	prev,
	next,
	setSelectedTimeControl,
	reset,
} from '../../DataManagement/reducers/timeControlsReducer';

import { useActions } from '../../hooks/useActions.js';

import './styles.scss';
// ---------------------------------------------------------------------------------------------------------------------

const Carrousel = () => {
	const dispatch = useDispatch();

	const {allowedTimeControls} = useActions();

	const { selectedIndex, selectedTimeControl } = useActions();

	const current = allowedTimeControls[selectedIndex] || allowedTimeControls[0];
	const handleSelectTimeControl = (x) => {
		dispatch(setSelectedTimeControl(x));
	};

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
				<div className='carrousel-time-control'>
					Carrousel : {selectedTimeControl ?? 'All'}
				</div>
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
