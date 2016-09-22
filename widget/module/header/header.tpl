<div class="admin-widget-header navbar  navbar-fixed-top">
	<div class="navbar-container">
        <div class="navbar-header pull-left">
            <a href="/admin/" class="navbar-brand">
                <em class="logo" ></em>
                <span class="caption">祺鲲产品集市</span>
            </a>
        </div>
        <div class="user-info-box" v-on:click.stop="showMenu = !showMenu">
            <div class="avatar-icon"></div>
            <div class="arrow" v-bind:class="{ 'down': showMenu }"></div>
            <ul class="user-menu" v-bind:class="{'show' : showMenu } ">
                <li>
                    <a href="logout" onclick="javascript:sessionStorage.clear();">
                        <i class="icon-off"></i>退出
                    </a>
                </li>
            </ul>
        </div>
        <div class="navbar-header pull-right" role="navigation">
            <ul class="nav ace-nav">
<!--                 <li class="light-blue">
                    <a  href="javascript:void(0)"  @click="show=!show">
                        <img class="nav-user-photo" src="static/img/default_user.jpg">
                        <span class="user-info" style="font-size: 13px;">
                            <small style="font-size: 12px;">您好,</small>
                            {{ username }}
                        </span>
                        <i class="icon-caret-down"></i>
                    </a>

                    <ul v-if="show" class="user-menu pull-right">
                        <li @click="changePwd">
                            <span >
                                <i class="icon-edit"></i>修改密码
                            </span>
                        </li>

                        <li  @click="logout">    
                            <span >
                                <i class="icon-off"></i>退出
                            </span>
                        </li>
                    </ul>
                </li> -->
 <!--                <li class="green">
                    <a data-toggle="dropdown" class="dropdown-toggle" href="javascript:void(0)">
                        <span class="badge badge-success" @click="changeLocale" id="en_US">English</span>
                    </a>
                </li> -->
            </ul>
        </div>
    </div>
</div>