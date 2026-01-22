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
	selectedIndex: 0,
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
		prev(state) {
			const len = state.timeControls.length;
			if (len === 0) return;
			state.selectedIndex = (state.selectedIndex - 1 + len) % len;
		},
		next(state) {
			const len = state.timeControls.length;
			if (len === 0) return;
			state.selectedIndex = (state.selectedIndex + 1) % len;
		},
		reset() {
			return initialState;
		},
	},
});

export const { setSelectedTimeControl, setTimeControls, next, prev, reset } =
	timeControlsSlice.actions;

export default timeControlsSlice.reducer;
