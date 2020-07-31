<template>
  <div id="app">
  <!-- 配置了一个路由的出口 -->
    <router-view/>
  </div>
</template>

<style> /*scoped 加上时,样式只会在本组件生效 */
/* 样式初始化 */
html,body,div,section,p,span,h1,h2,h3,h4,h5,h6{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
