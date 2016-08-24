<div class="styleguide asset-widget-addform">

  <div> 
    <div class="panel-heading"></div>
    <ul class="nav nav-tabs nav-justified">
      <template v-if="tabs.length !== 0" v-for='tab in tabs' >
        <li data-key="{{tab.key}}">
            <a href="{{host + tab.url}}" >{{tab.value}}</a>
        </li>
      </template>
    </ul>
    <div class="panel panel-default">
      <div class="panel-body">
      <template v-for = "form in forms">
          <div class="sub-panel">
              <div class="row">
                  <div class="col-xs-12">
                      <h3 class="section-title">
                          {{form.panelName}}
                          <span class="text-strong-red">{{form.descTitle}}</span>
                      </h3>
                  </div>
              </div>
          </div>
        <template v-for="li in form.formlist">
          <div class="row ">
            <template v-for="item in li">
                <div class="{{item.wrapperClass}} input-wrapper">
                  <div v-if="item.type === 'input'" class="form-group input-group">
                    <div class="input-group-addon input-title" >{{item.name}}</div>
                    <input data-key="{{item.key}}" class="form-control" value="" maxlength="40" placeholder="">
                  </div>

                  <div v-if="item.type === 'select'" class="form-group input-group">
                      <div v-if= "item.name" class="input-group-addon input-title" >{{item.name}}</div>
                      <select class="form-control" data-key="{{item.key}}">
                        <template v-for="option in item.options">
                            <option value="">{{option}}</option>
                        </template>
                      </select>
                  </div> 
                  <div  v-if="item.type === 'time'" class="form-group input-group time">
                    <div class="input-group-addon input-title" >{{item.name}}</div>
                    <input data-key="{{item.key}}" class="form-control {{item.classList}}" readonly>
                  </div> 
                  <div v-if="item.type === 'dep'" class="form-group input-group dep">
                    <div class="input-group-addon input-title" >{{item.name}}</div>
                    <input data-key="{{item.key}}" class="form-control  readonly">
                    <div class="input-group-addon input-title choose-button">选择</div>
                  </div> 
                  <div  v-if="item.type === 'area'" class="form-group input-group">
                   <div class="input-group-addon input-title" >{{item.name}}</div>
                    <city-select key="code"></city-select>
                  </div>
                  <div v-if="item.type ==='checkbox'" class="form-group input-group"> 
                      <label for="inputEmail3" class="control-label">{{item.checkLabel}}</label>
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
              <button class="{{bt.classList}}" data-role="{{bt.evt}}">{{bt.name}}</button> 
          </template> 
      </div>
  </div>
</div>