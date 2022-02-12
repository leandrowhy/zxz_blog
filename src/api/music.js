/*
 * @Author: leandrowhy
 * @Date: 2021-12-03 11:23:01
 * @Description: 音乐api
 */
import { get, post } from '../tools/request'

//获取歌单
export const getMusicPlaylist = (p = 2429907335) => get(`/qqmusic/songlist?id=${p}`)
