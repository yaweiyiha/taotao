<div class="styleguide admin-widget-star" data-value="{{score}}">
	<span>
		<img v-for="star in stars" class="star" src="static/img/star.png" v-bind:class="{'unselected': !star.selected}" v-on:click="selectStar($index)" track-by="$index">
	</span>
</div>