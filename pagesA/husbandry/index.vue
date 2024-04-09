<template>
	<view class="husbandry_content">
		<view style="background-color: #FFFFFF;"
			:style="{'height':statusHeight==0? '50rpx':(statusHeight==1? '110rpx':'120rpx')}">
		</view>
		<view class="husbandry_content_view">
			<view class="husbandry_content_view_navbar">
				<image @click="nav" style="width: 25rpx; height: 40rpx;"
					src="https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/73e593ab-dfff-4dd2-a7c2-216411e6cb2a.png"
					mode=""></image>
				<!-- #ifndef MP-WEIXIN -->
				<image style="width: 50rpx; height: 50rpx;"
					src="https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/7980f6c4-ddd0-40ac-969e-fd876b0a7777.png"
					mode=""></image>
				<!-- #endif -->
			</view>
			<!--  -->
			<view class="husbandry_content_view_title">
				预约家政服务
			</view>
			<!--list-->
			<view style="color:#B2B2B0; font-size: 38rpx;padding:0 0 30rpx 30rpx;background-color: #FFFFFF;">
				选择家政服务类型(可多选):</view>
			<view class="husbandry_content_view_list">
				<view class="husbandry_content_view_item" @click="multiple(item,i)" v-for="(item,i) in list1" :key="i">
					<view class="husbandry_content_view_image" :style="{backgroundImage:`url(${item.bgImg})`}">
						<image v-if="item.type" style="width: 100%; height: 150rpx;"
							src="https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/8e91863d-7550-474d-ac97-7135dfc18ad3.png"
							mode="aspectFit"></image>
						<view v-if="item.type" style="border: solid 4rpx #FFFFFF;width: 45rpx; height: 45rpx; position: absolute;top: 50rpx;left: 50rpx;
							border-radius: 50%;display: flex;justify-content: center;align-items: center;">
							<image style="width: 25rpx; height: 25rpx;"
								src="https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/5de6041a-c0ae-47c3-95c8-2d49ebddcd71.png"
								mode=""></image>
						</view>
					</view>
					<text :style="{color:item.type?'#FFA45C':'#B2B2B0'}"
						style="text-align: center;display: block;font-size: 26rpx;margin-top: 10rpx;">{{item.title}}</text>
				</view>
			</view>
			<!-- textarea -->
			<view style="padding: 20rpx 30rpx;margin:50rpx 15rpx 30rpx;display: flex;justify-items: center;">
				<textarea style="background-color:#FFFFFF;padding:30rpx;border-radius: 20rpx;width: 100%;"
					placeholder-style="color:#a4a4a4;font-size:30rpx;"
					placeholder="您可以简单地描述家政服务需求，我们将会根据您的需求提供更加完善贴心的服务（选填）" />
			</view>
			<!-- input -->
			<view style="display: flex;justify-content:space-around;">
				<input placeholder-style="color: #D1D1D0;text-align: center;padding: 0 10rpx;" v-model="phone" style="width: 300rpx;height: 100rpx;
					border-radius: 24rpx;background-color: #FFFFFF;text-align: center;padding: 0 10rpx;" type="number"
					placeholder="请输入联系号码" />
				<view @click="timeShow=true" style="width: 300rpx;height: 100rpx;
					border-radius: 24rpx;background-color: #FFFFFF;color:#FFB67B;display: flex;
					justify-content: center;align-items: center;">
					{{time?time:'选择预约时间'}}
				</view>
			</view>
			<!-- address -->
			<view
				style="color: #848484;display: flex;flex-direction: column;align-items: left;padding:0 40rpx;margin: 50rpx 0;">
				<text style="margin-bottom: 4rpx;">里派世纪家园8栋808室</text>
				<text>里派 168****8888</text>
			</view>
		</view>
		<!-- 预约按钮 -->
		<view style='display: flex;justify-content: center;align-items: center;padding-bottom: 50rpx;'>
			<text style="display: block;width: 110rpx;height: 110rpx;display: flex;
				justify-content: center;align-items: center;border-radius: 50%;
				background: rgb(255, 164, 92);border: 4rpx solid rgb(255, 255, 255);
				box-shadow: 0px 1px 10px rgba(6, 0, 1, 0.1);color: #FFFFFF;">预约</text>
		</view>

		<!-- 时间选择器 -->
		<u-datetime-picker @confirm='confirm' @close="timeShow=false" @cancel="timeShow=false"
			:closeOnClickOverlay='true' confirmColor='#FFA45C' ref="datetimePicker" :show="timeShow" v-model="timeValue"
			mode="date" :formatter="formatter"></u-datetime-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusHeight: 0,
				list1: [{
						title: '长期',
						bgImg: 'https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/c5bf8932-dc82-40ac-b971-45fc07b66917.png',
						type: true
					},
					{
						title: '家教',
						bgImg: 'https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/c85bc2ad-c077-4043-a6f8-b6d908238da5.png',
						type: true
					},
					{
						title: '日常家务',
						bgImg: 'https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/0f4c314f-30d0-47fe-bde2-665bf1b25a1b.png',
						type: false
					},
					{
						title: '照顾老人',
						bgImg: 'https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/6e7c4c3c-eb88-46ab-a5ab-a83247986dd9.png',
						type: false
					},
					{
						title: '照顾小孩',
						bgImg: 'https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/326940e6-c2c1-4044-88ca-0c1c929f1c59.png',
						type: false
					},
					{
						title: '照顾病人',
						bgImg: 'https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/6e7c4c3c-eb88-46ab-a5ab-a83247986dd9.png',
						type: false
					},
					{
						title: '月嫂',
						bgImg: 'https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/9d0f2cda-1f14-43d6-99a1-4cd2b23e68c7.png',
						type: false
					},
					{
						title: '做饭',
						bgImg: 'https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/02792025-972f-4717-91b6-f378cb836065.png',
						type: false
					}
				],
				phone: '',
				timeShow: false,
				timeValue: Number(new Date()),
				time: null
			}
		},
		onReady() {
			// 微信小程序需要用此写法
			this.$refs.datetimePicker.setFormatter(this.formatter)
		},
		onLoad() {
			// #ifdef APP-PLUS
			let type = uni.getSystemInfoSync().platform
			switch (type) {
				case 'android':
					this.statusHeight = 0
				case 'ios':
					this.statusHeight = 1
					break;
				default:
					break;
			}
			// #endif
			// #ifdef MP-WEIXIN
			this.statusHeight = 2
			// #endif
		},
		methods: {
			nav() {
				uni.navigateBack({
					delta: 1
				})
			},
			formatter(type, value) {
				if (type === 'year') {
					return `${value}年`
				}
				if (type === 'month') {
					return `${value}月`
				}
				if (type === 'day') {
					return `${value}日`
				}
				return value
			},
			confirm(e) {
				this.time = this.conversion(e.value)
				this.timeShow = false
			},
			conversion(time) {
				let date = new Date(time)
				let Y = date.getFullYear() + '-'
				let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
				let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
				// let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
				// let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
				// let s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
				return Y + M + D
			},

			multiple(item, index) {
				this.$set(this.list1[index], 'type', !this.list1[index].type)
			},
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #FCFCFC;
		// background-color: red;
	}

	.husbandry_content_view {
		.husbandry_content_view_navbar {
			// border: solid 1px red;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 40rpx;
			background-color: #FFFFFF;
		}

		.husbandry_content_view_title {
			color: #FFA45C;
			font-size: 57rpx;
			// padding-left: 40rpx;
			// border: solid 1px red;
			// margin: 40rpx 0;
			padding: 40rpx 0 40rpx 40rpx;
			background-color: #FFFFFF;
		}

		.husbandry_content_view_list {
			// border: solid 1px red;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			padding: 0 20rpx;
			background-color: #FFFFFF;

			.husbandry_content_view_item {
				// border: solid 1px blue;
				width: 150rpx;
				height: 200rpx;
				margin-bottom: 30rpx;


				.husbandry_content_view_image {
					width: 100%;
					height: 150rpx;
					background-repeat: no-repeat;
					background-size: 100% 100%;
					position: relative;

				}
			}
		}

	}
</style>
<style lang="scss" scoped>
	/deep/ .u-popup__content {
		border-radius: 30rpx 30rpx 0 0 !important;
	}
</style>