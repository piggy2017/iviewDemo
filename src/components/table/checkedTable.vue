<template>
    <div class="checkedTable">
        <p style="margin: 15px 0">通过给 columns 数据设置一项，指定 type: 'selection'，即可自动开启多选功能。</p>
        <p style="margin: 15px 0">给 data 项设置特殊 key _checked: true 可以默认选中当前项。给 data 项设置特殊 key _disabled: true 可以禁止选择当前项。</p>
        <p style="margin: 15px 0">@on-select，选中某一项触发，返回值为 selection 和 row，分别为已选项和刚选择的项。</p>
        <p  style="margin: 15px 0">@on-selection-change 只要选中项发生变化时就会触发，返回值为 selection，已选项。</p>
        <Button type="error" @click="deleteR()"><Icon size="14" type="trash-a"></Icon> 删 除</Button>
        <Button type="info" @click="addR()"><Icon size="14" type="plus"></Icon> 添 加</Button>
        <Button @click="handleSelectAll(true)">全 选</Button>
        <Button @click="handleSelectAll(false)">反 选</Button>

        <!--<Input placeholder="Please enter ..." v-model="keyword" style="width: 200px"></Input>-->
        <!--<Button type="ghost" @click="search"><Icon type="search"></Icon></Button>-->
        <p style="margin: 15px 0"></p>
        <Table border ref="selection" @on-selection-change="changeTable" @on-select="selectTable" :columns="columns4" :data="data1"></Table>
        <Modal v-model="modalEdit"
            title="修改"
            ok-text="确定"
            cancel-text="取消"
            v-on:on-ok="editOk()">
                <Form :label-width="50">
                    <Form-item v-for="(value, key) in editData" :label="convertKey(key)" :key="editData.id">
                        <Input v-model="editData[key]" :placeholder="'Please enter' + key"></Input>
                    </Form-item>
                </Form>
        </Modal>
        <Modal v-model="addModal"
               title="添加"
               ok-text="确定"
               cancel-text="取消"
               v-on:on-ok="addOk(addData)">
            <Form :label-width="50" :index="editIndex">
                <Form-item v-for="item in columnsKey" :label="item.title" :key="item.key">
                    <Input v-model="addData[item.key]" :placeholder="'Please enter ' + item.title"></Input>
                </Form-item>
            </Form>
        </Modal>
    </div>
</template>
<script>
    import Vue from 'vue'
    import axios from 'axios'
    export default {
        data(){
            return{
                columns4:[
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title:"姓名",
                        key:"name",
                        align:'center'
                    },
                    {
                        title:"年龄",
                        key:"age",
                        align:'center',
                        sortable: true
                    },
                    {
                        title:"地址",
                        key:"address",
                        align:'center'
                    },
                    {
                        title:"操作",
                        key: 'action',
                        width: 350,
                        align: 'center',
                        render:(h,params)=>{
                            return h("div",[
                                h("Button",{
                                    props:{
                                        type:"info",
                                        text:"查看"
                                    },
                                    style:{
                                        marginRight:'5px'
                                    },
                                    on:{
                                        "click":()=>{
                                            this.showModal(params.index)
                                        }}
                                },[
                                    h("Icon",{
                                        props:{
                                            type:"eye",
                                            size:"14"
                                        }
                                    }),
                                    h("span",{
                                        style:{
                                            fontSize:"16px",
                                            marginLeft:"5px"
                                        }
                                    },"查看")
                                ]),
                                h("Button",{
                                    props:{
                                        type:"error"
                                    },
                                    style:{
                                        marginRight:'5px'
                                    },
                                    on:{
                                        "click":()=>{
                                            this.deleteC(params.index)
                                        }
                                    }
                                },[
                                    h("Icon",{
                                        props:{
                                            type:"trash-a",
                                            size:"14"
                                        }
                                    }),
                                    h("span",{
                                        style:{
                                            fontSize:"14px",
                                            marginLeft:"5px"
                                        }
                                    },"删除")
                                ]),
                                h("Button",{
                                    props:{
                                        type:"warning"
                                    },
                                    on:{
                                        "click":()=>{
                                            this.edit(params.row,params.index)
                                        }
                                    }
                                },[
                                    h("Icon",{
                                        props:{
                                            type:"edit",
                                            size:"14"
                                        }
                                    }),
                                    h("span",{
                                        style:{
                                            fontSize:"14px",
                                            marginLeft:"5px"
                                        }
                                    },"修改")
                                ])
                            ])
                        }
                    }
                ],
                data1:[
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03',
                        class:'5-2'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01',
                        class:'5-1'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02',
                        class:'6-2'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04',
                        class:'5-3'
                    }
                ],
                selected:[],
                modalEdit:false,
                keyword:"",
                editData:{},
                editIndex: '',
                addData:{},
                addData2:{},
                addModal:false,
                addModal2:false,
                dataSearch:[]
            }
        },
