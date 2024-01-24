<template>
    <div>

        <div style="display: flex;padding:0 30px 20px 30px;justify-content: space-between;">
            <n-statistic label="全部计划" tabular-nums>
                <n-number-animation ref="numberAnimationInstRef" :from="0.0" :to="1200" />
            </n-statistic>
            <n-statistic label="未完成" tabular-nums>
                <n-number-animation ref="numberAnimationInstRef" :from="0.0" :to="200" />
            </n-statistic>
            <n-statistic label="进行中" tabular-nums>
                <n-number-animation ref="numberAnimationInstRef" :from="0.0" :to="245" />
            </n-statistic>
            <n-statistic label="已完成" tabular-nums>
                <n-number-animation ref="numberAnimationInstRef" :from="0.0" :to="320" />
            </n-statistic>
        </div>
        <n-tabs type="segment" animated>
            <n-tab-pane name="all" tab="全部">
                <div class="planBox">
                    <n-card title="📖 JS学习" embedded :bordered="false"
                        style="width:300px;margin-right: 20px;margin-bottom: 20px;">
                        <div class="planItem">
                            <div>
                                <div class="dateBox">
                                    <n-icon size="20" color="var(--vp-c-brand-1)">
                                        <Alarm />
                                    </n-icon>
                                    <span>
                                        2024-01-19 - 2024-01-29

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
                                        <Alarm />
                                    </n-icon>
                                    <span>
                                        学习地址：baidu.com

                                    </span>

                                </div>
                                <div class="dateBox">
                                    <n-icon size="20" color="var(--vp-c-brand-1)">
                                        <Alarm />
                                    </n-icon>
                                    <span>
                                        笔记：bilibili.com

                                    </span>

                                </div>
                            </div>

                            <n-progress type="line" :percentage="100" status="success" :height="16"
                                border-radius="12px 12px 0 0" fill-border-radius="12px 0 12px12px" processing
                                color="var(--vp-c-brand-1)" />
                        </div>
                    </n-card>
                    <n-card title="📖 JS学习" embedded :bordered="false"
                        style="width:300px;margin-right: 20px;margin-bottom: 20px;">
                        <div class="planItem">
                            <div>
                                <div class="dateBox">
                                    <n-icon size="20" color="var(--vp-c-brand-1)">
                                        <Alarm />
                                    </n-icon>
                                    <span>
                                        2024-01-19 - 2024-01-29

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
                                        <Alarm />
                                    </n-icon>
                                    <span>
                                        学习地址：baidu.com

                                    </span>

                                </div>
                                <div class="dateBox">
                                    <n-icon size="20" color="var(--vp-c-brand-1)">
                                        <Alarm />
                                    </n-icon>
                                    <span>
                                        笔记：bilibili.com

                                    </span>

                                </div>
                            </div>

                            <n-progress type="line" :percentage="30" :height="16" border-radius="12px 12px 0 0"
                                fill-border-radius="12px 0 12px12px" processing color="var(--vp-c-brand-1)" />
                        </div>
                    </n-card>
                    <n-card v-for="item in planList" :title="`📖${item.title}`" embedded :bordered="false"
                        style="width:300px;margin-right: 20px;margin-bottom: 20px;">
                        <div class="planItem">
                            <div>
                                <div class="dateBox">
                                    <n-icon size="20" color="var(--vp-c-brand-1)">
                                        <Alarm />
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
                                        <Alarm />
                                    </n-icon>
                                    <span>
                                        学习地址：{{ item.url || '暂无' }}

                                    </span>

                                </div>
                                <div class="dateBox">
                                    <n-icon size="20" color="var(--vp-c-brand-1)">
                                        <Alarm />
                                    </n-icon>
                                    <span>
                                        笔记：{{ item.note || '暂无' }}

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
                Wonderwall
            </n-tab-pane>
            <n-tab-pane name="the beatles" tab="进行中">
                Hey Jude
            </n-tab-pane>
            <n-tab-pane name="jay chou" tab="已完成">
                七里香
            </n-tab-pane>
        </n-tabs>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Alarm, PaperPlane } from "@vicons/ionicons5";

const currentAni = ref(['', '', ''])

const leftClick = (index) => {
    currentAni.value = ['', 'shake-top', 'shake-top']
    currentAni.value[index] = 'shake-bottom'
}

const planList = ref([
    {
        title: 'Vue3学习',
        date: '2024-01-01 - 2024-01-17',
        progress: 100,
        url: '',
        node: '',
    }
])
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
    align-items: center;
    margin: 10px 0;
}

:deep(.n-card-header) {
    padding-bottom: 0;
}

.planBox {
    display: flex;
    flex-wrap: wrap;
}
</style>