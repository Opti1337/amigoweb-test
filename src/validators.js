export function isTrue(value) {
	return value === true;
}

export function alpha(value) {
	return /^[a-zа-я]+$/i.test(value);
}

export function phone(value) {
	return value.length && value.match(/\d/g).length === 11 && /^[\d()\-+]+$/.test(value);
}
