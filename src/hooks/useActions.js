import { useSelector } from 'react-redux';

export const useActions = () => {
	const selectedTimeControl = useSelector(
		(state) => state.timeControlsReducer.selectedTimeControl
	);

	const allowedTimeControls = useSelector(
		(state) => state.timeControlsReducer.timeControls
	);

	const selectedIndex = useSelector(
		(state) => state.timeControlsReducer?.selectedIndex ?? 0
	);

	const timeControls = useSelector(
		(state) => state.timeControlsReducer.timeControls
	);

	return { selectedTimeControl, allowedTimeControls, selectedIndex, timeControls };
}