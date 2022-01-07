<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import echarts from '../echarts'
import { onMounted } from 'vue'
import { ElMessage } from 'element-plus'

onMounted(() => {
    const container1 = document.getElementById('chart-container1')
    if (container1) {
        var myChart1 = echarts.init(container1);
        myChart1.on('click', (params) => {
            ElMessage({ type: 'success', message: `click data ->${ '{'+params.name+':'+params.data +'}' } ` })
        })
        myChart1.setOption({
            title: {
                text: 'ECharts 入门示例 1',
                subtext: '条形图',
                left: 'center'
            },
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [
                {
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }
            ]
        });
    }

    const container2 = document.getElementById('chart-container2')

    if (container2) {
        var myChart2 = echarts.init(container2);
        myChart2.on('click', (params) => {
            ElMessage({ type: 'success', message: `click data ->${JSON.stringify(params.data)}` })
        })
        myChart2.setOption({
            title: {
                text: 'ECharts 入门示例 2',
                subtext: '饼图',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left'
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: '50%',
                    data: [
                        { value: 1048, name: 'Search Engine' },
                        { value: 735, name: 'Direct' },
                        { value: 580, name: 'Email' },
                        { value: 484, name: 'Union Ads' },
                        { value: 300, name: 'Video Ads' }
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        });
    }

})


</script>

<template>
    <div class="content">
        <div id="chart-container1" style="width:500px;height: 300px;"></div>

        <div id="chart-container2" style="width:500px;height: 300px;"></div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
    // 已启用类型推断
    name: "Chart",
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
