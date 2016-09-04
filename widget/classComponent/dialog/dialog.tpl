<div class="dialog-cover">
	<div class="ui-widget-overlay ui-front"></div>
	<div class="ui-dialog ui-widget ui-widget-content usersys-widget-dialog" tabindex="-1" role="dialog" aria-describedby="departmentSelectWin" aria-labelledby="ui-id-1">
		<div class="ui-dialog-titlebar ui-widget-header rt">

			<span v-if="type === 'addPro'" class="icon icon-addpro"></span>

			<span id="ui-id-1" class="ui-dialog-title">{{title}}</span>
			
			<span class="close-btn" @click="hide"></span><span class="ui-button-text"></span>
		</div>
		<div v-if="type==='dep'" class="departmentSelectWin" v-if="type == 'dep'" class="ui-dialog-content">
			<ul class="departmentTree" class="ztree">
				<tree-component></tree-component> 
			</ul>
		</div>
		<div v-if="type === 'pwd'" class="modal-body">
			<validator name="v1">
				<form  novalidate>
					<div class="row">
						<div class="col-md-10">
							<div class="form-group">
								<div class="input-group">
									<div class="input-group-addon">账户名：</div>
									<input class="form-control valid" id="account" name="account" value="xuyihan" readonly="readonly" >
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-10">
							<div class="form-group">
								<div class="input-group">
									<div class="input-group-addon">旧密码：</div>
									<input class="form-control" type="password" id="oldPassword"  placeholder="请输入旧密码" >
								</div>
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col-md-10">
							<div class="form-group">
								<div class="input-group">
									<div class="input-group-addon">新密码：</div>
									<input class="form-control" type="password" id="newPassword"  placeholder="6-20位、至少包含大、小写字母、数字和特殊符号中的三种" v-validate:newpass="{ required: true, minlength: 6,maxlength: 20 } ">
								</div>
							</div>
						</div>
					</div>
					<p v-if="$v1.newpass.required" style="display:none">新密码不能为空</p>
					<p v-if="$v1.newpass.minlength || $v1.newpass.maxlength">密码为6-20位、至少包含大、小写字母、数字和特殊符号中的三种</p>
					<div class="row">
						<div class="col-md-10">
							<div class="form-group">
								<div class="input-group">
									<div class="input-group-addon">密码确认：</div>
									<input class="form-control" type="password" id="confirmPassword" name="confirmPassword" placeholder="请再输入一次新密码，确保两次输入一致">
								</div>
							</div>
						</div>
					</div>
				</form>
			</validator>
		</div>
		<div v-if="type === 'alert'" class="modal-body">{{info}}</div>

		<div v-if="type === 'addPro'" class="modal-body text-center add-pro" >
			<template v-for="pro in pros">
				<a href="{{pro.url}}" class="add-pro-item" @click="hide"><span>{{pro.name}}</span></a>
			</template>
		</div>
		<div v-if="type === 'citySelect'" class="modal-body text-center add-pro" >
			<city-select></city-select> 
		</div>
		<div v-if="buttons.length" class="ui-dialog-buttonpane ui-widget-content ui-helper-clearfix">
			<div class="ui-dialog-buttonset">
				<template  v-for= "button in buttons">
					<button v-if="button.type === 'cancel'" type="button" class="custom-button default" role="button" aria-disabled="false"  @click="cancel">
						<span class="ui-button-text">{{ button.name }}</span>
					</button>
					<button v-if="button.type === 'comfirm'" type="button" class="custom-button" role="button" aria-disabled="false"      @click="confirm">
						<span class="ui-button-text">{{ button.name }}</span>
					</button>

				</template>
			</div>
		</div>
</div>
</div>
