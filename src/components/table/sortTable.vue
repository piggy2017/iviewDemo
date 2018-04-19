<template>
    <div class="sortTable">
        <p>通过给 columns 数据的项，设置 sortable: true，即可对该列数据进行排序,排序默认使用升序和降序，也可以通过设置属性 sortMethod 指定一个自定义排序函数，接收三个参数 a 、 b 和 type。</p>
        <p style="margin: 15px 0">通过给某一列设置 sortType 可以在初始化时使用排序。</p>
        <Table :columns="columns5" stripe border :data="data5"></Table>
        <p style="margin: 15px 0">通过给 columns 数据的项，设置 filters，可进行筛选，filters 接收一个数组。</p>
        <p style="margin: 15px 0">必须指定一个筛选函数 filterMethod 才可以进行筛选，filterMethod 传入两个参数 value 和 row,如果指定 filterMultiple: false，则使用单选，默认为多选。</p>
        <Table border :loading="loading" :columns="columns6" :data="data5"></Table>
        <Button style="margin: 15px 0" type="primary" @click="close">关闭loading</Button>
        <p style="margin: 15px 0">通过设置属性 loading 可以让表格处于加载中状态，在异步请求数据、分页时建议使用。</p>
        <p style="margin: 15px 0">通过调用 exportCsv() 方法，可以将数据导出为 .csv 的表格文件</p>
        <Button type="primary" size="large" @click="exportData(1)"><Icon type="ios-download-outline"></Icon>导出全部数据</Button>
        <Button type="primary" size="large" @click="exportData(2)"><Icon type="ios-download-outline"></Icon>导出筛选排序数据</Button>
        <Button type="primary" size="large" @click="exportData(3)"><Icon type="ios-download-outline"></Icon>导出自定义数据</Button>
        <Table style="margin: 15px 0" :columns="columns8" :data="data7" size="small" ref="table"></Table>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                loading:true,
                columns5:[
                    {
                        title: '日期',
                        key: 'date',
                        sortable: true
                    },
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age',
                        sortable: true
                    },
                    {
                        title: '地址',
                        key: 'address'
                    }
                ],
                columns6:[
                    {
                        title: '日期',
                        key: 'date'
                    },
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age',
                        filters:[
                            {
                                label:"年龄大于20",
                                value:1
                            },
                            {
                                label:"年龄小于20",
                                value:2
                            }
                        ],
                        filterMultiple: false,  // 单选
                        filterMethod(value,row){
                            if(value===1){
                                return row.age>20
                            }else{
                                return row.age<=20
                            }
                        }
                    },
                    {
                        title: '地址',
                        key: 'address',
                        filters:[
                            {
                                label:"New York",
                                value:"New York"
                            },
                            {
                                label:"London",
                                value:"London"
                            },
                            {
                                label:"Sydney",
                                value:"Sydney"
                            }
                        ],
                        filterMethod(value,row){
                            return row.address.indexOf(value)>-1
                        }
                    }
                ],
                data5:[
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 19,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ],
                columns8: [
                    {
                        "title": "姓名",
                        "key": "name",
                        "fixed": "left",
                        "width": 200
                    },
                    {
                        "title": "显示",
                        "key": "show",
                        "width": 150,
                        "sortable": true,
                        filters: [
                            {
                                label: 'Greater than 4000',
                                value: 1
                            },
                            {
                                label: 'Less than 4000',
                                value: 2
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if (value === 1) {
                                return row.show > 4000;
                            } else if (value === 2) {
                                return row.show < 4000;
                            }
                        }
                    },
                    {
                        "title": "无效",
                        "key": "weak",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "登录",
                        "key": "signin",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "点击",
                        "key": "click",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "激活",
                        "key": "active",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "7retained",
                        "key": "day7",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "30retained",
                        "key": "day30",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "明天",
                        "key": "tomorrow",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "激活的天数",
                        "key": "day",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "周",
                        "key": "week",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "月",
                        "key": "month",
                        "width": 150,
                        "sortable": true
                    }
                ],
                data7: [
                    {
                        "name": "Name1",
                        "fav": 0,
                        "show": 7302,
                        "weak": 5627,
                        "signin": 1563,
                        "click": 4254,
                        "active": 1438,
                        "day7": 274,
                        "day30": 285,
                        "tomorrow": 1727,
                        "day": 558,
                        "week": 4440,
                        "month": 5610
                    },
                    {
                        "name": "Name2",
                        "fav": 0,
                        "show": 4720,
                        "weak": 4086,
                        "signin": 3792,
                        "click": 8690,
                        "active": 8470,
                        "day7": 8172,
                        "day30": 5197,
                        "tomorrow": 1684,
                        "day": 2593,
                        "week": 2507,
                        "month": 1537
                    },
                    {
                        "name": "Name3",
                        "fav": 0,
                        "show": 7181,
                        "weak": 8007,
                        "signin": 8477,
                        "click": 1879,
                        "active": 16,
                        "day7": 2249,
                        "day30": 3450,
                        "tomorrow": 377,
                        "day": 1561,
                        "week": 3219,
                        "month": 1588
                    },
                    {
                        "name": "Name4",
                        "fav": 0,
                        "show": 9911,
                        "weak": 8976,
                        "signin": 8807,
                        "click": 8050,
                        "active": 7668,
                        "day7": 1547,
                        "day30": 2357,
                        "tomorrow": 7278,
                        "day": 5309,
                        "week": 1655,
                        "month": 9043
                    },
                    {
                        "name": "Name5",
                        "fav": 0,
                        "show": 934,
                        "weak": 1394,
                        "signin": 6463,
                        "click": 5278,
                        "active": 9256,
                        "day7": 209,
                        "day30": 3563,
                        "tomorrow": 8285,
                        "day": 1230,
                        "week": 4840,
                        "month": 9908
                    },
                    {
                        "name": "Name6",
                        "fav": 0,
                        "show": 6856,
                        "weak": 1608,
                        "signin": 457,
                        "click": 4949,
                        "active": 2909,
                        "day7": 4525,
                        "day30": 6171,
                        "tomorrow": 1920,
                        "day": 1966,
                        "week": 904,
                        "month": 6851
                    },
                    {
                        "name": "Name7",
                        "fav": 0,
                        "show": 5107,
                        "weak": 6407,
                        "signin": 4166,
                        "click": 7970,
                        "active": 1002,
                        "day7": 8701,
                        "day30": 9040,
                        "tomorrow": 7632,
                        "day": 4061,
                        "week": 4359,
                        "month": 3676
                    },
                    {
                        "name": "Name8",
                        "fav": 0,
                        "show": 862,
                        "weak": 6520,
                        "signin": 6696,
                        "click": 3209,
                        "active": 6801,
                        "day7": 6364,
                        "day30": 6850,
                        "tomorrow": 9408,
                        "day": 2481,
                        "week": 1479,
                        "month": 2346
                    },
                    {
                        "name": "Name9",
                        "fav": 0,
                        "show": 567,
                        "weak": 5859,
                        "signin": 128,
                        "click": 6593,
                        "active": 1971,
                        "day7": 7596,
                        "day30": 3546,
                        "tomorrow": 6641,
                        "day": 1611,
                        "week": 5534,
                        "month": 3190
                    },
                    {
                        "name": "Name10",
                        "fav": 0,
                        "show": 3651,
                        "weak": 1819,
                        "signin": 4595,
                        "click": 7499,
                        "active": 7405,
                        "day7": 8710,
                        "day30": 5518,
                        "tomorrow": 428,
                        "day": 9768,
                        "week": 2864,
                        "month": 5811
                    }
                ]
            }
        },
        methods:{
            close(){
                this.loading=false;
            },
            exportData(type){
                if(type===1){
                    this.$refs.table.exportCsv({
                        filename:"全部数据表格"
                    })
                }else if(type===2){
                    this.$refs.table.exportCsv({
                        filename:"筛选的数据",
                        original:false  // 是否导出为原始数据，默认为 true
                    })
                }else if(type===3){
                    this.$refs.table.exportCsv({
                        filename:"自定义表格",
                        original:false,  // 是否导出为原始数据，默认为 true
                        columns:this.columns8.filter((col,index)=>index<4),
                        data: this.data7.filter((data, index) => index <6)
                    })
                }
            }
        }
    }
</script>
<style>
.sortTable{
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: #fff;
    overflow: auto;
}
</style>
