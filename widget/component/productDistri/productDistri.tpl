<div class="styleguide admin-widget-productDistri">   

		<div class="col-md-6 input-wrapper">                          
			<div class="form-group input-group">                  
				<div class="input-group-addon input-title">产品名称</div>                  
				<select class="custom-input bln distriproName" is-num="1" data-key="productId" v-model="productselect">
					<template v-for="pro in products">
						<option value="{{pro.productId}}">{{pro.productName}}</option>
					</template>
					
				</select>              
			</div>                        
		</div>                            
		<div class="col-md-6 input-wrapper">                          
			<div class="form-group input-group">                  
				<div class="input-group-addon input-title">分销方</div>                  
				<select class="custom-input bln distriagent" data-key="agentId" is-num="1">
					<template v-for="distri in distributors">
						<option value="{{distri.agentId}}" data-commisionTypeString = "{{distri.commisionTypeString}}" data-commissionRangeString = "{{distri.commissionRangeString}}">{{distri.agentName}}</option>
					</template>                                                                                                   
			</select>              
		</div>                                                                                          
</div>
</div>