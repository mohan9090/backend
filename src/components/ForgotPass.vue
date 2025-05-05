<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const router = useRouter();

const resetPassword = () => {
  if (!email.value) {
    alert("Please enter your email.");
    return;
  }
  alert(`Password reset link sent to ${email.value}`);
};
</script>

<template>
  <div class="forgot-password-page">
    <div class="forgot-password-container">
      <h2>Forgot Password</h2>
      <p>Enter your email below to change your password.</p>
      <form @submit.prevent="resetPassword">
        <input type="email" v-model="email" placeholder="Your e-mail address" required />
        <button type="submit">Reset password</button>
      </form>
      <router-link to="/login" class="back-link">&lt; Back to login</router-link>
    </div>
  </div>
</template>

<style scoped src="../assets/Forgotpass.css"></style>
