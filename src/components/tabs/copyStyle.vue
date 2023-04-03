<template>
    <div class="km-btn-group">
        <el-row>
            <el-link @click="minder.execCommand('copystyle')" :underline="false" type="primary">
                <i class="el-icon-copy-document"></i> 复制样式</el-link>
        </el-row>
        <el-row>
                <el-link @click="minder.execCommand('pastestyle')" :underline="false" type="primary">
                    <i class="el-icon-document"></i> 粘贴样式</el-link>
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