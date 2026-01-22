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
	setIndex,
} from '../../DataManagement/reducers/timeControlsReducer';

import { ALLOWED } from '../../App.jsx';
import './styles.scss';
// ---------------------------------------------------------------------------------------------------------------------

const Carrousel = () => {
	const dispatch = useDispatch();
	const selectedIndex = useSelector(
		(state) => state.timeControlsReducer?.selectedIndex ?? 0
	);
	const normalizedIndex =
		Number.isInteger(selectedIndex) && selectedIndex >= 0
			? selectedIndex % ALLOWED.length
			: 0;

	const current = ALLOWED[normalizedIndex] || ALLOWED[0];
	const selectedTimeControl = useSelector(
		(state) => state.timeControlsReducer.selectedTimeControl
	);

	return (
		<div>
			<button onClick={() => dispatch(prev())}>{'<'}</button>
			Carrousel : {current}
			<button onClick={() => dispatch(next())}>{'>'}</button>
		</div>
	);
};

export default Carrousel;
