<template>
	<button type="button" class="btn" :class="computedClass" :disabled="disabled">
		<slot>Button</slot>
	</button>
</template>

<script>
export default {
	props: {
		size: {
			type: String,
			default: 'large',
			validate: (value) => {
				return ['large'].includes(value);
			},
		},
		type: {
			type: String,
			default: 'accent',
			validate: (value) => {
				return ['accent'].includes(value);
			},
		},
		stretch: Boolean,
		disabled: Boolean,
	},
	computed: {
		computedClass() {
			let items = [this.size, this.type];

			!this.stretch || items.push('stretch');

			return items.map((item) => `btn_${item}`).join(' ');
		},
	},
};
</script>
