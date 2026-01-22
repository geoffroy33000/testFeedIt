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
			if (state.selectedIndex >= state.timeControls.length) {
				state.selectedIndex = Math.max(0, state.timeControls.length - 1);
			}
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
		setIndex(state, action) {
			const idx = Number(action.payload);
			if (!Number.isNaN(idx) && idx >= 0 && idx < state.timeControls.length) {
				state.selectedIndex = idx;
			}
		},
	},
});

export const { setSelectedTimeControl, setTimeControls, next,prev,setIndex } =
	timeControlsSlice.actions;

export default timeControlsSlice.reducer;
