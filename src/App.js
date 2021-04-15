import "./assets/style/main.css";
import "bootstrap/dist/css/bootstrap.css";
import {
	ProductCard,
	ProductsContainer,
	Navbar,
	ProductPage,
} from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={ProductsContainer} />
				</Switch>

				<Route path="/products/:id" component={ProductPage} />
			</Router>
		</>
	);
}

export default App;
