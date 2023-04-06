<template>
  <div id="app">
      <div>
          <el-tabs v-model="activeName">
              <el-tab-pane label="编辑" name="1">
                  <undo-redo v-if="minder" :minder.sync="minder" :editor.sync="editor"/>
                  <append-node v-if="minder" :minder.sync="minder"/>
                  <arrange v-if="minder" :minder.sync="minder"/>
                  <operation v-if="minder" :minder.sync="minder"/>
                  <disabled v-if="minder" :minder.sync="minder"/>
                  <priority v-if="minder" :minder.sync="minder"/>
                  <type v-if="minder" :minder.sync="minder"/>
              </el-tab-pane>
              <el-tab-pane label="外观" name="2">
                  <template-dropdown v-if="minder" :minder.sync="minder"/>
                  <theme v-if="minder" :minder.sync="minder"/>
                  <expand v-if="minder" :minder.sync="minder"/>
                  <copy-style v-if="minder" :minder.sync="minder"/> 
                  <layout v-if="minder" :minder.sync="minder"/>
                  <fonts v-if="minder" :minder.sync="minder"/>
                  <font-style v-if="minder" :minder.sync="minder"/>
              </el-tab-pane>
              <el-tab-pane label="执行" name="3">
                  <result v-if="minder" :minder.sync="minder"/>
              </el-tab-pane>
          </el-tabs>
      </div>

      <div ref="container" class="minder-container"></div>
      <navigator v-if="minder" :minder.sync="minder"/>
  </div>
</template>

<script>
    import 'hotbox-ui';
    import 'kity';
    import 'kityminder-case-core';
    import 'kityminder-case-core/dist/kityminder.case.core.css';
    import '../kityminder-editor/expose-editor';
    import '../kityminder-editor/kityminder.editor.css';

    import 'hotbox-ui/hotbox.css';

    import Navigator from './navigator';

    import UndoRedo from './tabs/undoRedo';
    import AppendNode from './tabs/appendNode';
    import Arrange from './tabs/arrange';
    import Operation from './tabs/operation';
    import Disabled from './tabs/disabled';
    import Priority from './tabs/priority';
    import Type from './tabs/type';

    import TemplateDropdown from './tabs/template';
    import Theme from './tabs/theme';
    import CopyStyle from './tabs/copyStyle';
    import Layout from './tabs/layout';
    import Expand from './tabs/expand';
    import Fonts from './tabs/fonts';
    import FontStyle from './tabs/fontStyle';

    import Result from './tabs/result';

    export default {
        components: {
            Navigator, UndoRedo, AppendNode, Arrange, Operation, Disabled, Priority, Type,
            TemplateDropdown, Theme, CopyStyle, Layout, Expand, Fonts, FontStyle, Result
        },
        props: {
            autoInit: {
                type: Boolean,
                default() {
                    return true;
                }
            }
        },


        data() {
            return {
                activeName: "1",
                minder: null,
                editor: null,
            }
        },
        mounted() {
            this.editor = new window.kityminder.Editor(this.$refs.container);
            this.minder = window.minder = this.editor.minder;
            if  (this.autoInit)
                this.minder.importJson({
                root: {
                    data: {
                        id: minder.getGuid(),
                        text: "模块名称",
                        type: minder.getTypeMap().module.id,
                    },
                    children: [{
                        data: {
                            id: minder.getGuid(),
                            text: "用例名称",
                            type: minder.getTypeMap().case.id,

                        },
                    }]
                },
                template: 'right'
            });


            this.minder.on('datachange contentchange', data => {
                this.$emit("change", data);
            });

            this.$emit("finished", this.minder, this.editor);
        },
        watch: {
            activeName: function () {
                this.$forceUpdate();
            }
        }
    }
</script>

<style>
    .el-tabs__header {
        margin: 0 !important;
    }

    .el-tab-pane {
        height: 50px;
    }

    .km-type {
        line-height: 48px;
    }


    .km-type span {
        box-sizing: border-box;
        color: rgba(0, 0, 0, .65);
        font-size: 11px;
        font-variant: tabular-nums;
        list-style: none;
        font-feature-settings: "tnum";
        display: inline-block;
        height: auto;
        margin: 0 8px 0 0;
        padding: 0 7px;
        line-height: 19px;
        white-space: nowrap;
        border: 1px solid #d9d9d9;
        cursor: pointer;
        opacity: 1;
        transition: all .3s cubic-bezier(.78, .14, .15, .86);
    }

    .km-type span[disabled='disabled']{
        opacity: 0.5;
        cursor: not-allowed;
    }

    .km-priority {
        margin-top: 5px;
        padding: 9px 0;
    }

    .km-priority img {
        cursor: pointer;
    }

    .km-priority img[disabled='disabled']{
        opacity: 0.5;
        cursor: not-allowed;
    }

    .km-fonts-style {
        margin-top: 11px;
    }

    .km-fonts-style a.is-disabled {
        opacity: 0.5;
    }

    .km-btn-group {
        margin: 0;
        padding: 0 12px 0 8px;
    }

    .km-btn-group .el-link {
        font-size: 11px;
        color: #000000;
    }

    .km-btn-group button {
        color: #000000;
    }

    .km-btn-group .el-link.is-disabled {
        color: #d2d2d2;
    }

    .km-btn-group  .el-icon-arrow-down {
        line-height: 20px;
    }

    .minder-container {
        height: calc(100vh - 109px);
    }

    .theme-item {
        padding: 0 !important;
    }


    .km-theme {
        margin-top: 5px;
    }

    .km-fonts {
        margin-top: 7px;
    }

    .km-result {
        height: 50px;
        margin-top: 15px;
    }

    .km-result .el-dropdown-link {
        cursor: pointer;
    }


</style>
