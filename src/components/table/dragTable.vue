<template>
    <div class="dragTable">
        <Row>
            <Col span="16">
                <Card>
                    <DragableTable v-model="tableData" :columns-list="columnsList" @on-start="handleOnstart1" @on-end="handleOnend1" ></DragableTable>
                </Card>
            </Col>
            <Col span="8">
                <Card>
                    <p slot="title">
                        <Icon type="clipboard"></Icon>
                        表格1操作记录( 拖拽 )
                    </p>
                    <Row style="height: 374px;">
                        <div class="dragging-tip-con">
                            <transition name="dragging-tip">
                                <span v-show="table1.isDragging">您正在拖拽表格1单元行...</span>
                            </transition>
                        </div>
                        <Card>
                            <div class="record-tip-con">
                                <div v-for="(item, index) in table1.draggingRecord" :key="index" class="record-item">
                                    拖拽第 {{ item.from }} 行表格到第 {{ item.to }} 行
                                </div>
                            </div>
                        </Card>
                    </Row>
                </Card>
            </Col>
        </Row>
    </div>
</template>
<script>
    import DragableTable from './components/drag.vue'
    export default {
        components:{
            DragableTable
        },
        data(){
            return{
                tableData:[],
                columnsList:[],
                table1: {
                    hasDragged: false,
                    isDragging: false,
                    oldIndex: 0,
                    newIndex: 0,
                    draggingRecord: []
                }
            }
        },
        methods:{
            handleOnstart1(from){
                this.table1.oldIndex = from;
                this.table1.hasDragged = true;
                this.table1.isDragging = true;
            },
            handleOnend1(e){
                this.table1.isDragging = false;
                this.table1.draggingRecord.unshift({
                    from: e.from + 1,
                    to: e.to + 1
                });
            },
            getData () {
                this.columnsList = [
                    {
                        title: '序号',
                        type: 'index',
                        width: 80,
                        align: 'center'
                    },
                    {
                        title: '待办事项',
                        key: 'todoItem'
                    },
                    {
                        title: '备注',
                        key: 'remarks'
                    },
                    {
                        title: '拖拽',
                        key: 'drag',
                        width: 90,
                        align: 'center',
                        render: (h) => {
                            return h(
                                'Icon',
                                {
                                    props: {
                                        type: 'arrow-move',
                                        size: 24
                                    }
                                }
                            );
                        }
                    }
                ];
                this.tableData = [
                    {
                        todoItem: '明天去后海玩',
                        remarks: '估计得加班'
                    },
                    {
                        todoItem: '后天去和妹子看电影',
                        remarks: '可能没妹子'
                    },
                    {
                        todoItem: '大后天去吃海天盛筵',
                        remarks: '没钱就不去了'
                    },
                    {
                        todoItem: '周末去看电影',
                        remarks: '估计得加班'
                    },
                    {
                        todoItem: '下个月准备回家看父母',
                        remarks: '估计得加班'
                    },
                    {
                        todoItem: '该买回家的票了',
                        remarks: '可能没票了'
                    },
                    {
                        todoItem: '过年不回家和父母视频聊天',
                        remarks: '一定要记得'
                    },
                    {
                        todoItem: '去车站接父母一起在北京过年',
                        remarks: 'love'
                    }
                ];
            }
        },
        created(){
            this.getData()
        }
    }
</script>
<style>
.dragTable{
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: #fff;
    overflow: auto;
}
.dragging-tip-enter-active{
    opacity: 1;
    transition: opacity .3s;
}
.dragging-tip-enter, .dragging-tip-leave-to{
    opacity: 0;
    transition: opacity .3s
}
.dragging-tip-con{
    display: block;
    text-align: center;
    width: 100%;
    height: 50px;
}
.dragging-tip-con span{
    font-size: 18px;
}
.record-tip-con{
    display: block;
    width: 100%;
    height: 292px;
    overflow: auto;
}
.record-item{
    box-sizing: content-box;
    display: block;
    overflow: hidden;
    height: 24px;
    line-height: 24px;
    padding: 8px 10px;
    border-bottom: 1px dashed gainsboro;
}
.record-tip-con span{
    font-size: 14px;
}
</style>
