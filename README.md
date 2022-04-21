# vue-simple-login
### 项目说明
实现一个系统的基础架构，包括登录，菜单，页面基础布局，用户权限。
路由配置说明：https://blog.csdn.net/weixin_44158642/article/details/124258519

## 开始项目
```
npm install
```

### 开发环境运行项目
```
npm run dev
```

### 打包项目
```
npm run build
```
### 功能说明
#### 1.登录功能
三个账号，信息如下：
|用户名|密码 |
|--|--|
| admin  |admin |
| user1 |user1 |
| user2 |user2 |

![image](https://raw.githubusercontent.com/du-ding/vue-simple-login/master/src/assets/readme/login.PNG)

#### 2.侧边栏
可以根据路由配置，自动生成多级菜单。<br />
可以根据项目需求，变化菜单内容。<br />
可以根据用户权限不同，展示不同的菜单。<br />
![image](https://github.com/du-ding/vue-simple-login/blob/master/src/assets/readme/product.PNG)

![image](https://raw.githubusercontent.com/du-ding/vue-simple-login/master/src/assets/readme/product2.PNG)

#### 3.权限配置

用户权限与路由联动
![image](https://raw.githubusercontent.com/du-ding/vue-simple-login/master/src/assets/readme/authory.PNG)

#### 4.Tab标签

主内容上方有类似浏览器的Tab标签，可以查看访问过的页面，与侧边栏联动。
![image](https://raw.githubusercontent.com/du-ding/vue-simple-login/master/src/assets/readme/tabs.PNG)

#### 5.动态keep-alive
子路由的keep-alive设置为true，并且在路由表中设置子路由name和对应的组件name一致，就可以配置某些组件为keep-alive模式
#### 6.可视化大屏
使用Datav，echarts实现一个极简的数据可视化大屏。
![image](https://raw.githubusercontent.com/du-ding/vue-simple-login/master/src/assets/readme/screen.png)
