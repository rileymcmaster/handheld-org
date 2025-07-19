import axios from "axios";

export const fetchMoog = async () => {
	const result = await axios.get("https://moogaudio.com/collections/sales/products.json");

	return result.data.products;
};
