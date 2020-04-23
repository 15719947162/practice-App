<script>
	export default {
		//当uni-app 初始化完成时触发（全局只触发一次）
		onLaunch: function() {
			// uni.navigateTo({
			// 	url:"pages/login/index"
			// })
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
