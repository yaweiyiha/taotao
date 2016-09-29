
<div class="styleguide admin-widget-presentType" data-intrtype="{{intrtype}}">
	<div class="row">
		<div class="col-md-6">
		    <div class="form-group">
		        <div class="input-group">
		            <div class="input-group-addon" >展示类型</div>
	                <select class="input-control introductionType" name="introductionType" v-on:change="selectChange" :disabled="disable" is-num="1">
	                    <option value="0" >富文本</option>
	                    <option value="1" >外部网站</option>
	                    <option value="2" >视频、文件</option>
	                </select>
	            </div>
	        </div>
	    </div>
	</div>
	
	<div class="tab-content">
		<!-- 富文本 -->
		<!-- <template v-if="introductionType == '0'"> -->
			<div class="tab-pane active">
				<div class="row">
					<editor
					:disabled="disable"
					:richatttype="richatttype"
					:panelname="panelname"
					></editor>
		        </div>
	        </div>
		<!-- </template> -->

		<!-- 外部网站 -->
		<!-- <template v-if="introductionType == '1'"> -->
			<div class="tab-pane">
				<div class="row">
					<div class="col-md-6">
						<div class="form-group input-group"> 
					    	<div class="input-group-addon input-title">网站地址
					    		<span class="text-strong-red">*</span>
					    	</div>
					    	<div class="input-group-addon input-title" style="min-width:50px;">http://</div>
					    	<input 
					    	type="text" 
							name="webUrl"
							class="input-control webUrl"
							value=""
							:disabled="disable"
							placeholder="请输入网站地址" 
							/> 
						</div>
					</div>
				</div>
			</div>
		<!-- </template> -->

		<!-- 视频、文件 -->
		<!-- <template v-if="introductionType == '2'"> -->
			<div class="tab-pane">
				<div class="row">
					<div class="col-md-6">
						<div class="form-group input-group"> 
					    	<div class="input-group-addon input-title">标题
					    		<span class="text-strong-red">*</span>
					    	</div>
					    	<input 
					    	type="text" 
							name="attachTitle"   
							class="input-control attachTitle"
							placeholder="请输入标题"
							value=""
							:disabled="disable" /> 
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-6">
						<div class="form-group input-group"> 
					    	<div class="input-group-addon input-title">图片
					    		<span class="text-strong-red">*</span>
					    	</div>
					    	<input 
							name="showName"   
							class="input-control imgShowName"
							placeholder="请输入文件名称"
							value="" 
							:disabled="disable"/>  
						</div>
					</div>
					<form class="uploadForm" enctype="multipart/form-data" data-imgatttype="{{imgatttype}}" >
						<div class="col-md-4">
							<div class="form-group input-group uploadSuccess">
								<input type="file" name="multipartFile" class="form-control" accept=".jpg, .png, .jpeg, .bmp, .gif, .psd, .tiff" :disabled="disable" />
								<span class="text-strong-red uploadSuccessTips"></span>
							</div>
						</div>
						<div class="col-md-2">
							<div class="form-group input-group">
								<button type="button" class="btn btn-default uploadFile" :disabled="disable">上传</button> 
							</div>
						</div>
					</form>
				</div>
				<div class="row">
					<div class="col-md-6">
						<div class="form-group input-group"> 
					    	<div class="input-group-addon input-title">关联
					    		<span class="text-strong-red">*</span>
					    	</div>
					    	<input 
							name="showName"   
							class="input-control videoShowName"
							placeholder="请输入文件名称"  
							:disabled="disable"
							value="" />  
						</div>
					</div>
					<form class="uploadForm" enctype="multipart/form-data" data-videoatttype="{{videoatttype}}">
						<div class="col-md-4">
							<div class="form-group input-group uploadSuccess">
								<input class="form-control" type="file" name="multipartFile" accept=".avi, .rmvb, .flv, .wmv, .mp4, .swf, .rm, .mpg, .mpge, .3gp, .vob, .ppt, .pptx" :disabled="disable" />
								<span class="text-strong-red uploadSuccessTips"></span>
							</div>
						</div>
						<div class="col-md-2">
							<div class="form-group input-group">
								<button type="button" class="btn btn-default uploadFile" :disabled="disable">上传</button> 
							</div>
						</div>
					</form>
				</div>
			</div>
		<!-- </template> -->
	</div>
</div>