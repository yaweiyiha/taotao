<div class="asset-widget-menu">
<!--     <a class="menu-toggler display" href="#">
        <span class="menu-text"></span>
    </a> -->
    <div class="" id="sidebar">
        <ul class="nav nav-list" v-on:click="subShow">
            <li v-for="menu in menus">
                <div v-if="!menu.url" class="icldsub">
                    <a href="javascript:;" class="dropdown-toggle">
                        <i class="icon {{ menu.classStyle }}"></i>
                        {{ menu.name }}
                        <b class="arrow icon-angle-down"></b>
                    </a>
                    <ul class="submenu linkTag">
                        <li v-for="level2item in menu.level2List">
                            <a href="{{level2item.url}}" data-level="2" data-name="{{level2item.name}}" v-on:click="eleMenus" style="cursor:pointer;">
                                <i class="icon-double-angle-right"></i>
                                {{level2item.name}}
                            </a>
                        </li>
                    </ul>
                </div>
                <div v-else class="unicldsub linkTag">
                    <a href="{{ menu.url }}" data-level="1" data-name="{{ menu.name }}" v-on:click="eleMenus" style="cursor:pointer;">
                        <i class="icon {{ menu.classStyle }}" ></i>
                        {{ menu.name }}
                    </a>
                </div>
            </li>
        </ul>
    </div>
</div>