import React from "react";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { useSelector, useDispatch } from "react-redux";
import {
	removeItemCart,
	increaseQuantityItem,
	decreaseQuantityItem,
} from "../../context/actions";

const Cart = ({ handleCartOpen }) => {
	const MINIMUM_QUANTITY = 1;
	const cartItems = useSelector(state => state.cart);
	const dispatch = useDispatch();

	const cartItemsDisplay = cartItems.map(item => (
		<div className=" mb-4">
			<div className="row justify-content-end">
				<button
					onClick={() => dispatch(removeItemCart(item.id))}
					className="btn btn-outline-dark w-auto border-0">
					<i class="bi bi-x" />
				</button>
			</div>
			<div className="row">
				<div className="col p-0">
					<img
						className="img-fluid img-thumbnail"
						src={item.thumbnail}
						alt=""
					/>
				</div>
				<div className="col-6">
					<div className="row">
						<div className="col">
							<p className="m-0 p-0">{item.title}</p>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<p className="m-0 p-0">{`Quantity: ${item.quantity}`}</p>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="row">
						<div className="col">
							<p>{`$${item.price}`} </p>
						</div>
					</div>
					<div className="row ">
						<div className="col d-flex ">
							<button
								onClick={() => {
									if (item.quantity > MINIMUM_QUANTITY) {
										dispatch(decreaseQuantityItem(item.id));
									}
								}}
								className="btn btn-secondary rounded-0 rounded-start btn-sm">
								<i class="bi bi-dash" />
							</button>
							<button
								onClick={() => {
									dispatch(increaseQuantityItem(item.id));
								}}
								className="btn btn-secondary rounded-0 rounded-end btn-sm">
								<i class="bi bi-plus" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	));

	return (
		<div className="cart__container">
<div className="d-flex justify-content-end">
			<button onClick={handleCartOpen} className="btn btn-primary">
				<i class="bi bi-x" />
			</button>
<div/>
			<div className="container">{cartItemsDisplay}</div>
		</div>
	);
};

export default Cart;
