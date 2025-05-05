import { ref, onMounted } from "vue";
import "../assets/internship.css";
import "../assets/navbar.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
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
onMounted(() => {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
    const container = document.querySelector(".scroll-container");
    container?.scrollTo({ left: 0, behavior: "instant" });
});
document.addEventListener("click", closeDropdown);
onMounted(() => {
    const container = document.querySelector(".scroll-container");
    container?.scrollTo({ left: 0, behavior: "instant" });
    const handleEscape = (e) => {
        if (e.key === "Escape")
            activeDropdown.value = null;
    };
    document.addEventListener("keydown", handleEscape);
    document.addEventListener("click", closeDropdown);
});
const features = [
    'Industry-Relevant Curriculum',
    'Live Project Implementation',
    'Personal Mentorship & Guidance',
    'Soft Skills & Personality Development Sessions',
    'Resume & LinkedIn Profile Building Tips',
    'Interview Preparation & Mock Sessions',
    'Certificates & Recommendation Letters'
];
const certificates = [
    'Internship Completion Certificate',
    'Full Course Completion Certificate',
    'LOR (Letter of Recommendation) — based on performance',
    'IOR (Internship Offer Letter) — for internship participants'
];
const eligibleGroups = [
    'College Students (All Streams)',
    'Final Year Project Seekers',
    'Fresh Graduates',
    'Working Professionals',
    'Anyone Passionate to Upskill'
];
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("internpage") }, ...{ class: (({ 'menu-open': __VLS_ctx.isMenuOpen })) }, });
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("heromain") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("hero-content1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ "data-aos": ("fade-up"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("highlight1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("highlight1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("highlight1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("subtitle1") }, "data-aos": ("fade-up"), "data-aos-delay": ("200"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("cta-container1") }, "data-aos": ("fade-up"), "data-aos-delay": ("400"), });
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ to: ("/internlanding"), }));
    const __VLS_8 = __VLS_7({ to: ("/internlanding"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("cta-button1") }, });
    __VLS_nonNullable(__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("features1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ "data-aos": ("fade-down"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("highlight1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("features-grid1") }, });
    for (const [feature, index] of __VLS_getVForSourceType((__VLS_ctx.features))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((feature)), ...{ class: ("feature-item1") }, "data-aos": ((index % 2 === 0 ? 'fade-right' : 'fade-left')), "data-aos-delay": ((index * 100)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("checkmark1") }, });
        (feature);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("certification") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ "data-aos": ("fade-down"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("highlight1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("certificates") }, });
    for (const [cert, index] of __VLS_getVForSourceType((__VLS_ctx.certificates))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((cert)), ...{ class: ("cert-item") }, "data-aos": ((index % 2 === 0 ? 'zoom-in-right' : 'zoom-in-left')), "data-aos-delay": ((index * 100)), });
        (cert);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("quote") }, "data-aos": ("fade-up"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("eligibility") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ "data-aos": ("fade-down"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("highlight1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("eligible-groups") }, ...{ class: (({ 'menu-open': __VLS_ctx.isMenuOpen })) }, });
    for (const [group, index] of __VLS_getVForSourceType((__VLS_ctx.eligibleGroups))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((group)), ...{ class: ("group-item") }, "data-aos": (('flip-up')), "data-aos-delay": ((index * 100)), });
        (group);
    }
    __VLS_styleScopedClasses['internpage'];
    __VLS_styleScopedClasses['menu-open'];
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
    __VLS_styleScopedClasses['heromain'];
    __VLS_styleScopedClasses['hero-content1'];
    __VLS_styleScopedClasses['highlight1'];
    __VLS_styleScopedClasses['highlight1'];
    __VLS_styleScopedClasses['highlight1'];
    __VLS_styleScopedClasses['subtitle1'];
    __VLS_styleScopedClasses['cta-container1'];
    __VLS_styleScopedClasses['cta-button1'];
    __VLS_styleScopedClasses['features1'];
    __VLS_styleScopedClasses['highlight1'];
    __VLS_styleScopedClasses['features-grid1'];
    __VLS_styleScopedClasses['feature-item1'];
    __VLS_styleScopedClasses['checkmark1'];
    __VLS_styleScopedClasses['certification'];
    __VLS_styleScopedClasses['highlight1'];
    __VLS_styleScopedClasses['certificates'];
    __VLS_styleScopedClasses['cert-item'];
    __VLS_styleScopedClasses['quote'];
    __VLS_styleScopedClasses['eligibility'];
    __VLS_styleScopedClasses['highlight1'];
    __VLS_styleScopedClasses['eligible-groups'];
    __VLS_styleScopedClasses['menu-open'];
    __VLS_styleScopedClasses['group-item'];
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
            features: features,
            certificates: certificates,
            eligibleGroups: eligibleGroups,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
