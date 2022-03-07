/*
 * @Author: leandrowhy
 * @Date: 2022-03-07 18:56:24
 * @Description: file content
 */
// 存储localStorage
export const setLocal = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// 得到localStorage
export const getLocal = (key) => {
  return JSON.parse(localStorage.getItem(key))
};

// 删除localStorage
export const delLocal = (key) => {
  localStorage.removeItem(key);
};

// 清空localStorage
export const clearLocal = () => {
  localStorage.clear();
};