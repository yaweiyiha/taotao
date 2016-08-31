<div class="admin-widget-cityselect row">
	<select class="col-md-3 " class="province form-control" style="width:30%" v-model="provinceSelected">
		<option value="">省</option>
		<template v-for="(index, pr) in province" track-by="$index" >
			<option value="{{pr.code}}" >{{pr.name}}</option>
		</template>
		
	</select>
	<select class="col-md-3 " class="city form-control"  v-model="citySelected">
		<option value="">市</option>
		<template v-for="(index, pr) in city" track-by="$index" >
			<option value="{{pr.code}}" >{{pr.name}}</option>
		</template>
	</select>
	<select class="col-md-3 " class="area form-control"  data-key={{key}} v-model="areaSelected">
		<option value="">县/区</option>
		<template v-for="(index, pr) in subarea" track-by="$index" >
			<option value="{{pr.code}}" >{{pr.name}}</option>
		</template>
	</select>
</div>