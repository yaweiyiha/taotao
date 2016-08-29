<div class="styleguide asset-widget-productcommset">
	<div class="row title">
      	<div>
	        <span class="section-title">发布策略</span>
      	</div>
  	</div>
  	<div class="row">
		<div class="col-md-6 input-wrapper rt">      
	      <div class="form-group input-group"> 
	          <div class="input-group-addon input-title">人员策略    
	          </div>
	          <input type="checkbox" v-model="strategyStaff"> 员工
	          <input type="checkbox" v-model="strategySalespeople" class="ml10"> 直销员    
	      </div>
	  	</div>
  	</div>
  	<div class="row">	
		<div class="col-md-6 input-wrapper rt">
	      	<div class="form-group input-group w100">
	          <div class="input-group-addon input-title">员工策略
	          </div>
	          <select class="input-control" data-key="orderNumber"> 
	            <option value="">全部</option><option value="">按团队发布</option>
	          </select>
	      	</div>
	  	</div>  	
  	</div>
  	<div class="row">	
		<div class="col-md-6 input-wrapper rt">
	      	<div class="form-group input-group w100">
	          <div class="input-group-addon input-title">直销员策略
	          </div>
	          <select class="input-control" data-key="orderNumber"> 
	            <option value="">全部</option>
	          </select>
	      	</div>
	  	</div>  	
  	</div>
  	<template v-if="strategyStaff">
	<div class="row title">
      	<div>
	        <span class="section-title">佣金设置-理财师</span>
      	</div>
  	</div>
  	<div class="row">	
		<div class="col-md-6 input-wrapper rt">
	      	<div class="form-group input-group w100">
	          <div class="input-group-addon input-title">
	          	佣金类型
	          	<span class="text-strong-red">*</span>
	          </div>
	          <select class="input-control" v-model="StaffCommType"> 
	            <option value="1">未设置</option>
	            <option value="2">固定佣金</option>
	            <option value="3">阶梯佣金</option>
	          </select>
	      	</div>
	  	</div>  	
		<div class="col-md-6 input-wrapper rt" v-if="StaffCommType === '2'">
	      	<div class="form-group input-group w100">
	          <div class="input-group-addon input-title">
	          	佣金比例
	          	<span class="text-strong-red">*</span>
	          </div>
				<input class="input-control" value="0">
				<div class="unit">%</div>
	      	</div>
	  	</div>  	
		<div class="col-md-6 input-wrapper rt" v-if="StaffCommType === '3'">
	      	<div class="form-group input-group w100">
	          <div class="input-group-addon input-title">
	          	金额单位
	          </div>
	          <select class="input-control"> 
	            <option value="1">元</option>
	            <option value="2">万元</option>
	            <option value="3">亿元</option>
	          </select>
	      	</div>
	  	</div>  	
  	</div>
  	</template>
  	<template v-if="strategySalespeople">  	
	<div class="row title">
      	<div>
	        <span class="section-title">佣金设置-直销员</span>
      	</div>
  	</div>
  	<div class="row">
		<div class="col-md-6 input-wrapper rt">      
	      <div class="form-group input-group"> 
	          <div class="input-group-addon input-title">佣金计算规则</div>
	          <input type="radio" class="radio-input" v-model="salespeopleCommRule" value="1"> 直接佣金
	          <input type="radio" class="radio-input" v-model="salespeopleCommRule" value="2"> 月度业绩    
	      </div>
	  	</div>
  	</div>
  	<div class="row">	
		<div class="col-md-6 input-wrapper rt">
	      	<div class="form-group input-group w100">
	          <div class="input-group-addon input-title">
	          	佣金类型
	          	<span class="text-strong-red">*</span>
	          </div>
	          <select class="input-control" v-model="salespeopleCommType"> 
	            <option value="1">未设置</option>
	            <option value="2">固定佣金</option>
	            <option value="3">阶梯佣金</option>
	          </select>
	      	</div>
	  	</div>
		<div class="col-md-6 input-wrapper rt" v-if="salespeopleCommType === '2'">
	      	<div class="form-group input-group w100">
	          <div class="input-group-addon input-title">
	          	佣金比例
	          	<span class="text-strong-red">*</span>
	          </div>
				<input class="input-control" value="0">
				<div class="unit">%</div>
	      	</div>
	  	</div>  	
		<div class="col-md-6 input-wrapper rt" v-if="salespeopleCommType === '3'">
	      	<div class="form-group input-group w100">
	          <div class="input-group-addon input-title">
	          	金额单位
	          </div>
	          <select class="input-control"> 
	            <option value="1">元</option>
	            <option value="2">万元</option>
	            <option value="3">亿元</option>
	          </select>
	      	</div>
	  	</div>  	
  	</div>
	</template>
	<div class="row title">
      	<div>
	        <span class="section-title">佣金确认方式</span>
      	</div>
  	</div>
  	<div class="row">
		<div class="col-md-6 input-wrapper rt">      
	      <div class="form-group input-group"> 
	          <div class="input-group-addon input-title">佣金确认方式</div>
	          <input type="radio" class="radio-input" name="isDisable" id="isDisable11" value="-1"> 人工
	          <input type="radio" class="radio-input" name="isDisable" id="isDisable11" value="-1" checked="checked"> 自动    
	      </div>
	  	</div>
  	</div>
</div>