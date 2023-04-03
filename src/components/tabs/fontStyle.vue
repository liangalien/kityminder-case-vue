<template>
    <div class="km-btn-group">
        <div class="km-fonts-style">
            <el-row>
                <el-link :disabled="isDisabled('italic')" @click="italicChange" :style="{background: minder.queryCommandState('italic') == 1 ? '#e7e7e7' : 'none'}" :underline="false" type="primary">
                    <svg t="1680487034843" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9404" width="19" height="19"><path d="M768 85.792h-288a32 32 0 0 0 0 64h96.32l-230.336 704H256a32 32 0 0 0 0 64h288a32 32 0 0 0 0-64h-93.728l230.528-704H768a32 32 0 0 0 0-64z" p-id="9405"></path></svg>
                </el-link>

                <el-link :disabled="isDisabled('bold')" @click="boldChange" :style="{background: minder.queryCommandState('bold') == 1 ? '#e7e7e7' : 'none'}" :underline="false" type="primary">
                    <svg t="1680486188698" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3020" width="19" height="19"><path d="M768.96 575.072c-22.144-34.112-54.816-56.8-97.984-68.032v-2.176c22.88-10.88 42.112-23.04 57.696-36.48 15.616-12.704 27.584-26.144 35.936-40.288 16.32-29.76 24.128-60.96 23.392-93.632 0-63.872-19.776-115.232-59.328-154.08-39.2-38.464-97.824-58.048-175.84-58.784H215.232v793.728H579.52c62.432 0 114.496-20.864 156.256-62.624 42.112-39.936 63.52-94.176 64.224-162.752 0-41.376-10.336-79.68-31.04-114.88zM344.32 228.832h194.912c43.904 0.736 76.224 11.424 96.896 32.128 21.056 22.144 31.584 49.184 31.584 81.12s-10.528 58.432-31.584 79.488c-20.672 22.848-52.992 34.304-96.896 34.304H344.32V228.832z m304.352 536.256c-20.672 23.584-53.344 35.744-97.984 36.48H344.32v-238.432h206.336c44.64 0.704 77.312 12.512 97.984 35.392 20.672 23.232 31.04 51.168 31.04 83.84 0 31.904-10.336 59.488-31.008 82.72z" p-id="3021"></path></svg>
                </el-link>

                <el-link :disabled="isDisabled('italic')" @click="fontdecorationChange" :style="{background: minder.queryCommandValue('fontdecoration') == 'underline' ? '#e7e7e7' : 'none'}" :underline="false" type="primary">
                    <svg t="1680486787160" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7310" width="21" height="21"><path d="M514.688 780.2c159.16 0 288.176-129.024 288.176-288.176V113.6h-103.44v378.424c0 102.024-82.712 184.736-184.736 184.736-102.024 0-184.736-82.712-184.736-184.736V113.6H226.504v378.424c0 159.152 129.024 288.176 288.184 288.176z m325.128 68.816H189.56a29.552 29.552 0 1 0 0 59.112h650.256a29.552 29.552 0 1 0 0-59.112z" p-id="7311"></path></svg>
                </el-link>

                <el-popover
                    placement="bottom"
                    trigger="hover"
                >
                    <color-picker v-model="color"/>

                    <el-link :disabled="isDisabled('forecolor')" slot="reference" :underline="false" type="primary">
                        <svg t="1680486355468" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5075" width="19" height="19">
                            <path d="M839 768H735.3l-74.1-192.7H358.6L288.7 768H185L461.8 64h100.4L839 768zM632.1 495.8L522.3 203.1c-3.4-9.4-7.2-25.7-11.3-49.1h-2.3c-3.4 21.2-7.4 37.6-11.7 49.1L388.1 495.8h244z" fill="#727272" p-id="5076"></path>
                            <path d="M64 832h896v128H64z" :fill="minder.queryCommandValue('forecolor')" p-id="5077"></path></svg>
                    </el-link>
                </el-popover>


                <el-popover
                    placement="bottom"
                    trigger="hover"
                >
                    <color-picker v-model="backgroundColor"/>
                    <el-link :disabled="isDisabled('background')" slot="reference" :underline="false" type="primary">
                        <svg t="1680486320149" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4821" width="19" height="19">
                            <path :fill="minder.queryCommandValue('background')" d="M0 0m56.888889 0l910.222222 0q56.888889 0 56.888889 56.888889l0 910.222222q0 56.888889-56.888889 56.888889l-910.222222 0q-56.888889 0-56.888889-56.888889l0-910.222222q0-56.888889 56.888889-56.888889Z" p-id="4822"></path>
                            <path d="M284.444444 853.333333H227.555556L483.555556 170.666667h56.888888L284.444444 853.333333z" fill="#FFFFFF" p-id="4823"></path>
                            <path d="M540.444444 170.666667h-56.888888L739.555556 853.333333h56.888888L540.444444 170.666667z" fill="#FFFFFF" p-id="4824"></path><path d="M341.333333 625.777778h341.333334v56.888889H341.333333z" fill="#FFFFFF" p-id="4825"></path>
                        </svg>
                    </el-link>
                </el-popover>


            </el-row>
        </div>
    </div>
</template>

<script>
    import { Sketch } from 'vue-color'

    export default {
        components: {
            ColorPicker: Sketch
        },
        props: {
            minder: Object,
        },
        data() {
            return {
                //underlineBackgroud: !this.isDisabled('fontdecoration')
                color: {hex: this.minder.queryCommandValue('forecolor')},
                backgroundColor: this.minder.queryCommandValue('background')
            };
        },
        methods: {
            isDisabled: function (command) {
                return this.minder.queryCommandState(command) === -1
            },
            fontdecorationChange: function () {
                let isUnderline = this.minder.queryCommandValue('fontdecoration') == 'underline';
                this.minder.execCommand('fontdecoration', isUnderline ? null : 'underline');
                this.$forceUpdate();
            },
            italicChange: function () {
                this.minder.execCommand('italic');
                this.$forceUpdate();
            },
            boldChange: function () {
                this.minder.execCommand('bold');
                this.$forceUpdate();
            },
        },
        watch: {
            'color.hex': function () {
                console.log("color", this.color.hex)
                this.minder.execCommand("forecolor", this.color.hex)
            },
            'backgroundColor.hex': function () {
                console.log("background", this.backgroundColor.hex)
                this.minder.execCommand("background", this.backgroundColor.hex)
            }
        }
    }
</script>

<style scope>
    .el-popover {
        padding: 0;
    }
</style>