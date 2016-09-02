
<div class="asset-widget-login">
	<div class="header">
		<div class="logo"></div>
		<h1>资产集市</h1>
	</div>
	<div class="form">
		<div class="input-wrapper">
			<i class="icon username"></i>
			<input type="text" v-model="username" placeholder="请输入账号">
		</div>
		<div class="input-wrapper mt25">
			<i class="icon password"></i>
			<input type="password" v-model="password" placeholder="请输入密码">
		</div>
		<div class="mt25 rt clearfix">
			<div class="input-wrapper verify-wrapper">
				<input type="text" v-model="code" class="code" placeholder="请输入验证码">
			</div>
			<img v-bind:src="verifyCode" alt="" class="verify-code">
			<i class="refresh-icon" @click="refreshCode"></i>
		</div>
		<a href="javascript:;" class="login-submit mt25 custom-button" @click="login">登录</a>
	</div>
	<div class="footer">版权所有:@2015    祺鲲科技所有    沪ICP备14046106号-1</div>
</div>