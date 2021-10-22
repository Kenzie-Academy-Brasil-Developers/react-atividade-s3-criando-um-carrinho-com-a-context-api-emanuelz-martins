import { useContext } from 'react';

import { CartContext } from '../../providers/cart';
import { CatalogueContext } from '../../providers/catalogue';

import { GrAddCircle } from 'react-icons/gr';
import { MdDeleteForever } from 'react-icons/md';

const Button = ({ type, item }) => {
	const { cart, addToCart, removeFromCart } = useContext(CartContext);
	const { catalogue, addToCatalogue, removeFromCatalogue } =
		useContext(CatalogueContext);

	const icon =
		type === 'catalogue' ? (
			<GrAddCircle style={{ fontSize: '15px' }} />
		) : (
			<MdDeleteForever
				style={{
					color: 'red',
					fontSize: '15px',
					'@media (min-width:768px)': {
						fontSize: '25px',
					},
				}}
			/>
		);

	const handleClick = () => {
		if (type === 'catalogue') {
			removeFromCatalogue(item);
			addToCart(item);
		} else {
			removeFromCart(item);
			addToCatalogue(item);
		}
	};

	return <button onClick={handleClick}>{icon}</button>;
};

export default Button;
