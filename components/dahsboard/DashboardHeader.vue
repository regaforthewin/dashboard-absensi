<template>
  <header class="dashboard-header">
    <!-- Nama / Welcome -->
    <div class="welcome">
      WELCOME <span>"{{ name }}"</span>
    </div>

    <!-- Action -->
    <div class="header-actions">
      <!-- Logout -->
      <button
        type="button"
        class="header-button logout-button"
        title="Logout"
        @click="handleLogout"
      >
        <span class="logout-icon">
          ↪
        </span>
      </button>

      <!-- Profile -->
      <button
        type="button"
        class="header-button profile-button"
        title="Profile"
        @click="handleProfile"
      >
        <span class="profile-icon">
          <span class="profile-head"></span>
          <span class="profile-body"></span>
        </span>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "DashboardHeader",

  props: {
    name: {
      type: String,
      default: "NAME",
    },
  },

  methods: {
    handleLogout() {
      console.log("Logout");
    },

    handleProfile() {
      console.log("Profile");
    },
  },
};
</script>

<style scoped>
/* =========================
   HEADER
========================= */

.dashboard-header {
  position: relative;
  z-index: 10;

  width: calc(100% - 30px);
  height: 68px;

  margin: 14px 15px 0;
  padding: 0 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 0 0 5px 5px;

  background: linear-gradient(
    90deg,
    #ffd76c,
    #f2cc19
  );

  box-shadow:
    0 3px 5px rgba(0, 0, 0, 0.3);
}

/* =========================
   WELCOME
========================= */

.welcome {
  color: #222;

  font-size: 24px;
  font-weight: 700;
  line-height: 1;
}

.welcome span {
  font-weight: 700;
}

/* =========================
   ACTION
========================= */

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.header-button {
  padding: 0;

  border: none;

  background: transparent;

  cursor: pointer;
}

/* =========================
   LOGOUT
========================= */

.logout-button {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 38px;
  height: 38px;
}

.logout-icon {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 28px;
  height: 28px;

  color: #333;

  font-size: 29px;
  font-weight: 700;

  line-height: 1;

  transform: rotate(180deg);

  transition: 0.2s;
}

.logout-button:hover .logout-icon {
  transform: rotate(180deg) translateX(2px);
}

/* =========================
   PROFILE
========================= */

.profile-button {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;
}

.profile-icon {
  position: relative;

  display: block;

  width: 43px;
  height: 43px;

  border-radius: 50%;

  background: linear-gradient(
    135deg,
    #6e607c,
    #9a8baa
  );

  box-shadow:
    0 3px 5px rgba(0, 0, 0, 0.25);
}

.profile-icon::before {
  content: "";

  position: absolute;

  top: 5px;
  left: 5px;

  width: 33px;
  height: 33px;

  border: 3px solid #ffffff;
  border-radius: 50%;
}

/* Kepala */

.profile-head {
  position: absolute;

  top: 11px;
  left: 15px;

  width: 13px;
  height: 13px;

  border-radius: 50%;

  background: #ffffff;
}

/* Badan */

.profile-body {
  position: absolute;

  bottom: 7px;
  left: 10px;

  width: 23px;
  height: 14px;

  border-radius: 20px 20px 0 0;

  background: #ffffff;
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width: 600px) {
  .dashboard-header {
    height: 60px;

    margin: 10px 10px 0;

    width: calc(100% - 20px);

    padding: 0 12px;
  }

  .welcome {
    font-size: 18px;
  }

  .header-actions {
    gap: 5px;
  }

  .logout-button {
    width: 32px;
    height: 32px;
  }

  .logout-icon {
    font-size: 24px;
  }

  .profile-button {
    width: 40px;
    height: 40px;
  }

  .profile-icon {
    width: 37px;
    height: 37px;
  }

  .profile-icon::before {
    top: 4px;
    left: 4px;

    width: 29px;
    height: 29px;

    border-width: 2px;
  }

  .profile-head {
    top: 9px;
    left: 13px;

    width: 11px;
    height: 11px;
  }

  .profile-body {
    bottom: 6px;
    left: 9px;

    width: 19px;
    height: 12px;
  }
}
</style>