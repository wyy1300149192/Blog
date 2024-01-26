<template>
    <div>

        <div style="display: flex;padding:0 30px 20px 30px;justify-content: space-between;">
            <n-statistic label="全部计划" tabular-nums>
                <n-number-animation ref="numberAnimationInstRef" :from="0.0" :to="planList.length" />
            </n-statistic>
            <n-statistic label="未开始" tabular-nums>
                <n-number-animation ref="numberAnimationInstRef" :from="0.0" :to="ongoingList.length" />
            </n-statistic>
            <n-statistic label="进行中" tabular-nums>
                <n-number-animation ref="numberAnimationInstRef" :from="0.0" :to="unstartedList.length" />
            </n-statistic>
            <n-statistic label="已完成" tabular-nums>
                <n-number-animation ref="numberAnimationInstRef" :from="0.0" :to="finishList.length" />
            </n-statistic>
        </div>
        <n-tabs type="segment" animated>
            <n-tab-pane name="all" tab="全部">
                <div class="planBox">
                    <n-card v-for="item in planList" :title="`📖${item.title}`" embedded :bordered="false"
                        style="width:300px;margin-right: 20px;margin-bottom: 20px;">
                        <div class="planItem">
                            <div>
                                <div class="dateBox">
                                    <n-icon size="20" color="var(--vp-c-brand-1)">
                                        <Calendar />
                                    </n-icon>
                                    <span>
                                        {{ item.date }}
                                    </span>
                                </div>
                                <div class="dateBox">
                                    <n-icon size="20" color="var(--vp-c-brand-1)">
                                        <Alarm />
                                    </n-icon>
                                    <span v-if="DateDiffer(item.date.split(' - ')[0]) > 0">
                                        距离开始还有 {{ DateDiffer(item.date.split(' - ')[0])  }} 天
                                    </span>
                                    <span v-else-if="DateDiffer(item.date.split(' - ')[1]) > 0">
                                        距离结束还有 {{ DateDiffer(item.date.split(' - ')[1])  }} 天
                                    </span>
                                    <span v-else>
                                        已完成
                                    </span>

                                </div>
                                <div class="dateBox">
                                    <n-icon size="20" color="var(--vp-c-brand-1)">
                                        <Link />
                                    </n-icon>
                                    <span>
                                        学习地址：<a :href="item.url" v-if="item.url">点击跳转</a> <template v-else>
                                            暂无 
                                        </template>

                                    </span>

                                </div>
                                <div class="dateBox">
                                    <n-icon size="20" color="var(--vp-c-brand-1)">
                                        <Book />
                                    </n-icon>
                                    <span>
                                        笔记：<a :href="item.note" v-if="item.note">点击跳转</a> <template v-else>
                                            暂无 
                                        </template>

                                    </span>

                                </div>
                            </div>

                            <n-progress type="line" :status="item.progress == 100 ? 'success' : 'default'"
                                :percentage="item.progress" :height="16" border-radius="12px 12px 0 0"
                                :processing="item.progress != 100" fill-border-radius="12px 0 12px12px"
                                color="var(--vp-c-brand-1)" />
                        </div>
                    </n-card>
                </div>
            </n-tab-pane>
            <n-tab-pane name="oasis" tab="未开始">
                <div class="planBox">
                    <n-card v-for="item in unstartedList" :title="`📖${item.title}`" embedded :bordered="false"
                        style="width:300px;margin-right: 20px;margin-bottom: 20px;">
                        <div class="planItem">
                            <div>
                                <div class="dateBox">
                                    <n-icon size="20" color="var(--vp-c-brand-1)">
                                        <Calendar />
                                    </n-icon>
                                    <span>
                                        {{ item.date }}
                                    </span>
                                </div>
                                <div class="dateBox">
                                    <n-icon size="20" color="var(--vp-c-brand-1)">
                                        <Alarm />
                                    </n-icon>
                                    <span>
                                        还剩5天

                                    </span>

                                </div>
                                <div class="dateBox">
                                    <n-icon size="20" color="var(--vp-c-brand-1)">
                                        <Link />
                                    </n-icon>
                                    <span>
                                        学习地址：<a :href="item.url" v-if="item.url">点击跳转</a> <template v-else>
                                            暂无 
                                        </template>

                                    </span>

                                </div>
                                <div class="dateBox">
                                    <n-icon size="20" color="var(--vp-c-brand-1)">
                                        <Book />
                                    </n-icon>
                                    <span>
                                        笔记：<a :href="item.note" v-if="item.note">点击跳转</a> <template v-else>
                                            暂无 
                                        </template>

                                    </span>

                                </div>
                            </div>

                            <n-progress type="line" :status="item.progress == 100 ? 'success' : 'default'"
                                :percentage="item.progress" :height="16" border-radius="12px 12px 0 0"
                                :processing="item.progress != 100" fill-border-radius="12px 0 12px12px"
                                color="var(--vp-c-brand-1)" />
                        </div>
                    </n-card>
                </div>

            </n-tab-pane>
            <n-tab-pane name="the beatles" tab="进行中">
                <div class="planBox">
                    <n-card v-for="item in ongoingList" :title="`📖${item.title}`" embedded :bordered="false"
                        style="width:300px;margin-right: 20px;margin-bottom: 20px;">
                        <div class="planItem">
                            <div>
                                <div class="dateBox">
                                    <n-icon size="20" color="var(--vp-c-brand-1)">
                                        <Calendar />
                                    </n-icon>
                                    <span>
                                        {{ item.date }}
                                    </span>
                                </div>
                                <div class="dateBox">
                                    <n-icon size="20" color="var(--vp-c-brand-1)">
                                        <Alarm />
                                    </n-icon>
                                    <span>
                                        还剩5天

                                    </span>

                                </div>
                                <div class="dateBox">
                                    <n-icon size="20" color="var(--vp-c-brand-1)">
                                        <Link />
                                    </n-icon>
                                    <span>
                                        学习地址：<a :href="item.url" v-if="item.url">点击跳转</a> <template v-else>
                                            暂无 
                                        </template>

                                    </span>

                                </div>
                                <div class="dateBox">
                                    <n-icon size="20" color="var(--vp-c-brand-1)">
                                        <Book />
                                    </n-icon>
                                    <span>
                                        笔记：<a :href="item.note" v-if="item.note">点击跳转</a> <template v-else>
                                            暂无 
                                        </template>

                                    </span>

                                </div>
                            </div>

                            <n-progress type="line" :status="item.progress == 100 ? 'success' : 'default'"
                                :percentage="item.progress" :height="16" border-radius="12px 12px 0 0"
                                :processing="item.progress != 100" fill-border-radius="12px 0 12px12px"
                                color="var(--vp-c-brand-1)" />
                        </div>
                    </n-card>
                </div>
            </n-tab-pane>
            <n-tab-pane name="jay chou" tab="已完成">
                <div class="planBox">
                    <n-card v-for="item in finishList" :title="`📖${item.title}`" embedded :bordered="false"
                        style="width:300px;margin-right: 20px;margin-bottom: 20px;">
                        <div class="planItem">
                            <div>
                                <div class="dateBox">
                                    <n-icon size="20" color="var(--vp-c-brand-1)">
                                        <Calendar />
                                    </n-icon>
                                    <span>
                                        {{ item.date }}
                                    </span>
                                </div>
                                <div class="dateBox">
                                    <n-icon size="20" color="var(--vp-c-brand-1)">
                                        <Alarm />
                                    </n-icon>
                                    <span>
                                        还剩5天

                                    </span>

                                </div>
                                <div class="dateBox">
                                    <n-icon size="20" color="var(--vp-c-brand-1)">
                                        <Link />
                                    </n-icon>
                                    <span>
                                        学习地址：<a :href="item.url" v-if="item.url">点击跳转</a> <template v-else>
                                            暂无 
                                        </template>

                                    </span>

                                </div>
                                <div class="dateBox">
                                    <n-icon size="20" color="var(--vp-c-brand-1)">
                                        <Book />
                                    </n-icon>
                                    <span>
                                        笔记：<a :href="item.note" v-if="item.note">点击跳转</a> <template v-else>
                                            暂无 
                                        </template>

                                    </span>

                                </div>
                            </div>

                            <n-progress type="line" :status="item.progress == 100 ? 'success' : 'default'"
                                :percentage="item.progress" :height="16" border-radius="12px 12px 0 0"
                                :processing="item.progress != 100" fill-border-radius="12px 0 12px12px"
                                color="var(--vp-c-brand-1)" />
                        </div>
                    </n-card>
                </div>
            </n-tab-pane>
        </n-tabs>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Alarm, Calendar ,Link,Book} from "@vicons/ionicons5";

