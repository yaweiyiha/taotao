<div class="admin-widget-table ">

    <div class="table-loading">
        
    </div>
	<!-- <div class="row table-page-option">
		<div class="col-sm-6">
			<div class="dataTables_length" id="tp_length">
				<label>
					<span>每页</span>  
					<select name="tp_length" aria-controls="tp" class="form-control page-select">
						<option value="5">5</option>
						<option value="10">10</option>
						<option value="25">25</option>
						<option value="50">50</option>
						<option value="100">100</option>
						<option value="200">200</option>
					</select> 
					<span>条记录</span>
				</label>
			</div>
		</div>
	</div> -->
    <ul v-if="items" class="report-topcont">
        <template v-for="item in tabtop">
            <li v-if="item.type === 'nomal'" style="margin-right:10px;"><label>{{item.name}}：</label><span>{{item.val}}</span></li>
            <li v-if="item.type === 'quota'" style="margin-right:10px;"><label>{{item.name}}：</label><span>{{item.val}}</span></li>
        </template>
    </ul>
	<table v-if="items" class="table table-hover table-bordered table-responsive dataTable no-footer" style="width: 100%;" role="grid" aria-describedby="tp_info">                
		<thead>
			<tr role="row" >
				<template  v-for="item in tables">
					<th width="{{item.width}}" class="{{item.classList}} table-item" rowspan="1" colspan="1" aria-label="{{item.name}}" data-key="{{item.key}}">{{item.name}}</th>
				</template>
			</tr>
		</thead>
        <tbody>
    		<template v-for="item in items">
				<tr role="row">
					<template v-for="(i,t) in tables">
                        <td v-if="t.type === 'nomal'" >
                            <span v-if="item[t.key]">{{item[t.key]}}</span>
                        </td>
                        <td v-if="t.type === 'pro'">
                            <a v-if="item._detailUrl_" href="{{item._detailUrl_}}" class="detailUrl">{{item[t.key]}}</a>
                        </td>
                        <td v-if="t.type === 'time'">{{item[t.key] | datetime}}</td>
                        <td v-if="t.type === 'detailtime'">{{item[t.key] | detailtime}}</td>
						<td v-if="t.type === 'productCategory'">{{ item[t.key] | productCategory}}</td>
                        <td v-if="t.type === 'applyState'">{{ item[t.key] | applyState}}</td>
                        <td v-if="t.type === 'distributorStatus'">{{ item[t.key] | distributorStatus}}</td>
                        <td v-if="t.type === 'applyQuota'">{{ item[t.key]}}元</td>
                        <td v-if="t.type === 'operater'" class = "operator">
                            <template v-for="op in item.operater">
                                <a href="{{op.url}} " data-evt="{{op.evt}}" value="{{op.val}}" data-param= '{{op.par}}'>
                                    {{op.name}}
                                </a>
                            </template>
                        </td>
	        		</template>
	        	</tr>
		</template>
        </tbody>
    </table>	
    <div  v-if="items" class="row">
    	<div class="col-sm-5">
    		<div class="dataTables_info" id="tp_info" role="status" aria-live="polite">第 {{pageNo}} 页 ( 总共 {{totalPages}} 页，{{totalSize}}条记录 )</div>
    	</div>
    	<div class="col-sm-7" v-if="totalPages > 0">
    		<div class="dataTables_paginate paging_full_numbers" id="tp_paginate">
    			<ul class="pagination">
                    <!-- 首页 -->
    				<li v-if="pageNo === 1" class="paginate_button first disabled">
    					<a href="javascript:;" aria-controls="tp" data-dt-idx="0" tabindex="0">首页</a>
    				</li>
                    <li v-else class="paginate_button first">
                        <a href="javascript:;" aria-controls="tp" data-dt-idx="0" @click="changePage(1)">首页</a>
                    </li>

                    <!-- 上一页 -->
                    <li v-if="pageNo === 1" class="paginate_button previous disabled">
                        <a href="javascript:;" aria-controls="tp" data-dt-idx="1" tabindex="0">«</a>
                    </li>
                    <li v-else class="paginate_button previous">
                        <a href="javascript:;" aria-controls="tp" data-dt-idx="1" tabindex="0" @click="changePage(pageNo - 1)">«</a>
                    </li>

                    <!-- 中间页 -->
                    <template v-if="totalPages === 1">
                        <li class="paginate_button active">
                            <a href="javascript:;">1</a>
                        </li>
                    </template>
                    <template v-else>
                        <template v-for="item in pageList">
                        <li v-if="item === pageNo" class="paginate_button active">
                            <a href="javascript:;">{{ item }}</a>
                        </li>
                        <li v-if="item === '...'" class="paginate_button disabled">
                            <a href="javascript:;">{{ item }}</a>
                        </li>
                        <li v-if="item !== pageNo && item !== '...'" class="paginate_button">
                            <a href="javascript:;" @click="changePage(item)">{{ item }}</a>
                        </li>
                        </template>
                    </template>
    				<!-- <li class="paginate_button ">
    					<a href="#" aria-controls="tp" data-dt-idx="3" tabindex="0">2</a>
    				</li>
    				<li class="paginate_button ">
    					<a href="#" aria-controls="tp" data-dt-idx="4" tabindex="0">3</a>
    				</li>
    				<li class="paginate_button ">
    					<a href="#" aria-controls="tp" data-dt-idx="5" tabindex="0">4</a>
    				</li>
    				<li class="paginate_button ">
    					<a href="#" aria-controls="tp" data-dt-idx="6" tabindex="0">5</a>
    				</li>
    				<li class="paginate_button disabled" id="tp_ellipsis">
    					<a href="#" aria-controls="tp" data-dt-idx="7" tabindex="0">…</a>
    				</li>
    				<li class="paginate_button ">
    					<a href="#" aria-controls="tp" data-dt-idx="8" tabindex="0">154
    					</a>
    				</li> -->

                    <!-- 下一页 -->
    				<li v-if="pageNo === totalPages" class="paginate_button next disabled" id="tp_next">
    					<a href="javascript:;" aria-controls="tp" data-dt-idx="9" tabindex="0">»</a>
    				</li>
                    <li v-else class="paginate_button next" id="tp_next">
                        <a href="javascript:;" aria-controls="tp" data-dt-idx="9" tabindex="0" @click="changePage(pageNo + 1)">»</a>
                    </li>

                    <!-- 最后页 -->
                    <li v-if="pageNo === totalPages" class="paginate_button last disabled" id="tp_last">
                        <a href="javascript:;" aria-controls="tp" data-dt-idx="10" tabindex="0">尾页</a>
                    </li>
                    <li v-else class="paginate_button last" id="tp_last">
                        <a href="javascript:;" aria-controls="tp" data-dt-idx="10" tabindex="0" @click="changePage(totalPages)">尾页</a>
                    </li>
    			</ul>
    		</div>
    	</div>
    </div>
    <div class="report-item">
        <div v-if="page=='report' && extraInfo.totalInvestmentAmount"  >
            <span>总投资金额：{{extraInfo.totalInvestmentAmount}}元</span>   
            <span>总佣金：{{extraInfo.totalCommission}}元</span>
            <button class="custom-button loadDownExcel" >下载Excel</button>
        </div>
    </div>

</div>