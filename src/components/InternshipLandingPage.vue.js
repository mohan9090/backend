import { ref } from "vue";
import "../assets/navbar.css";
import "../assets/InternLandingPg.css";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const isMenuOpen = ref(false);
function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
}
const activeDropdown = ref(null);
const toggleDropdown = (menu) => {
    activeDropdown.value = activeDropdown.value === menu ? null : menu;
};
const closeDropdown = (event) => {
    if (!event.target.closest(".nav-item")) {
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
const activeAccordion = ref(null);
const toggleAccordion = (index) => {
    activeAccordion.value = activeAccordion.value === index ? null : index;
};
const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData.value);
};
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("intern-L-content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({ ...{ class: ("navbar") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/dashboard"), }));
    const __VLS_2 = __VLS_1({ to: ("/dashboard"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("navbar-logo") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("/FinalLogo.png"), alt: ("EduSync"), });
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.toggleMenu) }, ...{ class: ("hamburger") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("nav-links") }, ...{ class: (({ 'show-menu': __VLS_ctx.isMenuOpen })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.toggleDropdown('courses');
            } }, ...{ class: ("nav-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ ...{ class: ("caret") }, ...{ class: (({ open: __VLS_ctx.activeDropdown === 'courses' })) }, width: ("16"), height: ("16"), viewBox: ("0 0 24 24"), fill: ("none"), stroke: ("currentColor"), "stroke-width": ("2"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.polyline)({ points: ("6 9 12 15 18 9"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("dropdown") }, ...{ class: (({ show: __VLS_ctx.activeDropdown === 'courses' })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("/internship"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("/internship"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("/internship"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.toggleDropdown('analytics');
            } }, ...{ class: ("nav-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ ...{ class: ("caret") }, ...{ class: (({ open: __VLS_ctx.activeDropdown === 'analytics' })) }, width: ("16"), height: ("16"), viewBox: ("0 0 24 24"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.polyline)({ points: ("6 9 12 15 18 9"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("dropdown") }, ...{ class: (({ show: __VLS_ctx.activeDropdown === 'analytics' })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.toggleDropdown('enrolled');
            } }, ...{ class: ("nav-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ ...{ class: ("caret") }, ...{ class: (({ open: __VLS_ctx.activeDropdown === 'enrolled' })) }, width: ("16"), height: ("16"), viewBox: ("0 0 24 24"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.polyline)({ points: ("6 9 12 15 18 9"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("dropdown") }, ...{ class: (({ show: __VLS_ctx.activeDropdown === 'enrolled' })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.toggleDropdown('lab');
            } }, ...{ class: ("nav-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ ...{ class: ("caret") }, ...{ class: (({ open: __VLS_ctx.activeDropdown === 'lab' })) }, width: ("16"), height: ("16"), viewBox: ("0 0 24 24"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.polyline)({ points: ("6 9 12 15 18 9"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("dropdown") }, ...{ class: (({ show: __VLS_ctx.activeDropdown === 'lab' })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.toggleDropdown('certificates');
            } }, ...{ class: ("nav-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ ...{ class: ("caret") }, ...{ class: (({ open: __VLS_ctx.activeDropdown === 'certificates' })) }, width: ("16"), height: ("16"), viewBox: ("0 0 24 24"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.polyline)({ points: ("6 9 12 15 18 9"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("dropdown") }, ...{ class: (({ show: __VLS_ctx.activeDropdown === 'certificates' })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.toggleDropdown('profile');
            } }, ...{ class: ("nav-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ ...{ class: ("caret") }, ...{ class: (({ open: __VLS_ctx.activeDropdown === 'profile' })) }, width: ("16"), height: ("16"), viewBox: ("0 0 24 24"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.polyline)({ points: ("6 9 12 15 18 9"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("dropdown") }, ...{ class: (({ show: __VLS_ctx.activeDropdown === 'profile' })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("/login"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("herointern") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("herointern-content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("hero-badge") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("herointern-title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("herointern-subtitle") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#apply"), ...{ class: ("buttoni") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stats-grid") }, });
    for (const [stat] of __VLS_getVForSourceType((__VLS_ctx.stats))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((stat.number)), ...{ class: ("stat-item") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-number") }, });
        (stat.number);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stat-label") }, });
        (stat.label);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("companies-section") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("containerintern") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("section-titleintern") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("logos-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("logos-slide1") }, });
    for (const [company] of __VLS_getVForSourceType((__VLS_ctx.companies))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ key: ((company.name)), src: ((company.logo)), alt: ((company.name)), ...{ class: ("company-logo") }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("logos-slide2") }, });
    for (const [company] of __VLS_getVForSourceType((__VLS_ctx.companies))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ key: ((company.name)), src: ((company.logo)), alt: ((company.name)), ...{ class: ("company-logo") }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("sectionintern") }, id: ("testimonials"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("containerintern") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("section-titleintern") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("testimonials-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.prevTestimonial) }, ...{ class: ("testimonial-nav prev") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.nextTestimonial) }, ...{ class: ("testimonial-card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ((__VLS_ctx.testimonials[__VLS_ctx.currentTestimonialIndex].image)), alt: ((__VLS_ctx.testimonials[__VLS_ctx.currentTestimonialIndex].name)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("quote") }, });
    (__VLS_ctx.testimonials[__VLS_ctx.currentTestimonialIndex].quote);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("name") }, });
    (__VLS_ctx.testimonials[__VLS_ctx.currentTestimonialIndex].name);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("role") }, });
    (__VLS_ctx.testimonials[__VLS_ctx.currentTestimonialIndex].role);
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.nextTestimonial) }, ...{ class: ("testimonial-nav next") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("sectionintern") }, id: ("project-domains"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("containerintern") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("section-titleintern") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("gridintern") }, });
    for (const [domain] of __VLS_getVForSourceType((__VLS_ctx.projectDomains))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((domain.title)), ...{ class: ("cardintern") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("cardintern-title") }, });
        (domain.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("cardintern-description") }, });
        (domain.description);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tech-stack") }, });
        for (const [tech] of __VLS_getVForSourceType((domain.technologies))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ key: ((tech)), ...{ class: ("tech-tag") }, });
            (tech);
        }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("sectionintern") }, id: ("requirements"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("containerintern") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("section-titleintern") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("accordion") }, });
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.accordionItems))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((index)), ...{ class: ("accordion-item") }, ...{ class: (({ active: __VLS_ctx.activeAccordion === index })) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.toggleAccordion(index);
                } }, ...{ class: ("accordion-header") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("accordion-title") }, });
        (item.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("accordion-icon") }, ...{ class: (({ active: __VLS_ctx.activeAccordion === index })) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("accordion-content") }, ...{ style: (({ maxHeight: __VLS_ctx.activeAccordion === index ? '500px' : '0' })) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("accordion-content-inner") }, });
        __VLS_directiveAsFunction(__VLS_directives.vHtml)(null, { ...__VLS_directiveBindingRestFields, value: (item.content) }, null, null);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("sectionintern") }, id: ("apply"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("containerintern") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("section-titleintern") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.handleSubmit) }, ...{ class: ("application-formintern") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-groupi") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("name"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ type: ("text"), id: ("name"), value: ((__VLS_ctx.formData.name)), required: (true), ...{ class: ("form-inputi") }, placeholder: ("Enter your full name"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-groupi") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("email"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ type: ("email"), id: ("email"), required: (true), ...{ class: ("form-inputi") }, placeholder: ("Enter your email address"), });
    (__VLS_ctx.formData.email);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-groupi") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("program"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ id: ("program"), value: ((__VLS_ctx.formData.program)), required: (true), ...{ class: ("form-inputis") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: (""), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("software"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("design"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("data"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-groupi") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("experience"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({ id: ("experience"), value: ((__VLS_ctx.formData.experience)), rows: ("4"), ...{ class: ("form-inputi") }, placeholder: ("Tell us about your relevant experience"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-groupi") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("motivation"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({ id: ("motivation"), value: ((__VLS_ctx.formData.motivation)), rows: ("4"), required: (true), ...{ class: ("form-inputi") }, placeholder: ("Share your motivation for joining our program"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), ...{ class: ("buttoni") }, });
    __VLS_styleScopedClasses['intern-L-content'];
    __VLS_styleScopedClasses['navbar'];
    __VLS_styleScopedClasses['navbar-logo'];
    __VLS_styleScopedClasses['hamburger'];
    __VLS_styleScopedClasses['nav-links'];
    __VLS_styleScopedClasses['show-menu'];
    __VLS_styleScopedClasses['nav-item'];
    __VLS_styleScopedClasses['caret'];
    __VLS_styleScopedClasses['open'];
    __VLS_styleScopedClasses['dropdown'];
    __VLS_styleScopedClasses['show'];
    __VLS_styleScopedClasses['nav-item'];
    __VLS_styleScopedClasses['caret'];
    __VLS_styleScopedClasses['open'];
    __VLS_styleScopedClasses['dropdown'];
    __VLS_styleScopedClasses['show'];
    __VLS_styleScopedClasses['nav-item'];
    __VLS_styleScopedClasses['caret'];
    __VLS_styleScopedClasses['open'];
    __VLS_styleScopedClasses['dropdown'];
    __VLS_styleScopedClasses['show'];
    __VLS_styleScopedClasses['nav-item'];
    __VLS_styleScopedClasses['caret'];
    __VLS_styleScopedClasses['open'];
    __VLS_styleScopedClasses['dropdown'];
    __VLS_styleScopedClasses['show'];
    __VLS_styleScopedClasses['nav-item'];
    __VLS_styleScopedClasses['caret'];
    __VLS_styleScopedClasses['open'];
    __VLS_styleScopedClasses['dropdown'];
    __VLS_styleScopedClasses['show'];
    __VLS_styleScopedClasses['nav-item'];
    __VLS_styleScopedClasses['caret'];
    __VLS_styleScopedClasses['open'];
    __VLS_styleScopedClasses['dropdown'];
    __VLS_styleScopedClasses['show'];
    __VLS_styleScopedClasses['herointern'];
    __VLS_styleScopedClasses['herointern-content'];
    __VLS_styleScopedClasses['hero-badge'];
    __VLS_styleScopedClasses['herointern-title'];
    __VLS_styleScopedClasses['herointern-subtitle'];
    __VLS_styleScopedClasses['buttoni'];
    __VLS_styleScopedClasses['stats-grid'];
    __VLS_styleScopedClasses['stat-item'];
    __VLS_styleScopedClasses['stat-number'];
    __VLS_styleScopedClasses['stat-label'];
    __VLS_styleScopedClasses['companies-section'];
    __VLS_styleScopedClasses['containerintern'];
    __VLS_styleScopedClasses['section-titleintern'];
    __VLS_styleScopedClasses['logos-container'];
    __VLS_styleScopedClasses['logos-slide1'];
    __VLS_styleScopedClasses['company-logo'];
    __VLS_styleScopedClasses['logos-slide2'];
    __VLS_styleScopedClasses['company-logo'];
    __VLS_styleScopedClasses['sectionintern'];
    __VLS_styleScopedClasses['containerintern'];
    __VLS_styleScopedClasses['section-titleintern'];
    __VLS_styleScopedClasses['testimonials-container'];
    __VLS_styleScopedClasses['testimonial-nav'];
    __VLS_styleScopedClasses['prev'];
    __VLS_styleScopedClasses['testimonial-card'];
    __VLS_styleScopedClasses['quote'];
    __VLS_styleScopedClasses['name'];
    __VLS_styleScopedClasses['role'];
    __VLS_styleScopedClasses['testimonial-nav'];
    __VLS_styleScopedClasses['next'];
    __VLS_styleScopedClasses['sectionintern'];
    __VLS_styleScopedClasses['containerintern'];
    __VLS_styleScopedClasses['section-titleintern'];
    __VLS_styleScopedClasses['gridintern'];
    __VLS_styleScopedClasses['cardintern'];
    __VLS_styleScopedClasses['cardintern-title'];
    __VLS_styleScopedClasses['cardintern-description'];
    __VLS_styleScopedClasses['tech-stack'];
    __VLS_styleScopedClasses['tech-tag'];
    __VLS_styleScopedClasses['sectionintern'];
    __VLS_styleScopedClasses['containerintern'];
    __VLS_styleScopedClasses['section-titleintern'];
    __VLS_styleScopedClasses['accordion'];
    __VLS_styleScopedClasses['accordion-item'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['accordion-header'];
    __VLS_styleScopedClasses['accordion-title'];
    __VLS_styleScopedClasses['accordion-icon'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['accordion-content'];
    __VLS_styleScopedClasses['accordion-content-inner'];
    __VLS_styleScopedClasses['sectionintern'];
    __VLS_styleScopedClasses['containerintern'];
    __VLS_styleScopedClasses['section-titleintern'];
    __VLS_styleScopedClasses['application-formintern'];
    __VLS_styleScopedClasses['form-groupi'];
    __VLS_styleScopedClasses['form-inputi'];
    __VLS_styleScopedClasses['form-groupi'];
    __VLS_styleScopedClasses['form-inputi'];
    __VLS_styleScopedClasses['form-groupi'];
    __VLS_styleScopedClasses['form-inputis'];
    __VLS_styleScopedClasses['form-groupi'];
    __VLS_styleScopedClasses['form-inputi'];
    __VLS_styleScopedClasses['form-groupi'];
    __VLS_styleScopedClasses['form-inputi'];
    __VLS_styleScopedClasses['buttoni'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            isMenuOpen: isMenuOpen,
            toggleMenu: toggleMenu,
            activeDropdown: activeDropdown,
            toggleDropdown: toggleDropdown,
            stats: stats,
            companies: companies,
            accordionItems: accordionItems,
            testimonials: testimonials,
            currentTestimonialIndex: currentTestimonialIndex,
            nextTestimonial: nextTestimonial,
            prevTestimonial: prevTestimonial,
            formData: formData,
            projectDomains: projectDomains,
            activeAccordion: activeAccordion,
            toggleAccordion: toggleAccordion,
            handleSubmit: handleSubmit,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