const currentAni = ref(['', '', ''])

const leftClick = (index) => {
    currentAni.value = ['', 'shake-top', 'shake-top']
    currentAni.value[index] = 'shake-bottom'
}

const planList = ref([
    {
        title: 'Vue3学习',
        date: '2024-01-12 - 2024-01-20',
        progress: 100,
        url: '/blog/knowledge/Vue3.html',
        node: '',
    },
    {
        title: 'WebPack',
        date: '2024-01-26 - 2024-02-02',
        progress: 5,
        url: '',
        node: '',
    }
])

const ongoingList = computed(() => {
    return planList.value.filter(item => isDuringDate(item.date.split(' - ')[0], item.date.split(' - ')[1]) && item.progress != 100)
})

const unstartedList = computed(() => {
    return planList.value.filter(item => isDuringDate(item.date.split(' - ')[0]) && item.progress != 100)
})

const finishList = computed(() => {
    return planList.value.filter(item => {
       return  item.progress == 100
    })
})



const isDuringDate = (beginDateStr, endDateStr) => {
    var curDate = new Date(),
        beginDate = new Date(beginDateStr),
        endDate = new Date(endDateStr);
    if (beginDateStr && endDateStr) {
        if (curDate >= beginDate && curDate <= endDate) {
            return true;
        }
    } else {
        if (curDate <= beginDate) {
            return true;
        }
    }
    return false;
}

//创建方法
const DateDiffer = (Date_end) =>{
   //date1结束时间
   let date1 = new Date(Date_end);
   //date2当前时间
   let date2 = new Date();
   date1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
   date2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
   const diff = date1.getTime() - date2.getTime(); //目标时间减去当前时间
   const diffDate = diff / (24 * 60 * 60 * 1000);  //计算当前时间与结束时间之间相差天数

   return diffDate
}



</script>

<style  scoped>
.leftFilter {
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.leftBtn {
    cursor: pointer;
}

.dateBox {
    display: flex;
    font-size: 14px;
    align-items: center;
    margin: 10px 0;

    span {
        margin-left: 5px;
        white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    }
}

:deep(.n-card-header) {
    padding-bottom: 0;
}

.planBox {
    display: flex;
    flex-wrap: wrap;
}
</style>