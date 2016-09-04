<div class="styleguide admin-widget-verifyconfirm">
	<div class="tac">
		<label><input type="radio" name="vS" checked="true" v-model="verifyStatus" value="40"> 通过</label>
		<label><input type="radio" name="vS" v-model="verifyStatus" value="30"> 不通过</label>
	</div>
	<div class="row" v-if="verifyStatus === '30'">
		<div class="col-md-6 input-wrapper rt" style="margin-left:25%;">
	      	<div class="form-group input-group w100">
	          <div class="input-group-addon input-title">
	          	拒绝原因：
	          </div>
	          <textarea v-model="verifyDenyReason"></textarea>
	      	</div>
	  	</div>
	</div>
	<div class="tac">
		<button class="custom-button" @click="submit">确认</button>
	</div>
</div>