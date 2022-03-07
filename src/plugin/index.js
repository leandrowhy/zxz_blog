/*
 * @Description: 
 * @Author: leandrowhy
 * @Date: 2020-12-25 15:08:09
 * @LastEditTime: 2022-03-07 21:39:06
 * @LastEditors: Please set LastEditors
 * @FilePath: \front-end\src\plugin\index.js
 * 希望此代码无bug~
 */
import Vue from "vue";
import "element-ui/lib/theme-chalk/index.css";
import {
  Button,
  Select,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Carousel,
  CarouselItem,
  tooltip,
  Notification,
  Message,
  Input,
  Col,
  Autocomplete,
  Steps,
  Step,
  Scrollbar,
} from "element-ui";

Vue.use(Autocomplete);
Vue.use(Col);
Vue.use(Input);
Vue.use(tooltip);
Vue.use(Button);
Vue.use(Select);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Steps);
Vue.use(Step);
Vue.use(Scrollbar);


Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
