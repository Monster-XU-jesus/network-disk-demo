<template>
  <section class="header-style">头部</section>
  <div class="main-view-area">
    <section>
      侧边
      <ul class="nav-menu"></ul>
    </section>
    <section class="disk-content-area">
      <DiskFileContent></DiskFileContent>
    </section>
  </div>
</template>

<script setup>
import DiskFileContent from "./DiskFileContent";
</script>

<style lang="scss" scoped>
// 头部导航栏
.header-style {
  width: 100%;
  height: 60px;
  padding: 0 30px;
  flex-direction: row;
  box-shadow: 1px 1px 11px -8px rgba(0, 0, 0, 0.34901960784313724);
  justify-content: flex-start;
  align-items: center;
}

.main-view-area {
  width: 100%;
  height: 100%;
  display: flex;

  // 中间左边
  .nav-menu {
    width: 200px;
    height: 1000px;
    padding-top: 15px;
    background: #f4f5f7;
    border-right: 1px solid #f2f2f2;
  }

  .disk-content-area {
    width: calc(100% - 200px);
    height: 100%;
  }
}
</style>
