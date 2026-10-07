<template>
  <div class="content">
    <!-- Ringkasan -->
    <div class="summary-section">
      <div class="data-row">
        <div class="row-item">
          <div class="item-title">
            <h3>Jumlah Siswa</h3>
          </div>
          <div class="item-value">30</div>
        </div>

        <div class="row-item">
          <div class="item-title">
            <h3>Total Hadir/Masuk</h3>
          </div>
          <div class="item-value">25</div>
        </div>

        <div class="row-item">
          <div class="item-title">
            <h3>Total Tidak Hadir</h3>
          </div>
          <div class="item-value">5</div>
        </div>
      </div>
    </div>

    <!-- Filter -->
    <div class="filter-section">
      <!-- Jurusan -->
      <div class="filter-item major-filter">
        <h3 class="filter-title">Jurusan</h3>

        <div class="major-list">
          <button>Rekayasa Perangkat Lunak</button>
          <button>Teknik Energi Terbarukan</button>
          <button>Akuntansi dan Keuangan Lembaga</button>
          <button>Teknik Elektronika Industri</button>
        </div>
      </div>

      <!-- Kelas -->
      <div class="filter-item grade-filter">
        <h3 class="filter-title">Kelas</h3>

        <div class="grade-list">
          <button>10</button>
          <button>11</button>
          <button>12</button>
        </div>
      </div>

      <!-- Daftar Kelas -->
      <div class="filter-item class-filter">
        <h3 class="filter-title">Kelas</h3>

        <div class="class-list">
          <div class="class-item">
            <span class="class-number">10</span>
            <span class="class-name">Rekayasa Perangkat Lunak 1</span>
            <button>Pilih</button>
          </div>

          <div class="class-item">
            <span class="class-number">10</span>
            <span class="class-name">Rekayasa Perangkat Lunak 2</span>
            <button>Pilih</button>
          </div>

          <div class="class-item">
            <span class="class-number">10</span>
            <span class="class-name">Rekayasa Perangkat Lunak 3</span>
            <button>Pilih</button>
          </div>

          <div class="class-item">
            <span class="class-number">10</span>
            <span class="class-name">Rekayasa Perangkat Lunak 4</span>
            <button>Pilih</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "dashboard",
});
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
}

.page {
  position: relative;

  font-family: "Poppins", sans-serif;

  min-height: 100vh;
  min-height: 100dvh;

  padding: 16px;

  /* padding: 8px 12px; */

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

/* Bentuk background */
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

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 16px;

  height: 68px;

  border-radius: 0 0 5px 5px;

  background: linear-gradient(90deg, #ffd76c, #f2cc19);

  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
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

  font-weight: bold;

  border-radius: 5px;

  background-color: #222;
  color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
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

/* Content */
.content {
  margin: 23px auto 0;
}

/* Summary */
.data-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
}

.data-row .row-item {
  flex: 1 1 400px;
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  padding: 12px 16px;
  height: 130px;

  border-radius: 5px;
  border: 2px solid #010101;

  background: linear-gradient(90deg, #5f5a63 0%, #918b95 100%);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);

  color: #fff;
}

.row-item .item-title h3 {
  margin: 0;
  font-size: 16px;
}

.row-item .item-value {
  margin-top: 8px;

  font-size: 48px;
  font-weight: bold;
}

/* Filter */
.filter-section {
  display: flex;
  flex-direction: row;
  gap: 12px;

  margin-top: 60px;
}

.filter-item {
  padding: 8px;

  border: 2px solid #010101;
  border-radius: 5px;

  background: linear-gradient(90deg, #5f5a63 0%, #918b95 100%);

  color: #fff;
}

.major-filter {
  flex: 1.2;
}

.grade-filter {
  flex: 0.2;
}

.class-filter {
  flex: 1.6;
}
.filter-title {
  /* margin: 0 0 8px; */
  margin-bottom: 24px;

  font-size: 14px;
}

/* Jurusan */
.major-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
  /* flex: 1 1 400px; */
}

.major-list button {
  width: 100%;
  height: 40px;

  border: 1px solid #010101;
  border-radius: 5px;

  background: #e5e1e7;

  font-family: inherit;
  font-size: 14px;

  cursor: pointer;
}

/* Daftar Kelas */
.grade-list {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 6px;

  height: 80%;
}

.grade-list button {
  width: 100%;
  height: 40px;

  border: 1px solid #010101;
  border-radius: 5px;

  background: #e5e1e7;

  font-family: inherit;
  font-size: 12px;

  cursor: pointer;
}

/* Detail Kelas */
.class-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.class-item {
  display: grid;
  grid-template-columns: 40px 1fr 100px;
  align-items: center;
  gap: 6px;

  height: 40px;
}

.class-number,
.class-name {
  display: flex;
  align-items: center;

  height: 100%;

  border: 1px solid #010101;
  border-radius: 5px;

  background: #e5e1e7;

  color: #222;
  font-size: 14px;
}

.class-number {
  justify-content: center;
}

.class-name {
  padding: 0 8px;
}

.class-item button {
  height: 100%;

  border: 1px solid #010101;
  border-radius: 5px;

  background: #ffd85c;

  font-family: inherit;
  font-size: 14px;

  cursor: pointer;
}
</style>
