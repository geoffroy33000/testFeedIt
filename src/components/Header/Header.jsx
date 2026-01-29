import { useState } from 'react';
import Carrousel from '../Carrousel/Carrousel.jsx';
import List from '../List/List.jsx';

import './styles.scss';

const Header = () => {
	const [selectedCarrousel, setSelectedCarrousel] = useState(false);

	return (
		<div className="header">
			<div>
				<h1>Classement</h1>
				{
					selectedCarrousel ? (
						<Carrousel />
					) : (
						<List />
					)
				}

				<button className='change-view' onClick={() => setSelectedCarrousel(!selectedCarrousel)}>
					Changer de vue: {selectedCarrousel ? 'Liste' : 'Carrousel'}
				</button>
			</div>
		</div>
	)
}

export default Header;

