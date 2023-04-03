<template>
    <div class='km-btn-group'>
        <div class='km-fonts'>
            <el-row>
                <el-select :disabled="isDisabled('fontfamily')" style="width: 120px;" v-model="font" size="small" clearable placeholder="字体">
                    <el-option
                            v-for="item in familyList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>

                <el-select :disabled="isDisabled('fontsize')" style="width: 65px;" v-model="size" size="small" clearable placeholder="字号">
                    <el-option
                            v-for="sizeItem in sizeList"
                            :key="sizeItem"
                            :label="sizeItem"
                            :value="sizeItem">
                    </el-option>
                </el-select>
            </el-row>

            <el-row>

            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            minder: Object
        },
        data() {
            return {
                familyList: [{
                    label: '宋体',
                    value: '宋体,SimSun'
                }, {
                    label: '微软雅黑',
                    value: '微软雅黑,Microsoft YaHei'
                    }, {
                        label: '楷体',
                        value: '楷体,楷体_GB2312,SimKai'
                    }, {
                        label: '黑体',
                        value: '黑体, SimHei'
                    }, {
                        label: '隶书',
                        value: '隶书, SimLi'
                    }, {
                        label: 'Andale Mono',
                        value: 'andale mono'
                    }, {
                        label: 'Arial',
                        value: 'arial,helvetica,sans-serif'
                    }, {
                        label: 'arialBlack',
                        value: 'arial black,avant garde'
                    }, {
                        label: 'Comic Sans Ms',
                        value: 'comic sans ms'
                    }, {
                        label: 'Impact',
                        value: 'impact,chicago'
                    }, {
                        label: 'Times New Roman',
                        value: 'times new roman'
                    }, {
                        label: 'Sans-Serif',
                        value: 'sans-serif'
                    }
                ],
                sizeList: [10, 12, 16, 18, 24, 32, 48],
                font: this.minder.queryCommandValue('fontfamily') || "微软雅黑,Microsoft YaHei",
                size: this.minder.queryCommandValue('fontsize') || 16
            }
        },
        methods: {
            isDisabled: function (command) {
                return this.minder.queryCommandState(command) === -1
            },
        },
        mounted() {

        },
        watch: {
            font: function () {
                this.minder.execCommand('fontfamily', this.font);
            },
            size: function () {
                this.minder.execCommand('fontsize', this.size);
            }
        }
    }
</script>
