import { ref } from "vue";
import { useRouter } from "vue-router";
import "../assets/login.css"; // Ensure this path is correct
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const email = ref("");
const password = ref("");
const router = useRouter();
const handleLogin = () => {
    if (!email.value || !password.value) {
        alert("Please enter both email and password.");
        return;
    }
    // Simulate login (replace with actual auth logic)
    alert(`Logging in as: ${email.value}`);
    router.push("/dashboard"); // Redirect after login
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("login-page") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("main-content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("left-section") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/edusync1.jpg"), alt: ("EduSync Logo"), ...{ class: ("main-logo") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("right-section") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("login-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("login-title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.handleLogin) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input-group") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("email"), placeholder: ("Enter your email"), required: (true), });
    (__VLS_ctx.email);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input-group") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("password"), placeholder: ("Enter your password"), required: (true), });
    (__VLS_ctx.password);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("forgot-password") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/forgotpassword"), ...{ class: ("nav-link") }, }));
    const __VLS_2 = __VLS_1({ to: ("/forgotpassword"), ...{ class: ("nav-link") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), ...{ class: ("login-button") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("google-button") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/GoogleIcon.png"), alt: ("Google Icon"), ...{ class: ("google-icon") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("signup-linkl") }, });
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ to: ("/signup"), ...{ class: ("nav-link") }, }));
    const __VLS_8 = __VLS_7({ to: ("/signup"), ...{ class: ("nav-link") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_nonNullable(__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    __VLS_styleScopedClasses['login-page'];
    __VLS_styleScopedClasses['main-content'];
    __VLS_styleScopedClasses['left-section'];
    __VLS_styleScopedClasses['main-logo'];
    __VLS_styleScopedClasses['right-section'];
    __VLS_styleScopedClasses['login-container'];
    __VLS_styleScopedClasses['login-title'];
    __VLS_styleScopedClasses['input-group'];
    __VLS_styleScopedClasses['input-group'];
    __VLS_styleScopedClasses['forgot-password'];
    __VLS_styleScopedClasses['nav-link'];
    __VLS_styleScopedClasses['login-button'];
    __VLS_styleScopedClasses['google-button'];
    __VLS_styleScopedClasses['google-icon'];
    __VLS_styleScopedClasses['signup-linkl'];
    __VLS_styleScopedClasses['nav-link'];
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
            email: email,
            password: password,
            handleLogin: handleLogin,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
