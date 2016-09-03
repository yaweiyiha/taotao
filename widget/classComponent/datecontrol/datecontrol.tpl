<div class="admin-widget-datecontrol row">
    <div class="col-md-5 prn">
  		<div class="input-group ">
			  <input class="form-control beginTime"  data-key="{{startkey}}" v-model="beginTime" >
    	</div>
    </div>

  <div class="col-md-7 pln" style="position: relative; left: -2px">
  		<div class="input-group">
    		  <div class="input-group-addon to-text">{{to}}</div>
			    <input class="form-control endTime" name="endTime" data-key="{{endkey}}" v-model="endTime" value >
    	</div>
  </div>		
</div>
