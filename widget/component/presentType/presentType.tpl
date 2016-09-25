<div class="styleguide admin-widget-presentType">
	<div class="row">
		<div class="col-md-6">
		    <div class="form-group">
		        <div class="input-group">
		            <div class="input-group-addon" >展示类型</div>
	                <select class="input-control valid" data-key="introductionType" v-model="intrtype" :disabled="disable" is-num="1">
	                    <option value="0" >富文本</option>
	                    <option value="1" >外部网站</option>
	                    <option value="2" >视频、文件</option>
	                </select>
	            </div>
	        </div>
	    </div>
	</div>
	
	<!-- 富文本 -->
	<template v-if="intrtype == '0'">
		<div class="row">
			<editor></editor>
        </div>
	</template>

	<!-- 外部网站 -->
	<template v-if="intrtype == '1'">
		<div class="row">
			<div class="col-md-6">
				<div class="form-group input-group"> 
			    	<div class="input-group-addon input-title">网站地址
			    		<span v-if="li.validate.isrequire" class="text-strong-red">*</span>
			    	</div>
			    	<div class="input-group-addon input-title" style="min-width:50px;">http://</div>
			    	<input 
					data-valide="required" 
					data-des="网站地址" 
					data-key="webUrl"
					class="input-control"
					placeholder="请输入网站地址"  
					:disabled="disable" 
					value="{{webUrl}}" /> 
				</div>
			</div>
		</div>
	</template>

	<!-- 视频、文件 -->
	<template v-if="intrtype == '2'">
		<div class="row">
			<div class="col-md-6">
				<div class="form-group input-group"> 
			    	<div class="input-group-addon input-title">标题
			    		<span v-if="li.validate.isrequire" class="text-strong-red">*</span>
			    	</div>
			    	<input 
					data-valide="required" 
					data-des="标题" 
					data-key="attachTitle"   
					class="input-control"
					placeholder="请输入产品标题"  
					:disabled="disable"
					value="{{attachTitle}}" /> 
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6">
				<div class="form-group input-group"> 
			    	<div class="input-group-addon input-title">图片
			    		<span v-if="li.validate.isrequire" class="text-strong-red">*</span>
			    	</div>
			    	<input 
					data-valide="required" 
					data-des="图片" 
					data-key="introductionPhotoName"   
					class="input-control"
					placeholder="请输入图片文件"  
					:disabled="disable"
					value="{{introductionPhotoName}}" />  
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group input-group"> 
			    	<input 
					data-valide="required" 
					type="file" 
					data-key="introductionPhoto"   
					class="form-control file"
					accept=".jpg, .png, .jpeg, .bmp, .gif, .psd, .tiff" /> 
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6">
				<div class="form-group input-group"> 
			    	<div class="input-group-addon input-title">关联
			    		<span v-if="li.validate.isrequire" class="text-strong-red">*</span>
			    	</div>
			    	<input 
					data-valide="required" 
					data-des="关联" 
					data-key="introductionVideoName"   
					class="input-control"
					placeholder="请输入关联文件"  
					:disabled="disable"
					value="{{introductionVideoName}}" />  
				</div>
			</div>
			<div class="col-md-6">
				<div class="form-group input-group"> 
			    	<input 
					data-valide="required" 
					type="file" 
					data-key="introductionPhoto"   
					class="form-control file"
					accept=".jpg, .png, .jpeg, .bmp, .gif, .psd, .tiff" /> 
				</div>
			</div>
		</div>
	</template>
</div>