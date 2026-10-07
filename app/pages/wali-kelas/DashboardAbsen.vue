<template>
  <!-- Content -->
  <main class="content">
    <div class="student-list">
      <!-- Siswa 1 -->
      <div class="student-wrapper">
        <div class="student-row">
          <div class="row-item student-number">1</div>

          <div class="row-item student-name">Nama Siswa</div>

          <div class="row-item student-status" @click="showStatus(1)">▼</div>

          <div class="row-item student-description">
            {{ statusSiswa[1] }}
          </div>
        </div>

        <!-- Dropdown Siswa 1 -->
        <div v-if="statusInfo === 1" class="card-status">
          <div class="status-option" @click="setStatus(1, 'Hadir')">Hadir</div>

          <div class="status-option" @click="setStatus(1, 'Sakit')">Sakit</div>

          <div class="status-option" @click="setStatus(1, 'Izin')">Izin</div>

          <div class="status-option" @click="setStatus(1, 'Alfa')">Alfa</div>
        </div>
      </div>

      <!-- Siswa 2 -->
      <div class="student-wrapper">
        <div class="student-row">
          <div class="row-item student-number">2</div>

          <div class="row-item student-name">Nama Siswa</div>

          <div class="row-item student-status" @click="showStatus(2)">▼</div>

          <div class="row-item student-description">
            {{ statusSiswa[2] }}
          </div>
        </div>

        <!-- Dropdown Siswa 2 -->
        <div v-if="statusInfo === 2" class="card-status">
          <div class="status-option" @click="setStatus(2, 'Hadir')">Hadir</div>

          <div class="status-option" @click="setStatus(2, 'Sakit')">Sakit</div>

          <div class="status-option" @click="setStatus(2, 'Izin')">Izin</div>

          <div class="status-option" @click="setStatus(2, 'Alfa')">Alfa</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
definePageMeta({
  layout: "dashboard",
});
</script>

<script>
export default {
  data() {
    return {
      // ID siswa yang dropdown-nya sedang terbuka
      statusInfo: null,

      // Status masing-masing siswa
      statusSiswa: {
        1: "Hadir",
        2: "Sakit",
      },
    };
  },

  methods: {
    showStatus(id) {
      // Kalau dropdown yang sama diklik lagi,
      // dropdown ditutup
      if (this.statusInfo === id) {
        this.statusInfo = null;
      } else {
        // Buka dropdown siswa yang dipilih
        this.statusInfo = id;
      }
    },

    setStatus(id, status) {
      // Mengubah status siswa
      this.statusSiswa[id] = status;

      // Tutup dropdown setelah memilih status
      this.statusInfo = null;
    },
  },
};
</script>

<style scoped>
body {
  font-family: "Poppins", sans-serif;
}

.page {
  position: relative;

  font-family: "Poppins", sans-serif;

  min-height: 100vh;
  min-height: 100dvh;

  padding: 16px;

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

/* Header */
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

  font-weight: bold;

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

/* Content */

.content {
  position: relative;
  z-index: 1;

  margin: 23px auto 0;
}

.student-list {
  width: 100%;
}

/* Wrapper setiap siswa */

.student-wrapper {
  position: relative;

  margin-bottom: 6px;
}

.student-wrapper:last-child {
  margin-bottom: 0;
}

/* Baris siswa */

.student-row {
  display: grid;

  grid-template-columns: 42px 1fr 42px 300px;

  gap: 6px;
}

.student-row .row-item {
  display: flex;
  align-items: center;

  height: 40px;

  border-radius: 5px;

  background: linear-gradient(90deg, #5f5a63 0%, #918b95 100%);

  border: 2px solid #010101;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);

  color: #fff;
}

/* Nomor siswa */

.student-row .row-item.student-number {
  justify-content: center;

  font-weight: bold;
}

/* Nama siswa */

.student-row .row-item.student-name {
  padding-left: 24px;
}

/* Status dropdown button */

.student-row .row-item.student-status {
  justify-content: center;

  font-size: 24px;

  color: #010101;

  cursor: pointer;

  user-select: none;
}

/* Keterangan */

.student-row .row-item.student-description {
  justify-content: center;

  font-size: 14px;
}

.student-wrapper {
  position: relative;
  margin-bottom: 6px;
}

.card-status {
  position: absolute;

  /* posisi dropdown */
  top: 0;
  right: 354px;

  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 4px;

  width: 100px;

  background: #fff;

  border: 2px solid #010101;
  border-radius: 5px;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  overflow: hidden;

  z-index: 10;
}

.status-option {
  display: flex;
  justify-content: center;
  align-items: center;

  /* margin: 6px 0; */

  height: 30px;

  border-radius: 4px;

  font-size: 13px;
  color: #fff;

  cursor: pointer;
}

/* Hadir */
.status-option:nth-child(1) {
  background: #918b95;
}

/* Sakit */
.status-option:nth-child(2) {
  background: #f2cc19;
  color: #222;
}

/* Alfa */
.status-option:nth-child(3) {
  background: #24182f;
}

/* Izin */
.status-option:nth-child(4) {
  background: #ffd76c;
  color: #222;
}

.status-option:hover {
  filter: brightness(0.9);
}
</style>
