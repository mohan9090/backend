<script setup lang="ts">
import { ref, onMounted } from "vue";
import "../assets/navbar.css";
import "../assets/InternLandingPg.css";

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

const activeDropdown = ref<string | null>(null);


const toggleDropdown = (menu: string) => {
  activeDropdown.value = activeDropdown.value === menu ? null : menu;
};

const closeDropdown = (event: MouseEvent) => {
  if (!(event.target as HTMLElement).closest(".nav-item")) {
    activeDropdown.value = null;
  }
};


const stats = [
  { number: '5000+', label: 'Successful Graduates' },
  { number: '96%', label: 'Employment Rate' },
  { number: '150+', label: 'Partner Companies' },
  { number: '45+', label: 'Countries Represented' }
];

const companies = [
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
  { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
  { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
  { name: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg' },
  { name: 'Uber', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg' },
  { name: 'Airbnb', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg' },
  { name: 'Twitter', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Twitter_logo.svg' }
];

const accordionItems = [
  {
    title: 'Eligibility Requirements',
    content: '<ul class="requirements-list"><li>Currently enrolled in a Computer Science or related program</li><li>Strong foundation in programming fundamentals</li><li>Excellent problem-solving skills</li><li>Good communication abilities</li><li>Ability to work in a team environment</li></ul>'
  },
  {
    title: 'Program Duration & Schedule',
    content: '<ul class="requirements-list"><li>3-6 months internship period</li><li>Full-time position (40 hours/week)</li><li>Flexible start dates</li><li>Remote work options available</li></ul>'
  },
  {
    title: 'What You\'ll Learn',
    content: '<ul class="requirements-list"><li>Modern development tools and practices</li><li>Agile methodology and team collaboration</li><li>Industry-standard workflows</li><li>Professional development skills</li><li>Real-world project experience</li></ul>'
  }
];

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Software Engineer at Google',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=300',
    quote: 'The internship program completely transformed my career trajectory. The hands-on experience and mentorship were invaluable.'
  },
  {
    name: 'James Wilson',
    role: 'Full Stack Developer at Microsoft',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
    quote: 'The real-world project experience I gained during my internship helped me land my dream job.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'UI/UX Designer at Apple',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300',
    quote: 'The mentorship and guidance I received were exceptional. It helped me grow both professionally and personally.'
  }
];

const currentTestimonialIndex = ref(0);

const nextTestimonial = () => {
  currentTestimonialIndex.value = (currentTestimonialIndex.value + 1) % testimonials.length;
};

const prevTestimonial = () => {
  currentTestimonialIndex.value = currentTestimonialIndex.value === 0 
    ? testimonials.length - 1 
    : currentTestimonialIndex.value - 1;
};

const formData = ref({
  name: '',
  email: '',
  program: '',
  experience: '',
  motivation: ''
});

const projectDomains = [
  {
    title: 'Web Development',
    description: 'Build modern web applications using React, Vue, or Angular. Focus on responsive design, performance optimization, and user experience.',
    technologies: ['React', 'Vue.js', 'Node.js', 'TypeScript']
  },
  {
    title: 'Mobile Development',
    description: 'Create native and cross-platform mobile applications. Learn mobile-first design principles and platform-specific best practices.',
    technologies: ['React Native', 'Flutter', 'iOS', 'Android']
  },
  {
    title: 'Cloud Computing',
    description: 'Work with cloud platforms and serverless architectures. Deploy and scale applications in the cloud.',
    technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes']
  },
  {
    title: 'Machine Learning',
    description: 'Develop AI/ML models for real-world applications. Focus on data preprocessing, model training, and deployment.',
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn']
  }
];

const activeAccordion = ref<number | null>(null);

const toggleAccordion = (index: number) => {
  activeAccordion.value = activeAccordion.value === index ? null : index;
};

const handleSubmit = (event: Event) => {
  event.preventDefault();
  console.log('Form submitted:', formData.value);
};
</script>

<template>
  <div class="intern-L-content">
    <div>
      <nav class="navbar">
        <RouterLink to="/dashboard">
          <div class="navbar-logo">
            <img src="/FinalLogo.png" alt="EduSync"></img>
          </div>
        </RouterLink>
        <div class="hamburger" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
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
    </div>
    <section class="herointern">
      <div class="herointern-content">
        <div class="hero-badge">🚀 Applications Open for 2025</div>
        <h1 class="herointern-title">Launch Your Tech Career</h1>
        <p class="herointern-subtitle">Join our elite internship program and gain real-world experience in software development, design, and data science</p>
        <a href="#apply" class="buttoni">Apply Now</a>
        <div class="stats-grid">
          <div v-for="stat in stats" :key="stat.number" class="stat-item">
            <div class="stat-number">{{ stat.number }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="companies-section">
      <div class="containerintern">
        <h2 class="section-titleintern">Our Partner Companies</h2>
        <div class="logos-container">
          <div class="logos-slide1">
            <img v-for="company in companies" :key="company.name" 
                 :src="company.logo" 
                 :alt="company.name"
                 class="company-logo">
          </div>
          <div class="logos-slide2">
            <img v-for="company in companies" :key="company.name" 
                 :src="company.logo" 
                 :alt="company.name"
                 class="company-logo">
          </div>
        </div>
      </div>
    </section>

    <section class="sectionintern" id="testimonials">
      <div class="containerintern">
        <h2 class="section-titleintern">Success Stories</h2>
        <div class="testimonials-container">
          <button class="testimonial-nav prev" @click="prevTestimonial">&lt;</button>
          <div class="testimonial-card" @click="nextTestimonial">
            <img :src="testimonials[currentTestimonialIndex].image" :alt="testimonials[currentTestimonialIndex].name">
            <p class="quote">{{ testimonials[currentTestimonialIndex].quote }}</p>
            <p class="name">{{ testimonials[currentTestimonialIndex].name }}</p>
            <p class="role">{{ testimonials[currentTestimonialIndex].role }}</p>
          </div>
          <button class="testimonial-nav next" @click="nextTestimonial">&gt;</button>
        </div>
      </div>
    </section>

    <section class="sectionintern" id="project-domains">
      <div class="containerintern">
        <h2 class="section-titleintern">Project Domains</h2>
        <div class="gridintern">
          <div v-for="domain in projectDomains" :key="domain.title" class="cardintern">
            <h3 class="cardintern-title">{{ domain.title }}</h3>
            <p class="cardintern-description">{{ domain.description }}</p>
            <div class="tech-stack">
              <span v-for="tech in domain.technologies" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="sectionintern" id="requirements">
      <div class="containerintern">
        <h2 class="section-titleintern">Program Details</h2>
        <div class="accordion">
          <div 
            v-for="(item, index) in accordionItems"
            :key="index"
            class="accordion-item"
            :class="{ active: activeAccordion === index }"
          >
            <div class="accordion-header" @click="toggleAccordion(index)">
              <h3 class="accordion-title">{{ item.title }}</h3>
              <div class="accordion-icon" :class="{ active: activeAccordion === index }"></div>
            </div>
            <div class="accordion-content" :style="{ maxHeight: activeAccordion === index ? '500px' : '0' }">
              <div class="accordion-content-inner" v-html="item.content"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="sectionintern" id="apply">
      <div class="containerintern">
        <h2 class="section-titleintern">Apply Now</h2>
        <form @submit="handleSubmit" class="application-formintern">
          <div class="form-groupi">
            <label for="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              v-model="formData.name" 
              required 
              class="form-inputi"
              placeholder="Enter your full name"
            >
          </div>
          
          <div class="form-groupi">
            <label for="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              v-model="formData.email" 
              required 
              class="form-inputi"
              placeholder="Enter your email address"
            >
          </div>
          
          <div class="form-groupi">
            <label for="program">Preferred Program</label>
            <select 
              id="program" 
              v-model="formData.program" 
              required 
              class="form-inputis"
            >
              <option value="">Select a program</option>
              <option value="software">Software Development</option>
              <option value="design">UI/UX Design</option>
              <option value="data">Data Science</option>
            </select>
          </div>
          
          <div class="form-groupi">
            <label for="experience">Relevant Experience</label>
            <textarea 
              id="experience" 
              v-model="formData.experience" 
              rows="4" 
              class="form-inputi"
              placeholder="Tell us about your relevant experience"
            ></textarea>
          </div>
          <div class="form-groupi">
            <label for="motivation">Why do you want to join our program?</label>
            <textarea 
              id="motivation" 
              v-model="formData.motivation" 
              rows="4" 
              required 
              class="form-inputi"
              placeholder="Share your motivation for joining our program"
            ></textarea>
          </div>
          <button type="submit" class="buttoni">Submit Application</button>
        </form>
      </div>
    </section>
  </div>
</template>