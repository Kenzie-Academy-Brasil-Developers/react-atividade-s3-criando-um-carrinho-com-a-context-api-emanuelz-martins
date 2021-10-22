import ProductList from './app/components/product-list';
import { CartProvider } from './app/providers/cart';
import { CatalogueProvider } from './app/providers/catalogue';
import GlobalStyles from './app/styles/global';

function App() {
	return (
		<div className="App">
			<GlobalStyles />
			<CatalogueProvider>
				<CartProvider>
					<ProductList type="catalogue" />
					<ProductList type="cart" />
				</CartProvider>
			</CatalogueProvider>
		</div>
	);
}

export default App;
