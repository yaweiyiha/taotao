<div class="styleguide admin-widget-star" data-value="{{score}}">
	<span>
		<img width="18" title="清除" height="18" src="static/img/remove.png" v-on:click="clear" class="remove" v-bind:class="{ 'disabled': score === 0 || disable}">
		<img v-for="star in stars" class="star" src="static/img/star.png" v-bind:class="{'unselected': !star.selected}" v-on:click="selectStar($index)" track-by="$index">
	</span>
</div>