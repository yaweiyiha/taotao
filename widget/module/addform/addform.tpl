<div class="styleguide asset-widget-addform">

  <div> 
    <div class="panel-heading"></div>
    <ul class="my-tabs clearfix">
      <template v-if="tabs.length !== 0" v-for='(index, tab) in tabs' >
        <li data-key="{{tab.key}}" v-bind:class="{ 'active': index === 1 }">
            <a href="javascript:;" data-href="{{host + tab.url}}" >{{tab.value}}</a>
        </li>
        
      </template>
      <button class="return custom-button" @click="back">返回</button>
    </ul>
    <div class="panel">
      <div class="panel-body">
      <template v-for = "form in forms">
          <div class="sub-panel">
              <div class="row title">
                  <div class="col-xs-12">
                      <span class="section-title">{{form.panelName}}</span>
                      <span v-if="form.subFun" class="icon"></span>
                      <span class="text-strong-red">{{form.descTitle}}</span>
                  </div>
              </div>
          </div>
        <template v-for="li in form.formlist">
          <div class="row ">
            <template v-for="item in li">
                <div class="{{item.wrapperClass}} input-wrapper">
                  <div v-if="item.type === 'input'" class="form-group input-group">
                    <div class="input-group-addon input-title" >{{item.name}}
                        <span v-if="item.isrequire" class="text-strong-red">*</span>
                    </div>
                    <input data-key="{{item.key}}" v-bind:class="{'bln' : item.bln ,'brn' : item.brn ,'bld' : item.bld , 'brd' : item.brd }" class="input-control" value="" maxlength="40" placeholder="{{item.placeholder}}">
                  </div>
<!--                   bln {{item.bln}}  brn{{item.brn }}  bld{{item.bld }} brd{{item.brd }} -->
                  <div v-if="item.type === 'select'" class="form-group input-group">
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
                  <div v-if="item.type ==='checkbox'" class="form-group input-group"> 
                      <label for="inputEmail3" class="control-label">{{item.checkLabel}}
                          <span v-if="item.isrequire" class="text-strong-red">*</span>
                      </label>
                      <template v-for="r in item.radios">
                        <input type="radio" name="isDisable" id="isDisable11" checked="{{r.isChecked}}" value="-1"> {{r.name}}
                      </template>
                  </div>
              </div>
            </template>
   
          </div>
        </template>
      </template>


      <star></star>
      <div class="tac">
          <template v-for="bt in buttonlist">
              <button class="custom-button {{bt.classList}}" data-role="{{bt.evt}}">{{bt.name}}</button> 
          </template> 
      </div>
  </div>
</div>