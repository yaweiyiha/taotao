<div class="styleguide admin-widget-relatedDoc">
	<div class="row">
		<div class="col-md-6">
			<p style="margin-left:65px;"><a align="right" type="button" class="btn btn-info add" @click="add">新增文件</a></p>
		</div>
	</div>
	<!-- 新增文件 -->
	<template v-for="item in list">
		<div class="row">
			<div class="col-md-6">
				<div class="form-group input-group"> 
			    	<div class="input-group-addon input-title">文件名称
			    		<span v-if="li.validate.isrequire" class="text-strong-red">*</span>
			    	</div>
			    	<input 
					data-valide="required" 
					data-des="图片" 
					data-key="introductionPhotoName"   
					class="input-control"
					placeholder="请输入文件名称"  
					:disabled="disable"
					value="{{introductionPhotoName}}" /> 
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group input-group"> 
			    	<input 
					data-valide="required" 
					type="file" 
					data-key="introductionPhoto"   
					class="form-control file"
					accept=".jpg, .png, .jpeg, .bmp, .gif, .psd, .tiff" /> 
				</div>
			</div>
			<div class="col-md-2 col-md-right btn-group">
				<button type="button" class="btn btn-info delete" @click="remove(item)">删除</button>&nbsp;&nbsp;
				<button type="button" class="up"></button>&nbsp;&nbsp;
				<button type="button" class="down"></button>&nbsp;&nbsp;
			</div>
		</div>
	</template>
</div>