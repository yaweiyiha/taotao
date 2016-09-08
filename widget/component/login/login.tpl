
<div class="asset-widget-login">
	<div class="header">
		<div class="logo"></div>
		<h1>祺鲲产品集市</h1>
	</div>
	<section class="main">
		<div class="main-inner"></div>
		<div class="form">
			<form name="loginform" action="login" method="post" enctype="x-www-form-urlencoded">
				<div class="input-wrapper">
					<i class="icon username"></i>
					<input type="text" v-model="username" name="username" placeholder="请输入账号"/>
				</div>
				<div class="input-wrapper mt25">
					<i class="icon password"></i>
					<input type="password" v-model="password" name="password" placeholder="请输入密码"/>
				</div>
<!-- 				<div class="mt25 rt clearfix">
					<div class="input-wrapper verify-wrapper">
						<input type="text" v-model="code" class="code" placeholder="请输入验证码">
					</div>
					<img v-bind:src="verifyCode" alt="" class="verify-code">
					<i class="refresh-icon" @click="refreshCode"></i>
				</div> -->
				<input class="mt25 custom-button substy" type="submit" value="登录" style="" />
				<!-- <a href="javascript:;" class="login-submit mt25 custom-button" @click="login">登录</a> -->
			</form>
		</div>
	</section>
	<div class="footer">版权所有:@2015    祺鲲科技所有    沪ICP备14046106号-1</div>
</div>