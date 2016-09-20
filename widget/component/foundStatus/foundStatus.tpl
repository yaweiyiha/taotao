<div class="styleguide admin-widget-foundStatus">
	<div class="row">
		<div class="col-md-6">
		    <div class="form-group">
		        <div class="input-group">
		            <div class="input-group-addon" >成立状态</div>
		                <select class="input-control valid" data-key="establishStatus" v-model="establish" :disabled="disable" is-num="1">

		                    <option value="0" >募集中</option>
		                    <option value="1" >已成立</option>
		                    <option value="2" >募集失败</option>
		                </select>
		            </div>
		        </div>
		    </div>
		<div v-if="establish == '1'" class="col-md-6"  style="display: block;">
		    <div class="form-group">
		        <div class="input-group">
		            <div class="input-group-addon">成立日
		           	<span  class="text-strong-red">*</span>
		            </div>
		            <single-date  
		                :disable="disable" 
		                required="required" 
		                key="dateEstablished" 
		                name="成立日"
		                data-key="dateEstablished" 
		                placeholder="请输入成立日" 
		                :timestamp="dateestablished">
		            </single-date>
				</div>
		    </div>
		</div>
	</div>

	<div class="row">
		<div class="col-md-12">
		<div v-if="establish == '0'" class="form-group input-group"> 
		    <div class="input-group-addon input-title">产品状态     
		    </div>
		    <input 
		      	data-key="salesStatusFk" 
		      	type="radio" 
		      	class="radio-input"  
		      	name="recruitment"  
		      	value="20"  
		      	:disabled="disable" 
		      	v-model="sales"> 预售
		    <input 
		    	data-key="salesStatusFk" 
		    	type="radio" 
		    	class="radio-input" 
		    	name="recruitment"   
		    	value="10"  
		    	:disabled="disable" 
		    	v-model="sales"> 在售
		    <input  
		    	data-key="salesStatusFk" 
		    	type="radio" 
		    	class="radio-input" 
		    	name="recruitment" 
		    	value="30" 
		    	:disabled="disable" 
		    	v-model="sales"> 售罄
  		</div>

  		<div v-if="establish == '1'" class="form-group input-group"> 
		    <div class="input-group-addon input-title">产品状态     
		    </div>
		    <input 
		      	data-key="salesStatusFk" 
		      	type="radio" 
		      	:disabled="disable" 
		      	class="radio-input"  
		      	name="founed"  
		      	value="60" 
		      	v-model="salesother"> 已结束
		    <input 
		    	data-key="salesStatusFk" 
		    	type="radio" 
		    	:disabled="disable" 
		    	class="radio-input" 
		    	name="founed"  
		    	value="70"  
		    	v-model="salesother"> 执行中
		      	<div v-if="salesother == '70'" style= "display: inline-block">
		      		<span>(</span>
		      		<input 
		      			type="radio" 
		      			:disabled="disable" 
		      			class="radio-input" 
		      			name="executeState" 
		      			value="10" 
		      			data-key ="executeState" 
		      			v-model="executestate"> 封闭状态
		      		<input 
		      			type="radio" 
		      			:disabled="disable" 
		      			class="radio-input" 
		      			name="executeState" 
		      			value="20" 
		      			data-key ="executeState" 
		      			v-model="executestate"> 开放状态
		      		<span>)</span>
		      	</div>
  		</div> 
  		<div v-if="establish == '2'" class="form-group input-group"> 
		    <div class="input-group-addon input-title">产品状态     
		    </div>
		    <input 
		      	data-key ="executeState" 
		      	type="radio" 
		      	class="radio-input"  
		      	name="founed"  
		      	value="80" 
		      	checked="checked" 
		      	:disabled="disable"> 募集失败
  		</div> 
	</div>
	</div>
</div>