---
title:
  zh-CN: 基础用法
  en-US: Button Size
desc:
  zh-CN: 水平排列的布局。
  en-US: Button
order: 1
---

# zh-CN
`col`必须放在`row`里面。

# en-US



```vue
<template>
    <div class="demo">
      <Row>
          <Col span="12"><div>col-12</div></Col>
          <Col span="12"><div>col-12</div></Col>
      </Row>
      <br>
      <Row>
          <Col span="8"><div>col-8</div></Col>
          <Col span="8"><div>col-8</div></Col>
          <Col span="8"><div>col-8</div></Col>
      </Row>
      <br>
      <Row>
          <Col span="6"><div>col-6</div></Col>
          <Col span="6"><div>col-6</div></Col>
          <Col span="6"><div>col-6</div></Col>
          <Col span="6"><div>col-6</div></Col>
      </Row>
    </div>
</template>
<script>
    export default {

    }
</script>
<style lang="less">
  .demo{
    .ivu-col>div{
      background: rgba(0,153,229,.7);
      color:#fff;
      padding:10px 0;
      text-align:center;
      &:nth-child(odd){
        background:rgba(0,153,229,.9)
      }
    }
  }
</style>
```
