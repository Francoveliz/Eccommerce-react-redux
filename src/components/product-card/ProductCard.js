import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

const ProductCard = ({ title, price, thumbnail, id }) => {
	return (
		<Link
			to={`/products/${id}`}
			className="text-decoration-none text-reset">
			<div className="card rounded-3">
				<img src={thumbnail} className="card-img-top" alt="..." />
				<div className="card-body">
					<h6 className="card-title text-center fw-light">{title}</h6>
					<h5 className="card-text text-center ">{`$${price}`}</h5>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
