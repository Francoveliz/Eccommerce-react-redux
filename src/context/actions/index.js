export const addItemCart = item => ({
	type: "ADD_ITEM_CART",
	payload: item,
});

export const removeItemCart = id => ({
	type: "REMOVE_ITEM_CART",
	payload: id,
});

export const increaseQuantityItem = id => ({
	type: "INCREASE_QUANTITY_ITEM",
	payload: id,
});

export const decreaseQuantityItem = id => ({
	type: "DECREASE_QUANTITY_ITEM",
	payload: id,
});
