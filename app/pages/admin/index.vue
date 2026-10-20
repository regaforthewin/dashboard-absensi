<template>
  <div class="page">
    <!-- =========================
         HEADER
    ========================== -->
    <header class="header">
      <h1>WELCOME Admin</h1>

      <div class="header-actions">
        <span
          class="material-symbols-outlined"
          style="font-size: 36px; transform: rotate(180deg)"
        >
          logout
        </span>
        <div class="profil-background">
          <span class="material-symbols-outlined"> account_circle </span>
        </div>
      </div>
    </header>

    <!-- =========================
         MAIN CONTENT
    ========================== -->
    <main class="content">
      <!-- =========================
           KALENDER
      ========================== -->
      <section class="calendar-section">
        <div class="calendar-card">
          <!-- Icon Kalender -->
          <div class="calendar-icon">
            <div class="calendar-ring ring-1"></div>
            <div class="calendar-ring ring-2"></div>
            <div class="calendar-ring ring-3"></div>
            <div class="calendar-ring ring-4"></div>

            <div class="calendar-body">
              <div class="calendar-month">JUL</div>

              <div class="calendar-day">17</div>
            </div>
          </div>

          <!-- Tanggal -->
          <div class="calendar-date">
            <p>September</p>
            <p>19/9/2026</p>
          </div>

          <!-- Footer Kalender -->
          <div class="calendar-footer">
            <span>KALENDER</span>

            <button>EDIT KALENDER</button>
          </div>
        </div>
      </section>

      <!-- =========================
           RIGHT SECTION
      ========================== -->
      <section class="right-section">
        <!-- =========================
             CUSTOMER SERVICE
        ========================== -->
        <div class="customer-card">
          <div class="customer-title">
            <span class="customer-icon"> ◉ </span>

            <span> Customer Service </span>
          </div>

          <div class="customer-content">
            <p>
              Apabila ada kendala dengan website ini, silahkan langsung hubungi
              kami.
            </p>

            <form action="">
              <input type="text" placeholder="Ketik Disini" />
              <button>Kirim</button>
            </form>
            <!-- <button>Ketik disini</button> -->
          </div>
        </div>

        <!-- =========================
             KELAS
        ========================== -->
        <div class="class-card">
          <div class="class-icon">♧</div>

          <h2>Kelas</h2>

          <div class="class-button">
            <span> Tabel Kelas dan Siswa </span>

            <span class="table-icon"> ▦ </span>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
  middleware: "auth",
});
</script>

<style scoped>
/* =========================
   RESET
========================= */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* =========================
   PAGE
========================= */

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

/* =========================
   HEADER
========================= */

.header {
  position: relative;
  z-index: 5;

  height: 68px;

  /* margin: 14px 15px 0; */
  padding: 0 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 0 0 5px 5px;

  background: linear-gradient(90deg, #ffd76c, #f2cc19);

  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
}

/* Welcome */

.header h1 {
  margin: 0;

  color: #222;

  font-size: 16px;
  font-weight: 700;
}

/* =========================
   HEADER ACTION
========================= */

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

  /*width: 40px;
  height: 40px; */
  padding: 3px 4px;

  border-radius: 50%;

  background: #91849d;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
}

.profil-background span {
  font-size: 44px;
  color: #fff;
}

/* =========================
   CONTENT
========================= */

.content {
  position: relative;
  z-index: 2;

  display: flex;

  width: 90%;

  /* max-width: 850px; */

  height: 400px;

  margin: 23px auto 0;

  gap: 8px;
}

/* =========================
   CALENDAR
========================= */

.calendar-section {
  width: 51%;
}

/* Card */

