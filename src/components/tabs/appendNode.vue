<template>
    <div class="km-btn-group">
        <el-row>
            <el-link :disabled="isDisabled('AppendNextNode')" @click="minder.execCommand('AppendNextNode')" :underline="false" type="primary"><i class="el-icon-bottom-right"></i> 插入下级</el-link>
            <el-link :disabled="isDisabled('AppendPrevNode')" @click="minder.execCommand('AppendPrevNode')" :underline="false" type="primary"><i class="el-icon-top-left"></i> 插入上级</el-link>
        </el-row>
        
        <el-row>
            <el-link :disabled="isDisabled('AppendSameNode')" @click="minder.execCommand('AppendSameNode')" :underline="false" type="primary"><i class="el-icon-refresh"></i> 插入同级</el-link>
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