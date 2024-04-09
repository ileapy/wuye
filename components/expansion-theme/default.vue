<template>
	<view class="">
		<view
			style="background-color: #FFFFFF;width: 97%; margin: 20rpx auto 30rpx;height: 100%;border-radius: 50rpx;overflow: hidden;box-shadow: 0px 5px 19px rgba(6, 0, 1, 0.08);"
			v-for="(i,index) in particularsList" @click='btnDynamic' :key='index'>
			<view style=" display: flex;justify-content: space-between;padding-top: 20rpx;">
				<view style="display: flex;padding: 20rpx; 20rpx 0 20rpx;">
					<u-avatar  :src="i.headimgurl" fontSize="26"></u-avatar>
					<view  style="margin-left: 15rpx; ">
						<view style="color:#7E7E7E;font-size: 31rpx;margin-bottom: 10rpx;">
							{{i.user_name}}
						</view>
						<!-- <view style="width: 100rpx;">
							<u-tag v-for="(tags,j) in i.need_pd" :key="j" :text="tags.item_name" borderColor='#F2F6F9'
								bgColor='#F2F6F9' color="#999999" />
						</view> -->
						<view
							style="padding: 0rpx 0rpx 0 0rpx; color: #999999;font-size: 28rpx;width: 120rpx;width: 180rpx;">
							{{i.created_at.split(' ')[0]}}
						</view>
					</view>
				</view>
				<!-- <view style="padding: 30rpx 0rpx 0 0rpx; color: #999999;font-size: 28rpx;width: 120rpx;width: 180rpx;">
					{{i.created_at.split(' ')[0]}}
				</view> -->
			</view>
			<view style=" padding: 0 30rpx 20rpx 120rpx;">
				<view class="conts" v-if="i.showText">
					<text class="content_text" selectable="true">{{i.content}}</text>
					<text v-if="i.content !== null && i.content.length > 35"
						style="color:#FFA45C;font-size:28rpx;margin-left: 10rpx;"
						@click.stop="toggleDescription(index)">收起</text>
				</view>
				<view v-else class="cont">
					<text class="content_text" selectable="true"
						v-if="i.content !== null && i.content.length > 0 && i.content.length < 35">
						{{i.content.substr(0, 61)}}
					</text>
					<text class="content_text" selectable="true"
						v-if="i.content !== null && i.content.length > 0 && i.content.length > 35">
						{{i.content.substr(0, 36)+'...'}}
					</text>
					<text v-if="i.content !== null && i.content.length > 45"
						style="color:#FFA45C;font-size:28rpx;margin-left: 10rpx;"
						@click.stop="toggleDescription(index)">展开全文</text>
				</view>
				<view style="margin: 20rpx 0 20rpx 0;">
					<u-grid :col="3" :border='false' hover-class='none'>
						<u-grid-item :custom-style="customStyleImg" v-for="(list,x) in i.img_list" :key="x">
							<image @click.stop="previewPhoto(index,x)" lazy-load :lazy-load-margin="0"
								style="width: 150rpx; height: 150rpx;border-radius: 20rpx;" :src="list"
								mode="scaleToFill">
							</image>
						</u-grid-item>
					</u-grid>
					<!--  -->
					<view
						style='display: flex;justify-content: space-between;align-items: center;margin-top: 30rpx;padding: 0 10rpx;'>
						<view style="display: flex;align-items: center;" v-for="(addition,v) in list" :key="v">
							<image style="width: 35rpx; height: 35rpx;" :src="addition.icon" mode=""></image>
							<text style="color:#AAAAAA;margin-left: 10rpx;">{{addition.number}}</text>
						</view>

					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			scrollTop: {
				type: Number,
				default: 0
			},
			particularsList: {
				type: Array,
				default: []
			}

		},
		data() {
			return {
				customStyleImg: {
					padding: '7rpx 0'
				},
				list: [{
					number: 58,
					icon: 'https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/fa92156a-c4e1-4d4f-a560-e5658c7830cf.png'
				}, {
					number: 78,
					icon: 'https://mp-773911e8-6917-4f03-9f50-e2393807e7c3.cdn.bspapp.com/cloudstorage/ae079712-57ee-4cdd-860e-4e3969ea9cd0.png'
				}]
			}
		},
		methods: {
			// 全文展开收起
			toggleDescription(index) {
				let that = this
				that.$emit('trigger', index)

			},
			previewPhoto(index, j) {
				var that = this
				uni.previewImage({
					current: j,
					urls: this.particularsList[index].img_list,
					loop: true
				});

			},
			btnDynamic() {
				uni.navigateTo({
					url: '/pagesA/dynamic/index'
				})
			}
		}
	}
</script>

<style lang="scss">
	.content_text {
		// letter-spacing: 2rpx;
		color: #7E7E7E;
		font-size: 30rpx;
	}
</style>