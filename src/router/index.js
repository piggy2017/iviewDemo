import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const Login = r => require.ensure([], () => r(require('@/components/login/login')), 'Login')
const main = r => require.ensure([], () => r(require('@/components/main')), 'main')
const editor = r => require.ensure([], () => r(require('@/components/edit/editor')), 'editor')
const Button = r => require.ensure([], () => r(require('@/components/Button')), 'Button')
const Icon = r => require.ensure([], () => r(require('@/components/Icon')), 'Icon')
const Input = r => require.ensure([], () => r(require('@/components/form/Input')), 'Input')
const Radio = r => require.ensure([], () => r(require('@/components/form/Radio')), 'Radio')
const Select = r => require.ensure([], () => r(require('@/components/form/Select')), 'Select')
const Cascader = r => require.ensure([], () => r(require('@/components/form/Cascader')), 'Cascader')
const FormSubmit = r => require.ensure([], () => r(require('@/components/form/FormSubmit')), 'FormSubmit')
const InputNumber = r => require.ensure([], () => r(require('@/components/form/InputNumber')), 'InputNumber')
const DatePicker = r => require.ensure([], () => r(require('@/components/form/DatePicker')), 'DatePicker')
const tableBasic = r => require.ensure([], () => r(require('@/components/table/Table')), 'tableBasic')
const checkedTable = r => require.ensure([], () => r(require('@/components/table/checkedTable')), 'checkedTable')
const sortTable = r => require.ensure([], () => r(require('@/components/table/sortTable')), 'sortTable')
const editTable = r => require.ensure([], () => r(require('@/components/table/editTable')), 'editTable')
const dragTable = r => require.ensure([], () => r(require('@/components/table/dragTable')), 'dragTable')
const textEditor = r => require.ensure([], () => r(require('@/components/edit/textEditor')), 'textEditor')
const echarts = r => require.ensure([], () => r(require('@/components/charts/echarts')), 'echarts')
const uploadImg = r => require.ensure([], () => r(require('@/components/upload/uploadImg')), 'uploadImg')
Vue.use(Router)
export default new Router({
  routes: [
    {path: '/', name: 'Login', component: Login},
    {path:'/main', name:'main', component:main,redirect: { name: 'Input' },
        children:[
            {path: '/', name: 'Input', component: Input},
            {path: 'Input', name: 'Input', component: Input},
            {path: 'Button', name: 'Button', component: Button},
            {path: 'Icon', name: 'Icon', component: Icon},
            {path: 'Radio', name: 'Radio', component: Radio},
            {path: 'Cascader', name: 'Cascader', component: Cascader},
            {path: 'FormSubmit', name: 'FormSubmit', component: FormSubmit},
            {path: 'InputNumber', name: 'InputNumber', component: InputNumber},
            {path: 'Select', name: 'Select', component: Select},
            {path: 'DatePicker', name: 'DatePicker', component: DatePicker},
            {path: 'checkedTable', name: 'checkedTable', component: checkedTable},
            {path: 'sortTable', name: 'sortTable', component: sortTable},
            {path: 'editTable', name: 'editTable', component: editTable},
            {path: 'dragTable', name: 'dragTable', component: dragTable},
            {path: 'tableBasic', name: 'tableBasic', component: tableBasic},
            {path: 'editor', name: 'editor', component: editor},
            {path: 'textEditor', name: 'textEditor', component: textEditor},
            {path: 'echarts', name: 'textEditor', component: echarts},
            {path: 'uploadImg', name: 'uploadImg', component: uploadImg}
        ]
    },

  ]
})
