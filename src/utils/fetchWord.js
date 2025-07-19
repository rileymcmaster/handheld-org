import axios from "axios";
export const fetchWord = async () => {
	const result = await axios.get(`https://rnd.bgenc.dev/v1/word?category=nouns`);

	const resultData = result.data;
	return resultData;
};
