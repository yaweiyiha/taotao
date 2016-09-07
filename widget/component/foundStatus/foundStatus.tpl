<div class="styleguide admin-widget-foundStatus">
	<div class="row">
		<div class="col-md-6">
		    <div class="form-group">
		        <div class="input-group">
		            <div class="input-group-addon">成立状态</div>
		                <select class="form-control valid" data-key="establishStatus" v-model="foundStatusFK" :disabled="disable">
		                    <option value="0" selected="selected">募集中</option>
		                    <option value="1">已成立</option>
		                    <option value="2">募集失败</option>
		                </select>
		            </div>
		        </div>
		    </div>
		<div v-if="collectStatus" class="col-md-6"  style="display: block;">
		    <div class="form-group">
		        <div class="input-group">
		            <div class="input-group-addon">成立日
		            </div>
		            <single-date :key="startDateInterest" placeholder="请输入固定日期"></single-date :disabled="disable">
				</div>
		    </div>
		</div>
	</div>

	<div class="row">
		<div class="col-md-12">
		<div v-if="proCollect" class="form-group input-group"> 
		     <div class="input-group-addon input-title">产品状态     
		      </div>
		      <input type="radio" class="radio-input"  name="collect"  value="10" v-model="collect" :disabled="disable"> 预售
		      <input type="radio" class="radio-input" name="collect"  checked="checked" value="20" v-model="collect" :disabled="disable"> 在售
		      <input type="radio" class="radio-input" name="collect" value="30" :disabled="disable"> 售罄
  		</div>

  		<div v-if="collectStatus" class="form-group input-group"> 
		     <div class="input-group-addon input-title">产品状态     
		      </div>
		      <input type="radio" class="radio-input"  name="founed"  value="10" :disabled="disable"> 已结束
		      <input type="radio" class="radio-input" name="founed"  checked="checked" value="20"  :disabled="disable"> 执行中

				    <span>(</span>
		      		<input type="radio" class="radio-input" name="doing" value="30" checked="checked" :disabled="disable"> 封闭状态
		      		<input type="radio" class="radio-input" name="doing" value="30" :disabled="disable"> 开放状态

		      		<span>)</span>
  		</div> 
  		<div v-if="failStatus" class="form-group input-group"> 
		     <div class="input-group-addon input-title">产品状态     
		      </div>
		      <input type="radio" class="radio-input"  name="founed"  value="10" checked="checked" :disabled="disable"> 募集失败
  		</div>  
	

	</div>
	</div>
</div>