import Button from '../button';

import { useContext } from 'react';

import { CatalogueContext } from '../../providers/catalogue';
import { CartContext } from '../../providers/cart';
import { Container, List, ListItem, Product } from './styles';

const ProductList = ({ type }) => {
	// type determinará se nosso componente será do tipo "catalogue" ou "cart"
	// veremos melhor como isso irá funcionar quando formos para nosso App.js
	const { catalogue } = useContext(CatalogueContext);
	const { cart } = useContext(CartContext);

	return (
		<Container>
			<List>
				{type === 'catalogue' &&
					catalogue.map((item, index) => (
						<ListItem key={index}>
							<Product>{item.name}</Product>
							<Button type={type} item={item} />
						</ListItem>
					))}

				{type === 'cart' &&
					cart.map((item, index) => (
						<ListItem key={index}>
							<Product>{item.name}</Product>
							<Button type={type} item={item} />
						</ListItem>
					))}
			</List>
		</Container>
	);
};

export default ProductList;
