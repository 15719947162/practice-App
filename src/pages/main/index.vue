<template>
	<view style="height: 100%;margin: 0 20rpx;">
		<uni-nav-bar :status-bar="true" color="#333333" background-color="#FFFFFF">
			<block slot="left">
				<view class="nav-left">
					<uni-icons type="scan" color="#333333" size="22" />
				</view>
			</block>
			<view class="input-view">
				<input confirm-type="search" class="nav-bar-input" type="text" placeholder="输入搜索关键词" @confirm="confirm">
				<uni-icons class="input-uni-icon" type="search" size="22" color="#666666" />
			</view>
			<block slot="right">
				<view class="nav-right">
					<uni-icons type="mic" color="#333333" size="22" />
					<uni-icons type="camera" color="#333333" size="22" />
				</view>
			</block>
		</uni-nav-bar>
		<scroll-view :scroll-top="0" scroll-y="true" show-scrollbar="false" :style="{height:windowHeight-44-statusBarHeight-50-2+'px'}">
			<view style="border-radius: 30rpx;">
				<swiper class="swiper-box" :indicator-dots="true" :autoplay="true" :interval="5000" :duration="600" style="height: 400rpx;">
					<swiper-item v-for="(item ,index) in swiperList" :key="index">
						<view class="swiper-item">
							<image :src="item.content" style="width:100%"></image>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<uni-grid :column="5" :show-border="false" :square="false">
				<uni-grid-item>
					<view class="grid-wrapper">
						<view class="grid-icon">
							<image src="../../static/img/01.png" mode="" style="width: 80rpx;height: 80rpx;"></image>
						</view>
						<view class="grid-text">
							<text class="text">文本</text>
						</view>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-wrapper">
						<view class="grid-icon">
							<image src="../../static/img/02.png" mode="" style="width: 80rpx;height: 80rpx;"></image>
						</view>
						<view class="grid-text">
							<text class="text">文本</text>
						</view>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-wrapper">
						<view class="grid-icon">
							<image src="../../static/img/03.png" mode="" style="width: 80rpx;height: 80rpx;"></image>
						</view>
						<view class="grid-text">
							<text class="text">文本</text>
						</view>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-wrapper">
						<view class="grid-icon">
							<image src="../../static/img/04.png" mode="" style="width: 80rpx;height: 80rpx;"></image>
						</view>
						<view class="grid-text">
							<text class="text">文本</text>
						</view>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-wrapper">
						<view class="grid-icon">
							<image src="../../static/img/05.png" mode="" style="width: 80rpx;height: 80rpx;"></image>
						</view>
						<view class="grid-text">
							<text class="text">文本</text>
						</view>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-wrapper">
						<view class="grid-icon">
							<image src="../../static/img/06.png" mode="" style="width: 80rpx;height: 80rpx;"></image>
						</view>
						<view class="grid-text">
							<text class="text">文本</text>
						</view>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-wrapper">
						<view class="grid-icon">
							<image src="../../static/img/07.png" mode="" style="width: 80rpx;height: 80rpx;"></image>
						</view>
						<view class="grid-text">
							<text class="text">文本</text>
						</view>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-wrapper">
						<view class="grid-icon">
							<image src="../../static/img/08.png" mode="" style="width: 80rpx;height: 80rpx;"></image>
						</view>
						<view class="grid-text">
							<text class="text">文本</text>
						</view>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-wrapper">
						<view class="grid-icon">
							<image src="../../static/img/09.png" mode="" style="width: 80rpx;height: 80rpx;"></image>
						</view>
						<view class="grid-text">
							<text class="text">文本</text>
						</view>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-wrapper">
						<view class="grid-icon">
							<image src="../../static/img/10.png" mode="" style="width: 80rpx;height: 80rpx;"></image>
						</view>
						<view class="grid-text">
							<text class="text">文本</text>
						</view>
					</view>
				</uni-grid-item>
			</uni-grid>
			<view style="background-color:#dfdfdf;border-radius: 20rpx;">
				<view style="display: flex;flex-wrap: wrap;">
					<view style="width: 50%;">
						<image src=""></image>
						<text>{{windowHeight}}{{statusBarHeight}}{{navBarHeight}}</text>
					</view>
					<view style="width: 50%;">
						<image src=""></image>
						<text></text>
					</view>
					<view style="width: 50%;">
						<image src=""></image>
						<text></text>
					</view>
					<view style="width: 50%;">
						<image src=""></image>
						<text></text>
					</view>
					<view style="width: 50%;">
						<image src=""></image>
						<text></text>
					</view>
					<view style="width: 50%;">
						<image src=""></image>
						<text></text>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue";
	import uniGrid from "@/components/uni-grid/uni-grid.vue"
	import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue"
	export default {
		data() {
			return {
				navBarHeight: 0,
				swiperList: [{
					content: '../../static/img/1.jpg'
				}, {
					content: '../../static/img/2.jpg'
				}, {
					content: '../../static/img/3.jpg'
				}],
				current: 0,
				mode: 'round',
			}
		},
		computed: {
			statusBarHeight: function() {
				return this.$store.state.statusBarHeight
			},
			windowHeight: function() {
				return this.$store.state.windowHeight
			}
		},
		methods: {
			getVNodeDomInfo(eleName, attr, defaultHeight) {
				let _this = this;
				const query = uni.createSelectorQuery().in(this);
				query
					.select(eleName)
					.boundingClientRect(data => {
						_this[attr] = data.height ? data.height : defaultHeight;
					})
					.exec();
			},
			getNavBarHeight: function() {
				this.getVNodeDomInfo(".uni-navbar", "navBarHeight", 44);
			},
			confirm: function() {

			}
		},
		mounted() {
			this.getNavBarHeight()
		},
		components: {
			uniNavBar,
			uniIcons,
			uniGrid,
			uniGridItem,
		}
	}
</script>

<style lang="scss" scope>
	.input-view {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		/* width: 500rpx;
 */
		flex: 1;
		background-color: #f8f8f8;
		height: 30px;
		border-radius: 15px;
		padding: 0 15px;
		flex-wrap: nowrap;
		margin: 7px 0;
		line-height: 30px;
	}

	.input-uni-icon {
		line-height: 30px;
	}

	.nav-bar-input {
		height: 30px;
		line-height: 30px;
		/* #ifdef APP-PLUS-NVUE */
		width: 100%;
		/* #endif */
		padding: 0 5px;
		font-size: 28rpx;
		background-color: #f8f8f8;
		width: 100%;
	}

	.nav-left {
		width: 100%;
		text-align: center;
	}

	.nav-right {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		width: 100%;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		/* width: 160rpx;
	*/
		margin-left: 4px;
	}

	.uni-grid-wrap {
		background: $uni-bg-color;
		padding-top: 6rpx;

		.uni-grid-item {
			height: 140rpx;
		}

		.grid-wrapper {
			display: flex;
			flex: 1;
			align-items: center;
			height: 140rpx;
			flex-direction: column;
			text-align: center;
			justify-content: center;
			align-items: center;

			.grid-icon {
				display: inline-flex;
				height: 48rpx;
			}

			.grid-text {
				padding-top: 40rpx;
				display: inline-flex;
				height: 36rpx;
				line-height: 36rpx;
				font-size: 28rpx;
			}
		}
	}

	.uni-swiper-wrapper {
		border-radius: 60rpx;
	}
</style>
