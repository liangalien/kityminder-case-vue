<template>
    <div class="km-btn-group">
        <el-row>
            <el-link @click="minder.execCommand('resetlayout')" :underline="false" type="primary">
                <i class="el-icon-thumb"></i> 整理布局</el-link>
        </el-row>

        <el-row>
            <el-link @click="minder.execCommand('clearstyle')" :underline="false" type="primary">
                <i class="el-icon-delete-solid"></i> 清空样式</el-link>
        </el-row>
    </div>
</template>

<script>
    export default {
        props: {
            minder: Object
        },
        methods: {
            isDisabled: function (command) {
                return this.minder.queryCommandState(command) === -1
            },
        },
    }
</script>