<div class="styleguide admin-widget-proTerm">
	<div class="col-md-6">
		<div class="row">
		    <div class="col-xs-8 col-xs-left prn ">
		        <div class="form-group">
		             <div class="input-group">
		                <div class="input-group-addon">产品期限</div>
		                <input class="form-control brn" data-key="maturities" placeholder="请输入产品期限" :disabled="disable">
		            </div>
		        </div>
		    </div>
		    <div class="col-xs-4 col-xs-right pln ">
		        <div class="form-group">
		            <select class="form-control valid bld" data-key="unitFkMaturities" v-model="unitMaturities" :disabled="disable">
		                <option value="2400">自然年</option>
		                <option value="2300">自然季</option>
		                <option value="2200">自然月</option>
		                <option value="2100">天</option>
		                <option value="-1">不限期（前台投资人自选期限）</option>
		                <option value="-3">非固定期限（不赎回则一直持有）</option>
		                <option value="-2">无</option>
		            </select>
		        </div>
		    </div>
		</div>
		<template v-if="unitMaturities === '2100'">
			<div class="row">
				<div class="col-md-12" style="margin-left:35px;">
					<div class="form-group" style="width:100%">
					    <div class="input-group" style="width:100%">
					        <div class="year-select-wrapper">
					        	年基础天数：
						        <input type="radio" :disabled="disable" name="baseDays" data-key="baseDays" checked="checked" value="365" v-model="baseDays">365天 
								<input type="radio" :disabled="disable" name="baseDays" data-key="baseDays"  value="360" v-model="baseDays">360天
						        <input type="radio" :disabled="disable" name="baseDays" data-key="baseDays"  value="30" v-model="baseDays">自定义
						        <input type="text" v-if="baseDays === '30'" :disabled="disable" class="cus-days" data-key="customBaseDays" placeholder="请输入自定义天数">
					        </div>
					    </div>
					</div>
				</div>
			</div>
			<p class="tip"> (仅用于投资期限为“天”时计算收益)</p>
		</template>
		<template v-if="unitMaturities === '-3'">
			
			<div   class="row">
				<div class="col-xs-9 col-xs-left">
				    <div class="form-group">
				        <div class="input-group">
				            <div class="input-group-addon">起购期限
				            	<span class="text-strong-red">*</span>
				            </div>
		                    
		                    <input :disabled="disable" class="form-control" data-key="startingInvest" placeholder="请输入起购期限">
				        </div>
				    </div>
				</div>
		
			<div class="col-xs-3 col-xs-right">
				<div class="form-group">
				    <select class="form-control valid" data-key="unitFkStartingMaturities" :disabled="disable">
		                <option value="2400">年</option>
		                <option value="2300">季度</option>
		                <option value="2200">月</option>
		                <option value="2100">天</option>
		            </select>
				</div>
			</div>
		</div>
		</template>
	</div>

</div>
