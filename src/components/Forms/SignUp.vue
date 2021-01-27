<template>
	<form class="form form-sign-up">
		<h1 class="form__title">Регистрация</h1>
		<p class="form__description">Уже есть аккаунт? <a href="#">Войти</a></p>
		<div class="form__control">
			<TextField
				label="Имя"
				placeholder="Введите Ваш имя"
				:error="errorMessageForInput($v.formData.name)"
				v-model.trim.lazy="$v.formData.name.$model"
			/>
		</div>
		<div class="form__control">
			<TextField
				label="Email"
				placeholder="Введите Ваш email"
				:error="errorMessageForInput($v.formData.email)"
				v-model.trim.lazy="$v.formData.email.$model"
			/>
		</div>
		<div class="form__control">
			<TextField
				label="Номер телефона"
				placeholder="Введите номер телефона"
				:error="errorMessageForInput($v.formData.phone)"
				v-model.trim.lazy="$v.formData.phone.$model"
			/>
		</div>
		<div class="form__control">
			<Dropdown
				placeholder="Язык"
				:items="languages"
				v-model="formData.language"
			/>
		</div>
		<Checkbox id="terms-of-use" v-model="formData.termsAccepted"
			>Принимаю <a href="#">условия</a> использования</Checkbox
		>
		<Button :disabled="$v.formData.$invalid" :stretch="true" @click="submit"
			>Зарегистрироваться</Button
		>
	</form>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, email } from 'vuelidate/lib/validators';
import { isTrue, phone, alpha } from '@/validators';

import Button from '@/components/Controls/Button.vue';
import TextField from '@/components/Controls/TextField.vue';
import Checkbox from '@/components/Controls/Checkbox.vue';
import Dropdown from '@/components/Controls/Dropdown.vue';

export default {
	mixins: [validationMixin],
	components: {
		Button,
		TextField,
		Checkbox,
		Dropdown,
	},
	data() {
		return {
			formData: {
				name: '',
				email: '',
				phone: '',
				language: null,
				termsAccepted: false,
			},
			languages: [
				{ label: 'Русский', code: 'ru' },
				{ label: 'Английский', code: 'en' },
				{ label: 'Китайский', code: 'zh' },
				{ label: 'Испанский', code: 'es' },
			],
		};
	},
	validations: {
		formData: {
			name: { required, alpha },
			email: { required, email },
			phone: { required, phone },
			language: { required },
			termsAccepted: { required, isTrue },
		},
	},
	mounted() {
		this.$v.formData.$reset();
	},
	methods: {
		errorMessageForInput(input) {
			const message = 'Введено не корректное значение';

			if (input.$error) {
				return message;
			}
		},
		submit() {
			this.$v.formData.$touch();

			if (!this.$v.formData.$invalid) {
				this.$emit('submit', this.formData);
			}
		},
	},
};
</script>

<style lang="scss">
.form-sign-up {
	max-width: 460px;

	.checkbox {
		margin: 31px 0px 38px;
	}
}
</style>
