<div class="styleguide admin-widget-foundStatus">
	<div class="row">
		<div class="col-md-6">
		    <div class="form-group">
		        <div class="input-group">
		            <div class="input-group-addon" style="min-width:120px">成立状态</div>
		                <select class="form-control valid" data-key="establishStatus" v-model="establishStatus" :disabled="disable">
		                    <option value="0" selected="selected">募集中</option>
		                    <option value="1">已成立</option>
		                    <option value="2">募集失败</option>
		                </select>
		            </div>
		        </div>
		    </div>
		<div v-if="collectStatus" class="col-md-6"  style="display: block;">
		    <div class="form-group" style="padding-right:15px">
		        <div class="input-group">
		            <div class="input-group-addon">成立日
		            </div>
		            <single-date  :disable="disable" :key="startDateInterest" data-key="dateEstablished" placeholder="请输入固定日期"></single-date>
				</div>
		    </div>
		</div>
	</div>

	<div class="row">
		<div class="col-md-12">
		<div v-if="proCollect" class="form-group input-group"> 
		     <div class="input-group-addon input-title" style="min-width:120px">产品状态     
		      </div>
		      <input data-key="salesStatusFk" type="radio" class="radio-input"  name="collect"  value="10" v-model="collect" :disabled="disable"> 预售
		      <input data-key="salesStatusFk" type="radio" class="radio-input" name="collect"  checked="checked" value="20" v-model="collect" :disabled="disable"> 在售
		      <input  data-key="salesStatusFk" type="radio" class="radio-input" name="collect" value="30" :disabled="disable"> 售罄
  		</div>

  		<div v-if="collectStatus" class="form-group input-group"> 
		     <div class="input-group-addon input-title" style="min-width:120px">产品状态     
		      </div>
		      <input data-key="salesStatusFk" type="radio" :disabled="disable" class="radio-input"  name="founed"  value="60"> 已结束
		      <input data-key="salesStatusFk" type="radio" :disabled="disable" class="radio-input" name="founed"  checked="checked" value="70"  > 执行中

				    <span>(</span>
		      		<input type="radio" :disabled="disable" class="radio-input" name="doing" value="10" checked="checked" data-key ="executeState"> 封闭状态
		      		<input type="radio" :disabled="disable" class="radio-input" name="doing" value="20" data-key ="executeState"> 开放状态

		      		<span>)</span>
  		</div> 
  		<div v-if="failStatus" class="form-group input-group"> 
		     <div class="input-group-addon input-title" style="min-width:120px">产品状态     
		      </div>
		      <input data-key ="executeState" type="radio" class="radio-input"  name="founed"  value="10" checked="checked" :disabled="disable"> 募集失败
  		</div>  
	

	</div>
	</div>
</div>