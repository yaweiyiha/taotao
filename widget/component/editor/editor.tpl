<!-- <script type="text/javascript" src="static/js/ueditor/ueditor.config.js"></script>
<script type="text/javascript" src="static/js/ueditor/ueditor.all.min.js"></script> -->
<div class="styleguide admin-widget-editor">
	<div class="row richTextarea">
		<div class="col-md-6">
			<p><a align="right" type="button" class="btn btn-info" @click="submit">预览{{panelname}}</a></p>
		</div>
		<div class="col-md-12">
			<div class="form-group">
				<div class="input-group">
					<textarea class="introduction" data-richatttype="{{richatttype}}" id="{{rid}}" v-bind:style="{ height: height, width: width }" :disabled="disabled"></textarea>
					<p style="margin-left:0;color:#333;line-height:24px;">支持png，jpg，jpeg，bmp四种图片格式，为保证pad前台展示效果，如若撑满pad屏幕宽度，建议图片宽度为1988px ，高度不超过720px。</p>
				</div>
			</div>
		</div>
	</div>
</div>