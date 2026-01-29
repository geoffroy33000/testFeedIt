import Header from './components/Header/Header.jsx';
import Table from './components/Table/Table.jsx';
import Button from './components/Button/Button.jsx';
import { useTheme } from './hooks/useTheme.js';

export default function App() {
	const {isDark , toggle} = useTheme();
	return (
		<main className={`app ${isDark ? 'dark' : 'light'}`}>
			<Button
				classname='theme-toggle-button'
				onClick={() => toggle()}
				children={isDark ? 'Light Mode' : 'Dark Mode'}
			/>
			<Header />
			<Table />
		</main>
	);
}
