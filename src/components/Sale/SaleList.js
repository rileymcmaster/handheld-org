import React, { useState } from "react";
import { useQuery } from "react-query";
import { fetchMoog } from "../../utils/fetchMoog";
import SaleListItem from "./SaleListItem";
import ShowMoreButton from "../Weather/ShowMoreButton";

const filterProductTypes = ["Modules", "DJ Controllers"];

const SaleList = () => {
	const { isSuccess, data: items } = useQuery("saleItems", fetchMoog, { enabled: true });
	const [isExpand, setIsExpand] = useState(false);

	if (!isSuccess || !items.length) return null;
	const itemsFiltered = items.filter((item) => !filterProductTypes.includes(item.product_type));

	const handleClick = () => {
		setIsExpand(!isExpand);
	};
	return (
		<div className="sale">
			<ShowMoreButton handleClick={handleClick} showMore={isExpand}>
				+
			</ShowMoreButton>
			<div className={`sale-list__wrapper ${isExpand ? "expand" : ""}`}>
				<ul className="sale-list">
					{itemsFiltered.map((item) => (
						<SaleListItem item={item} key={item.handle} />
					))}
				</ul>
			</div>
		</div>
	);
};

export default SaleList;
