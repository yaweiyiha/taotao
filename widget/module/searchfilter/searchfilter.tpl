<div class="styleguide admin-widget-searchfilter">
    <div class="panel panel-default">
	      <template v-for = "f in filters">
	          <div class="filters-item">
	          	  <span class="input-title"> {{f.name}}</span>
	              <div v-if="f.type === 'filter'" class="options">
	                    <template v-for="(index,option) in f.options">
	                        <span value="" v-bind:class="{'active': index=== 0}" class="option-item">{{option}}</span>
	                    </template>
	              </div> 
	              <div  v-if="f.type === 'time'" class="options time">
	                <input data-key="{{f.key}}" class="form-control {{f.classList}}" readonly>
	              </div> 
	              <div v-if="f.type === 'dep'" class="options dep">
	                <input data-key="{{f.key}}" class="form-control  readonly">
	                <div class="input-group-addon input-title choose-button">选择</div>
	              </div> 
	              <div  v-if="f.type === 'area'" class="options">
	                <city-select key="code"></city-select>
	              </div>
	              <div v-if="f.type ==='checkbox'" class="options"> 
	                  <label for="inputEmail3" class="control-label">{{f.checkLabel}}</label>
	                  <template v-for="r in f.radios">
	                    <input type="radio" name="isDisable" id="isDisable11" checked="{{r.isChecked}}" value="-1"> {{r.name}}
	                  </template>
	              </div>
	          </div>
	      </template>
	</div>
</div>