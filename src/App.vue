<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import zhCn from 'element-plus/lib/locale/lang/zh-cn'


interface RouterLink {
  /**
   * 标题
   */
  title: string
  /**
   * 路由地址
   */
  to: RouteLocationRaw
}

</script>


<template>
  <el-config-provider :locale="zhCn">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div>
      <el-tabs v-model="activeTab" @tab-click="tabClick" class="navs" :stretch="true">
        <el-tab-pane
          v-for="({ title,  },index) in routerLinks"
          :key="index"
          :label="title"
          :name="title"
        ></el-tab-pane>
      </el-tabs>
      <router-view v-slot="{ Component, route }" @viewIn="changeTitle">
        <keep-alive>
          <component :is="Component" :key="route.meta.usePathKey ? route.path : undefined" />
        </keep-alive>
      </router-view>
    </div>
  </el-config-provider>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import { RouteLocationRaw } from "vue-router";


export default defineComponent({
  // 已启用类型推断
  name: "APP",
  data() {
    return {
      activeTab: 'Home',
      firstLoad: false,
      routerLinks: [
        { title: 'Home', to: { path: '/' } },
        { title: 'About', to: { path: '/about' } },
        { title: 'Doc', to: { path: '/doc', query: { titleCenter: 'titleCenter' } } },
        { title: 'Ui', to: { path: '/ui' } },
        { title: 'Chart', to: { path: '/chart' } },
        { title: 'Click', to: { path: '/click' } },
        { title: 'Composition', to: { path: '/composition' } },
      ] as RouterLink[]
    }
  },
  methods: {
    tabClick(tab: any, event: any) {
      const nowIndex: number = tab.index
      const to = this.routerLinks[nowIndex].to
      this.$router.replace(to)
    },
    changeTitle() {
      console.log(1111111)
    }
  },
  watch: {
    $route(to, from) {
      const toPath = to.path as String
      if (this.firstLoad == true) {
        this.firstLoad = false

        //页面刷新后重新选中tab

        if (toPath === '/') {
          this.activeTab = 'Home'
        } else {
          this.activeTab = toPath[1].toUpperCase() + toPath.substring(2)
        }


      }
    }
  },
  mounted() {
    this.firstLoad = true
  }
})




</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.navs {
  width: 50%;
  margin-left: 25%;
}

.w-b50 {
  width: 50%;
}
</style>
