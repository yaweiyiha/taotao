<div class="styleguide admin-widget-customele">
	<div class="title my-title rt">
		<template v-if="disable">
			<span class="rt" style="top:-2px">自定义要素</span>
		</template>
		<template v-else>
			添加自定义要素
			<i class="icon add" @click="add"></i>
		</template>
	</div>
	<template v-for="item in list">
	<div class="row">
		<div class="col-md-5 input-wrapper rt">
          <div class="form-group input-group">
            <div class="input-group-addon input-title">标题</div>
            <input class="input-control" v-model="item.title" maxlength="40" placeholder="请输入标题" v-bind:readonly="disable">  
          </div>              
        </div>
   	</div>
   	<div class="row">
		<div class="col-md-8 input-wrapper rt">
          <div class="form-group input-group">
            <div class="input-group-addon input-title">内容</div>
            <textarea class="content" v-model="item.content" maxlength="40" placeholder="请输入内容" v-bind:readonly="disable"></textarea>
	        <a class="remove" @click="remove(item)" href="javascript:;">移除</a>            
          </div>
        </div>
    </div>
    </template>
    <textarea v-model="output" class="output"></textarea>
</div>