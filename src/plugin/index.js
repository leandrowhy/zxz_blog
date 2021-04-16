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
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
