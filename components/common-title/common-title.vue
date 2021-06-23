<template>
	<view :style="{paddingTop: statusBarHeight+'px'}" class="title"><slot></slot></view>
</template>

<script>
export default {
	name: 'title',

	data() {
		return {
			statusBarHeight: 0
		};
	},
	created() {
		let that = this;
		uni.getSystemInfo({
			success: res => {
				that.statusBarHeight = res.statusBarHeight;
			}
		});
	}
};
</script>

<style lang="scss">
.title {
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	height: 40px;
	line-height: 40px;
	text-align: center;
	color: #ced3e1;
	font-size: 36rpx;
	z-index: 99;
	    background-image: linear-gradient(
	45deg
	,#110e2a,#110e2a);
}
</style>
