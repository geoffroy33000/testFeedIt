// ---------------------------------------------------------------------------------------------------------------------
//!                                                       Imports
// ---------------------------------------------------------------------------------------------------------------------

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	selectedTimeControl: null,
	timeControls: [
		'live_bullet',
		'live_blitz',
		'live_rapid',
		'daily',
		'tactics',
	],
};

export const timeControlsSlice = createSlice({
	name: 'timeControlSlice',
	initialState,
	reducers: {
		setSelectedTimeControl(state, { payload }) {
			return { ...state, selectedTimeControl: payload };
		},
		setTimeControls(state, action) {
			state.timeControls = action.payload;
		},
	},
});

export const { setSelectedTimeControl, setTimeControls } =
	timeControlsSlice.actions;

export default timeControlsSlice.reducer;
