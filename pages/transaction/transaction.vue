<template>
	<view class="transaction">
		<view class="transaction-title">
			<view>
				<u-button type="info" size="mini" @click="show = true">WMO/USDT</u-button>
				<u-action-sheet
					:list="actionSheetList"
					v-model="show"
					@click="actionSheetCallback"
				></u-action-sheet>
			</view>
			<view>24H成交量:958</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			actionSheetList: [
				{
					text: 'WMO/USDT'
				}
			]
		};
	},
	methods: {
		actionSheetCallback(index) {
			this.value = this.actionSheetList[index].text;
		}
	}
};
</script>

<style lang="scss">
.transaction {
	.transaction-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 14rpx;
	}
}
</style>
