<div class="styleguide admin-widget-yearrate">
  	<div class="row">	
		<div class="col-md-6 input-wrapper rt">
	      	<div class="form-group input-group w100">
	          <div class="input-group-addon input-title" >
	          	历史实际年化收益率
	          	<span class="text-strong-red">*</span>
	          </div>
	          <select class="input-control arrTypeFk" :disabled="disable" v-model="arrTypeFk" v-on:change="arrTypeFkChange"> 
	            <option value="0">未设置</option>
	            <option value="10">固定</option>
	            <option value="20">浮动</option>
	            <option value="30">固定阶梯</option>
	            <option value="40">浮动阶梯</option>
	          </select>
	      	</div>
	  	</div>  	
		<div class="col-md-6 input-wrapper rt" v-if="arrTypeFk === '30' || arrTypeFk === '40'">
	      	<div class="form-group input-group w100">
	          <div class="input-group-addon input-title">
	          	金额单位
	          </div>
	          <select class="input-control YearRateUnit" :disabled="true" v-model="YearRateUnit"> 
	            <option value="元">元</option>
	            <option value="万元">万元</option>
	            <option value="亿元">亿元</option>
	          </select>
	      	</div>
	  	</div>
  	</div>
  	<div class="row" v-if="arrTypeFk === '10'">
		<div class="col-md-6 input-wrapper rt">
	      	<div class="form-group input-group w100">
	          <div class="input-group-addon input-title">
	          	固定利率
	          </div>
				<input class="input-control expectedArr" :disabled="disable" v-model="expectedArr">
				<div class="unit">%</div>
	      	</div>
	  	</div>  	
  	</div>
  	<div v-if="arrTypeFk === '20'">
  		<div class="row ml30">
	  		<label><input type="checkbox" v-model="fixMin" class="fixMin" :disabled="disable" v-on:click="fixminClick"> 固定下限</label>
	  		<label class="ml10"><input type="checkbox" v-model="floatMax" class="floatMax" :disabled="disable" v-on:click="floatmaxClick"> 浮动上限</label>
  		</div>
  		<div class="row mt10">
			<div class="col-md-3 input-wrapper rt" v-if="fixMin">
		      	<div class="form-group input-group w100">
		          <div class="input-group-addon input-title">
		          	固定下限
		          </div>
					<input class="input-control minArr" v-model="minArr" :disabled="disable" />
					<div class="unit">%</div>
		      	</div>
		  	</div>  	
			<div class="col-md-3 input-wrapper rt" v-if="floatMax">
		      	<div class="form-group input-group w100">
		          <div class="input-group-addon input-title">
		          	浮动上限
		          </div>
					<input class="input-control maxArr" v-model="maxArr" :disabled="disable" />
					<div class="unit">%</div>
		      	</div>
		  	</div>  	
  		</div>
  	</div>
	<div class="row ml30" v-if="arrTypeFk === '40'">
		<label><input type="radio" data-key="notContainsFloatRateMax" v-model="notFloatUpperLimit" value="0" :disabled="disable"> 有浮动上限</label>
		<label class="ml10"><input type="radio" data-key="notContainsFloatRateMax" v-model="notFloatUpperLimit" value="1" :disabled="disable"> 无浮动上限</label>
	</div>
  	<div v-if="arrTypeFk === '30' || arrTypeFk === '40'">
  		<div class="row ml30">
	  		<label><input type="radio" data-key="containsLeftValue" v-model="leftContain" value="1" :disabled="disable"> 左包含</label>
	  		<label class="ml10"><input type="radio" data-key="containsLeftValue" v-model="leftContain" value="0" :disabled="disable"> 右包含</label>
  		</div>
	  	<ladder-comm 
	  	:relate-startprice="true" 
	  	:unit="YearRateUnit" 
	  	:left-contain="leftContain" 
	  	:arrtypefk="arrTypeFk"
	  	:not-float-upper-limit="notFloatUpperLimit" 
	  	:latter-data="latterData" 
	  	:interaction="true" 
	  	:disable="disable">
	  	</ladder-comm>
  	</div>
</div>