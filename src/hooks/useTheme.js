import { useDispatch, useSelector } from 'react-redux';
import {
	setTheme,
	toggleTheme,
} from '../DataManagement/reducers/ThemeReducer.js';

export const useTheme = () => {
	const dispatch = useDispatch();
	const mode = useSelector((s) => s.theme.mode);
	return {
		mode,
		isDark: mode === 'dark',
		toggle: () => dispatch(toggleTheme()),
		setTheme: (m) => dispatch(setTheme(m))
	};
};