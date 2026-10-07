<template>
  <div class="page">
    <DashboardHeader />

    <main class="dashboard-content">
      <slot />
    </main>
  </div>
</template>

<script setup>
import DashboardHeader from "~/components/dashboard/DashboardHeader.vue";
</script>

<style scoped>
.page {
  position: relative;

  min-height: 100vh;
  min-height: 100dvh;

  padding: 16px;

  font-family: "Poppins", sans-serif;

  overflow: hidden;

  background: linear-gradient(
    90deg,
    #ffffff 0%,
    #ffffff 40%,
    #f1f0f2 40%,
    #f1f0f2 41%,
    #ffffff 41%
  );
}

.page::before {
  content: "";

  position: absolute;

  left: -100px;
  bottom: 0;

  width: 350px;
  height: 220px;

  background: #f1f0f2;

  border-radius: 0 100% 0 0;

  opacity: 0.7;

  z-index: 0;
}

.dashboard-content {
  position: relative;

  z-index: 1;
}
</style>