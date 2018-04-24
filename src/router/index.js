import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login/login'
import main from '@/components/main'
import Dashboard from '@/components/Dashboard'
import Button from '@/components/Button'
import Icon from '@/components/Icon'
import Input from '@/components/form/Input'
import Radio from '@/components/form/Radio'
import Select from '@/components/form/Select'
import Cascader from '@/components/form/Cascader'
import FormSubmit from '@/components/form/FormSubmit'
import InputNumber from '@/components/form/InputNumber'
import DatePicker from '@/components/form/DatePicker'
import tableBasic from '@/components/table/Table'
import checkedTable from '@/components/table/checkedTable'
import sortTable from '@/components/table/sortTable'
import editTable from '@/components/table/editTable'
import dragTable from '@/components/table/dragTable'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Login', component: Login},
    {path:'/main', name:'main', component:main,
        children:[
            {
                path: '/',
                name: 'Dashboard',
                component: Dashboard
            },
            {
                path: '/Button',
                name: 'Button',
                component: Button
            },
            {
                path: '/Icon',
                name: 'Icon',
                component: Icon
            },
            {
                path: '/Input',
                name: 'Input',
                component: Input
            },
            {
                path: '/Radio',
                name: 'Radio',
                component: Radio
            },
            {
                path: '/Cascader',
                name: 'Cascader',
                component: Cascader
            },
            {
                path: '/FormSubmit',
                name: 'FormSubmit',
                component: FormSubmit
            },
            {
                path: '/InputNumber',
                name: 'InputNumber',
                component: InputNumber
            },
            {
                path: '/Select',
                name: 'Select',
                component: Select
            },
            {
                path: '/DatePicker',
                name: 'DatePicker',
                component: DatePicker
            },
            {
                path: '/checkedTable',
                name: 'checkedTable',
                component: checkedTable
            },
            {
                path: '/sortTable',
                name: 'sortTable',
                component: sortTable
            },
            {
                path: '/editTable',
                name: 'editTable',
                component: editTable
            },
            {
                path: '/dragTable',
                name: 'dragTable',
                component: dragTable
            },
            {
                path: '/tableBasic',
                name: 'tableBasic',
                component: tableBasic
            }
        ]
    }
  ]
})
