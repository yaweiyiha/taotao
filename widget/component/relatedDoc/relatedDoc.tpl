<div class="styleguide admin-widget-relatedDoc" data-intrtype="{{intrtype}}">
	<div class="row">
		<div class="col-md-6">
			<p style="margin-left:65px;"><a align="right" type="button" class="btn btn-info add" @click="add">新增文件</a></p>
		</div>
	</div>
	<!-- 新增文件 -->
	<div id="relatedocList"></div>
	<!-- <template v-for="item in list"> -->
	<div id="relatedocTpl" style="display:none;">
		<div class="row">
			<div class="col-md-5">
				<div class="form-group input-group"> 
			    	<div class="input-group-addon input-title">文件名称
			    		<span v-if="li.validate.isrequire" class="text-strong-red">*</span>
			    	</div>
			    	<input 
					name="showName"   
					class="input-control relateShowName"
					placeholder="请输入文件名称"
					value="" />  
				</div>
			</div>
			<form class="uploadForm" enctype="multipart/form-data" style="margin-bottom:0;" data-relateatttype={{relateatttype}}>
				<div class="col-md-4">
					<div class="form-group input-group uploadSuccess">
						<input type="file" name="multipartFile" class="form-control" accept=".jpg, .png, .jpeg, .bmp, .gif, .psd, .tiff" data-result="" />
						<span class="text-strong-red uploadSuccessTips"></span>
					</div>
				</div>
				<div class="col-md-1">
					<div class="form-group input-group">
						<button type="button" class="btn btn-default uploadFile">上传</button> 
					</div>
				</div>
			</form>
			<div class="col-md-2 col-md-right btn-group">
				<button type="button" class="btn btn-info relateDelete">删除</button>&nbsp;&nbsp;
				<button type="button" class="up relateUp"></button>&nbsp;&nbsp;
				<button type="button" class="down relateDown"></button>&nbsp;&nbsp;
			</div>
		</div>
	<!-- </template> -->
	</div>
</div>