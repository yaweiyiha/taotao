<div class="styleguide admin-widget-fundStrategy">
	<div class="row">
		<div class="col-md-6 input-wrapper rt">
	      	<div class="form-group input-group w100">
	          <div class="input-group-addon input-title" style="min-width:120px" >
	          	基金策略
	          	<span class="text-strong-red">*</span>
	          </div>
	          <select class="input-control" :disabled="disable" data-key="fundTypeFk" v-model="fundtype"> 
		            <option value="60" >股票策略</option>
		            <option value="70">期货策略</option>
		            <option value="80">债券策略</option>
		            <option value="90">其他策略</option>
	          </select>
	      	</div>
	  	</div>  

	  	<div  v-if="fundtype=='60'" class="col-md-6 input-wrapper rt">   
          <div class="form-group input-group w100" style="padding-right:15px">
              <div class="input-group-addon input-title">
              	二级策略
              	<span class="text-strong-red">*</span>
              </div>
              <select class="input-control" :disabled="disable" data-key="fundSubTypeFk" v-model="fundsubtype">
              		<option value="100">股票多头</option>
              		<option value="110">股票多空</option>
              		<option value="120">股票量化</option>
              		<option value="130">行业策略</option>
              		<option value="140">套利策略</option>
              		<option value="150">事件驱动</option>
              		<option value="160">套利策略</option>	
              </select>
          </div>
        </div>
       	<div v-if="fundtype=='70'" class="col-md-6 input-wrapper rt">   
          <div class="form-group input-group w100" style="padding-right:15px">
              <div class="input-group-addon input-title">
              	二级策略
              	<span class="text-strong-red">*</span>
              </div>
              <select class="input-control" :disabled="disable" data-key="fundSubTypeFk" v-model="fundsubtype">
              		<option value="170">主管交易</option>
              		<option value="180">程序化交易</option>
              		<option value="190">套利策略</option>
              		<option value="200">复合策略</option>
                	
              </select>
          </div>
        </div>
        <div v-if="fundtype=='80'" class="col-md-6 input-wrapper rt">   
          <div class="form-group input-group w100" style="padding-right:15px">
              <div class="input-group-addon input-title">
              	二级策略
              	<span class="text-strong-red">*</span>
              </div>
              <select class="input-control" :disabled="disable" data-key="fundSubTypeFk" v-model="fundsubtype">
                	
              </select>
          </div>
        </div>
       	<div v-if="fundtype=='90'" class="col-md-6 input-wrapper rt">   
          <div class="form-group input-group w100" style="padding-right:15px">
              <div class="input-group-addon input-title">
              	二级策略
              	<span class="text-strong-red">*</span>
              </div>
              <select class="input-control" :disabled="disable" data-key="fundSubTypeFk" v-model="fundsubtype">
              		<option value="210">股权投资</option>
              		<option value="220">另类投资</option>
              		<option value="230">宏观对冲</option>
              		<option value="240">组合基金</option>
                	
              </select>
          </div>
        </div>
	</div>	
</div>