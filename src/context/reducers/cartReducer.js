const cartReducer = (state = [], action) => {
	switch (action.type) {
		case "ADD_ITEM_CART":
			return [...state, action.payload];

		case "REMOVE_ITEM_CART":
			return state.filter(item => action.payload !== item.id);

		case "INCREASE_QUANTITY_ITEM":
			return state.reduce((accumulator, item) => {
				console.log(item.quantity + 1);
				if (item.id === action.payload) {
					return [
						...accumulator,
						{
							...item,
							quantity: item.quantity + 1,
						},
					];
				}
				return [...accumulator, { ...item }];
			}, []);

		case "DECREASE_QUANTITY_ITEM":
			return state.reduce((accumulator, item) => {
				console.log(item.quantity + 1);
				if (item.id === action.payload) {
					return [
						...accumulator,
						{
							...item,
							quantity: item.quantity - 1,
						},
					];
				}
				return [...accumulator, { ...item }];
			}, []);

		default:
			return state;
	}
};

export default cartReducer;