//        created(){
//            axios.get("src/components/table/tableData.json").then(res=>{
//                console.log(res);
//            })
//        },
        computed:{
            columnsKey:function(){
                let col=[];
                this.columns4.forEach(function(item){
                    if(item.key!=="action" && item.key!==undefined){
                        col.push(item)
                    }
                })
                return col
            }
        },
        methods:{
            handleSelectAll(status){
                this.$refs.selection.selectAll(status);
            },
            selectTable(selection,row){ // @on-select，选中某一项触发，返回值为 selection 和 row，分别为已选项和刚选择的项。
                console.log(row);
                this.selected.push(row);
            },
            changeTable(selection){  //@on-selection-change 只要选中项发生变化时就会触发，返回值为 selection，已选项。
                this.selected=selection;
            },
            deleteR(){
                if( this.selected.length===0){
                    this.$Message.error('请先选中!');
                    return false
                }else{
                    let result = confirm('确认删除？');
                    if(result){
                        for(let i=0;i<this.data1.length;i++ ){
                            for(let j=0;j<this.selected.length;j++){
                                if(this.data1[i].name===this.selected[j].name){
                                    this.data1.splice(i,1);
                                    this.$Message.success('删除成功!');
                                }
                            }
                        }
                    }
                }
            },
            deleteC(index){ // 在数据行里面点击删除
                let result = confirm('确认删除？');
                if(result){
                    this.data1.splice(index,1);
                    this.$Message.success('删除成功!');
                }
            },
            convertKey: function (value) {
                let returnValue = value
                this.columns4.forEach(function (elem) {
                    for (let i in elem) {
                        if (i === 'key' && elem[i] === value) {
                            returnValue = elem.title
                        }
                    }
                })
                return returnValue
            },
            editOk(){
                console.log(this.editData);
                console.log(this.editIndex);
                console.log(this.data1);
                Vue.set(this.data1,this.editIndex,this.editData)
                //this.data1.splice(this.editIndex,1,this.editData)
            },
            edit(data,index){ // 修改信息
                console.log(data,index);
                this.editIndex=index;
                for(let i in data){
                    if(i !=="_index" && i !=="_rowKey"){
                        this.editData[i]=data[i];
                    }
                }
                this.modalEdit=true;
            },
            showModal(index){  // 查看数据详情
                this.$Modal.info({
                    title:"查看数据",
                    content:`Name：${this.data1[index].name}<br>Age：${this.data1[index].age}<br>Address：${this.data1[index].address}<br>Class:${this.data1[index].class}`
                })
            },
            addR(){  // 添加数据
                this.addModal=true;
            },
            addOk(){
                this.data1.push(this.addData);
                console.log(this.data1);
            },
            search(){  // 搜索
//                let that=this;
//                if(that.keyword!=""){
//                    that.data1.forEach(function(elem,index){
//                        for(let i in elem){
//                            //console.log(elem,index);
//                            if(elem[i].toString().indexOf(that.keyword)>-1){
//                                //console.log(123);
//                                that.dataSearch.push(elem);
//                            }else{
//                                //that.data1.splice(index,1)
//                            }
//                        }
//                    })
//                    that.data1=that.dataSearch;
//                }else{
//                }
            }
        }
    }
</script>
<style>
.checkedTable{
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: #fff;
    overflow: auto;
}
</style>
