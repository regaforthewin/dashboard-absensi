<template>
  <div class="login-page">
    <div class="login-container">
      <!-- Header -->
      <div class="welcome-header">
        <h1>WELCOME</h1>
      </div>

      <!-- Background decoration -->
      <div class="decoration decoration-left"></div>
      <div class="decoration decoration-right"></div>

      <!-- Login -->
      <div class="login-content">
        <!-- User Icon -->
        <div class="user-icon">
          <div class="user-head"></div>
          <div class="user-body"></div>
        </div>

        <form class="login-form" @submit.prevent="handleLogin">
          <!-- Username -->
          <div class="form-group">
            <label for="username">Username:</label>

            <div class="input-wrapper">
              <input
                id="username"
                v-model="username"
                type="text"
                placeholder="Masukan Username"
              />

              <span class="input-icon">♙</span>
            </div>
          </div>

          <!-- Password -->
          <div class="form-group">
            <label for="password">Password</label>

            <div class="input-wrapper">
              <input
                id="password"
                v-model="password"
                type="password"
                placeholder="Masukan Password"
              />

              <span class="input-icon">🔒</span>
            </div>
          </div>

          <!-- Role -->
          <div class="login-options">
            <button type="button" @click="role = 'admin'">
              Log in as <span>admin</span>
            </button>

            <button type="button" @click="role = 'guru-piket'">
              Log in as <span>guru piket</span>
            </button>
          </div>

          <!-- Login Button -->
          <button type="submit" class="login-button">Log In</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      role: "",
    };
  },

  methods: {
    handleLogin() {
      console.log("Username:", this.username);
      console.log("Password:", this.password);
      console.log("Role:", this.role);
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Poppins", sans-serif;
}

body {
  overflow-y: hidden;
}

.login-page {
  width: 100%;
  height: 100dvh;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow-y: hidden;
}

.login-container {
  position: relative;

  width: 100%;
  height: 100dvh;

  overflow-y: hidden;

  background: #ffffff;
}

/* =========================
   HEADER
========================= */

.welcome-header {
  position: relative;
  z-index: 5;

  height: 68px;

  margin: 14px 15px 0;
  padding: 0 16px;

  display: flex;
  align-items: center;

  border-radius: 0 0 5px 5px;

  background: linear-gradient(90deg, #ffd76c, #f2cc19);

  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
}

.welcome-header h1 {
  margin: 0;

  color: #222;

  font-size: 24px;
  font-weight: 700;
}

/* =========================
   DECORATION
========================= */

.decoration {
  position: absolute;

  background: linear-gradient(135deg, #ffffff, #e7e4eb);
}

.decoration-left {
  top: 102px;
  left: 15px;

  width: 350px;
  height: 180px;

  border-radius: 0 0 10px 0;
}

.decoration-right {
  top: 255px;
  right: 15px;

  width: 340px;
  height: 340px;

  border-radius: 12px 0 0 0;
}

/* =========================
   LOGIN CONTENT
========================= */

.login-content {
  position: relative;
  z-index: 3;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 80px;
}

/* =========================
   USER ICON
========================= */

.user-icon {
  position: relative;

  width: 160px;
  height: 160px;

  border-radius: 50%;

  background: linear-gradient(135deg, #6e607c, #9a8baa);

  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.25);
}

.user-icon::before {
  content: "";

  position: absolute;

  top: 8px;
  left: 8px;

  width: 132px;
  height: 132px;

  border: 7px solid #ffffff;
  border-radius: 50%;
}

.user-head {
  position: absolute;

  top: 30px;
  left: 55px;

  width: 50px;
  height: 50px;

  border-radius: 50%;

  background: #ffffff;
}

.user-body {
  position: absolute;

  bottom: 30px;
  left: 40px;

  width: 80px;
  height: 42px;

  border-radius: 50px 50px 0 0;

  background: #ffffff;
}

/* =========================
   FORM  
========================= */

.login-form {
  width: 500px;

  margin-top: 8px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;

  margin-bottom: 5px;

  color: #333;

  font-size: 14px;
}

/* =========================
   INPUT
========================= */

.input-wrapper {
  position: relative;
}

.input-wrapper input {
  width: 100%;
  height: 50px;

  padding: 0 42px 0 18px;

  border: none;
  border-radius: 5px;

  outline: none;

  color: #ffffff;

  background: linear-gradient(90deg, #9689a1, #75647f);

  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.3),
    inset 0 0 0 1px rgba(255, 255, 255, 0.2);

  font-size: 14px;
}

.input-wrapper input::placeholder {
  color: #e6e2e8;
}

.input-wrapper input:focus {
  box-shadow:
    0 0 0 2px rgba(120, 102, 135, 0.25),
    0 4px 6px rgba(0, 0, 0, 0.3);
}

.input-icon {
  position: absolute;

  top: 50%;
  right: 12px;

  transform: translateY(-50%);

  font-size: 16px;

  opacity: 0.7;
}

/* =========================
   ROLE
========================= */

.login-options {
  display: flex;
  justify-content: space-between;

  margin-top: -3px;
}

.login-options button {
  padding: 0;

  border: none;

  background: transparent;

  color: #777;

  font-size: 12px;

  cursor: pointer;
}

.login-options button span {
  text-decoration: underline;
}

/* =========================
   LOGIN BUTTON
========================= */

.login-button {
  display: block;

  width: 110px;
  height: 44px;

  margin: 8px auto 0;

  border: none;
  border-radius: 6px;

  color: #ffffff;

  background: #8a7895;

  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.25);

  font-size: 14px;
  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;
}

.login-button:hover {
  background: #796783;
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width: 600px) {
  .login-page {
    padding: 10px;
  }

  .login-container {
    min-height: 620px;
  }

  .login-form {
    width: calc(100% - 40px);
    max-width: 342px;
  }

  .user-icon {
    width: 125px;
    height: 125px;
  }

  .user-icon::before {
    width: 95px;
    height: 95px;
  }

  .user-head {
    top: 30px;
    left: 46px;

    width: 33px;
    height: 33px;
  }

  .user-body {
    bottom: 23px;
    left: 32px;

    width: 61px;
    height: 37px;
  }
}
</style>
