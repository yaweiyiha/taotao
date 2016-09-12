<div class="styleguide admin-widget-addform">

  <div> 
    <div class="panel-heading"></div>
    <ul v-if= "tabs || buttonlist" class="my-tabs clearfix">
      <template v-if="tabs.length !== 0" v-for='(index, tab) in tabs' >
        <li data-key="{{tab.key}}" tab-index="{{index}}" v-bind:class="{ 'active': index === 0 }">
            <a href="javascript:;" data-href="{{host + tab.url}}" >{{tab.value}}</a>
        </li>
        
      </template>
    </ul>
    <div class="back" @click="back">
         <span class="back-info">
            &lt; 返回
         </span>
    </div>
    <div class="panel">

      <template v-for = "(index,form) in forms">
        <div class="panel-body"  form-index= '{{index}}' v-bind:class="{ 'none' : index > 0 }">
          <div v-for = "panel in form" class="sub-panel" >
              <div class="row title" v-if="panel.panelName">
                  <div> 
                      <span class="section-title">{{panel.panelName}}</span>
                      <span v-if="panel.subFun" class="icon" data-role="{{panel.subFun}}"></span>
                      <span class="text-strong-red">{{panel.descTitle}}</span>
                  </div>
              </div>
              <div v-if="panel.subFun" data-role="{{panel.subFun}}Content" class="none"> 
                  <div class="row mt10">
                    <div class="col-md-5 input-wrapper rt">
                      <div class="form-group input-group">
                        <div class="input-group-addon input-title">标题
                        </div>
                        <input class="input-control" value="" maxlength="40" data-key="title" placeholder="请输入标题">  
                      </div>              
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-5 input-wrapper rt">
                      <div class="form-group input-group">
                        <div class="input-group-addon input-title">内容
                        </div>
                        <textarea type="" class="input-control" value="" maxlength="40" data-key="content" style="width:400px;height:150px" placeholder="请输入内容"></textarea>
                      </div>              
                    </div>
                  </div>
              </div>
        <template v-for="list in panel.formlist">
          <div class="row ">
            <template v-for="li in list">
                <div class="{{li.wrapperClass || ''}} input-wrapper rt">
                  <template v-if="li.type === 'verify-confirm'">
                    <verify-confirm></verify-confirm>
                  </template>
                  <template v-if="li.type === 'product-commset'">
                    <product-commset></product-commset>
                  </template>
                  <template v-if="li.type === 'custom-ele'">
                    <custom-ele
                      :list="item.customElementsList"
                      :disable="options.disable"
                    >
                    </custom-ele>
                  </template>
                  <template v-if="li.type === 'year-rate'">
                      <year-rate
                        :arr-type-fk="item.arrTypeFk"
                        :expected-arr="item.product.expectedArr"
                        :fix-min="item.product.fixMin"
                        :min-arr="item.product.minArr"
                        :float-max="item.product.floatMax"
                        :max-arr="item.product.maxArr"
                        :latter-data="item.productLadderRates"
                        :not-float-upper-limit="item.notContainsFloatRateMax"
                        :left-contain="item.product.containsLeftValue"
                        :disable="options.disable"
                      >
                      </year-rate>
                  </template>

                  <template v-if="li.type ==='vipChoicenessDistributionWay'">  
                      <choiceness-distribution
                        :distribution="item.vipChoicenessDistributionWayFk"
                        :incomecalcutype="item.incomeCalculationTypeFk"
                        :distributeinterval="item.distributeInterval"
                        :startdateinterest="item.startDateInterest"
                        :disable="options.disable"
                      ></choiceness-distribution>
                  </template>
                  <template v-if="li.type === 'fundStrategy'">
                      <fund-strategy 
                      :fundtype="item.fundTypeFk"
                      :fundsubtype="item.fundSubTypeFk"
                      :disable="options.disable"
                    ></fund-strategy>
                  </template>
                  <template v-if="li.type === 'distributionWay'">
                       <distribution-way
                        :distribution="item.distributionWayFk"
                        :incomecalcutype="item.incomeCalculationTypeFk"
                        :distributeinterval="item.distributeInterval"
                        :startdateinterest="item.startDateInterest"
                        :disable="options.disable"
                        :incomecompletion="item.incomeCompletionDateNumber"
                      >
                      </distribution-way> 
                  </template>
                  <template v-if="li.type === 'foundStatus'">
                       <found-status 
                       :establish="item.establishStatus" 
                       :sales="item.salesStatusFk" 
                       :disable="options.disable"
                       :dateestablished ="item.dateEstablished"
                       :executestate="item.executeState"
                       >
                      </found-status>
                  </template>
                  <template v-if="li.type === 'proTerm'">

                      {{item.baseDays}}
                      {{item.customBaseDays}}
                      <pro-term 
                      :maturities="item.maturities" 
                      :unitmaturities="item.unitFkMaturities" 
                      :startinginvest="item.startingInvest" 
                      :basedays="item.baseDays" 
                      :custombasedays="item.customBaseDays" 
                      :unitstartingmaturities="item.unitFkStartingMaturities" :disable="options.disable"></pro-term>
                  </template>
                  <template v-if="li.type === 'hoster'">
                      <hoster 
                        :custodiantype="item.custodianType" 
                        :custodian="item.custodianParty" 
                        :disable="options.disable">
                      </hoster>
                  </template>
                  <template v-if="li.type === 'editor'">
                    <editor :disable="options.disable"></editor>
                  </template>
                  <div v-if="li.type === 'text'" class="form-group input-group text">
                    <div class="input-group-addon input-title" v-bind:style="li.selfStyle">{{li.name}} : {{li.value}}
                    </div>
                  </div>
                  <div v-if="li.type === 'input'" class="form-group input-group">
                    <div class="input-group-addon input-title" v-bind:style="li.textStyle">{{li.name}}
                        <span v-if="li.validate.isrequire" class="text-strong-red">*</span>
                    </div>
                    <input data-valide="{{li.validate.isrequire ? 'required' : '' }}" data-number="{{li.validate.isNumber ? 'number' : ''}}"  data-des="{{li.name}}" data-key="{{li.key}}" v-bind:class="{'bln' : li.bln ,'brn' : li.brn ,'bld' : li.bld , 'brd' : li.brd }" class="input-control"  maxlength="40" placeholder="{{li.placeholder}}"  v-bind:readonly="options.disable" value="{{item[li.key]}}" data-phone="{{li.validate.isPhone ? 'phone' : ''}}">  
                    <div class="unit" v-if="li.unit">{{ li.unit }}</div>
                  </div>
                  <div v-if="li.type === 'CommType'">
                    <comm-type
                      :commission-type-fk="item.commissionTypeFk"
                      :base-commission="item.baseCommission"
                      :latter-data="item.productCommissionList"
                      :disable="options.disable"
                      :required="li.validate.isrequire"
                    >
                    </comm-type>
                  </div>

                  <div v-if="li.type === 'select'" class="form-group input-group w100 "  >
                      <div v-if= "li.name" class="input-group-addon input-title"  >{{li.name}}<span v-if="li.validate.isrequire" class="text-strong-red">*</span>
                      </div>
                      <select class="input-control" v-bind:class="{'bln' : li.bln ,'brn' : li.brn ,'bld' : li.bld , 'brd' : li.brd }" data-key="{{li.key}}" is-num="{{li.isNum}}" value="item[li.key]" :disabled="options.disable"> 
                        <template v-for="(index, option ) in li.options" track-by="$index">
                            <option value="{{li.value[index]}}">{{option}}</option>
                        </template>
                      </select>
                  </div>
                  <div  v-if="li.type === 'time'" class="form-group input-group time">
                    <div class="input-group-addon input-title" >{{li.name}}
                        <span v-if="li.validate.isrequire" class="text-strong-red">*</span>
                    </div>
                    <input data-key="{{li.key}}" v-bind:class="{'bln' : li.bln ,'brn' : li.brn ,'bld' : li.bld , 'brd' : li.brd }" class="input-control {{li.classList}}" readonly>
                  </div> 

                  <div  v-if="li.type === 'singledate'" class="form-group input-group">
                    <div class="input-group-addon input-title" >{{li.name}}
                        <span v-if="li.validate.isrequire" class="text-strong-red">*</span>
                    </div>

                      <single-date 
                           :key="li.key" 
                           :disable="options.disable" 
                           :placeholder="li.placeholder"
                           :timestamp ="item[li.key]"
                           >
                      </single-date>
                  </div> 
                  <div v-if="li.type === 'dep'" class="form-group input-group dep">
                    <div class="input-group-addon input-title" >{{li.name}}
                        <span v-if="li.validate.isrequire" class="text-strong-red">*</span>
                    </div>
                    <input data-key="{{li.key}}" class="input-control  readonly">
                    <div class="input-group-addon input-title choose-button">选择</div>
                  </div> 
                  <div  v-if="li.type === 'area'" class="form-group input-group">
                   <div class="input-group-addon input-title" >{{li.name}}
                      <span v-if="li.validate.isrequire" class="text-strong-red">*</span>
                   </div>
                     <input type="text" class="city-select input-control" v-bind:readonly="options.disable" :disabled="options.disable" placeholder="{{li.placeholder}}" data-key="{{li.key}}" value="{{item.areaFullName}}" data-values="{{item.areaCode}}">
                  </div>
                  <div v-if="li.type ==='radios'" class="form-group input-group"> 
                      <div class="input-group-addon input-title" >{{li.name}}
                          <span v-if="li.isrequire" class="text-strong-red">*</span>
                      </div>
                      <template v-for="r in li.radios">
                        <input type="radio" data-key="{{li.key}}" class='radio-input' value="{{r.value}}" name="{{li.key}}" v-model="item[li.key]" :disabled="options.disable"> {{r.name}}
                      </template>
                  </div>
                  <div v-if="li.type === 'star'" class="form-group input-group">
                    <div class="input-group-addon input-title" >{{li.name}}</div>
                    <star :score="item.arrRank" :disable="options.disable"></star>
                  </div>
              </div>
            </template>
   
          </div>
        </template>
      </template>
      <div class="tac">
          <template v-for="bt in buttonlist">
              <button class="custom-button {{bt.classList}}" data-role="{{bt.evt}}" pro="{{bt.productCategories}}">{{bt.name}}</button> 
      </template> 
      </div>
      <div class="buttons-wrapper">
          <template v-for="bt in buttons">
              <button class="custom-button {{bt.classList}} bottom-button" v-bind:style="bt.selfStyle" data-role="{{bt.evt}}">{{bt.name}}</button> 
          </template> 
      </div>


  </div>
</div>