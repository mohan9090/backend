import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Signup from '../components/SignupPage.vue';
import Login from '../components/LoginPage.vue';
import ForgotPass from '../components/ForgotPass.vue';
import LandingPage from '../components/LandingPage.vue';
import About from '../components/About.vue';
import WhyChoose from '../components/WhyChoose.vue';
import internshipPage from '../components/internshipPage.vue';
import InternLandingPage from '../components/InternshipLandingPage.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/forgotpassword', component: ForgotPass },
  { path: '/dashboard', component: LandingPage },
  { path: '/about', component: About },
  { path: '/why-choose', component: WhyChoose },
  { path: '/internship', component: internshipPage },
  { path: '/internlanding', component: InternLandingPage},
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

