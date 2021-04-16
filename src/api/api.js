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
