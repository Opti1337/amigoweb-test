export function isTrue(value) {
	return value === true;
}

export function name(value) {
	return /^[a-zа-я\-\s]+$/i.test(value);
}

export function phone(value) {
	return value.length && value.match(/\d/g).length === 11 && /^[\d()\-+]+$/.test(value);
}
