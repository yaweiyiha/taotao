<div class="styleguide admin-widget-commtype">
  	<div class="row">	
		<div class="col-md-6 input-wrapper rt">
	      	<div class="form-group input-group w100">
	          <div class="input-group-addon input-title" >
	          	佣金类型
	          	<span class="text-strong-red">*</span>
	          </div>
	          <select class="input-control" v-model="StaffCommType" data-key="commissionTypeFk"> 
	            <option value="-1">未设置</option>
	            <option value="10">固定佣金</option>
	            <option value="20">阶梯佣金</option>
	          </select>
	      	</div>
	  	</div>  	
		<div class="col-md-6 input-wrapper rt" v-if="StaffCommType === '2'">
	      	<div class="form-group input-group w100">
	          <div class="input-group-addon input-title">
	          	佣金比例
	          	<span class="text-strong-red">*</span>
	          </div>
				<input class="input-control" value="0" data-key="fixedCommission">
				<div class="unit">%</div>
	      	</div>
	  	</div>  	
		<div class="col-md-6 input-wrapper rt" v-if="StaffCommType === '3'">
	      	<div class="form-group input-group w100">
	          <div class="input-group-addon input-title">
	          	金额单位
	          </div>
	          <select class="input-control" v-model="StaffCommUnit"> 
	            <option value="元">元</option>
	            <option value="万元">万元</option>
	            <option value="亿元">亿元</option>
	          </select>
	      	</div>
	  	</div>
  	</div>
  	<ladder-comm :unit="StaffCommUnit" v-if="StaffCommType === '3'"></ladder-comm>	
</div>