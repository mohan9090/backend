import { ref, onMounted } from "vue";
import "../assets/landing.css";
import "../assets/contactform.css";
import "../assets/twohoverpanel.css";
import "../assets/navbar.css";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const isMenuOpen = ref(false);
const activeDropdown = ref(null);
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
    if (isMenuOpen.value) {
        document.body.style.overflow = 'hidden';
    }
    else {
        document.body.style.overflow = '';
        activeDropdown.value = null;
    }
};
const closeMenu = () => {
    isMenuOpen.value = false;
    activeDropdown.value = null;
    document.body.style.overflow = '';
};
gsap.registerPlugin(ScrollTrigger);
const heroText = ref(null);
const heroImage = ref(null);
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
    });
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
    });
});
const glowBox = ref(null);
const isVisible = ref(false);
onMounted(() => {
    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            isVisible.value = true;
            glowBox.value?.classList.add('glow-on-scroll');
            glowBox.value?.classList.remove('glow-off');
        }
        else {
            isVisible.value = false;
            glowBox.value?.classList.remove('glow-on-scroll');
            glowBox.value?.classList.add('glow-off');
        }
    }, { threshold: 0.4 });
    if (glowBox.value) {
        observer.observe(glowBox.value);
    }
});
const toggleDropdown = (menu) => {
    activeDropdown.value = activeDropdown.value === menu ? null : menu;
};
const closeDropdown = (event) => {
    if (!event.target.closest(".nav-item")) {
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
    const handleEscape = (e) => {
        if (e.key === "Escape") {
            closeMenu();
        }
    };
    const handleClickOutside = (e) => {
        const target = e.target;
        const isNavClick = target.closest('.nav-item');
        const isHamburgerClick = target.closest('.hamburger');
        if (!isNavClick && !isHamburgerClick && isMenuOpen.value) {
            closeMenu();
        }
        else if (!isNavClick) {
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("landing-page") }, });
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.toggleMenu) }, ...{ class: ("hamburger") }, ...{ class: (({ open: __VLS_ctx.isMenuOpen })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.closeMenu) }, ...{ class: ("overlay") }, ...{ class: (({ show: __VLS_ctx.isMenuOpen })) }, });
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({ ...{ class: ("content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("hero") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("hero-capsule") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("hero-inner") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("highlight") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("highlight") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("description") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("description") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("description") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("cta-buttons") }, });
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ to: ("/about"), }));
    const __VLS_8 = __VLS_7({ to: ("/about"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("primary-btn") }, });
    __VLS_nonNullable(__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ to: ("/why-choose"), }));
    const __VLS_14 = __VLS_13({ to: ("/why-choose"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("secondary-btn") }, });
    __VLS_nonNullable(__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("hero-image") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("/hero.png"), alt: ("EduSync Illustration"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("hover-panels") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("two-panel-wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.handleClick) }, ...{ class: ("hover-panel") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("panel-bg") }, ...{ style: (({ backgroundImage: `url('/intern.jpg')` })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("panel-overlay") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("panel-tag") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("panel-title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("panel-description") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("intern-link") }, });
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ to: ("/internship"), }));
    const __VLS_20 = __VLS_19({ to: ("/internship"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ ...{ class: ("caret") }, width: ("16"), height: ("16"), viewBox: ("0 0 24 24"), fill: ("none"), stroke: ("white"), "stroke-width": ("2"), "stroke-linecap": ("round"), "stroke-linejoin": ("round"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.polyline)({ points: ("9 6 15 12 9 18"), });
    __VLS_nonNullable(__VLS_23.slots).default;
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.handleClick) }, ...{ class: ("hover-panel") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("panel-bg") }, ...{ style: (({ backgroundImage: `url('https://cdn.dribbble.com/userupload/3157418/file/original-4e8f2a25fcf9279f318cc72eea9d8262.png?resize=1504x1128&vertical=center')` })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("panel-overlay") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("panel-tag") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("panel-title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("panel-description") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("intern-link") }, });
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ to: ("/internship"), }));
    const __VLS_26 = __VLS_25({ to: ("/internship"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ ...{ class: ("caret") }, width: ("16"), height: ("16"), viewBox: ("0 0 24 24"), fill: ("none"), stroke: ("white"), "stroke-width": ("2"), "stroke-linecap": ("round"), "stroke-linejoin": ("round"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.polyline)({ points: ("9 6 15 12 9 18"), });
    __VLS_nonNullable(__VLS_29.slots).default;
    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("contact-section") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ref: ("glowBox"), ...{ class: ((['glow-box', { 'glow-on-scroll': __VLS_ctx.isVisible }])) }, });
    // @ts-ignore navigation for `const glowBox = ref()`
    __VLS_ctx.glowBox;
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ class: ("contact-form") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), placeholder: ("Your name"), required: (true), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("email"), placeholder: ("Your email"), required: (true), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("tel"), placeholder: ("Your phone number"), required: (true), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({ placeholder: ("Your message..."), rows: ("4"), required: (true), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), ...{ class: ("glow-button") }, });
    __VLS_styleScopedClasses['landing-page'];
    __VLS_styleScopedClasses['navbar'];
    __VLS_styleScopedClasses['navbar-logo'];
    __VLS_styleScopedClasses['hamburger'];
    __VLS_styleScopedClasses['open'];
    __VLS_styleScopedClasses['overlay'];
    __VLS_styleScopedClasses['show'];
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
    __VLS_styleScopedClasses['content'];
    __VLS_styleScopedClasses['hero'];
    __VLS_styleScopedClasses['hero-capsule'];
    __VLS_styleScopedClasses['hero-inner'];
    __VLS_styleScopedClasses['highlight'];
    __VLS_styleScopedClasses['highlight'];
    __VLS_styleScopedClasses['description'];
    __VLS_styleScopedClasses['description'];
    __VLS_styleScopedClasses['description'];
    __VLS_styleScopedClasses['cta-buttons'];
    __VLS_styleScopedClasses['primary-btn'];
    __VLS_styleScopedClasses['secondary-btn'];
    __VLS_styleScopedClasses['hero-image'];
    __VLS_styleScopedClasses['hover-panels'];
    __VLS_styleScopedClasses['two-panel-wrapper'];
    __VLS_styleScopedClasses['hover-panel'];
    __VLS_styleScopedClasses['panel-bg'];
    __VLS_styleScopedClasses['panel-overlay'];
    __VLS_styleScopedClasses['panel-tag'];
    __VLS_styleScopedClasses['panel-title'];
    __VLS_styleScopedClasses['panel-description'];
    __VLS_styleScopedClasses['intern-link'];
    __VLS_styleScopedClasses['caret'];
    __VLS_styleScopedClasses['hover-panel'];
    __VLS_styleScopedClasses['panel-bg'];
    __VLS_styleScopedClasses['panel-overlay'];
    __VLS_styleScopedClasses['panel-tag'];
    __VLS_styleScopedClasses['panel-title'];
    __VLS_styleScopedClasses['panel-description'];
    __VLS_styleScopedClasses['intern-link'];
    __VLS_styleScopedClasses['caret'];
    __VLS_styleScopedClasses['contact-section'];
    __VLS_styleScopedClasses['glow-box'];
    __VLS_styleScopedClasses['glow-on-scroll'];
    __VLS_styleScopedClasses['contact-form'];
    __VLS_styleScopedClasses['glow-button'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "glowBox": __VLS_nativeElements['div'],
    };
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
            activeDropdown: activeDropdown,
            toggleMenu: toggleMenu,
            closeMenu: closeMenu,
            glowBox: glowBox,
            isVisible: isVisible,
            toggleDropdown: toggleDropdown,
            handleClick: handleClick,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
