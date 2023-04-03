KityMinder Case Vue(ElementUI)
==========


## 使用说明
```bash
npm i kityminder-case-vue
```

```javascript
<template>
    <minder-case @finished="onFinished" @change="onChange"/>
</template>

<script>
    import MinderCase from 'kityminder-case-vue';
    
    export default {
        components: {MinderCase},
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
