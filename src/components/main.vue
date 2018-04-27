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
        <Sider ref="side1" :style="{position: 'fixed', height: '100vh', left: 0, width: isCollapsed?'0':'200px', overflow: isCollapsed ? 'visible' : 'auto'}" hide-trigger collapsible  v-model="isCollapsed">
            <Menu v-bind:active-name="nav" theme="dark" width="auto" :open-names="['table']" :class="menuitemClasses" @on-select="chooseItem" @on-open-change="opend">
                <Submenu name="table">
                    <template slot="title">
                        <Icon type="document-text"></Icon>
                        <span>table</span>
                    </template>
                    <MenuItem name="tableBasic">
                        <router-link to="/main/tableBasic">
                            table 基础
                        </router-link>
                    </MenuItem>
                    <MenuItem name="sortTable">
                        <router-link to="/main/sortTable">
                            table 排序
                        </router-link>
                    </MenuItem>
                    <MenuItem name="editTable">
                        <router-link to="/main/editTable">
                            table edit
                        </router-link>
                    </MenuItem>
                    <MenuItem name="dragTable">
                        <router-link to="/main/dragTable">
                            dragTable
                        </router-link>
                    </MenuItem>
                    <MenuItem name="checkedTable">
                        <router-link to="/main/checkedTable">
                            table 操作
                        </router-link>
                    </MenuItem>
                </Submenu>
                <Submenu name="form">
                    <template slot="title">
                        <Icon type="star"></Icon>
                        <span>form 表单</span>
                    </template>
                    <MenuItem name="Input">
                        <router-link to="/main/Input">
                            input 输入框
                        </router-link>
                    </MenuItem>
                    <MenuItem name="Radio">
                        <router-link to="/main/Radio">
                            Radio 单选
                        </router-link>
                    </MenuItem>
                    <MenuItem name="Select">
                        <router-link to="/main/Select">
                            Select 下拉
                        </router-link>
                    </MenuItem>
                    <MenuItem name="DatePicker">
                        <router-link to="/main/DatePicker">
                            DatePicker 日期
                        </router-link>
                    </MenuItem>
                    <MenuItem name="Cascader">
                        <router-link to="/main/Cascader">
                            Cascader
                        </router-link>
                    </MenuItem>
                    <MenuItem name="InputNumber">
                        <router-link to="/main/InputNumber">
                            InputNumber
                        </router-link>
                    </MenuItem>
                    <MenuItem name="FormSubmit">
                        <router-link to="/main/FormSubmit">
                            FormSubmit
                        </router-link>
                    </MenuItem>
                </Submenu>
                <Menu-item name="4">
                    <router-link to="/">
                        <Icon type="log-in"></Icon>
                        login
                    </router-link>
                </Menu-item>
                <Menu-item name="Editor">
                    <router-link to="/main/editor">
                        <Icon type="edit"></Icon>
                        editor 编辑器
                    </router-link>
                </Menu-item>
                <Menu-item name="textEditor">
                    <router-link to="/main/textEditor">
                        <Icon type="cash"></Icon>
                        textEditor
                    </router-link>
                </Menu-item>
                <Menu-item name="echarts">
                    <router-link to="/main/echarts">
                        <Icon type="ios-grid-view"></Icon>
                        echarts
                    </router-link>
                </Menu-item>
                <Menu-item name="uploadImg">
                    <router-link to="/main/uploadImg">
                        <Icon type="upload"></Icon>
                        uploadImg
                    </router-link>
                </Menu-item>
            </Menu>
        </Sider>
        <Layout :style="{marginLeft:isCollapsed?'0':'200px',position:'relative',height:'100%'}">
            <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
                <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '20px 20px 0',cursor: 'pointer'}" type="navicon-round" size="24"></Icon>
            </Header>
            <Content :style="{padding: '0 16px 16px'}" class="content-con">
                <Breadcrumb :style="{margin: '16px 0'}">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem>{{nav}}</BreadcrumbItem>
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
                isCollapsed:false,
                nav:"tableBasic"
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
            },
            chooseItem(name){
                console.log(name);
                this.nav=name
            },
            opend(list){
                console.log(list)
            }
        }
    }
</script>
