KityMinder Case Vue(ElementUI)
==========

百度脑图测试用例定制版 For Vue
==========

## 说明
基于[kityminder-case-core](https://github.com/liangalien/kityminder-case-core)，移植kityminder-editor部分功能和样式，使用element-ui重写


React版本请移步：[kityminder-case-react](https://github.com/liangalien/kityminder-case-react)

## 预览
[![](https://raw.githubusercontent.com/liangalien/kityminder-case-vue/main/src/images/s1.png)](https://raw.githubusercontent.com/liangalien/kityminder-case-vue/main/src/images/s1.png)

[![](https://raw.githubusercontent.com/liangalien/kityminder-case-vue/main/src/images/s2.png)](https://raw.githubusercontent.com/liangalien/kityminder-case-vue/main/src/images/s2.png)

[![](https://raw.githubusercontent.com/liangalien/kityminder-case-vue/main/src/images/s3.png)](https://raw.githubusercontent.com/liangalien/kityminder-case-vue/main/src/images/s3.png)


## 使用说明
```bash
npm i kityminder-case-vue
```

## main.js
```javascript
import Vue from 'vue';
import MinderCase from 'kityminder-case-vue';

Vue.use(MinderCase);
```

## page.vue
```javascript
<template>
    <minder-case @finished="onFinished" @change="onChange"/>
</template>

<script>
    export default {
        methods: {
            onFinished: function (minder, editor) {
                console.log("脑图组件已挂载", minder, editor);
            },
            onChange: function (data) {
                console.log("脑图已更新", data);
            }
        }
    }
</script>
```

## 开发说明
```bash
npm i
npm run dev
npm run build
```
