import React from "react";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const CartItem = () => {
	return (
		<div className="row">
			<div className="col-2 p-0">
				<img
					className="img-fluid img-thumbnail"
					src="http://http2.mlstatic.com/D_939063-MLA43751372595_102020-I.jpg"
					alt=""
				/>
			</div>
			<div className="col-8">
				<div className="row">
					<div className="col">
						<p className="m-0 p-0">Cat Tee Black T-Shirt</p>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<p className="m-0 p-0">S | Black with custom print</p>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<p className="m-0 p-0">Quantity: 13</p>
					</div>
				</div>
			</div>
			<div className="col-2">
				<div className="row">
					<div className="col">
						<p>$10.90</p>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<p>- +</p>
					</div>
				</div>
			</div>
		</div>
	);
};

const Cart = ({ handleCartOpen }) => {
	return (
		<div className="cart__container">
			<button onClick={handleCartOpen} className="btn btn-primary">
				X
			</button>
			<div className="container">
				<CartItem />
			</div>
		</div>
	);
};

export default Cart;
