<div class="styleguide admin-widget-commtype" data-validate="{{requiredDisplay}}">
  	<div class="row">	
		<div class="col-md-6 input-wrapper rt">
	      	<div class="form-group input-group w100">
	          <div class="input-group-addon input-title" >
	          	佣金类型
	          	<span v-if="required" class="text-strong-red">*</span>
	          </div>
	          <select class="input-control commissionTypeFk" v-model="commissionTypeFk" :disabled="disable"> 
	            <option value="-1">未设置</option>
	            <option value="10">固定佣金</option>
	            <option value="20">阶梯佣金</option>
	          </select>
	      	</div>
	  	</div>  	
		<div class="col-md-6 input-wrapper rt" v-if="commissionTypeFk === '10'">
	      	<div class="form-group input-group w100">
	          <div class="input-group-addon input-title">
	          	佣金比例
	          	<span class="text-strong-red">*</span>
	          </div>
				<input class="input-control baseCommission" v-model="baseCommission" :disabled="disable">
				<div class="unit">%</div>
	      	</div>
	  	</div>  	
		<div class="col-md-6 input-wrapper rt" v-if="commissionTypeFk === '20'">
	      	<div class="form-group input-group w100">
	          <div class="input-group-addon input-title">
	          	金额单位
	          </div>
	          <select class="input-control CommUnit" v-model="CommUnit" :disabled="disable"> 
	            <option value="元">元</option>
	            <option value="万元">万元</option>
	            <option value="亿元">亿元</option>
	          </select>
	      	</div>
	  	</div>
  	</div>
  	<ladder-comm :unit="CommUnit" :latter-data="latterData" :disable="disable" v-if="commissionTypeFk === '20'"></ladder-comm>	
</div>