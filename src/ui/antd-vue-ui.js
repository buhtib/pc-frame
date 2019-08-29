import Vue from 'vue'

import {
    Button,
    Message,
    Form,
    Input,
    Checkbox,
    Spin,
    Col,
    Row,
    Icon,
    Layout,
    Menu,
    Avatar,
    Dropdown,
    Modal,
    Notification,
    Tabs,
    Table,
    Tag,
    Divider,
    Breadcrumb,
    Select,
    InputNumber,
    Radio,
    Affix,

} from 'ant-design-vue';
Vue.prototype.$message = Message
Vue.prototype.$confirm = Modal.confirm
Vue.prototype.$notification = Notification

Vue.use(Button);
Vue.use(Form);
Vue.use(Input);
Vue.use(Checkbox);
Vue.use(Spin);
Vue.use(Col);
Vue.use(Row);
Vue.use(Icon);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Avatar);
Vue.use(Dropdown);
Vue.use(Modal);
Vue.use(Tabs);
Vue.use(Table);
Vue.use(Tag);
Vue.use(Divider);
Vue.use(Breadcrumb);
Vue.use(Select);
Vue.use(InputNumber);
Vue.use(Radio);
Vue.use(Affix);


/**
 * 配置 消息提示时间
 */
Message.config({
    duration: 1,
});
export default Message