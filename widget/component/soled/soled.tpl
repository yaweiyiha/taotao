<div class="styleguide admin-widget-soled">
	
	<div class="row">
	    <div class="form-group input-group">
			<div class="input-group-addon input-title">
				已售份额
	        </div>
	        <input type="range" min="0" max="100" data-key="selfDefinedProcess" is-num="1" v-model="process" :disabled="disable">
	    </div>
	</div>

	<div class="row detail">
		<div class="form-group input-group">
			<input type="text" :disabled="true" v-model="soled">
			<span style="padding: 0 5px;"> / </span>
			<input type="text" :disabled="true" v-model="offeringSizeComputed">
			<span class="ml5">元</span>
			<input type="hidden" data-key="isSelfDefinedProcess" value="1" is-num="1">
		</div>
	</div>
</div>