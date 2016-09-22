<div class="styleguide admin-widget-vipChoicenessDistributionWay">
<div class="styleguide admin-widget-distributionWay">
	<div class="row ">
            <div class="col-md-6 input-wrapper rt"> 
                <div class="form-group input-group w100">
                    <div class="input-group-addon input-title">还款方式</div>
                     <select class="input-control" data-key="vipChoicenessDistributionWayFk" v-model="distribution" :disabled="disable"> 
                        	<option  value="10" > 到期一次性还本付息 </option>
                        	<option  value="120"> 按期付息,到期还本  </option>
                      </select>
                </div>  
            </div>
            <div v-if="distribution == '120'" class="col-md-3 prn input-wrapper rt">  
                <div class="form-group input-group w100">
                      <div class="input-group-addon input-title">收益分配周期
                      </div>
                      <select class="input-control" data-key="vipChoicenessDistributionWayFk" v-model="distributionAnother" :disabled="disable" is-num='1'> 
                        	<option value="20">按月</option>
                        	<option value="30">按季度</option>
                        	<option value="40">按年</option>
                        	<option value="70">按半年</option>
                        	<option value="80">按天</option>
                        	<option value="90">按周</option>
                      </select>
                  </div>     
              </div>
              <div v-if="distribution === '120' && distributionAnother !== '70'"  class="col-md-2 pln input-wrapper rt">  

                  <div class="form-group input-group">
                    <span class="input-group-addon input-title">每</span>
                    <input class="input-control" maxlength="40" data-des="每" data-key="distributeInterval" style="width:70px" v-model="distributeinterval" :disabled="disable">   
                    <span class="input-group-addon input-title" style="min-width:10px" >{{circleUnit}}</span> 
                  </div>
              </div>
          </div>

        <div class="row ">
            <div class="col-md-5 input-wrapper rt"> 
				        <div class="form-group input-group"> 
                      <div class="input-group-addon input-title">收益生效日类型     
                      </div>
                      <input type="radio" class="radio-input"  name="identity" value="10" data-key="incomeCalculationTypeFk" v-model="incomecalcutype" :disabled="disable"> 固定日期
                      <input type="radio" class="radio-input" name="identity" value="20" data-key="incomeCalculationTypeFk" v-model="incomecalcutype" :disabled="disable"> 按成交日
                      <input type="radio" class="radio-input" name="identity" value="30" data-key="incomeCalculationTypeFk" v-model="incomecalcutype" :disabled="disable"> T+工作日
                  </div> 
            </div>

            <div v-if="incomecalcutype == '10'" class="col-md-6" >
                <div class="form-group">
                    <div class="input-group">
                      <div class="input-group-addon">固定日期
                         <span  class="text-strong-red">*</span>
                      </div>
						          <single-date 
                          required="required" 
                          data-key="startDateInterest" 
                          key="startDateInterest" 
                          name="固定日期"
                          placeholder="请输入固定日期" 
                          :disable="disable" 
                          :timestamp="startdateinterest">
                      </single-date>

                    </div>
                </div>
            </div>
            <div v-if="incomecalcutype == '20'" class="col-md-6">
      				<div class="form-group">
      				    <div class="input-group">
      				        <div id="dateF" class="input-group-addon">T(成交日) +</div>
      				        <input class="form-control numberbox" data-key="incomeCompletionDateNumber" maxlength="8" v-model ="incomecompletion" :disabled="disable"> 
      				        <div class="input-group-addon">天</div>
      				    </div>
      				</div>				                                    
		        </div>
    		    <div v-if="incomecalcutype == '30'" class="col-md-6" >
      				<div class="form-group">
      				    <div class="input-group">
      				        <div id="dateF" class="input-group-addon">T(成交日) +</div>
      				        <input class="form-control numberbox" data-key="incomeCompletionDateNumber" maxlength="8" v-model ="incomecompletion" :disabled="disable"> 
      				        <div class="input-group-addon">天</div>
      				    </div>
      				</div>				                                    
    		    </div>
          </div>
</div>