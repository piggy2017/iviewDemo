<template>
    <div class="DatePicker">
        <Row :gutter="24">
            <Col span="6">
                <DatePicker type="date" placeholder="Select date" v-model="date1"></DatePicker>
                <p style="margin: 15px 0">选中的是:{{date1}}</p>
                <p style="margin: 15px 0">type为date显示选择单日</p>
            </Col>
            <Col span="6">
                <DatePicker type="daterange" placeholder="Select daterange" v-model="date2"></DatePicker>
                <p style="margin: 15px 0">选中的是:{{date2}}</p>
                <p style="margin: 15px 0">type为daterange显示选择范围类型</p>
            </Col>
            <Col span="6">
                <DatePicker type="date" :options="options1" placeholder="Select date" v-model="date3"></DatePicker>
                <p style="margin: 15px 0">选中的是:{{date3}}</p>
                <p style="margin: 15px 0">设置属性 options 对象中的 shortcuts 可以设置快捷选项,其中 value 为函数，必须返回一个日期，如果是 daterange 类型，需要返回一个数,value 接收任何正确的日期格式，比如 2016-12-24 或 12/24/16 都是正确的</p>
            </Col>
            <Col span="6">
                <DatePicker type="daterange" :options="options2" placement="bottom-end" placeholder="Select date" v-model="date4"></DatePicker>
                <p style="margin: 15px 0">选中的是:{{date4}}</p>
            </Col>
        </Row>
        <Row style="margin: 15px 0" :gutter="24">
            <Col span="6">
                <DatePicker type="daterange" split-panels placeholder="Select date" ></DatePicker>
                <p style="margin: 15px 0">开启属性 split-panels 后，左右两面板在切换年、月时不联动。</p>
            </Col>
            <Col span="6">
                <DatePicker type="date" :start-date="new Date(1991,5,10)"  placeholder="Select date" ></DatePicker>
                <p style="margin: 15px 0">设置属性 start-date 后，可以将默认显示的日期面板设置为指定日期。</p>
            </Col>
            <Col span="6">
                <DatePicker type="date" :value="date5" format="yyyy年MM月dd日"  placeholder="Select date" ></DatePicker>
                <p style="margin: 15px 0">设置属性 format 可以改变日期的显示格式，注意，format 只是改变显示的格式，并非改变 value 值。</p>
            </Col>
            <Col span="6">
                <DatePicker type="daterange" :value="date6" format="yyyy/MM/dd"  placeholder="Select date" ></DatePicker>
                <p style="margin: 15px 0">设置属性 format 可以改变日期的显示格式，注意，format 只是改变显示的格式，并非改变 value 值。</p>
            </Col>
        </Row>
        <p style="margin: 15px 0">日期时间同时选择,设置属性 type 为 datetime 或 datetimerange 可以选择时间。设置 format 并且忽略秒，可以只设置小时和分钟维度。</p>
        <Row :gutter="24" style="margin: 15px 0" >
            <Col span="6">
                <DatePicker type="datetime" placeholder="Select datetime"></DatePicker>
            </Col>
            <Col span="6">
                <DatePicker format="yyyy-MM-dd HH:mm" type="datetime" placeholder="Select datetime"></DatePicker>
            </Col>
            <Col span="6">
                <DatePicker type="datetimerange" placeholder="Select datetimerange"></DatePicker>
            </Col>
            <Col span="6">
                <DatePicker format="yyyy/MM/dd HH:mm" type="datetimerange" placeholder="Select datetimerange"></DatePicker>
            </Col>
        </Row>
        <p style="margin: 15px 0">设置属性 type 为 year 或 month 可以使用选择年或月的功能。设置属性 options 对象中的 disabledDate 可以设置不可选择的日期。</p>
        <Row :gutter="24" style="margin: 15px 0">
            <Col span="6">
                <DatePicker type="year"  placeholder="Select year"></DatePicker>
                <p  style="margin: 15px 0">设置属性 type 为 year 可以使用选择年功能。</p>
            </Col>
            <Col span="6">
                <DatePicker type="month"  placeholder="Select month"></DatePicker>
                <p style="margin: 15px 0">设置属性 type 为 month 可以使用选择月的功能。</p>
            </Col>
            <Col span="6">
                <DatePicker type="date" :options="options3" placeholder="Select date"></DatePicker>
                <p style="margin: 15px 0">设置属性 options 对象中的 disabledDate 可以设置不可选择的日期。</p>
            </Col>
            <Col span="6">
                <DatePicker type="date" :options="options4" placeholder="Select date" style="width: 200px"></DatePicker>
                <p style="margin: 15px 0">设置属性 options 对象中的 disabledDate 可以设置不可选择的日期。</p>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                date1:"",
                date2:"",
                date3:"",
                date4:"",
                date5:"1991年5月10日",
                date6:['2018/1/1','2018/4/17'],
                options1:{
                    shortcuts:[
                        {
                            text:"今天",
                            value(){
                                return new Date();
                            },
                            onclick:(picker)=>{
                                this.$Message.info('Click today');
                            }
                        },
                        {
                            text: '昨天',
                            value () {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24);
                                return date;
                            },
                            onClick: (picker) => {
                                this.$Message.info('Click yesterday');
                            }
                        },
                        {
                            text: '一周前',
                            value () {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                                return date;
                            },
                            onClick: (picker) => {
                                this.$Message.info('Click a week ago');
                            }
                        }
                    ]
                },
                options2: {
                    shortcuts: [
                        {
                            text: '1 周',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                end.setTime(end.getTime() + 3600 * 1000 * 24 * 7);
                                return [start, end];
                            }
                        },
                        {
                            text: '1 月',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                end.setTime(end.getTime() + 3600 * 1000 * 24 * 30);
                                return [start, end];
                            }
                        },
                        {
                            text: '3 月',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                end.setTime(end.getTime() + 3600 * 1000 * 24 * 90);
                                return [start, end];
                            }
                        }
                    ]
                },
                options3: {
                    disabledDate (date) {
                        return date && date.valueOf() < Date.now() - 86400000;
                    }
                },
                options4: {
                    disabledDate (date) {
                        const disabledDay = date.getDate();
                        return disabledDay === 15;
                    }
                }
            }
        }
    }
</script>
<style>
.DatePicker{
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding-top: 20px;
}
</style>
