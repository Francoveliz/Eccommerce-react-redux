import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import { Cart } from "../";

const Navbar = () => {
	const [cartIsOpen, setCartIsOpen] = useState(false);

	const handleCartOpen = () => {
		setCartIsOpen(!cartIsOpen);
	};
	return (
		<nav className="navbar sticky-top navbar-light bg-light">
			<div className="container">
				<Link to="/" className="navbar-brand">
					eccommerce
				</Link>
				{cartIsOpen ? <Cart handleCartOpen={handleCartOpen} /> : ""}
				<i onClick={handleCartOpen} className="bi bi-cart" />
			</div>
		</nav>
	);
};

export default Navbar;
