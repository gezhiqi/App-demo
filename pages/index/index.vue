<template>
	<view class="index-root">
		<view class="wrap"><u-swiper :effect3d="true" :list="list"></u-swiper></view>
		<view class="lead">
			<view class="lead-item" v-for="(item, index) in leadList" :key="index">
				<u-image width="90rpx" height="90rpx" :src="item.src"></u-image>
				<view>{{ item.desc }}</view>
			</view>
		</view>
		<view class="real-name">
			<u-image width="100%" height="132rpx" src="../../static/shiming.png"></u-image>
		</view>
		<view class="sign-in-box">
			<view class="sign-in-title">签到</view>
			<view class="sign-in">
				<view class="sign-in-item" v-for="item in dayList" :key="item">
					<view><u-icon name="checkmark-circle" size="60"></u-icon></view>
					<view class="sign-in-word">{{ item }}</view>
				</view>
			</view>
			<view class="btn-box"><view class="btn">立即签到</view></view>
		</view>
		<view class="news">
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
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello',
			list: ['../../static/1.jpg', '../../static/2.jpg', '../../static/3.jpg'],
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
	onLoad() {},
	methods: {}
};
</script>

<style lang="scss">
.index-root {
	padding: 0 30rpx;
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
}
</style>
