<template>
    <div class="km-btn-group">
        <div class="km-type">
            <el-row>
                <span :disabled="isDisabled('note')" :style="{background: bg1}" @click="minder.execCommand('type', 1)">模块</span>
                <span :disabled="isDisabled('note')" :style="{background: bg2}" @click="minder.execCommand('type', 2)">用例</span>
                <span :disabled="isDisabled('note')" :style="{background: bg3}" @click="minder.execCommand('type', 3)">步骤</span>
            </el-row>
        </div>
    </div>
</template>

<script>
    import pd from '@images/pd.png';
    import p1 from '@images/p1.png';
    import p2 from '@images/p2.png';
    import p3 from '@images/p3.png';

    export default {
        data() {
            return {
                bg1: this.minder.getResourceColor(1).toHEX(),
                bg2: this.minder.getResourceColor(2).toHEX(),
                bg3: this.minder.getResourceColor(3).toHEX(),
            }
        },
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

<style>


</style>