<template>
    <div>
        <div class="nav-bar">
            <div class="nav-btn zoom-in"
                 @click="minder.execCommand('zoomIn')"
                 :class="getZoomRadio(zoom) == 0 ? 'active' : ''">
                <div
                     class="icon"
                     :style="{background: `url(${icons})`, backgroundPosition: '0 -730px'}"
                >
                </div>
            </div>
            <div ref="zoomPan" class="zoom-pan">
                <div class="origin"
                     :style="originStyle"
                     @click="minder.execCommand('zoom', 100);"></div>
                <div class="indicator"
                     :style="indicatorStyle"></div>
            </div>
            <div class="nav-btn zoom-out"
                 @click="minder.execCommand('zoomOut')"
                 :class="getZoomRadio(zoom) == 1 ? 'active' : ''">
                <div
                    class="icon"
                    :style="{background: `url(${icons})`, backgroundPosition: '0 -750px'}"
                ></div>
            </div>
            <div class="nav-btn hand"
                 @click="minder.execCommand('hand')"
                 :class="minder.queryCommandState('hand') == 1 ? 'active' : ''">
                <div class="icon" :style="{background: `url(${icons})`, backgroundPosition: '0 -770px'}"></div>
            </div>
            <div class="nav-btn camera"
                 @click="minder.execCommand('camera', minder.getRoot(), 600);"
                 >
                <div class="icon" :style="{background: `url(${icons})`, backgroundPosition: '0 -870px'}"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import icons from "../images/icons.png"

    export default {
        props: {
            minder: Object
        },
        data() {
            return {
                zooms: [10, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200],
                zoom: 100,
                isNavOpen: false,
                originStyle: {},
                indicatorStyle: {},
                icons: icons
            }
        },
        methods: {
            isDisabled: function (command) {
                return this.minder.queryCommandState(command) === -1
            },
            getZoomRadio: function(value) {
                var zoomStack = this.zooms;
                var minValue = zoomStack[0];
                var maxValue = zoomStack[zoomStack.length - 1];
                var valueRange = maxValue - minValue;

                return (1 - (value - minValue) / valueRange);
            },
            getHeight: function(value) {
                var totalHeight = this.$refs.zoomPan.clientHeight;
                return this.getZoomRadio(value) * totalHeight;
            },
            setIndicator: function (zoom) {
                this.indicatorStyle = {
                    transform: `translate(0, ${this.getHeight(zoom)}px)`,
                    transition: 'transform 200ms'
                };
            }
        },
        mounted() {
            this.minder.setDefaultOptions({zoom: this.zooms})

            this.originStyle = {
                transform: `translate(0, ${this.getHeight(100)}px)`
            };

            this.setIndicator(this.zoom);

            let that = this;
            this.minder.on('zoom', function(e) {
                that.zoom = e.zoom;
                that.setIndicator(e.zoom);
            });
        }
    }
</script>

<style>
    .nav-bar {
        height: 176px;
    }
</style>