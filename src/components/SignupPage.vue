<template>
  <div class="signup-page">
    <div class="signup-container">
      <h2>Sign Up</h2>
      <form @submit.prevent="handleSignup">
        <div class="input-group">
          <label for="username">Username</label>
          <input type="text" v-model="username" placeholder="Enter your username" required />
        </div>
        <div class="input-group">
          <label for="email">Email</label>
          <input type="email" v-model="email" placeholder="Enter your email" required />
        </div>
        <div class="input-group">
          <label for="role">Role</label>
          <select 
            v-model="role" 
            required 
            @focus="showRoleHint = true" 
            @blur="showRoleHint = false"
          >
            <option value="" disabled>Select your role</option>
            <option value="admin">Admin</option>
            <option value="instructor">Instructor</option>
            <option value="student">Student</option>
          </select>
          <div class="role-hint" v-if="showRoleHint">
            Please select your role: Admin, Instructor, or Student.
          </div>
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input 
            type="password" 
            v-model="password" 
            placeholder="Enter your password" 
            @focus="showHint = true" 
            @blur="showHint = false"
            required 
          />
          <div class="password-hint" v-if="showHint">
            Password must be at least 8 characters long, and include at least one uppercase letter, 
            one lowercase letter, one number, and one special character.
          </div>
          <span v-if="passwordError" class="error">{{ passwordError }}</span>
        </div>
        <div class="input-group">
          <label for="password2">Confirm Password</label>
          <input 
            type="password" 
            v-model="password2" 
            placeholder="Confirm your password" 
            required 
          />
          <span v-if="password2Error" class="error">{{ password2Error }}</span>
        </div>
        <button type="submit" class="signup-button">Sign Up</button>
      </form>
      <p id="message" v-if="message">{{ message }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const username = ref("");
const email = ref("");
const role = ref("");
const password = ref("");
const password2 = ref("");
const message = ref("");
const passwordError = ref("");
const password2Error = ref("");
const showHint = ref(false);
const showRoleHint = ref(false);
const router = useRouter();

const isSubmitting = ref(false);

// Google login related refs
const googleMessage = ref("");
const isGoogleLoading = ref(false);

const handleSignup = async () => {
  if (isSubmitting.value) return; // Prevent multiple submissions

  if (!validatePassword(password.value)) {
    passwordError.value = "Password does not meet the requirements.";
    return;
  }

  if (password.value !== password2.value) {
    password2Error.value = "Passwords do not match.";
    return;
  }

  passwordError.value = "";
  password2Error.value = "";
  message.value = "";
  isSubmitting.value = true;

  try {
    const response = await fetch('http://127.0.0.1:8000/api/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username.value,
        email: email.value,
        password: password.value,
        password2: password2.value,
        role: role.value
      })
    });

    const data = await response.json();

    if (response.ok) {
      message.value = "Signup successful! Redirecting...";
      setTimeout(() => {
        router.push("/login");
      }, 1500);
    } else {
      // Show detailed error messages if available
      if (typeof data.error === 'string') {
        message.value = data.error;
      } else if (typeof data.error === 'object') {
        // If error is an object with multiple messages, join them
        message.value = Object.values(data.error).flat().join(' ');
      } else {
        message.value = "Signup failed. Please try again.";
      }
    }
  } catch (error) {
    console.error("Signup error:", error);
    message.value = "Network error. Please try again.";
  } finally {
    isSubmitting.value = false;
  }
};

// Google login handler
const handleGoogleLogin = async () => {
  if (isGoogleLoading.value) return;
  isGoogleLoading.value = true;
  googleMessage.value = "";

  try {
    // Assuming Google API client is loaded and gapi.auth2 is initialized
    const auth2 = window.gapi.auth2.getAuthInstance();
    const googleUser = await auth2.signIn();
    const id_token = googleUser.getAuthResponse().id_token;

    const response = await fetch('http://127.0.0.1:8000/api/google-login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token: id_token })
    });

    const data = await response.json();

    if (response.ok) {
      googleMessage.value = "Google login successful! Redirecting...";
      // Save tokens or handle login state as needed
      setTimeout(() => {
        router.push("/dashboard"); // or appropriate route after login
      }, 1500);
    } else {
      googleMessage.value = data.detail || "Google login failed. Please try again.";
    }
  } catch (error) {
    console.error("Google login error:", error);
    googleMessage.value = "Google login error. Please try again.";
  } finally {
    isGoogleLoading.value = false;
  }
};

const validatePassword = (password) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(password);
};
</script>

<style src="../assets/signup.css"></style>

<template>
  <div class="signup-page">
    <div class="signup-container">
      <h2>Sign Up</h2>
      <form @submit.prevent="handleSignup">
        <div class="input-group">
          <label for="username">Username</label>
          <input type="text" v-model="username" placeholder="Enter your username" required />
        </div>
        <div class="input-group">
          <label for="email">Email</label>
          <input type="email" v-model="email" placeholder="Enter your email" required />
        </div>
        <div class="input-group">
          <label for="role">Role</label>
          <select 
            v-model="role" 
            required 
            @focus="showRoleHint = true" 
            @blur="showRoleHint = false"
          >
            <option value="" disabled>Select your role</option>
            <option value="admin">Admin</option>
            <option value="instructor">Instructor</option>
            <option value="student">Student</option>
          </select>
          <div class="role-hint" v-if="showRoleHint">
            Please select your role: Admin, Instructor, or Student.
          </div>
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input 
            type="password" 
            v-model="password" 
            placeholder="Enter your password" 
            @focus="showHint = true" 
            @blur="showHint = false"
            required 
          />
          <div class="password-hint" v-if="showHint">
            Password must be at least 8 characters long, and include at least one uppercase letter, 
            one lowercase letter, one number, and one special character.
          </div>
          <span v-if="passwordError" class="error">{{ passwordError }}</span>
        </div>
        <div class="input-group">
          <label for="password2">Confirm Password</label>
          <input 
            type="password" 
            v-model="password2" 
            placeholder="Confirm your password" 
            required 
          />
          <span v-if="password2Error" class="error">{{ password2Error }}</span>
        </div>
        <button type="submit" class="signup-button">Sign Up</button>
      </form>

      <div class="google-login">
        <button @click="handleGoogleLogin" :disabled="isGoogleLoading">
          Sign in with Google
        </button>
        <p v-if="googleMessage">{{ googleMessage }}</p>
      </div>

      <p id="message" v-if="message">{{ message }}</p>
    </div>
  </div>
</template>

<style src="../assets/signup.css"></style>
