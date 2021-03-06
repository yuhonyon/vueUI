---
title:
  zh-CN: 自定义字体图标
  en-US: icon&shapes
desc:
  zh-CN: 支持使用第三方自定义图标
  en-US: Button

order: 2
---

# zh-CN
```vue
<template>
    <div>
        <Icon prefix="pc-icon" type="yiyuanshuju" size="24" />
        <Icon prefix="pc-icon" type="yilianti" size="24" />
        <Icon prefix="pc-icon" type="xietang" size="24" />
    </div>
</template>
<style>
    @font-face {
        font-family: "custom-font";
        src: url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff');
    }



.pc-icon {
  font-family:"custom-font" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.pc-icon-shuju:before { content: "\e600"; }

.pc-icon-users:before { content: "\e626"; }

.pc-icon-yisheng:before { content: "\e6ab"; }

.pc-icon-yitiji:before { content: "\e604"; }

.pc-icon-yiyuanshuju:before { content: "\e674"; }

.pc-icon-hushi:before { content: "\e661"; }

.pc-icon-zhikong:before { content: "\e668"; }

.pc-icon-yiyuan:before { content: "\e62c"; }

.pc-icon-gaikuang:before { content: "\e69a"; }

.pc-icon-gongneng:before { content: "\e62f"; }

.pc-icon-zhanghao:before { content: "\e60b"; }

.pc-icon-yonghushuxing:before { content: "\e719"; }

.pc-icon-yilianti:before { content: "\e624"; }

.pc-icon-quanxian:before { content: "\e83a"; }

.pc-icon-xietang:before { content: "\e62b"; }

</style>
```
