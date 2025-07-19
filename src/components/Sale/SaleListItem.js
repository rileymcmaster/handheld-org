import React from "react";

const SaleListItem = ({ item }) => {
	const { title, id, handle, variants, images, body_html } = item;
	const link = `https://moogaudio.com/collections/sales/products/${handle}`;
	const { price: salePrice, compare_at_price: originalPrice } = variants.sort((variant) => ++variant.price)[0];

	const percentSale = Math.round((1 - salePrice / originalPrice).toFixed(2) * 100);

	return (
		<li className="sale-item">
			<h3 className="sale-item__title">
				<a className="sale-item__link" href={link} target="_blank">
					{title}
				</a>
			</h3>
			<p className="sale-item__price">${salePrice}</p>
			<p className="sale-item__price--og">
				<s>${originalPrice}</s> &nbsp; {percentSale}%
			</p>
		</li>
	);
};

export default SaleListItem;
