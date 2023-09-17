const months = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sept',
	'Oct',
	'Nov',
	'Dec',
];

export function getFormattedDate(date) {
	return `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`;
}

export function getDateMinusDays(date, days) {
	return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
