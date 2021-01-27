<template>
	<div class="checkbox">
		<input
			type="checkbox"
			:id="id"
			class="checkbox__input"
			:checked="value"
			@change="onChange"
		/>
		<label :for="id" class="checkbox__label"><slot /></label>
	</div>
</template>

<script>
export default {
	props: {
		id: String,
		value: Boolean,
	},
	model: {
		event: 'change',
	},
	methods: {
		onChange(e) {
			this.$emit('change', e.target.checked);
		},
	},
};
</script>
