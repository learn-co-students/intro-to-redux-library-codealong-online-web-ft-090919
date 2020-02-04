export default function shoppingListItemReducer(
	state = {
		items: []
	},
	action
) {
	 console.log(action); //logging the action
	switch (action.type) {
		case 'INCREASE_COUNT':
			console.log('Current state.items length %s', state.items.length); //Logging and updating
			console.log('Updating state.items length to %s', state.items.length + 1);
			return {
				...state,
				items: state.items.concat(state.items.length + 1)
			}
		default:
			return state;
			console.log('Initial state.items length: %s', state.items.length);
			return state;
	}
}
