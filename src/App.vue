<template>
	<div id="app">
		<SignUp />
	</div>
</template>

<script>
import SignUp from '@/components/Forms/SignUp.vue';

export default {
	name: 'App',
	components: {
		SignUp,
	},
};
</script>

<style lang="scss">
#app {
	padding-top: 50px;

	.form-sign-up {
		margin: 0 auto;
	}
}
</style>
