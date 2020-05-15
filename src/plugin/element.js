import Vue from "vue";
import {Button, Form, FormItem, Input,Message} from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';


export default function () {
    Vue.use(Button)
    Vue.use(Form)
    Vue.use(FormItem)
    Vue.use(Input)
    //挂载弹框组件
    Vue.prototype.$message=Message
}

