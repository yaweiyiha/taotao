<div class="styleguide admin-widget-distriform">
<div> 
    <ul class="my-tabs clearfix">
      <template v-if="tabs.length !== 0" v-for='(index, tab) in tabs' >
        <li data-key="{{tab.key}}" v-bind:class="{ 'active': index === 1 }">
            <a href="javascript:;" data-href="{{host + tab.url}}" >{{tab.value}}</a>
        </li>
        
      </template>
    </ul>
    <div class="panel">
      <div class="panel-body">
      <template v-for = "form in forms">
          <div  v-if="form.panelName" class="sub-panel">
              <div class="row title">
                  <div  class="col-xs-12">
                      <span class="section-title">{{form.panelName}}</span>
                      <span v-if="form.subFun" class="icon"></span>
                      <span class="text-strong-red">{{form.descTitle}}</span>
                  </div>
              </div>
          </div>
        <template v-for="list in form.formlist">
          <div class="row ">
            <template v-for="li in list">
                <div v-if="li.type === 'CommType'">
                  <comm-type></comm-type>
                </div>
                <div class="{{li.wrapperClass}} input-wrapper rt">
                  <div v-if="li.type === 'text'" class="form-group input-group text">
                    <div class="input-group-addon input-title" v-bind:style="li.selfStyle">{{li.name}} : {{item[li.key]}}
                    </div>
                  </div>
                  <div v-if="li.type === 'textList'" class="form-group input-group text">
                    <div v-for="text in li.textArr" class="input-title" v-bind:style="text.selfStyle">
                        <span v-if="text.subtype =='singleTime'">
                             {{text.name}} : {{item[text.key] | datetime}}
                        </span>
                        <span v-if="text.subtype =='doubleTime'">
                             {{text.name}} : {{item[text.key[0]] | datetime}} 至 {{item[text.key[1]] | datetime}}
                        </span>
                        <span v-if="text.subtype =='percent'">
                             {{text.name}} : {{item[text.key]}} %
                        </span>
                        <span v-if ="text.subtype =='text' ">
                             {{text.name}} : {{item[text.key]}}
                        </span>

                    </div>
                  </div>
                  <div v-if="li.type === 'input'" class="form-group input-group">
                    <div class="input-group-addon input-title" >{{li.name}}
                        <span v-if="li.isrequire" class="text-strong-red">*</span>
                    </div>
                    <input data-key="{{li.key}}" v-bind:class="{'bln' : li.bln ,'brn' : li.brn ,'bld' : li.bld , 'brd' : li.brd }" class="input-control" value="" maxlength="40" placeholder="{{li.placeholder}}" v-bind:readonly="item.readonly || false" v-model="item.vlaue || ''" value="{{{{item[li.key]}}}}">
                    <div class="unit" v-if="li.unit">{{ li.unit }}</div>
                  </div>
                  <div v-if="li.type === 'select'" class="form-group input-group w100">
                      <div v-if= "li.name" class="input-group-addon input-title" >{{li.name}}<span v-if="li.isrequire" class="text-strong-red">*</span>
                      </div>
                      <select class="input-control" v-bind:class="{'bln' : li.bln ,'brn' : li.brn ,'bld' : li.bld , 'brd' : li.brd }" data-key="{{li.key}}"> 
                        <template v-for="option in li.options">
                            <option value="">{{option}}</option>
                        </template>
                      </select>
                  </div>
                  <div v-if="li.type === 'img'" class="form-group input-group image" v-bind:style="li.selfStyle">
                      <div class="input-title" >{{li.name}}
                      </div>
                      <img v-bind:src="li.src" alt="">
                  </div> 
                  <div  v-if="li.type === 'time'" class="form-group input-group time">
                    <div class="input-group-addon input-title" >{{li.name}}
                        <span v-if="li.isrequire" class="text-strong-red">*</span>
                    </div>
                    <date-control :startkey="li.startkey" :endkey="li.endkey"></date-control>
                  </div>
                  <div  v-if="li.type === 'singledate'" class="form-group input-group">
                    <div class="input-group-addon input-title" >{{li.name}}
                    </div>
                      <single-date></single-date>
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
                  <div v-if="li.type ==='checkbox'" class="form-group input-group"> 
                      <label for="inputEmail3" class="control-label">{{li.checkLabel}}
                          <span v-if="li.isrequire" class="text-strong-red">*</span>
                      </label>
                      <template v-for="r in li.radios">
                        <input type="radio" name="isDisable" id="isDisable11" checked="{{r.isChecked}}" value="-1"> {{r.name}}
                      </template>
                  </div>
                  <div v-if="li.type ==='checkbox'" class="form-group input-group"> 
                      <label for="inputEmail3" class="control-label">{{li.checkLabel}}
                          <span v-if="li.isrequire" class="text-strong-red">*</span>
                      </label>
                      <template v-for="r in li.radios">
                        <input type="radio" name="isDisable" id="isDisable11" checked="{{r.isChecked}}" value="-1"> {{r.name}}
                      </template>
                  </div>
                  <div v-if="li.type === 'star'" class="form-group input-group">
                    <div class="input-group-addon input-title" >{{li.name}}</div>
                    <star></star>
                  </div>
                  <div v-if="li.type === 'button'" class="form-group input-group">
                    <div v-if="li.name" class="input-group-addon input-title" >{{li.name}}</div>
                    <div class='custom-button fun-button' @click="addFile">
                        <em v-if="li.icon" class="{{li.icon}}"></em>
                        <span>{{li.value}}</span>
                    </div>
  
                    <input class="attachment lefile" type="file" data-key='attachment' name="attachment" style="display:none">
                  </div>
              </div>
            </template>
   
          </div>
        </template>
      </template>
      
      <div class="attachment-view-wrapper" style="display:none">
        <div class="box">
          <div class="header">
            预览附件信息
            <i class="close-btn"></i>
          </div>
          <div class="preview">
            <img src="" alt="">
          </div>
        </div>
      </div>
      <div class="tac">
                    <div class = 'row'>
          <template v-for="bt in buttonlist">
              <div class= "col-md-6 pln prn">
                  <button class="custom-button {{bt.classList}}" data-role="{{bt.evt}}" >{{bt.name}}</button> 
                  <span v-if="bt.needAlt" class="alt-info">{{bt.alt}}</span>
              </div>
          </template> 
              </div>
      </div>
  </div>
</div>