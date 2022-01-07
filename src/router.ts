import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw} from 'vue-router'
import Doc from  './components/Doc.vue'
import Ui  from "./components/Ui.vue";
import About from "./components/About.vue"
import Chart from "./components/Chart.vue"
import Click from "./components/Click.vue"
import Composition from "./components/composition/Index.vue"

// 1. 定义路由组件.
// 也可以从其他文件导入
const Home = { template: '<h1>Hello !</h1>' }


// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes : RouteRecordRaw[] = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/doc', component: Doc },
    { path: '/ui', component: Ui },
    { path: '/chart', component: Chart },
    { path: '/click', component: Click },
    { path: '/composition', component: Composition },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
export let router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(import.meta.env.BASE_URL),
    routes, // `routes: routes` 的缩写
})