.calendar-card {
  position: relative;

  height: 500px;

  padding: 25px 22px;

  border-radius: 4px;

  background: linear-gradient(135deg, #9688a0, #71637d);

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
}

/* =========================
   CALENDAR ICON
========================= */

.calendar-icon {
  position: relative;

  width: 234px;
  height: 245px;

  margin: 0 auto;
}

/* Bagian badan kalender */

.calendar-body {
  position: absolute;

  left: 15px;
  top: 45px;

  width: 204px;
  height: 195px;

  overflow: hidden;

  border: 3px solid #70617b;
  border-radius: 4px;

  background: #ddd7e2;
}

/* Header bulan */

.calendar-month {
  height: 47px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #897a94;

  color: #eee9f0;

  font-size: 26px;
  font-weight: 700;
}

/* Angka */

.calendar-day {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 65px;

  color: #75667f;

  margin-top: 10px;

  font-size: 49px;
  font-weight: 700;
}

/* Ring kalender */

.calendar-ring {
  position: absolute;

  top: 30px;

  width: 16px;
  height: 27px;

  border: 3px solid #75667f;

  border-radius: 50%;

  background: #ddd7e2;

  z-index: 2;
}

.ring-1 {
  left: 25px;
}

.ring-2 {
  left: 48px;
}

.ring-3 {
  left: 71px;
}

.ring-4 {
  left: 94px;
}

/* =========================
   CALENDAR DATE
========================= */

.calendar-date {
  position: absolute;

  left: 22px;
  bottom: 55px;
}

.calendar-date p {
  margin: 0;

  color: #fff;

  font-size: 18px;
  font-weight: 500;
}

/* =========================
   CALENDAR FOOTER
========================= */

.calendar-footer {
  position: absolute;

  left: 22px;
  right: 22px;
  bottom: 9px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.calendar-footer span {
  color: white;

  font-size: 18px;
}

.calendar-footer button {
  /* height: 12px; */

  padding: 8px 16px;

  border: none;
  border-radius: 4px;

  background: #f2cc19;

  color: #222;

  font-size: 12px;
  font-weight: 600;

  cursor: pointer;
}

/* =========================
   RIGHT SECTION
========================= */

.right-section {
  width: 49%;

  display: flex;
  flex-direction: column;

  gap: 8px;
}

/* =========================
   CUSTOMER SERVICE
========================= */

.customer-card {
  /* position: relative; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  /* border: 1px solid red; */

  height: 200px;

  overflow: hidden;

  border-radius: 4px;

  background: linear-gradient(135deg, #70617c, #51435e);

  color: white;
}

/* Lingkaran dekorasi */

.customer-card::before {
  content: "";

  position: absolute;

  right: -40px;
  top: -60px;

  width: 190px;
  height: 190px;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.08);
}

/* Title */

.customer-title {
  position: relative;

  z-index: 2;

  display: flex;
  align-items: center;

  gap: 6px;

  /* padding: 8px; */

  font-size: 17px;
}

/* Icon */

.customer-icon {
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid white;
  border-radius: 50%;

  font-size: 18px;
}

/* Customer content */

.customer-content {
  /* position: absolute; */

  /* left: 8px; */
  bottom: 8px;

  width: 100%;
  /* border: 1px solid; */
}

.customer-content p {
  margin: 0 0 4px;

  font-size: 12px;

  line-height: 1.3;
}

.customer-content form {
  display: flex;
  /* justify-content: center; */
  align-items: center;
  gap: 6px;
  /* border: 1px solid; */
  width: 100%;
}

.customer-content form input {
  width: 100%;
  /* height: 20px; */
  padding: 10px 0;
  padding-left: 10px;

  border: none;
  border-radius: 2px;

  background: rgba(255, 255, 255, 0.25);

  color: white;

  font-size: 10px;

  text-align: left;
}

.customer-content input::placeholder {
  color: #ddd;
  font-size: 12px;
}

.customer-content form button {
  padding: 9px 0;
  width: 60px;
  border-radius: 4px;
  background: #f2cc19;
  color: #222;

  font-size: 12px;
  font-weight: 600;
  border: none;
}

/* =========================
   KELAS
========================= */

.class-card {
  position: relative;

  flex: 1;

  overflow: hidden;

  padding: 10px;

  border-radius: 4px;

  background: linear-gradient(135deg, #a093aa, #82748e);
}

/* Background decoration */

.class-card::before {
  content: "";

  position: absolute;

  left: -30px;
  bottom: -60px;

  width: 160px;
  height: 160px;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.12);
}

/* Class icon */

.class-icon {
  position: relative;

  color: rgba(255, 255, 255, 0.75);

  font-size: 60px;
}

/* Title */

.class-card h2 {
  position: absolute;

  top: 8px;
  right: 12px;

  margin: 0;

  color: white;

  font-size: 16px;
}

/* Button */

.class-button {
  position: absolute;

  left: 8px;
  right: 8px;
  bottom: 8px;

  /* height: 19px; */

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 6px 8px;

  border-radius: 4px;

  background: #f2cc19;

  color: #222;

  font-size: 12px;
  font-weight: 600;
}

/* Table icon */

.table-icon {
  font-size: 16px;
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width: 700px) {
  .content {
    width: 95%;

    height: auto;

    flex-direction: column;
  }

  .calendar-section,
  .right-section {
    width: 100%;
  }

  .calendar-card {
    height: 350px;
  }

  .right-section {
    height: 300px;
  }
}
</style>
