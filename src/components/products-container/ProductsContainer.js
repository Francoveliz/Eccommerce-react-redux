import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { ProductCard } from "../";
import products from "../../assets/utils/products";

const ProductsContainer = () => {
	return (
		<div className="container">
			<div className="row g-5">
				{products.map(product => (
					<div className="col-lg-3 col-md-4 col-6">
						<ProductCard {...product} />
					</div>
				))}
				{/* <div className="col-lg-3 col-md-4 col-sm-6">
						<ProductCard />
					</div> */}
			</div>
		</div>
	);
};

export default ProductsContainer;
