<template>
	<div class="text-field">
		<label class="text-field__label" v-if="label" :for="id">{{ label }}</label>
		<input
			type="text"
			:id="id"
			class="text-field__input"
			:placeholder="placeholder"
			:value="value"
			@input="onInput"
			@change="onChange"
		/>
		<div class="text-field__validation-error">{{ error }}</div>
	</div>
</template>

<script>
export default {
	props: {
		id: String,
		label: String,
		placeholder: String,
		value: String,
		error: {
			type: String,
			default: ' ',
		},
	},
	methods: {
		onInput(e) {
			this.$emit('input', e.target.value);
		},
		onChange(e) {
			this.$emit('change', e.target.value);
		},
	},
};
</script>
