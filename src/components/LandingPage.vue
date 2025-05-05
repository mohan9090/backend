<script setup lang="ts">
import { ref, onMounted } from "vue";
import "../assets/landing.css";
import "../assets/contactform.css";
import "../assets/twohoverpanel.css";
import "../assets/navbar.css";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const isMenuOpen = ref(false);
const activeDropdown = ref<string | null>(null);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
    activeDropdown.value = null;
  }
};

const closeMenu = () => {
  isMenuOpen.value = false;
  activeDropdown.value = null;
  document.body.style.overflow = '';
};

gsap.registerPlugin(ScrollTrigger)

const heroText = ref(null)
const heroImage = ref(null)

onMounted(() => {
  gsap.from(heroText.value, {
    scrollTrigger: {
      trigger: heroText.value,
      start: 'top 85%',
    },
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: 'power3.out',
  })

  gsap.from(heroImage.value, {
    scrollTrigger: {
      trigger: heroImage.value,
      start: 'top 85%',
    },
    opacity: 0,
    y: 80,
    duration: 1.5,
    ease: 'power3.out',
    delay: 0.2,
  })
})

const glowBox = ref<HTMLElement | null>(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        glowBox.value?.classList.add('glow-on-scroll')
        glowBox.value?.classList.remove('glow-off')
      } else {
        isVisible.value = false
        glowBox.value?.classList.remove('glow-on-scroll')
        glowBox.value?.classList.add('glow-off')
      }
    },
    { threshold: 0.4 }
  )

  if (glowBox.value) {
    observer.observe(glowBox.value)
  }
})

const toggleDropdown = (menu: string) => {
  activeDropdown.value = activeDropdown.value === menu ? null : menu;
};

const closeDropdown = (event: MouseEvent) => {
  if (!(event.target as HTMLElement).closest(".nav-item")) {
    activeDropdown.value = null;
  }
};

onMounted(() => {
  const container = document.querySelector(".scroll-container");
  container?.scrollTo({ left: 0, behavior: "instant" });
});

onMounted(() => {
  const container = document.querySelector(".scroll-container");
  container?.scrollTo({ left: 0, behavior: "instant" });

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      closeMenu();
    }
  };

  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const isNavClick = target.closest('.nav-item');
    const isHamburgerClick = target.closest('.hamburger');

    if (!isNavClick && !isHamburgerClick && isMenuOpen.value) {
      closeMenu();
    } else if (!isNavClick) {
      activeDropdown.value = null;
    }
  };

  document.addEventListener("keydown", handleEscape);
  document.addEventListener("click", handleClickOutside);

  return () => {
    document.removeEventListener("keydown", handleEscape);
    document.removeEventListener("click", handleClickOutside);
  };
});

function handleClick() {
  
}

</script>

