<template>
	<div class="dropdown">
		<div class="dropdown__label" v-if="label">{{ label }}</div>
		<button
			type="button"
			class="dropdown__trigger"
			:class="{ dropdown__trigger: isActive }"
			@click="toggle"
		>
			{{ (value && value[labelProp]) || placeholder }}
		</button>
		<div class="dropdown__content" v-if="isActive" v-on-clickaway="close">
			<div
				class="dropdown__item"
				v-for="item in items"
				:key="item.value"
				@click="onItemSelected(item)"
			>
				{{ item[labelProp] }}
			</div>
		</div>
	</div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';

export default {
	model: {
		event: 'change',
	},
	mixins: [clickaway],
	props: {
		label: String,
		placeholder: {
			type: String,
			default: '—',
		},
		items: {
			type: Array,
			default() {
				return [];
			},
		},
		labelProp: {
			type: String,
			default: 'label',
		},
		value: {
			type: Object,
			default() {
				return null;
			},
		},
	},
	data() {
		return {
			isActive: false,
		};
	},
	methods: {
		toggle() {
			this.isActive = !this.isActive;
		},
		open() {
			this.isActive = true;
		},
		close() {
			this.isActive = false;
		},
		onItemSelected(item) {
			this.close();
			this.$emit('change', item);
		},
	},
};
</script>
