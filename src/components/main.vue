<!--<template>-->
    <!--<div class="">-->
        <!--主界面-->
    <!--</div>-->
<!--</template>-->
<!--<script>-->
    <!--export default {}-->
<!--</script>-->
<!--<style>-->

<!--</style>-->



<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: auto;
        height: 100%;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .ivu-layout-header {
        background: #495060;
        padding: 0 30px 0 10px;
        height: 64px;
        line-height: 64px;
    }
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
        /*overflow: hidden;*/
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
    .content-con{
        position: absolute;
        top: 64px;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .content-info{
        position: absolute;
        top: 48px;
        left: 0;
        right: 0;
        bottom: 0;
        /*background-color: #fff;*/
        padding: 15px;
    }
    #app .ivu-layout-sider li {
        text-align: left;
    }
    #app .ivu-layout-sider li a{
        color: inherit;
        display: inline-block;
        width: 100%;
        height: 100%;
        background: transparent;
        text-decoration: none;
        outline: none;
        cursor: pointer;
        transition: color 0.2s ease;
    }
</style>
<template>
    <div class="layout">
        <Sider ref="side1" :style="{position: 'fixed', height: '100vh', left: 0, width: isCollapsed?'60px':'200px', overflow: isCollapsed ? 'visible' : 'auto'}" hide-trigger collapsible  v-model="isCollapsed">
            <Menu active-name="Input" theme="dark" width="auto" :open-names="['form']" :class="menuitemClasses">
                <Submenu name="form">
                    <template slot="title">
                        <Icon type="star"></Icon>
                        <span>form 3</span>
                    </template>
                    <MenuItem name="Input">
                        <router-link to="/Input">
                            input 输入框
                        </router-link>
                    </MenuItem>
                    <MenuItem name="Radio">
                        <router-link to="/Radio">
                            Radio 单选
                        </router-link>
                    </MenuItem>
                    <MenuItem name="Select">
                        <router-link to="/Select">
                            Select 下拉
                        </router-link>
                    </MenuItem>
                    <MenuItem name="DatePicker">
                        <router-link to="/DatePicker">
                            DatePicker 日期
                        </router-link>
                    </MenuItem>
                </Submenu>
                <Submenu name="table">
                    <template slot="title">
                        <Icon type="document-text"></Icon>
                        <span>table</span>
                    </template>
                    <MenuItem name="tableBasic">
                        <router-link to="/tableBasic">
                            table 基础
                        </router-link>
                    </MenuItem>
                    <MenuItem name="sortTable">
                        <router-link to="/sortTable">
                            table 排序
                        </router-link>
                    </MenuItem>
                    <MenuItem name="checkedTable">
                        <router-link to="/checkedTable">
                            table 操作
                        </router-link>
                    </MenuItem>
                </Submenu>
                <Menu-item name="4">
                    <router-link to="/">
                        <Icon type="dashboard"></Icon>
                        Dashboard
                    </router-link>
                </Menu-item>
                <Menu-item name="5">
                    <router-link to="/Button">
                        <Icon type="ionic"></Icon>
                        Button 按钮
                    </router-link>
                </Menu-item>
                <Menu-item name="6">
                    <router-link to="/Icon">
                        <Icon type="loop"></Icon>
                        Icon 图标
                    </router-link>
                </Menu-item>
            </Menu>
        </Sider>
        <Layout :style="{marginLeft:isCollapsed?'60px':'200px',position:'relative',height:'100%'}">
            <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
                <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '20px 20px 0',cursor: 'pointer'}" type="navicon-round" size="24"></Icon>
            </Header>
            <Content :style="{padding: '0 16px 16px'}" class="content-con">
                <Breadcrumb :style="{margin: '16px 0'}">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem>Layout</BreadcrumbItem>
                </Breadcrumb>
                <!--<Card>-->
                    <!--<div style="height: 600px">Content</div>-->
                <!--</Card>-->
                <div class="content-info">
                    <router-view></router-view>
                </div>
            </Content>
        </Layout>
    </div>
</template>
<script>
    export default {
        data (){
            return{
                isCollapsed:false
            }
        },
        computed: {
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        methods: {
            collapsedSider () {
                this.$refs.side1.toggleCollapse();
            }
        }
    }
</script>
