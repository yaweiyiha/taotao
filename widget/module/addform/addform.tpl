<div class="styleguide admin-widget-addform">

  <div> 
    <div class="panel-heading"></div>
    <ul v-if= "tabs || buttonlist" class="my-tabs clearfix">
      <template v-if="tabs.length !== 0" v-for='(index, tab) in tabs' >
        <li data-key="{{tab.key}}" tab-index="{{index}}" v-bind:class="{ 'active': index === 0 }">
            <a href="javascript:;" data-href="{{host + tab.url}}" >{{tab.value}}</a>
        </li>
        
      </template>
      <div class="tac">
          <template v-for="bt in buttonlist">
              <button class="custom-button {{bt.classList}}" data-role="{{bt.evt}}" pro="{{bt.productCategories}}">{{bt.name}}</button> 
          </template> 
      </div>
    </ul>
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
                  <template v-if="li.type === 'year-rate'">
                      <year-rate
                        :arr-type-fk="item.arrTypeFk"
                        :expected-arr="item.product.expectedArr"
                        :fix-min="item.product.fixMin"
                        :min-arr="item.product.minArr"
                        :float-max="item.product.floatMax"
                        :max-arr="item.product.maxArr"
                        :latter-data="item.productLadderRates"
                      >
                      </year-rate>
                  </template>
                  <template v-if="li.type === 'fundStrategy'">
                      <fund-strategy></fund-strategy>
                  </template>
                  <template v-if="li.type === 'distributionWay'">
                       <distribution-way></distribution-way> 
                  </template>
                  <template v-if="li.type === 'editor'">
                    <editor></editor>
                  </template>
                  <div v-if="li.type === 'text'" class="form-group input-group text">
                    <div class="input-group-addon input-title" v-bind:style="li.selfStyle">{{li.name}} : {{li.value}}
                    </div>
                  </div>
                  <div v-if="li.type === 'input'" class="form-group input-group">
                    <div class="input-group-addon input-title" >{{li.name}}
                        <span v-if="li.validate.isrequire" class="text-strong-red">*</span>
                    </div>
                    <input data-valide="{{li.validate.isrequire ? 'required' : '' }}" data-number="{{li.validate.isNumber ? 'number' : ''}}"  data-des="{{li.name}}" data-key="{{li.key}}" v-bind:class="{'bln' : li.bln ,'brn' : li.brn ,'bld' : li.bld , 'brd' : li.brd }" class="input-control"  maxlength="40" placeholder="{{li.placeholder}}"  v-bind:readonly="li.readonly" value="{{item[li.key]}}" data-reg="{{li.reg}}" data-regerror="{{li.regError}}">  
                    <div class="unit" v-if="li.unit">{{ li.unit }}</div>
                  </div>
                  <div v-if="li.type === 'CommType'">
                    <comm-type
                      :commission-type-fk="item.commissionTypeFk"
                      :base-commission="item.baseCommission"
                      :latter-data="item.productCommissionList"
                    >
                    </comm-type>
                  </div>
                  <div v-if="li.type === 'select'" class="form-group input-group w100">
                      <div v-if= "li.name" class="input-group-addon input-title" >{{li.name}}<span v-if="li.validate.isrequire" class="text-strong-red">*</span>
                      </div>
                      <select class="input-control" v-bind:class="{'bln' : li.bln ,'brn' : li.brn ,'bld' : li.bld , 'brd' : li.brd }" data-key="{{li.key}}" is-num="{{li.isNum}}" v-model="item[li.key]"> 
                        <template v-for="(index, option ) in li.options" track-by="$index">
                            <option  value="{{li.value[index]}}">{{option}}</option>
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
                      <single-date :key="li.key" :placeholder="li.placeholder"></single-date>
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
                     <input type="text" class="city-select input-control" placeholder="{{li.placeholder}}">
 <!--                    <city-select key="code"></city-select> -->
                  </div>
                  <div v-if="li.type ==='radios'" class="form-group input-group"> 
                      <div class="input-group-addon input-title" >{{li.name}}
                          <span v-if="li.validate.isrequire" class="text-strong-red">*</span>
                      </div>
                      <template v-for="r in li.radios">
                        <input type="radio" data-key="{{r.key}}" class='radio-input' name="isDisable" id="isDisable11" checked="{{r.isChecked}}" value="-1"> {{r.name}}
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
      <div class="buttons-wrapper">
          <template v-for="bt in buttons">
              <button class="custom-button {{bt.classList}} bottom-button" data-role="{{bt.evt}}">{{bt.name}}</button> 
          </template> 
      </div>


  </div>
</div>