/*
 * @Author: leandrowhy
 * @Date: 2021-12-03 11:23:01
 * @Description: 音乐api
 */
import { get, post } from '../tools/request'

//获取歌单
export const getMusicPlaylist = (p = 6879133531) => get(`/wy-music/playlist/detail?id=${p}`)

//获取歌曲详情
export const getMusicDetail = (p) => get(`/wy-music/song/detail?ids=${p}`)

//歌曲播放地址
export const getMusicPlayUrl = (p) => get(`/wy-music/song/url?id=${p}`)
