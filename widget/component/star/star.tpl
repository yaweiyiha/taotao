<div class="styleguide asset-widget-star">
	<span>收益评级</span>
	<span>
		<img v-for="star in stars" class="star" src="/static/img/star.png" v-bind:class="{'unselected': !star.selected}" v-on:mouseover="mouseOver($index)" track-by="$index">
	</span>
</div>