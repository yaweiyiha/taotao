
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
					value="" /> 
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
					placeholder=""  
					:disabled="disable"
					value="" /> 
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
					data-key="showName"   
					class="input-control"
					placeholder="请输入文件名称"  
					:disabled="disable"
					value="" />  
				</div>
			</div>
			<form class="uploadForm" enctype="multipart/form-data" >
				<div class="col-md-4">
					<div class="form-group input-group">
						<input type="file" name="multipartFile" class="form-control" accept=".jpg, .png, .jpeg, .bmp, .gif, .psd, .tiff" />
					</div>
				</div>
				<div class="col-md-2">
					<div class="form-group input-group">
						<button type="button" class="btn btn-default uploadFile">上传</button> 
					</div>
				</div>
			</form>
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
					data-key="showName"   
					class="input-control"
					placeholder="请输入文件名称"  
					:disabled="disable"
					value="" />  
				</div>
			</div>
			<form class="uploadForm" enctype="multipart/form-data" >
				<div class="col-md-4">
					<div class="form-group input-group">
						<input class="form-control" type="file" name="multipartFile" accept=".avi, .rmvb, .flv, .wmv, .mp4, .swf, .rm, .mpg, .mpge, .3gp, .vob, .ppt, .pptx" />
					</div>
				</div>
				<div class="col-md-2">
					<div class="form-group input-group">
						<button type="button" class="btn btn-default uploadFile">上传</button> 
					</div>
				</div>
			</form>
		</div>
	</template>
</div>