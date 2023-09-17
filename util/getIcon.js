const iconSet = {
	shopping: 'cart-outline',
	flight: 'airplane-outline',
	train: 'train-outline',
	food: 'fast-food-outline',
	health: 'medical-outline',
	electricity: 'bulb-outline',
	payments: 'card-outline',
	other: 'help',
};

export function getIconName(category) {
	if (category in iconSet) {
		return iconSet[category];
	} else {
		return iconSet['other'];
	}
}
