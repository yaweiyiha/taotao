<div class="styleguide edit-widget-editform">

  <div> 
    <div class="panel-heading"></div>
    <ul v-if= "tabs || buttonlist" class="my-tabs clearfix">
      <template v-if="tabs.length !== 0" v-for='(index, tab) in tabs' >
        <li data-key="{{tab.key}}" tab-index="{{index}}" v-bind:class="{ 'active': index === 0 }">
            <a href="javascript:;" data-href="{{host + tab.url}}" >{{tab.value}}</a>
        </li>
        
      </template>
<!--       <div class="tac">
          <template v-for="bt in buttonlist">
              <button class="custom-button {{bt.classList}}" data-role="{{bt.evt}}" pro="{{bt.productCategories}}">{{bt.name}}</button> 
          </template> 
      </div> -->
    </ul>
    <div class="panel">
      
      <template v-for = "(index,form) in forms">
        <div class="panel-body"  form-index= '{{index}}' v-bind:class="{'none' : index === 1 }">
          <div v-for = "panel in form" class="sub-panel" >
              <div class="row title" v-if="panel.panelName">
                  <div>
                      <span class="section-title">{{panel.panelName}}</span>
                      <span v-if="panel.subFun" class="icon" data-role="{{panel.subFun}}"></span>
                      <span class="text-strong-red">{{panel.descTitle}}</span>
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
                  <template v-if="li.type === 'comSoled'">
                    <soled
                      :disable="options.disable"
                      :offering-size="item.offeringSize"
                      :offeringsize-unit="item.unitFkOfferingSize"
                      :process="item.selfDefinedProcess"
                    >
                  </soled>
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
                        :left-contain="item.containsLeftValue"
                        :disable="options.disable"
                      >
                      </year-rate>
                  </template>
                  <template v-if="li.type === 'fundStrategy'">
                      <fund-strategy :disable="options.disable"></fund-strategy>
                  </template>
                  <template v-if="li.type === 'distributionWay'">
                       <distribution-way
                        :distribution="item.distributionWayFk"
                        :incomecalcutype="item.incomeCalculationTypeFk"
                        :distributeinterval="item.distributeInterval"
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
                       >
                      </found-status>
                  </template>
                  <template v-if="li.type === 'proTerm'">
                      <pro-term :maturities="item.maturities" :unitmaturities="item.unitFkMaturities" :startinginvest="item.startingInvest" :basedays="item.baseDays" :custombasedays="customBaseDays" :unitstartingmaturities="item.unitFkStartingMaturities" :disable="options.disable"></pro-term>
                  </template>
                  <template v-if="li.type === 'hoster'">

                      <hoster :select-key="item.custodianType" :custodian="item.custodianParty" :disable="options.disable"></hoster>
                  </template>



                  <div v-if="li.type === 'text'" class="form-group input-group text">
                    <div class="input-group-addon input-title" v-bind:style="li.selfStyle">{{li.name}} : {{li.value}}
                    </div>
                  </div>
                  <div v-if="li.type === 'input'" class="form-group input-group">
                    <div class="input-group-addon input-title" >{{li.name}}
                        <span v-if="li.isrequire" class="text-strong-red">*</span>
                    </div>
                    <input data-valide="  {{li.isrequire ? 'required' : ''}}" data-des="{{li.name}}" data-key="{{li.key}}" v-bind:class="{'bln' : li.bln ,'brn' : li.brn ,'bld' : li.bld , 'brd' : li.brd }" class="input-control"  maxlength="40" placeholder="{{li.placeholder}}"  v-bind:readonly="li.readonly" value="{{item[li.key]}}"> 
                    <div class="unit" v-if="li.unit">{{ li.unit }}</div>
                    <div class="unit" v-if="li.unitKey">
                      <span v-if="li.unitType === 'money'">{{ item[li.unitKey] | money }}</span>
                    </div>
                  </div>
                  <div v-if="li.type === 'CommType'">
                    <comm-type></comm-type>
                  </div>
                  <div v-if="li.type === 'select'" class="form-group input-group w100">
                      <div v-if= "li.name" class="input-group-addon input-title" >{{li.name}}<span v-if="li.isrequire" class="text-strong-red">*</span>
                      </div>
                      <select class="input-control" v-bind:class="{'bln' : li.bln ,'brn' : li.brn ,'bld' : li.bld , 'brd' : li.brd }" data-key="{{li.key}}" is-num="{{li.isNum}}" v-model="item[li.key]"  >
                        <template v-for="(index, option ) in li.options" track-by="$index">
                            <option  value="{{li.value[index]}}">{{option}}</option>
                        </template>
                      </select>
                  </div>
                  <div  v-if="li.type === 'time'" class="form-group input-group time">
                    <div class="input-group-addon input-title" >{{li.name}}
                        <span v-if="li.isrequire" class="text-strong-red">*</span>
                    </div>
                    <input data-key="{{li.key}}" v-bind:class="{'bln' : li.bln ,'brn' : li.brn ,'bld' : li.bld , 'brd' : li.brd }" class="input-control {{li.classList}}" readonly>
                  </div> 
                  <div  v-if="li.type === 'singledate'" class="form-group input-group">
                    <div class="input-group-addon input-title" >{{li.name}}
                        <span v-if="li.isrequire" class="text-strong-red">*</span>
                    </div>
                      <single-date                            
                           :key="li.key" 
                           :disable="options.disable" 
                           :placeholder="li.placeholder"
                           :timestamp ="item[li.key]">
                      </single-date>
                  </div> 
                  <div v-if="li.type === 'dep'" class="form-group input-group dep">
                    <div class="input-group-addon input-title" >{{li.name}}
                        <span v-if="li.isrequire" class="text-strong-red">*</span>
                    </div>
                    <input data-key="{{li.key}}" class="input-control  readonly">
                    <div class="input-group-addon input-title choose-button">选择</div>
                  </div> 
                  <div  v-if="li.type === 'area'" class="form-group input-group">
                   <div class="input-group-addon input-title" >{{li.name}}
                      <span v-if="li.isrequire" class="text-strong-red">*</span>
                   </div>
                    <city-select key="code"></city-select>
                  </div>
                  <div v-if="li.type ==='radios'" class="form-group input-group"> 
                      <div class="input-group-addon input-title" >{{li.name}}
                          <span v-if="li.isrequire" class="text-strong-red">*</span>
                      </div>
                      <template v-for="r in li.radios">
                        <input 
                          type="radio" 
                          data-key="{{li.key}}" 
                          class='radio-input' 
                          value="{{r.value}}" 
                          name="{{li.key}}" 
                          v-model="item[li.key]"
                          checked="{{r.checked}}"
                          > {{r.name}}
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
          <template v-for="bt in buttons">
              <button class="custom-button {{bt.classList}} bottom-button" data-role="{{bt.evt}}">{{bt.name}}</button> 
          </template> 
      </div>


  </div>
</div>