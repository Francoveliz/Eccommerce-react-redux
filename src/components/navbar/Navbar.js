import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar sticky-top navbar-light bg-light">
			<div className="container">
				<Link to="/" className="navbar-brand">
					eccommerce
				</Link>
				<i className="bi bi-cart" />
			</div>
		</nav>
	);
};

export default Navbar;
