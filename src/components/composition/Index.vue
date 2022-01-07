<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import {ref} from 'vue'

import resposityLoad from './resposity-load'

const query = ref('')
const { repositories, getUserRepositories } = resposityLoad(query)

</script>


<template>
  <div class="content">


      <div class="content">
        <el-card :header="msg" class="box-card">
        <template #header>
            
            <div class="card-header">

                <el-row :gutter="10">
                    <el-col :span="20"><el-input v-model="query"  placeholder="输入姓氏" maxlength="1" /></el-col>
                    <el-col :span="4"><el-button class="button" type="text" @click="getUserRepositories">随机</el-button></el-col>
                </el-row>
                
                
            </div>
        </template>
        <div
            v-for="(item,o) in repositories"
            :key="o"
            class="text item"
        >{{ '姓名 :' + item.goods + '      评分 :' + item.count }}</div>
        </el-card>
    </div>
    
  </div>
</template>

<script lang="ts">

import { defineComponent, computed } from 'vue'

export default defineComponent({
  // 已启用类型推断
  name: "Composition",
  computed: {
    // 需要注解
    msg(): string {
     return 'tt'
    },
  },
  data() {
    return {

    }
  },

})





</script>

<style scoped>
.content {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

</style>
