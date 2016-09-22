<div class="styleguide admin-widget-topbanner">
    <div class="row">
        <div class="col-xs-6 titles">
            <span v-if="title">{{title}}</span>
            <em></em>
            <a v-if="subtitle" href="{{subtitle.url}}" v-bind:class="{ 'active': subtitle && !thirdTitle}">{{subtitle.name}}</a>
            <em v-if="thirdTitle"> </em>
            <span v-if="thirdTitle" v-bind:class="{ 'active' : thirdTitle} " data-isDrafts="{{isDrafts.draftStatus}}" data-class="{{classDrafts.classList}}">{{thirdTitle}}</span>
        </div>
        <div class="col-xs-6 text-right">
        	<div v-if="subFun" class="sub-func" >
                <template v-for = "(index,func) in subFun">
                    <a v-if="func.code == 'add' "  href="{{func.url}}" data-role="{{func.evt}}">
                        <em class="add-icon"></em>
                        <span class="" >{{func.key}}</span>
                    </a>
                    <div v-if="func.code === 'save' || func.code === 'release' " >
                        <button class="custom-button" data-role="{{func.evt}}">{{func.key}}</button>
                    </div>
                    <span v-if="index !== subFun.length - 1" class="spliter"></span>
                </template>
        	</div>
            <span v-if="drafts" class="spliter"></span>
            <div v-if="drafts" class="draft">
                <a href="{{drafts}}" style = "color: #286ede;">草稿箱&nbsp;(<span id="draftsTotalSize"></span>)</a>
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