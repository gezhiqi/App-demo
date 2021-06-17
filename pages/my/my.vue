<template>
	<view>
		<view @click="toLogin">去登录</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toLogin() {
				
				this.$Router.push({name:'login'})
				// uni.redirectTo({
				//     url: '/pages/login/login'
				// });
			}
		}
	}
</script>

<style>

</style>
