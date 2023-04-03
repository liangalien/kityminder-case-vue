<template>
    <div class="km-btn-group">
        <el-row>
            <el-link :disabled="isDisabled('note')" @click="minder.execCommand('disabled', 0)" :underline="false" type="primary">
                <i class="el-icon-folder-checked"></i> 启用</el-link>
        </el-row>

        <el-row>
            <el-link :disabled="isDisabled('note')" @click="minder.execCommand('disabled', 1)" :underline="false" type="primary"><i class="el-icon-folder-delete"></i> 禁用</el-link>
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
            }
        }
    }
</script>