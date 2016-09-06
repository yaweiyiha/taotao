<div class="styleguide admin-widget-proTerm">
	<div class="col-md-6">
		<div class="row">
		    <div class="col-xs-9 col-xs-left">
		        <div class="form-group">
		             <div class="input-group">
		                <div class="input-group-addon">产品期限</div>
		                <input class="form-control" id="maturities" name="maturities" placeholder="请输入产品期限">
		            </div>
		        </div>
		    </div>
		    <div class="col-xs-3 col-xs-right">
		        <div class="form-group">
		            <select class="form-control valid" id="unit_fkOfMaturities" name="unit_fkOfMaturities" v-model = "unitMaturities">
		                <option value="2400">自然年</option>
		                <option value="2300">自然季</option>
		                <option value="2200">自然月</option>
		                <option value="2100">天</option>
		                <option value="-1">不限期（前台投资人自选期限）</option>
		                <option value="-3">非固定期限（不赎回则一直持有）</option>
		                <option value="-2">无</option>
		            </select>
		        </div>
		    </div>
		</div>
	</div>
	<div v-if="dayShow" class="row">
		<div class="col-md-12">
			<div class="form-group">
			    <div class="input-group">
			        年基础天数：
			        <input type="radio" name="baseDays" checked="checked" value="365">365天 
					<input type="radio" name="baseDays"  value="360">360天
			        <input type="radio" name="baseDays"  value="30">自定义
			        <input type="text" class="form-control" data-key="customBaseDays" name="customBaseDays" placeholder="请输入自定义天数">
			        <span class="red-strong"> (仅用于投资期限为“天”时计算收益)</span>
			    </div>
			</div>
		</div>
	</div>

	<div v-if="nonFixTerm"  class="row">
		<div class="col-xs-9 col-xs-left">
		    <div class="form-group">
		        <div class="input-group">
		            <div class="input-group-addon">起购期限
		            	<span class="text-strong-red">*</span>
		            </div>
                    
                    <input class="form-control" id="startingInvest" onchange="checkDayInput()" name="startingInvest" placeholder="请输入起购期限">
		        </div>
		    </div>
		</div>
	</div>
	<div v-if="nonFixTerm" class="col-xs-3 col-xs-right">
		<div class="form-group">
		    <select class="form-control valid" id="unit_fkOfStartingMaturities" name="unit_fkOfStartingMaturities">
                <option value="2400">年</option>
                <option value="2300">季度</option>
                <option value="2200">月</option>
                <option value="2100">天</option>
            </select>
		</div>
	</div>
</div>
