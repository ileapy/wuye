<template>
	<view class="fees_content">
		<view style="background-color: #FFFFFF;"
			:style="{'height':statusHeight==0? '50rpx':(statusHeight==1? '110rpx':'120rpx')}">
		</view>
		<view class="fees_content_view">
			<view class="fees_content_view_navbar">
				<image @click="nav" style="width: 25rpx; height: 40rpx;"
					src="https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/73e593ab-dfff-4dd2-a7c2-216411e6cb2a.png"
					mode=""></image>
				<!-- #ifndef MP-WEIXIN -->
				<image style="width: 50rpx; height: 50rpx;"
					src="https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/a9ce86c4-6011-479a-ad57-76a29e64a49c.png"
					mode=""></image>
				<!-- #endif -->
			</view>
			<!--  -->
			<view class="fees_content_view_title">
				物业缴费详情
			</view>
			<!--list-->
			<view style='background-color: #FFFFFF;padding-bottom: 30rpx;'>
				<view class="fees_content_view_list" v-for="(x,i) in 1" :key="i">
					<view class="fees_content_view_list_left">
						<image style="height: 120rpx; width: 30rpx;position: relative;left: -2rpx;"
							src="https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/f3bd65cb-f06e-458c-abcf-ec12d66145e5.png"
							mode=""></image>
						<view style="display: flex;flex-direction: column;align-items: center;
							justify-content: center;margin-left: 30rpx;color: #FFA45C;">
							<text style="font-size: 50rpx;margin-bottom: 10rpx;">08</text>
							<text style="font-size: 32rpx;">2019</text>
						</view>
					</view>
					<view class="fees_content_view_list_center">
						<view style="display: flex;flex-direction: column;justify-content: center;">
							<text style="margin-bottom: 8rpx;">里派世纪家园8栋808室</text>
							<text>里派 135****5555</text>
						</view>
						<view style="display: flex;flex-direction: column;
							justify-content: center;align-items: center;color: #FFA761;">
							<text>￥215.7</text>
							<text>待缴费</text>
						</view>
					</view>
					<image style="width: 20rpx; height: 35rpx;margin:0 30rpx;"
						src="https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/46de8a9e-2ccb-4c8a-9dd1-6fefcb683840.png"
						mode=""></image>
				</view>
			</view>
			<!-- details -->
			<view class="fees_content_view_detail">
				<text style="text-align:center;color:#7C7C7C;font-size: 36rpx;
					display:block;margin: 50rpx 0;">本月物业费详情</text>
				<view class="fees_content_view_detail_list">
					<uni-table emptyText="暂无更多数据">
						<uni-tr style="background-color: #FCFCFC !important;color: #979797 !important;">
							<uni-th width="40" align="center">类型</uni-th>
							<uni-th width="40" align="center">单价</uni-th>
							<uni-th width="40" align="center">用量</uni-th>
							<uni-th width="40" align="center">合计</uni-th>
						</uni-tr>
						<uni-tr
							style="background-color: #FCFCFC !important;color: #979797 !important;margin: 50rpx 0 !important;"
							v-for="(item,index) in list1" :key="index">
							<uni-td align="center">{{item.typeText}}</uni-td>
							<uni-td align="center">{{item.unitPrice}}</uni-td>
							<uni-td align="center">{{item.dosage}}</uni-td>
							<uni-td align="center">{{item.total}}</uni-td>
						</uni-tr>
					</uni-table>

				</view>
			</view>
			<!-- footer -->
			<view class="fees_footer">
				<view class="fees_footer_content">
					<view style="display: flex;align-items: center;">
						<image style="width: 45rpx; height: 50rpx;margin-right: 20rpx;"
							src="https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/878ac723-35ce-4fa6-8fda-953a7dfd4749.png"
							mode=""></image>
						<text>合计:215.7元</text>
					</view>
					<text style="font-size: 44rpx;">缴费</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusHeight: 0,
				list1: [{
						typeText: '水费',
						unitPrice: '0.1元/立方',
						dosage: '80立方',
						total: '8元'
					}, {
						typeText: '家用电费',
						unitPrice: '0.7元/千瓦时',
						dosage: '80千瓦时',
						total: '42.7元'
					}, {
						typeText: '公用电费',
						unitPrice: '0.4元/千瓦时',
						dosage: '80千瓦时',
						total: '8元'
					}, {
						typeText: '电梯维护费',
						unitPrice: '30元/幢',
						dosage: '80',
						total: '200元'
					}, {
						typeText: '保洁费',
						unitPrice: '0.1元/人',
						dosage: '80人',
						total: '80元'
					},
					{
						typeText: '****',
						unitPrice: '***',
						dosage: '***',
						total: '***',
					}, {
						typeText: '***',
						unitPrice: '***',
						dosage: '***',
						total: '***',
					}
				]
			}
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
			nav(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #FCFCFC;
	}

	.fees_content_view {
		.fees_content_view_navbar {
			// border: solid 1px red;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 40rpx;
			background-color: #FFFFFF;
		}

		.fees_content_view_title {
			color: #FFA45C;
			font-size: 57rpx;
			// padding-left: 40rpx;
			// border: solid 1px red;
			// margin: 40rpx 0;
			padding: 40rpx 0 40rpx 40rpx;
			background-color: #FFFFFF;
		}

		.fees_content_view_list {
			// border: solid 1px red;
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 30rpx;
			// padding-bottom:60rpx;

			.fees_content_view_list_left {
				// border: solid 1px blue;
				display: flex;
				width: 140rpx;
				margin-right: 30rpx;
			}

			.fees_content_view_list_center {
				border-bottom: solid 1px #EAEAEB;
				color: #999999;
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 140rpx;
				width: 500rpx;
			}

		}

		.fees_content_view_detail {
			// border: solid 1px blue;
			border-radius: 40rpx 40rpx 0rpx 0rpx;
			padding-bottom: 240rpx;

			.fees_content_view_detail_list {
				// background-color: red;
			}

		}

		.fees_footer {
			// border: solid 1px red;
			height: 170rpx;
			position: fixed;
			bottom: 0;
			width: 100%;
			background-color: #FFA45C;
			border-radius: 45rpx 45rpx 0rpx 0rpx;

			.fees_footer_content {
				display: flex;
				justify-content: space-between;
				align-items: center;
				color: #FFFFFF;
				font-size: 36rpx;
				padding: 0 50rpx;
				height: 170rpx;
			}
		}
	}
</style>
<style lang="scss" scoped>
	/deep/.uni-table-th {
		border: none;
	}

	/deep/.uni-table-td {
		border: none;
	}
</style>