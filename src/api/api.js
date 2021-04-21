import { get, post } from "../tools/request";

//获取主页信息
export const getHomeInfo = (p) => get("/get_home_info", p);

//根据页面 及一页多少数据 查询
export const getArticle = (p) => get("/access_to_article", p);

//根据id差找文章数据
export const getArticleInfo = (p) => get("/get_article_info", p);

// 获取热门文章
export const getArticleHot = (p) => get("/get_article_hot", p);

//增加浏览量
export const addArticleViews = (p) => get("/add_article_views", p);

//文章搜索
export const getSearch = (p) => get("/get_search", p);

//获取图片
export const getAllPicture = (p) => get("/get_all_picture", p);

// 用户名验证是否已存在
export const verifyUserName = (p) => post("/users/verify_username", p);

// 用户名验证是否已存在
export const verifyEmail = (p) => post("/users/verify_email", p);

// 邮箱获取验证码
export const getMailCode = (p) => post("/users/getMailCode", p);

//注册
export const register = (p) => post("/users/register", p);

//登陆接口
export const Login = (p) => post("/users/login", p);
