//整个包的入口
import Button from './button';
import Input from './input';
import Switch from './switch';
import Dialog from './dialog';
import Radio from './radio';
import RadioGroup from './radio-group';
import Checkbox from './checkbox';
import CheckboxGroup from './checkbox-group';
import Form from './form';
import FormItem from './form-item';
import './fonts/font.scss';

//组件列表
const components = [
    Button,
    Input,
    Switch,
    Dialog,
    Radio,
    RadioGroup,
    Checkbox,
    CheckboxGroup,
    Form,
    FormItem
];

//定义 install 方法，接收Vue作为参数，如果使用use注册插件，则所有的组件都将被注册
const install = function(Vue) {
    components.forEach(item => {
        Vue.component(item.name, item);
    });
    //console.log('install');
}

//判断是否是直接引入文件，如果是，就不调用Vue.use()
if(typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

//导出的对象必须具有 install，才能被 Vue.use() 方法安装
export default {
    install
}