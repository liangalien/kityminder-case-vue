<template>
    <div class="km-btn-group">
        <div class="km-priority">
            <el-row>
                <img :disabled="isDisabled('note')" @click="minder.execCommand('priority', null)" :src="pd"/>
                <img :disabled="isDisabled('note')" @click="minder.execCommand('priority', 1)" :src="p1"/>
                <img :disabled="isDisabled('note')" @click="minder.execCommand('priority', 2)" :src="p2"/>
                <img :disabled="isDisabled('note')" @click="minder.execCommand('priority', 3)" :src="p3"/>
            </el-row>
        </div>
    </div>
</template>

<script>
    import pd from '../../images/pd.png';
    import p1 from '../../images/p1.png';
    import p2 from '../../images/p2.png';
    import p3 from '../../images/p3.png';

    export default {
        name: "",
        data() {
            return {
                pd: pd,
                p1: p1,
                p2: p2,
                p3: p3,
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