<div class="styleguide admin-widget-searchfilter">
    <div class="panel panel-default">
	      <template v-for = "f in filters">
	          <div class="filters-item">
	          	  <span class="input-title"> {{f.name}}</span>
	              <div v-if="f.type === 'filter'" data-key="{{f.key}}" class="options">
	                    <template v-for="(index,option) in f.options">
	                        <span value="" v-bind:class="{'active': index=== 0}" class="option-item">{{option}}</span>
	                    </template>
	              </div> 
	           </div>

	      </template>
	</div>
</div>