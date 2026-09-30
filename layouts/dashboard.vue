<template>
  <div class="dashboard-layout">
    <DashboardHeader name="NAME" />

    <main class="dashboard-content">
      <slot />
    </main>
  </div>
</template>

<script setup>
import DashboardHeader from "../components/dahsboard/DashboardHeader.vue";
</script>

<style scoped>
.dashboard-layout {
  min-height: 100vh;
  min-height: 100dvh;

  background: #1f1f1f;

  padding: 20px;
}

.dashboard-content {
  width: 100%;
  min-height: calc(100vh - 40px);

  background: #ffffff;

  overflow: hidden;
}
</style>
