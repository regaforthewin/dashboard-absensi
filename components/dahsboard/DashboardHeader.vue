<template>
  <header class="header">
    <div class="header-actions">
      <div class="back-button">
        <span class="material-symbols-outlined">
          arrow_back
        </span>
      </div>
    </div>

    <div class="header-actions">
      <span class="material-symbols-outlined logout-icon">
        logout
      </span>

      <div class="profil-background">
        <span class="material-symbols-outlined">
          account_circle
        </span>
      </div>
    </div>
  </header>
</template>

<script setup>
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 16px;

  height: 68px;

  border-radius: 0 0 5px 5px;

  background: linear-gradient(90deg, #ffd76c, #f2cc19);

  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);

  position: relative;
  z-index: 2;
}

.header-actions {
  display: flex;
  align-items: center;

  gap: 12px;
}

.back-button {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  border-radius: 5px;

  background-color: #222;
  color: #fff;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);

  cursor: pointer;
}

.logout-icon {
  font-size: 36px;

  transform: rotate(180deg);

  cursor: pointer;
}

.profil-background {
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 3px 4px;

  border-radius: 50%;

  background: #91849d;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
}

.profil-background span {
  font-size: 44px;

  color: #fff;
}
</style>