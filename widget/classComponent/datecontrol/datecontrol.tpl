<div class="admin-widget-datecontrol row">
    <div class="col-xs-5 prn">
  		<div class="input-group ">
			  <input class="form-control beginTime" data-valide="{{ validator }}" data-errorTip="起始时间不能为空" data-key="{{startkey}}" v-model="beginTime" >
    	</div>
    </div>

  <div class="col-xs-7 pln" style="position: relative; left: -2px">
  		<div class="input-group">
    		  <div class="input-group-addon to-text">{{to}}</div>
			    <input class="form-control endTime" data-valide="{{ validator }}" data-errorTip="结束时间不能为空" name="endTime" data-key="{{endkey}}" v-model="endTime" >
    	</div>
  </div>		
</div>
