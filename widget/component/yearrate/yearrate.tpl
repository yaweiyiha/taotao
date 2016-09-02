<div class="styleguide admin-widget-yearrate">
  	<div class="row">	
		<div class="col-md-6 input-wrapper rt">
	      	<div class="form-group input-group w100">
	          <div class="input-group-addon input-title" >
	          	预期年化收益率
	          	<span class="text-strong-red">*</span>
	          </div>
	          <select class="input-control YearRateType" v-model="YearRateType"> 
	            <option value="">未设置</option>
	            <option value="10">固定</option>
	            <option value="20">浮动</option>
	            <option value="30">固定阶梯</option>
	            <option value="40">浮动阶梯</option>
	          </select>
	      	</div>
	  	</div>  	
		<div class="col-md-6 input-wrapper rt" v-if="YearRateType === '30'">
	      	<div class="form-group input-group w100">
	          <div class="input-group-addon input-title">
	          	金额单位
	          </div>
	          <select class="input-control YearRateUnit" v-model="YearRateUnit"> 
	            <option value="元">元</option>
	            <option value="万元">万元</option>
	            <option value="亿元">亿元</option>
	          </select>
	      	</div>
	  	</div>
  	</div>
  	<div class="row" v-if="YearRateType === '10'">
		<div class="col-md-6 input-wrapper rt">
	      	<div class="form-group input-group w100">
	          <div class="input-group-addon input-title">
	          	固定利率
	          </div>
				<input class="input-control fixedRate" v-model="fixedRate">
				<div class="unit">%</div>
	      	</div>
	  	</div>  	
  	</div>
  	<div v-if="YearRateType === '20'">
  		<div class="row ml30">
	  		<label><input type="checkbox" v-model="fixMin" class="fixMin"> 固定下限</label>
	  		<label class="ml10"><input type="checkbox" v-model="floatMax" class="floatMax"> 浮动上限</label>
  		</div>
  		<div class="row mt10">
			<div class="col-md-3 input-wrapper rt" v-if="fixMin">
		      	<div class="form-group input-group w100">
		          <div class="input-group-addon input-title">
		          	固定下限
		          </div>
					<input class="input-control minArr" v-model="minArr">
					<div class="unit">%</div>
		      	</div>
		  	</div>  	
			<div class="col-md-3 input-wrapper rt" v-if="floatMax">
		      	<div class="form-group input-group w100">
		          <div class="input-group-addon input-title">
		          	浮动上限
		          </div>
					<input class="input-control maxArr" v-model="maxArr">
					<div class="unit">%</div>
		      	</div>
		  	</div>  	
  		</div>
  	</div>
	<div class="row ml30" v-if="YearRateType === '40'">
		<label><input type="radio" v-model="floatUpperLimit" value="1"> 有浮动上限</label>
		<label class="ml10"><input type="radio" v-model="floatUpperLimit" value="0"> 无浮动上限</label>
	</div>
  	<div v-if="YearRateType === '30' || YearRateType === '40'">
  		<div class="row ml30">
	  		<label><input type="radio" v-model="leftContain" value="1"> 左包含</label>
	  		<label class="ml10"><input type="radio" v-model="leftContain" value="0"> 右包含</label>
  		</div>
	  	<ladder-comm :unit="YearRateUnit" :left-contain="leftContain" :float-upper-limit="floatUpperLimit" :latter-data="latterData"></ladder-comm>
  	</div>
  	<div class="row" v-if="false">
  		<button @click="getData">获取佣金设置数据</button>
  	</div>
</div>