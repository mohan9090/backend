// filepath: d:\LMS PROJECT\LMS(Project) (1)\LMS(Project)\project\src\components\LoginPage.vue
<script setup lang="ts">
import { ref, onMounted } from "vue";

import { useRouter } from "vue-router";
import axios from "axios";
import "../assets/login.css"; // Ensure this path is correct

const email = ref("");
const password = ref("");
const router = useRouter();

const handleLogin = async () => {
  if (!email.value || !password.value) {
    alert("Please enter both email and password.");
    return;
  }
  console.log("Attempting login with:", email.value, password.value);
  try {
    const response = await axios.post("http://127.0.0.1:8000/api/login/", {
      email: email.value,
      password: password.value,
    });
    console.log("Login response:", response.data);
    const data = response.data;
    localStorage.setItem("access_token", data.access);
    localStorage.setItem("refresh_token", data.refresh);
    localStorage.setItem("user_role", data.role);
    alert("Login successful!");
    router.push("/dashboard");
  } catch (error) {
    console.error("Login error:", error);
    if (axios.isAxiosError(error) && error.response) {
      alert(`Login failed: ${error.response.data.error || "Unknown error"}`);
    } else {
      alert("Login failed: Network or server error");
    }
  }
};

declare global {
  interface Window {
    google: any;
  }
}

const handleGoogleLogin = () => {
  if (!window.google) {
    console.error("Google API not loaded");
    alert("Google API not loaded");
    return;
  }
  console.log("Google API loaded successfully");
  window.google.accounts.id.initialize({
    client_id: "YOUR_NEW_CLIENT_ID_HERE",
    callback: async (response: any) => {
      console.log("Google login response:", response);
      try {
        const token = response.credential;
        const res = await axios.post("http://127.0.0.1:8000/api/google-login/", { token });
        console.log("Google login API response:", res.data);
        const data = res.data;
        localStorage.setItem("access_token", data.access);
        localStorage.setItem("refresh_token", data.refresh);
        localStorage.setItem("user_role", data.role);
        alert("Google login successful!");
        router.push("/dashboard");
      } catch (error) {
        console.error("Google login error:", error);
        if (axios.isAxiosError(error) && error.response) {
          alert(`Google login failed: ${error.response.data.detail || "Unknown error"}`);
        } else {
          alert("Google login failed: Network or server error");
        }
      }
    },
  });
  window.google.accounts.id.prompt();
};
</script>

<template>
  <div class="login-page">  <!-- Ensuring correct background color -->
    <div class="main-content">
      <div class="left-section">
        <img src="/edusync1.jpg" alt="EduSync Logo" class="main-logo" />
      </div>
      <div class="right-section">
        <div class="login-container">
          <h2 class="login-title">Login</h2>
          <form @submit.prevent="handleLogin">
            <div class="input-group">
              <input type="email" v-model="email" placeholder="Enter your email" required />
            </div>
            <div class="input-group">
              <input type="password" v-model="password" placeholder="Enter your password" required />
            </div>
            <div class="forgot-password">
              <router-link to="/forgotpassword" class="nav-link">Forgot Password?</router-link>
            </div>
            <button type="submit" class="login-button">Login</button>
          </form>
          <button class="google-button" @click="handleGoogleLogin()">
            <img src="/GoogleIcon.png" alt="Google Icon" class="google-icon" />
            Login with Google
          </button>
          <div class="signup-linkl">
            Don't have an account?
            <router-link to="/signup" class="nav-link">Sign Up</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
