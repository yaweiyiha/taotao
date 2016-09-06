<div class="styleguide admin-widget-distributionWay">
	<div class="row ">
            <div class="col-md-6 input-wrapper rt"> 
                <div class="form-group input-group w100">
                    <div class="input-group-addon input-title">收益分配方式</div>
                     <select class="input-control" data-key="distributionWayFk" v-model='distributionWayFk'> 
                        	<option selected="selected" value="90">到期一次性还本付息</option>
                        	<option value="130">按期付息，到期还本</option>
                      </select>
                </div>  
            </div>
            <div v-if="distriCircleShow" class="col-md-4 prn input-wrapper rt">  
                <div class="form-group input-group w100">
                      <div class="input-group-addon input-title">收益分配周期
                      </div>
                      <select class="input-control" data-key="distributionWayFk" v-model="distriCircle"> 
                        	<option value="10">按月</option>
                        	<option value="40">按季度</option>
                        	<option value="30">按年</option>
                        	<option value="100">按周</option>
                        	<option value="20">按天</option>
                        	<option value="80">按半年</option>
                      </select>
                  </div>     
              </div>
              <div  v-if="distriCircleShow" class="col-md-2 pln input-wrapper rt">  
                  <div class="form-group input-group">
                    <span class="input-group-addon input-title">每</span>
                    <input class="input-control" maxlength="40" data-des="每" data-key="orderNumber"> 
                    <span class="input-group-addon input-title">月</span> 
                    
                  </div>
              </div>
          </div>

        <div class="row ">
            <div class="col-md-5 input-wrapper rt"> 
				<div class="form-group input-group"> 
                      <div class="input-group-addon input-title">收益生效日类型     
                      </div>
                      <input type="radio" class="radio-input"  name="identity" checked="checked" value="10" v-model="picked"> 固定日期
                      <input type="radio" class="radio-input" name="identity" value="20" v-model="picked" > 按成交日
                      <input type="radio" class="radio-input" name="identity" value="30" v-model="picked"> 成立日
                  </div> 
            </div>

            <div v-if="fixDayShow" class="col-md-6" >
                <div class="form-group">
                    <div class="input-group">
                      <div class="input-group-addon">固定日期</div>
						<single-date :key="startDateInterest" placeholder="请输入固定日期"></single-date>
                    </div>
                </div>
            </div>
            <div v-if="completionDateShow" class="col-md-6">
				<div class="form-group">
				    <div class="input-group">
				        <div id="dateF" class="input-group-addon">T(成交日) +</div>
				        <input class="form-control numberbox" data-key="incomeCompletionDateNumber" maxlength="8"> 
				        <div class="input-group-addon">天</div>
				    </div>
				</div>				                                    
		    </div>
		    <div v-if="foundDateShow" class="col-md-6" >
				<div class="form-group">
				    <div class="input-group">
				        <div id="dateF" class="input-group-addon">T(成立日) +</div>
				        <input class="form-control numberbox" data-key="incomeCompletionDateNumber" maxlength="8"> 
				        <div class="input-group-addon">天</div>
				    </div>
				</div>				                                    
		    </div>

          </div>
</div>