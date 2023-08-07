<template>
  <header class="file-header">
    <section class="func-area">
      <div class="func-menu">
        <div class="func-item">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              上传<el-icon class="el-icon--right"><arrow-down /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item :icon="Plus">上传文件</el-dropdown-item>
                <el-dropdown-item :icon="CirclePlus"
                  >上传文件夹</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <el-button>新建文件夹</el-button>
      </div>
    </section>
    <section class="nav-area">
      <div class="nav-left">
        <el-button
          ><el-icon size="20"><ArrowLeft /></el-icon
        ></el-button>
        <el-button>
          <el-icon size="20"> <ArrowRight /></el-icon>
        </el-button>
      </div>
      <div class="nav-right">
        <el-input
          v-model="searchFile"
          class="w-50 m-2"
          size="small"
          placeholder="Please Input"
          :suffix-icon="Search"
        />
        <el-button
          ><el-icon :size="iconSize"><Sort /></el-icon
        ></el-button>
        <el-button
          ><el-icon :size="iconSize"><ScaleToOriginal /></el-icon
        ></el-button>
      </div>
    </section>
  </header>
  <section class="main-area">
    <div class="app-item" v-for="(item, index) of fileInfo" :key="index">
      {{ item.title }}
      <label class="checkbox-style" for="tac">
        <span class="checkbox-inner"></span>
        <input type="checkbox" class="checkbox-input" id="tac" />
      </label>
      <div class="icon-area">icon</div>
      <div class="name-area">name</div>
    </div>
  </section>
</template>

<script setup>
import {
  ArrowDown,
  CirclePlus,
  Plus,
  ArrowLeft,
  ArrowRight,
  Sort,
  ScaleToOriginal,
} from "@element-plus/icons-vue";
import { ref, reactive } from "vue";

let searchFile = ref("");
let iconSize = 30; // 图标大小
let fileInfo = reactive([
  { title: "java从入门到入土", type: "pdf" },
  { title: "电影全集", type: "zip" },
  { title: "java从入门到入土", type: "pdf" },
  { title: "电影全集", type: "zip" },
  { title: "java从入门到入土", type: "pdf" },
  { title: "电影全集", type: "zip" },
  { title: "java从入门到入土", type: "pdf" },
  { title: "电影全集", type: "zip" },
  { title: "java从入门到入土", type: "pdf" },
  { title: "电影全集", type: "zip" },
  { title: "java从入门到入土", type: "pdf" },
  { title: "电影全集", type: "zip" },
  { title: "java从入门到入土", type: "pdf" },
  { title: "电影全集", type: "zip" },
]);
</script>

<style lang="scss" scoped>
.file-header {
  width: 100%;
  height: 100px;

  // 功能区
  .func-area {
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    background: #fff;
    justify-content: space-between;

    // 功能菜单
    .func-menu {
      display: flex;

      .func-item {
        display: flex;
        align-items: center;
        padding-right: 10px;
      }
    }
  }

  .nav-area {
    display: flex;
    justify-content: space-between;
    height: 50px;
    padding: 0 10px;
    border-top: 1px solid #f4f5f7;
    border-bottom: 1px solid #f4f5f7;

    .nav-left {
      display: flex;
      align-items: center;
    }

    .nav-right {
      display: flex;
      align-items: center;
    }
  }
}

// 底部文件区域
.main-area {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  .app-item {
    position: relative;
    width: 130px;
    height: 130px;
    border-radius: 8px;
    border: 1px solid black;
    margin-bottom: 10px;
    margin-right: 15px;
    margin-left: 20px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }

    &:nth-child(7n + 1) {
      margin-left: 0px;
    }

    .checkbox-style {
      position: absolute;
      left: 5px;
      top: 5px;
      cursor: pointer;

      .checkbox-inner::after {
        content: "";
        display: table;
        width: 16px;
        height: 16px;
        border: 1px solid rgba(0, 0, 0, 0.1);
      }

      .checkbox-input {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
