<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { useRoute } from "vue-router";
import { type Resposity,getResposity} from '@/request/api/resposity';
import { Ref, ref, watch } from 'vue'

const route = useRoute()

// setup内定义参数
interface Props {
  left?: string
  labels?: string[]
}
// 设置默认值
const props = withDefaults(defineProps<Props>(), {
  left: 'title-left'
})

const userId = ref(1)

const repositories: Ref<Resposity[]> = ref([])

async function loadData(){
  const dataList = await getResposity({ userId: userId.value })
  repositories.value = dataList
}

loadData()

// 函数
function refresh() {
  userId.value++
}

// 监听
watch(userId, (now, before) => {
  console.log(`userId changed now value:${now},before value:${before}`)
  loadData()
})

</script>


<template>
  <div class="content">
    <el-card :header="msg" class="box-card">
      <template #header>
        <div class="card-header">
          <div class="card-header--title">{{left}}</div>
          <div class="card-header--title">
            <div>
            {{msg}}
            </div>
            <div>
              {{'userId :'+ userId}}
            </div> 
          </div>
          <el-button class="button" type="text" @click="refresh">refresh</el-button>
        </div>
      </template>
      <div
        v-for="(item,o) in repositories"
        :key="o"
        class="text item"
      >{{ item.goods + 'count :' + item.count }}</div>
    </el-card>
  </div>
</template>

<script lang="ts">

import { defineComponent, computed } from 'vue'

export default defineComponent({
  // 已启用类型推断
  name: "Doc",
  computed: {
    // 需要注解
    msg(): string {
      console.log(this.$route)
      return this.$route.query['titleCenter'] as string;
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

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.card-header--title {
  padding: 12px 0px;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
  text-align: left;
}
</style>
