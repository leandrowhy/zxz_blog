/*
 * @Author: leandrowhy
 * @Date: 2021-04-16 22:34:46
 * @Description: file content
 */
import { get, post } from '../tools/request'

//获取主页信息
export const getHomeInfo = p => get('/api/get_home_info', p)

//根据页面 及一页多少数据 查询
export const getArticle = p => get('/api/access_to_article', p)

//根据id差找文章数据
export const getArticleInfo = p => get('/api/get_article_info', p)

// 获取热门文章
export const getArticleHot = p => get('/api/get_article_hot', p)

//增加浏览量
export const addArticleViews = p => get('/api/add_article_views', p)

//文章搜索
export const getSearch = p => get('/api/get_search', p)

//获取图片
export const getAllPicture = p => get('/api/get_all_picture', p)

// 用户名验证是否已存在
export const verifyUserName = p => post('/api/users/verify_username', p)

// 用户名验证是否已存在
export const verifyEmail = p => post('/api/users/verify_email', p)

// 邮箱获取验证码
export const getMailCode = p => post('/api/users/getMailCode', p)

//注册
export const register = p => post('/api/users/register', p)

//登陆接口
export const Login = p => post('/api/users/login', p)

//github登陆接口
export const githubLogin = p => post('/api/users/github/user_info', p)

//qq登陆接口
export const qqLogin = p => post('/api/users/qq/user_info', p)

//token校验
export const tokenVerify = p => post('/api/users/verify_token', p)
