<template>
  <header class="file-header">
    <section class="func-area">
      1
      <a-button type="primary" shape="circle" icon="search">123123</a-button>
    </section>
    <section class="nav-area">2</section>
  </header>
  <section>应用</section>
</template>

<script setup></script>

<style lang="scss" scoped>
.file-header {
  width: 100%;
  height: 100px;

  .func-area {
    height: 50px;
    display: flex;
    align-items: center;
    background: #fff;
    justify-content: space-between;
  }

  .nav-area {
    height: 50px;
    padding: 0 10px;
    border-top: 1px solid #f4f5f7;
    border-bottom: 1px solid #f4f5f7;
  }
}
</style>
