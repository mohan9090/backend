import { ref, onMounted } from "vue";
import "../assets/navbar.css";
import "../assets/whychoose.css";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const isMenuOpen = ref(false);
function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
}
const features = [
    {
        title: "Accessibility",
        description: "Anytime, anywhere access from desktop or mobile devices."
    },
    {
        title: "Interactivity",
        description: "Foster meaningful learning through forums, feedback, and collaborative tools."
    },
    {
        title: "Efficiency",
        description: "Reduce administrative workload with streamlined workflows."
    },
    {
        title: "Scalability",
        description: "Suitable for small seminars or institution-wide deployments."
    },
    {
        title: "Data Security",
        description: "Compliant with academic data protection and privacy standards."
    }
];
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("Whypage") }, });
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({ ...{ class: ("why-choose") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("why-title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("why-intro") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("features-grid") }, });
    for (const [feature, index] of __VLS_getVForSourceType((__VLS_ctx.features))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("feature-card") }, key: ((index)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("feature-title") }, });
        (feature.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("feature-description") }, });
        (feature.description);
    }
    __VLS_styleScopedClasses['Whypage'];
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
    __VLS_styleScopedClasses['why-choose'];
    __VLS_styleScopedClasses['why-title'];
    __VLS_styleScopedClasses['why-intro'];
    __VLS_styleScopedClasses['features-grid'];
    __VLS_styleScopedClasses['feature-card'];
    __VLS_styleScopedClasses['feature-title'];
    __VLS_styleScopedClasses['feature-description'];
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
            features: features,
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
