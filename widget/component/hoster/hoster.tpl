<div class="styleguide admin-widget-hoster col-md-6 input-wrapper rt">
  <div class="form-group input-group w100">
      <div class="input-group-addon input-title">
      	托管方
      	<span class="text-strong-red">*</span>
      </div>
      <select class="input-control" v-model="custodianType" data-key="custodianType" is-num="1" style="width:45%;float:left" :disabled="disable"> 
		 <option value="10">无</option>
        <option value="20">托管券商</option>
        <option value="30">托管银行</option>
        <option value="40">第三方支付存管</option>
      </select>
      <input v-if="custodianType!=='10'" type="text" class="input-control" data-key="custodianParty" style="width:50%;float:right" placeholder = "{{placeholder}}">
  </div>
</div>