<template>
  <div class="landing-page">
    <!-- Navbar -->
    <nav class="navbar">
      <RouterLink to="/dashboard">
        <div class="navbar-logo">
          <img src="/FinalLogo.png" alt="EduSync"></img>
        </div>
      </RouterLink>
      <div class="hamburger" @click.stop="toggleMenu" :class="{ open: isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="overlay" :class="{ show: isMenuOpen }" @click="closeMenu"></div>
      <ul class="nav-links" :class="{ 'show-menu': isMenuOpen }">
        <li class="nav-item" @click.stop="toggleDropdown('courses')">
          <a href="#">Courses</a>
          <svg class="caret" :class="{ open: activeDropdown === 'courses' }" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9" /></svg>
          <ul class="dropdown" :class="{ show: activeDropdown === 'courses' }">
            <li><a href="/internship">Web Development</a></li>
            <li><a href="/internship">Data Science</a></li>
            <li><a href="/internship">Machine Learning</a></li>
          </ul>
        </li>
        <li class="nav-item" @click.stop="toggleDropdown('analytics')">
          <a href="#">Analytics</a>
          <svg class="caret" :class="{ open: activeDropdown === 'analytics' }" width="16" height="16" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg>
          <ul class="dropdown" :class="{ show: activeDropdown === 'analytics' }">
            <li><a href="#">Reports</a></li>
            <li><a href="#">Trends</a></li>
            <li><a href="#">Performance</a></li>
          </ul>
        </li>
        <li class="nav-item" @click.stop="toggleDropdown('enrolled')">
          <a href="#">Enrolled Courses</a>
          <svg class="caret" :class="{ open: activeDropdown === 'enrolled' }" width="16" height="16" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg>
          <ul class="dropdown" :class="{ show: activeDropdown === 'enrolled' }">
            <li><a href="#">My Courses</a></li>
            <li><a href="#">Progress</a></li>
          </ul>
        </li>
        <li class="nav-item" @click.stop="toggleDropdown('lab')">
          <a href="#">Lab</a>
          <svg class="caret" :class="{ open: activeDropdown === 'lab' }" width="16" height="16" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg>
          <ul class="dropdown" :class="{ show: activeDropdown === 'lab' }">
            <li><a href="#">Practice Problems</a></li>
            <li><a href="#">Code Challenges</a></li>
          </ul>
        </li>
        <li class="nav-item" @click.stop="toggleDropdown('certificates')">
          <a href="#">Certificates</a>
          <svg class="caret" :class="{ open: activeDropdown === 'certificates' }" width="16" height="16" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg>
          <ul class="dropdown" :class="{ show: activeDropdown === 'certificates' }">
            <li><a href="#">Earned Certificates</a></li>
            <li><a href="#">Upcoming Certifications</a></li>
          </ul>
        </li>
        <li class="nav-item" @click.stop="toggleDropdown('profile')">
          <a href="#">Profile</a>
          <svg class="caret" :class="{ open: activeDropdown === 'profile' }" width="16" height="16" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg>
          <ul class="dropdown" :class="{ show: activeDropdown === 'profile' }">
            <li><a href="#">Settings</a></li>
            <li><a href="/login">Logout</a></li>
          </ul>
        </li>
      </ul>
    </nav>

    <main class="content">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-capsule">
                <div class="hero-inner">
                  <h1>
                    Welcome to <span class="highlight">EduSync</span> - A <span class="highlight">Learning Management System</span>
                  </h1>
                  <p class="description">
                    Welcome to EduSync - A Learning Management System of EduSync - a dynamic digital platform designed to transform the educational experience for students, adult learners, instructors, and faculty members. 
                  </p>
                  <p class="description">
                    Built with a focus on flexibility, academic rigor, and user-friendliness, this LMS provides a centralized space for course delivery, student engagement, assessments, and certification.
                  </p>
                  <p class="description">
                    Whether you are beginning your academic journey or facilitating the learning of others, this platform is your trusted companion in the pursuit of knowledge and professional growth. 
                  </p>
                  <div class="cta-buttons">
                    <RouterLink to="/about">
                      <button class="primary-btn">About the Platform</button>
                    </RouterLink>
                    <RouterLink to="/why-choose">
                      <button class="secondary-btn">Why Choose this LMS ?</button>
                    </RouterLink>
                  </div>
                </div>  
                <div class="hero-image">
                    <img src="/hero.png" alt="EduSync Illustration"></img>
                </div>
        </div>
      </section>
      <section class="hover-panels">
        <div class="two-panel-wrapper">
          <!-- Panel 1 -->
          <div class="hover-panel" @click="handleClick">
            <div class="panel-bg" :style="{ backgroundImage: `url('/intern.jpg')` }"></div>
            <div class="panel-overlay">
              <p class="panel-tag">INTERNSHIP</p>
              <h3 class="panel-title">Kickstart Your Career Journey: Explore, Learn, and Grow</h3>
              <p class="panel-description">Gain real-world experience while solving industry challenges with innovation.</p>
              <div class="intern-link">
                <RouterLink to="/internship">
                    <span>Learn More</span>
                    <svg class="caret" width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="9 6 15 12 9 18" />
                  </svg>
                </RouterLink>
            </div>
            </div>
          </div>
          <!-- Panel 2 -->
          <div class="hover-panel" @click="handleClick">
            <div class="panel-bg" :style="{ backgroundImage: `url('https://cdn.dribbble.com/userupload/3157418/file/original-4e8f2a25fcf9279f318cc72eea9d8262.png?resize=1504x1128&vertical=center')` }"></div>
            <div class="panel-overlay">
              <p class="panel-tag">FULL COURSE</p>
              <h3 class="panel-title">Future of Human-Tech Collaboration</h3>
              <p class="panel-description">Master new tech and leadership skills that shape tomorrow’s world.</p>
              <div class="intern-link">
              <RouterLink to="/internship">
                    <span>Learn More</span>
                    <svg class="caret" width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="9 6 15 12 9 18" />
                  </svg>
              </RouterLink>
            </div>
            </div>
          </div>
        </div>
      </section>
      <section class="contact-section">
              <div ref="glowBox" :class="['glow-box', { 'glow-on-scroll': isVisible }]">
                <h2>Contact Us</h2>
                <form class="contact-form">
                  <input type="text" placeholder="Your name" required />
                  <input type="email" placeholder="Your email" required />
                  <input type="tel" placeholder="Your phone number" required />
                  <textarea placeholder="Your message..." rows="4" required></textarea>
                  <button type="submit" class="glow-button">Send Message</button>
                </form>
              </div>
      </section>
    </main>
  </div> 
</template>
