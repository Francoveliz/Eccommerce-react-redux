import React from "react";
import products from "../../assets/utils/products";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { addItemCart } from "../../context/actions";

const ProductPage = ({ match }) => {
	const cartState = useSelector(state => state.cart);
	const dispatch = useDispatch();
	const product = products.find(product => match.params.id === product.id);

	return (
		<div className="container">
			<div className="row mt-5">
				<div className="col-lg-6">
					<img
						className="img-fluid w-100 "
						src={product.thumbnail}
						alt="thumbnail"
					/>
				</div>
				<div className="col-lg-6 d-flex justify-content-end">
					<div className="col-lg-8">
						<h2 className="mb-3">{product.title}</h2>
						<h3 className="fs-1 fw-bold mb-5">{`$${product.price}`}</h3>
						<div className="d-grid">
							<button
								onClick={() =>
									!!cartState.find(item => item.id === product.id)
										? ""
										: dispatch(addItemCart({ ...product, quantity: 1 }))
								}
								className="btn btn-primary"
								type="button">
								Add to cart
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductPage;
