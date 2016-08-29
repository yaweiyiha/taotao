<div class="styleguide asset-widget-addform">

  <div> 
    <div class="panel-heading"></div>
    <ul v-if= "tabs" class="my-tabs clearfix">
      <template v-if="tabs.length !== 0" v-for='(index, tab) in tabs' >
        <li data-key="{{tab.key}}" tab-index="{{index}}" v-bind:class="{ 'active': index === 0 }">
            <a href="javascript:;" data-href="{{host + tab.url}}" >{{tab.value}}</a>
        </li>
        
      </template>
      <div class="tac">
          <template v-for="bt in buttonlist">
              <button class="custom-button {{bt.classList}}" data-role="{{bt.evt}}">{{bt.name}}</button> 
          </template> 
      </div>
    </ul>
    <div class="panel">

      <template v-for = "(index,form) in forms">
        <div class="panel-body"  form-index= '{{index}}' v-bind:class="{'none' : index === 1 }">
          <div v-for = "panel in form" class="sub-panel" >
              <div class="row title">
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
                        <input class="input-control" value="" maxlength="40" data-key="orderNumber" placeholder="请输入标题">  
                      </div>              
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-5 input-wrapper rt">
                      <div class="form-group input-group">
                        <div class="input-group-addon input-title">内容
                        </div>
                        <textarea type="" class="input-control" value="" maxlength="40" data-key="orderNumber" style="width:400px;height:150px" placeholder="请输入内容"></textarea>
                      </div>              
                    </div>
                  </div>
              </div>
        <template v-for="li in panel.formlist">
          <div class="row ">
            <template v-for="item in li">
                <div class="{{item.wrapperClass}} input-wrapper rt">
                  <div v-if="item.type === 'input'" class="form-group input-group">
                    <div class="input-group-addon input-title" >{{item.name}}
                        <span v-if="item.isrequire" class="text-strong-red">*</span>
                    </div>
                    <input data-key="{{item.key}}" v-bind:class="{'bln' : item.bln ,'brn' : item.brn ,'bld' : item.bld , 'brd' : item.brd }" class="input-control" value="" maxlength="40" placeholder="{{item.placeholder}}">
                    <div class="unit" v-if="item.unit">{{ item.unit }}</div>
                  </div>
                  <div v-if="item.type === 'select'" class="form-group input-group w100">
                      <div v-if= "item.name" class="input-group-addon input-title" >{{item.name}}<span v-if="item.isrequire" class="text-strong-red">*</span>
                      </div>
                      <select class="input-control" v-bind:class="{'bln' : item.bln ,'brn' : item.brn ,'bld' : item.bld , 'brd' : item.brd }" data-key="{{item.key}}"> 
                        <template v-for="option in item.options">
                            <option value="">{{option}}</option>
                        </template>
                      </select>
                  </div>
                  <div  v-if="item.type === 'time'" class="form-group input-group time">
                    <div class="input-group-addon input-title" >{{item.name}}
                        <span v-if="item.isrequire" class="text-strong-red">*</span>
                    </div>
                    <input data-key="{{item.key}}" v-bind:class="{'bln' : item.bln ,'brn' : item.brn ,'bld' : item.bld , 'brd' : item.brd }" class="input-control {{item.classList}}" readonly>
                  </div> 

                  <div  v-if="item.type === 'singledate'" class="form-group input-group">
                    <div class="input-group-addon input-title" >{{item.name}}
                        <span v-if="item.isrequire" class="text-strong-red">*</span>
                    </div>
                      <single-date></single-date>
                  </div> 
                  <div v-if="item.type === 'dep'" class="form-group input-group dep">
                    <div class="input-group-addon input-title" >{{item.name}}
                        <span v-if="item.isrequire" class="text-strong-red">*</span>
                    </div>
                    <input data-key="{{item.key}}" class="input-control  readonly">
                    <div class="input-group-addon input-title choose-button">选择</div>
                  </div> 
                  <div  v-if="item.type === 'area'" class="form-group input-group">
                   <div class="input-group-addon input-title" >{{item.name}}
                      <span v-if="item.isrequire" class="text-strong-red">*</span>
                   </div>
                    <city-select key="code"></city-select>
                  </div>
                  <div v-if="item.type ==='radios'" class="form-group input-group"> 
                      <div class="input-group-addon input-title" >{{item.name}}
                          <span v-if="item.isrequire" class="text-strong-red">*</span>
                      </div>
                      <template v-for="r in item.radios">
                        <input type="radio" class='radio-input' name="isDisable" id="isDisable11" checked="{{r.isChecked}}" value="-1"> {{r.name}}
                      </template>
                  </div>
                  <div v-if="item.type === 'star'" class="form-group input-group">
                    <div class="input-group-addon input-title" >{{item.name}}</div>
                    <star></star>
                  </div>
              </div>
            </template>
   
          </div>
        </template>
      </template>



  </div>
</div>