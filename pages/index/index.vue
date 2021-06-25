<template>
	<view class="index-root" :style="{ paddingTop: statusBarHeight + 40 + 'px' }">
		<common-title>首页</common-title>
		<view class="wrap"><u-swiper :list="list"></u-swiper></view>
		<view class="lead">
			<view class="lead-item" v-for="(item, index) in leadList" :key="index" @click="showToast">
				<u-image width="90rpx" height="90rpx" :src="item.src"></u-image>
				<view>{{ item.desc }}</view>
			</view>
		</view>
		<view class="real-name" @click="showToast">
			<u-image width="100%" height="132rpx" src="../../static/shiming.png"></u-image>
		</view>
		<!-- <view class="sign-in-box">
			<view class="sign-in-title">签到</view>
			<view class="sign-in">
				<view class="sign-in-item" v-for="item in dayList" :key="item">
					<view><u-icon name="checkmark-circle" size="60"></u-icon></view>
					<view class="sign-in-word">{{ item }}</view>
				</view>
			</view>
			<view class="btn-box"><view class="btn">立即签到</view></view>
		</view> -->
		<!-- <view class="news">
			<view class="news-title-box">
				<view class="news-title">研报资讯</view>
				<u-icon name="arrow-right" size="32"></u-icon>
			</view>

			<view class="news-content">
				<view class="news-content-item" v-for="item in 7" :key="item">
					<view class="left">
						<view class="left-top">新手教程（持续更新）</view>
						<view class="left-bottom">2021-05-11 14:40:37</view>
					</view>
					<view class="right">
						<u-image
							width="206rpx"
							height="140rpx"
							src="../../static/gonggao.jpg"
						></u-image>
					</view>
				</view>
			</view>
		</view> -->
		<view class="trading-center">
			<view class="trading-title">交易中心</view>
			<view class="item-session">
				<view class="item-title">上午专场</view>
				<view class="img"></view>
			</view>
			<view class="item-session">
				<view class="item-title">下午专场</view>
				<view class="img"></view>
			</view>
		</view>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
export default {
	data() {
		return {
			statusBarHeight: 0,
			titleHeight: 0,
			title: 'Hello',
			list: [],
			leadList: [
				{
					src: '../../static/lead-1.png',
					desc: '新手指南'
				},
				{
					src: '../../static/lead-2.png',
					desc: '新手视频'
				},
				{
					src: '../../static/lead-3.png',
					desc: '质押池'
				},
				{
					src: '../../static/lead-4.png',
					desc: '邀请好友'
				}
			],
			dayList: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
		};
	},

	created() {
		let that = this;
		uni.getSystemInfo({
			success: res => {
				that.statusBarHeight = res.statusBarHeight;
			}
		});
		this.getTabbarList();
	},

	onLoad() {},
	methods: {
		getTabbarList() {
			this.$api.getTabbarList().then(res => {
				let { data, code } = res.data;
				if (code === 200) {
					this.list = data.map(item => {
						return item.imageUrl
					});
					console.log(this.list)
				}
			});
		},
		showToast() {
			this.$refs.uToast.show({
				title: '暂未开放'
			});
		}
	}
};
</script>

<style lang="scss">
uni-page-body,
body{
	height: 100%;
}
.index-root {
	padding: 60rpx 30rpx 100rpx;
	background-color: #150e2d;
	min-height: 100%;
	color: #ced3e1;
	box-sizing: border-box;

	.lead {
		display: flex;
		margin-top: 40rpx;
		.lead-item {
			flex: 1;
			display: flex;
			flex-direction: column;
			// justify-content: center;
			align-items: center;
			font-size: 26rpx;
		}
	}
	.real-name {
		margin-top: 20rpx;
		border-radius: 10rpx;
		overflow: hidden;
	}
	.sign-in-box {
		margin-top: 20rpx;
		.sign-in-title {
			font-size: 36rpx;
			font-weight: 700;
			line-height: 100rpx;
			height: 100rpx;
			width: 80rpx;
			&::after {
				content: '';
				display: block;
				height: 12rpx;
				background: linear-gradient(
					270deg,
					rgba(1, 197, 127, 0.2) 0%,
					rgba(12, 199, 133, 0.7) 100%
				);
				margin-top: -40rpx;
			}
		}
		.sign-in {
			display: flex;
			.sign-in-item {
				flex: 1;
				padding-top: 30rpx;
				padding-bottom: 30rpx;
				background: #f7f7f7;
				border-radius: 8rpx;
				text-align: center;
				color: #999;
				margin-left: 10rpx;
				&:first-child {
					margin: 0;
				}
				.sign-in-word {
					font-size: 26rpx;
				}
			}
		}
		.btn-box {
			margin-top: 40rpx;
			text-align: center;
			.btn {
				width: 100%;
				height: 100rpx;
				line-height: 100rpx;
				background: #00c57f;
				color: #fff;
				font-size: 36rpx;
				font-weight: bold;
				border-radius: 10rpx;
			}
		}
	}
	.news {
		.news-title-box {
			position: relative;
			.news-title {
				font-size: 36rpx;
				font-weight: 700;
				line-height: 100rpx;
				height: 100rpx;
				width: 160rpx;
				&::after {
					content: '';
					display: block;
					height: 12rpx;
					background: linear-gradient(
						270deg,
						rgba(1, 197, 127, 0.2) 0%,
						rgba(12, 199, 133, 0.7) 100%
					);
					margin-top: -40rpx;
				}
			}
			.u-icon--right {
				position: absolute;
				right: 0;
				top: 50%;
				transform: translateY(-50%);
			}
		}
		.news-content {
			.news-content-item {
				margin-top: 30rpx;
				display: flex;
				justify-content: space-between;
				.left {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					font-size: 28rpx;
					.left-top {
						padding-top: 10rpx;
					}
					.left-bottom {
						padding-bottom: 10rpx;
					}
				}
			}
		}
	}
	.trading-center {
		padding-top: 20rpx;
		.trading-title {
			padding: 20rpx;
			font-size: 34rpx;
			position: relative;
			&::after {
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				content: '';
				width: 10rpx;
				height: 30rpx;
				background: -webkit-linear-gradient(225deg, #fe9e2c, #fb402d);
				background: linear-gradient(225deg, #fe9e2c, #fb402d);
				border-radius: 6rpx;
			}
		}

		.item-session {
			padding: 20rpx 0 30rpx;
			background-color: #1e1c41;
			border-radius: 12rpx;
			.item-title {
				font-size: 30rpx;
				padding: 0 40rpx 20rpx;
			}
			.img {
				width: 100%;
				height: 300rpx;
				background: url('../../static/2.jpg') no-repeat center center;
				background-size: contain;
			}
		}
	}
}
</style>
