<div class="styleguide admin-widget-fundStrategy">
	<div class="row">
		<div class="col-md-6 input-wrapper rt">
	      	<div class="form-group input-group w100">
	          <div class="input-group-addon input-title" >
	          	基金策略
	          	<span class="text-strong-red">*</span>
	          </div>
	          <select class="input-control" :disabled="disable" v-model="fundTypeFk" data-key="fundTypeFk"> 
		            <option value="60" selected="selected">股票策略</option>
		            <option value="70">期货策略</option>
		            <option value="80">债券策略</option>
		            <option value="90">其他策略</option>
	          </select>
	      	</div>
	  	</div>  

	  	<div class="col-md-6 input-wrapper rt">   
          <div class="form-group input-group w100">
              <div class="input-group-addon input-title">
              	二级策略
              	<span class="text-strong-red">*</span>
              </div>
              <select class="input-control" :disabled="disable" data-key="fundSubTypeFk" >
              		<template v-for="item in items">
              			<option value="{{item.key}}">{{item.value}}</option>
              		</template> 
                	
              </select>
          </div>
        </div>
	</div>	
</div>