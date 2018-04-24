<template>
    <div class="editTable">
        <Row>
            <Col span="16">
                <Card>
                    <p slot="title">
                        <Icon type="android-remove"></Icon>
                        可编辑单元行
                    </p>
                    <can-edit-table refs="table2" v-model="tableData1" :columns-list="editInlineColumns"></can-edit-table>
                </Card>
            </Col>
        </Row>
    </div>
</template>
<script>
    import canEditTable from './components/table.vue'
    import Data from './components/table_data'
    export default {
        components:{
            canEditTable
        },
        data(){
            return{
                tableData1:[],
                editInlineColumns:[]
            }
        },
        methods:{
            getData(){
                this.tableData1=Data.editInlineData;
                this.editInlineColumns=Data.editInlineColumns
            }
        },
        created(){
            this.getData()
        }
    }
</script>
<style>
.editTable{
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: #fff;
    overflow: auto;
}
</style>
