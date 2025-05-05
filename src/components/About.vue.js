import { ref, onUnmounted } from "vue";
import "../assets/about.css";
import "../assets/navbar.css";
import gsap from "gsap";
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
const handleEscape = (e) => {
    if (e.key === "Escape" || e.key === "Tab") {
        activeDropdown.value = null;
    }
};
// Animate elements on page load
gsap.from(".section-title, .section-description", {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power2.out",
});
gsap.from(".group-title", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.3,
    ease: "power2.out",
});
gsap.from(".user-card", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.5,
    stagger: 0.2,
    ease: "back.out(1.7)",
});
// Icon hover bounce effect
const icons = document.querySelectorAll(".icon");
icons.forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
        gsap.to(icon, { scale: 1.1, duration: 0.3, ease: "bounce.out" });
    });
    icon.addEventListener("mouseleave", () => {
        gsap.to(icon, { scale: 1.0, duration: 0.2, ease: "power2.out" });
    });
});
document.addEventListener("click", closeDropdown);
document.addEventListener("keydown", handleEscape);
onUnmounted(() => {
    document.removeEventListener("click", closeDropdown);
    document.removeEventListener("keydown", handleEscape);
});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("Aboutpage") }, });
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({ ...{ class: ("about-page") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("intro-section") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("section-title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("section-description") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("user-groups-section") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("group-title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("user-card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("icon") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({ ...{ class: ("user-title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("user-description") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("user-card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("icon") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({ ...{ class: ("user-title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("user-description") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("user-card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("icon") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({ ...{ class: ("user-title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("user-description") }, });
    __VLS_styleScopedClasses['Aboutpage'];
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
    __VLS_styleScopedClasses['about-page'];
    __VLS_styleScopedClasses['intro-section'];
    __VLS_styleScopedClasses['section-title'];
    __VLS_styleScopedClasses['section-description'];
    __VLS_styleScopedClasses['user-groups-section'];
    __VLS_styleScopedClasses['group-title'];
    __VLS_styleScopedClasses['card-container'];
    __VLS_styleScopedClasses['user-card'];
    __VLS_styleScopedClasses['icon'];
    __VLS_styleScopedClasses['user-title'];
    __VLS_styleScopedClasses['user-description'];
    __VLS_styleScopedClasses['user-card'];
    __VLS_styleScopedClasses['icon'];
    __VLS_styleScopedClasses['user-title'];
    __VLS_styleScopedClasses['user-description'];
    __VLS_styleScopedClasses['user-card'];
    __VLS_styleScopedClasses['icon'];
    __VLS_styleScopedClasses['user-title'];
    __VLS_styleScopedClasses['user-description'];
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
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
