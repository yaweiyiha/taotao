<div class="styleguide asset-widget-topbanner">
    <div class="row">
        <div class="col-md-6 titles">
            <span v-if="title">{{title}}</span>
            <em> > </em>
            <span v-if="subtitle" v-bind:class="'active' : subtitle">{{subtitle.name}}</span>
            <em v-if="third-title"> > </em>
            <span v-if="third-title" v-bind:class="'active' : third-title">{{third-title}}</span>
        </div>
        <div class="col-md-6 text-right">
        	<div class="sub-func">
        		<em class="add-icon"></em>
        		<span class="" type="button"  data-role="{{subFun.evt}}">{{subFun.key}}</span>
        	</div>
			<span class="spliter"></span>
			<div class="draft">
				<span href="/admin/product/draftList">草稿箱&nbsp;(59)</span>
			</div>

        </div>
    </div>
</div> 

<!-- <nav class="navbar navbar-static-top asset-widget-topbanner" role="navigation" style="margin-bottom: 0">
	<div class="page-heading navbar-left">
	    <div class="col-md-12">
	        <h2>{{subtitle.name}}</h2>
	            <span href="index.html">{{title}}</span> <em> / </em>
				<strong class="active">{{subtitle.name}}</strong>
	    </div>
	</div>
    <ul class="nav navbar-right sub-func">
    	<li class="nav-item">
    		<button class="btn  btn-primary" data-role="{{subFun.evt}}">{{subFun.key}}</button>
        </li>
        <li>
        	<button class="btn  btn-warning">草稿箱</button>
        </li>
    </ul>

</nav> -->

<!-- <div class="row wrapper border-bottom white-bg page-heading">
    <div class="col-lg-4">
        <h2>{{subtitle.name}}</h2>
        <ol class="breadcrumb">
            <li>
                <a href="index.html">{{title}}</a>
            </li>
            <li class="active">
                <strong>{{subtitle.name}}</strong>
            </li>
        </ol>
    </div>
</div>