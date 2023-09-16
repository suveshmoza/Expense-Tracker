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
