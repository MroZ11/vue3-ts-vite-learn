<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from 'vue'

interface ColorDat {
    date: string
    notes?: string
}
const calendarDate = ref(new Date())
const nowYear = new Date().getFullYear()
const nowMonth = (new Date().getMonth() + 1).toString().padStart(2, '0')
const colorDays: ColorDat[] = [
    { date: `${nowYear}-${nowMonth}-02`, notes: '《天下足球》' },
    { date: `${nowYear}-${nowMonth}-18`, notes: '《篮球公园》' },
    { date: `${nowYear}-${nowMonth}-25`, notes: '《体坛画报》' }
]
console.log(colorDays)

</script>

<template>
    <div class="content">
        <el-calendar v-model="calendarDate" class="w-b50">
            <template #dateCell="{ data }">
                <el-popover
                    v-if="colorDays.find(item => item.date == data.day)"
                    placement="top-start"
                    title="备注"
                    :width="200"
                    trigger="hover"
                    :content="colorDays.find(item => item.date == data.day)?.notes || 'default'"
                >
                    <template #reference>
                        <p :class="data.isSelected ? 'is-selected' : ''">
                            {{ data.day.split('-')[2] }}
                            {{ '⭐' }}
                        </p>
                    </template>
                </el-popover>
                <p v-else>{{ data.day.split('-')[2] }}</p>
            </template>
        </el-calendar>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
    // 已启用类型推断
    name: "About",
    computed: {

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
    justify-content: center;
    flex-wrap: wrap;
}
</style>
