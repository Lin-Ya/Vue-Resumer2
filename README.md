---
title: 401_初次使用Vue.js的一些心得 
tags: Vue.js,心得
grammar_cjkRuby: true
---
401_初次使用Vue.js的一些心得
===
我在上周刚使用 vue.js + 饿了么ui 制作了一个在线简历编辑器的网站，实现了登录注册、在线编辑简历，增删简历内容、引入Vuex进行状态管理。[预览地址](https://lin-ya.github.io/Vue-Resumer2/dist)
通过这个项目，我掌握了vue单文件组件对网页进行模块化封装、导入，vue组件之间的通信，利用vuex实现数据单向绑定（为了能更好地控制数据的流动）。趁着热乎劲，赶紧写篇总结。

***
 - 列表渲染：
	- VUE2.0以后当使用`v-for`的时候，需要绑定key。
	- 传递的三个参数分别是vale，key和索引index。 
	```
	<div v-for="(value, key, index) in object">
		{{ index }}. {{ key }}: {{ value }}
	</div>
	```
	- [注意vue的数组和对象变更的检测](https://cn.vuejs.org/v2/guide/list.html#%E6%95%B0%E7%BB%84%E6%9B%B4%E6%96%B0%E6%A3%80%E6%B5%8B)

 - 条件渲染：
	- v-if和v-else的配合：
		```
		<div v-if="Math.random() > 0.5">
		 Now you see me
		</div>
		<div v-else>
		 Now you don't
		</div>
		```
		`v-else` 元素必须紧跟在带 `v-if` 或者 `v-else-if` 的元素的后面，否则它将不会被识别。
	- v-if和v-show的区别：
	一般来说，`v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 `v-show` 较好；如果在运行时条件很少改变，则使用 `v-if` 较好。
	- 当 `v-if` 与 `v-for` 一起使用时，`v-for` 具有比 `v-if` 更高的优先级。

 - 表单绑定：
	- v-model
		- `v-model` 本质上不过是语法糖。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。
		- `v-model` 会忽略所有表单元素的 `value`、`checked`、`selected` 特性的初始值而总是将 Vue 实例的数据作为数据来源。我们应该在data中声明这些初始值。

 - 组件之间的通信：
	- 父子通信：子组件使用props接收父组件bind进来的数据。父组件使用自定义事件监听子组件出发传来的数据。
	- 爷孙通信： 通过两对父子通信，爷爸之间父子通信，爸儿之间父子通信
	- 兄弟通信：使用一个空的Vue实例作为事件总线。
		```js
		var bus = new Vue()
		Vue.prototype.$bug = bug //把这个事件巴士放到Vue的原型链上，全局可以用。		// 触发组件 A 中的事件
		bus.$emit('id-selected', 1)
		
		// 在组件 B 创建的钩子中监听事件
		bus.$on('id-selected', function (id) {
		 // ...
		})
		```

 - Vuex是什么？
Vuex是用于Vue的状态管理库。
![Vuex](http://p8qvw09e6.bkt.clouddn.com/storyWriter/1526349020790.jpg)
	- state是单一状态树，把其看做是唯一一个数据源。
	- getters就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
	- mutation 都有一个字符串的 **事件类型 (type)** 和 一个 **回调函数 (handler)**。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数。更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
		```javascript
		//你可以向 `store.commit` 传入额外的参数，即 mutation 的 **载荷（payload）**：
		// ...
		mutations: {
		  increment (state, n) {
		    state.count += n
		  }
		}
		//需要调用的时候：
		store.commit('increment', 10)
		```
	- 注意，是用了Vuex进行状态管理的时候，会是的v-model进行表单模型操作的时候出错。有[两种方法](https://vuex.vuejs.org/zh-cn/forms.html)：
		一种就是v-model配合setter属相绑定数据（给model添加get和set方法，set方法是用来调用vuex里面的mutation中操作state的方法）
		另一种则是：给 `<input>` 中绑定 value，然后侦听 `input` 或者 `change`事件，在事件回调中调用 action。

 -  Computed 计算属性的用法？跟 Methods 的区别。
    [参考博客](https://zhuanlan.zhihu.com/p/33778594 "null")
 -  （必考）Vue 有哪些生命周期钩子函数？

    *   看文档：[https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90](https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90 "null")
    *   
 - method和computed的区别：
**computed依赖于data中的数据，只有在它的相关依赖数据发生改变时才会重新求值**
在Vue实例化的时候，computed定义computedTest方法会做一次计算，返回一个值，**在随后的代码编写中，只要`computedTest方法`依赖的`message数据`不发生改变，`computedTest方法`是不会重新计算的**。
	- computed是**属性调用**，而methods是**函数调用**
	- computed带有**缓存功能**，而methods不是
