<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import { Ref, ref, watch,defineProps,withDefaults,getCurrentInstance } from 'vue'
import { ElMessage } from 'element-plus'

// 在setup中不能使用this,可以用getCurrentInstance获取实例,但是请不要把它当作在组合式 API 中获取 this 的替代方案来使用（这是官方警告的）
const instance = getCurrentInstance()

function targetClick(target:string,event: Event ){
  console.log(event)
  ElMessage({ type: 'success', message: `click target ->${ target } ` })
  console.log(instance?.isMounted)
  
}



const dialogShow = ref(false)


</script>


<template>
  <div class="content">

    <div class="bottomDiv bottomDiv1" @click="targetClick('bottomDiv1',$event)">
      <h5 class="title">
        未防止穿透
      </h5>
      <button class="btn1"  @click="targetClick('btn1',$event)">
        点我
      </button>
    </div>


    <div class="bottomDiv bottomDiv2" @click="targetClick('bottomDiv2',$event)">
      <h5 class="title">
        已防止穿透
      </h5>
      <button class="btn2"  @click.stop="targetClick('btn2',$event)">
        点我
      </button>
    </div>


   <div class="bottomDiv bottomDiv3" >
     <h5 class="title">
        蒙版作用
      </h5>
      <button class="btn3"  @click.stop="dialogShow=true">
        点我
      </button>
    </div>
    
    <div class="dialog" v-show="dialogShow" @click.stop="dialogShow=false">
      外层是蒙版，点击蒙版来隐藏弹出层
      <div class="dialogContent" @click.stop="targetClick('dialogContent',$event)">
        内层是内容,点击内层不会导致弹出隐藏。原理是利用禁用点击穿透。
      </div>
    </div>

    
  </div>
</template>

<script lang="ts">

import { defineComponent, computed } from 'vue'

export default defineComponent({
  // 已启用类型推断
  name: "Click",
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
.bottomDiv{
 width: 100Px;
 height: 100px;
 background-color: mediumseagreen;
}

.title{
  color: #fff;
}

.dialog{
  z-index: 200;
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgba(28, 34, 20, 0.144);

}

.dialogContent{
  width: 50%;
  height: 300px;
  background: #fff;
  position: relative;
  margin-top: 20vh;
  margin-left: 50vh;
  border: 10px solid #ffffff;
  border-radius: 10px;
}

</style>
