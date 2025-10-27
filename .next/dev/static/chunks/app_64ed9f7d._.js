(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/CTASection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const CTASection = ()=>{
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const particlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: sectionRef,
        offset: [
            "start end",
            "end start"
        ]
    });
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSuccess, setShowSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mousePosition, setMousePosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        0,
        -50
    ]);
    const opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.2,
        0.8,
        1
    ], [
        0.3,
        1,
        1,
        0.3
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CTASection.useEffect": ()=>{
            const handleMouseMove = {
                "CTASection.useEffect.handleMouseMove": (e)=>{
                    if (sectionRef.current) {
                        const rect = sectionRef.current.getBoundingClientRect();
                        setMousePosition({
                            x: (e.clientX - rect.left) / rect.width,
                            y: (e.clientY - rect.top) / rect.height
                        });
                    }
                }
            }["CTASection.useEffect.handleMouseMove"];
            window.addEventListener('mousemove', handleMouseMove);
            return ({
                "CTASection.useEffect": ()=>window.removeEventListener('mousemove', handleMouseMove)
            })["CTASection.useEffect"];
        }
    }["CTASection.useEffect"], []);
    const createEnergyBurst = (e)=>{
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        // Create multiple energy particles
        for(let i = 0; i < 8; i++){
            const particle = document.createElement('div');
            particle.className = 'energy-particle';
            particle.style.left = `${e.clientX - rect.left}px`;
            particle.style.top = `${e.clientY - rect.top}px`;
            particle.style.setProperty('--angle', `${360 / 8 * i}deg`);
            button.appendChild(particle);
            setTimeout(()=>particle.remove(), 1000);
        }
    };
    const handleDemoClick = (e)=>{
        createEnergyBurst(e);
        setTimeout(()=>{
            window.location.href = '/book-demo';
        }, 300);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (submitting) return;
        setSubmitting(true);
        setShowSuccess(false);
        setTimeout(()=>{
            setSubmitting(false);
            setSubmitted(true);
            setShowSuccess(true);
            setTimeout(()=>setShowSuccess(false), 3000);
        }, 1500);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "fffbb62990f56333",
                children: '.neural-grid.jsx-fffbb62990f56333{background-image:radial-gradient(circle at 25% 25%,#3b82f61a 0%,#0000 50%),radial-gradient(circle at 75% 75%,#a855f71a 0%,#0000 50%),radial-gradient(circle,#14b8a60d 0%,#0000 50%),linear-gradient(#0000 23%,#a855f708 24% 25%,#0000 26% 73%,#3b82f608 74% 75%,#0000 76%),linear-gradient(90deg,#0000 24%,#14b8a608 25% 26%,#0000 27% 74%,#3b82f608 75% 76%,#0000 77%);background-size:60px 60px,80px 80px,100px 100px,40px 40px,40px 40px;animation:8s ease-in-out infinite neural-pulse}@keyframes neural-pulse{0%,to{background-position:0 0,0 0,0 0,0 0,0 0}50%{background-position:10% 10%,-10% -10%,5% -5%,2% 2%,-2% -2%}}.ai-orb.jsx-fffbb62990f56333{filter:blur(1px);background:radial-gradient(circle at 30% 30%,#3b82f666,#a855f733,#0000);border-radius:50%;width:120px;height:120px;animation:6s ease-in-out infinite orb-float}.ai-orb.jsx-fffbb62990f56333:nth-child(2){background:radial-gradient(circle at 40% 40%,#14b8a64d,#3b82f61a,#0000);width:80px;height:80px;animation-duration:8s;animation-delay:-2s}.ai-orb.jsx-fffbb62990f56333:nth-child(3){background:radial-gradient(circle at 60% 20%,#a855f733,#14b8a61a,#0000);width:200px;height:200px;animation-duration:10s;animation-delay:-4s}@keyframes orb-float{0%,to{transform:translate(0)rotate(0)}33%{transform:translate(30px,-20px)rotate(120deg)}66%{transform:translate(-20px,20px)rotate(240deg)}}.cta-main-button.jsx-fffbb62990f56333{color:#fff;cursor:pointer;background:linear-gradient(135deg,#3b82f6 0%,#8b5cf6 50%,#06b6d4 100%);border:none;border-radius:16px;padding:18px 48px;font-size:1.25rem;font-weight:700;transition:all .3s cubic-bezier(.4,0,.2,1);position:relative;overflow:hidden;box-shadow:0 8px 32px #3b82f64d,0 0 0 1px #ffffff1a,inset 0 1px #fff3}.cta-main-button.jsx-fffbb62990f56333:before{content:"";background:linear-gradient(90deg,#0000,#fff3,#0000);width:100%;height:100%;transition:left .6s;position:absolute;top:0;left:-100%}.cta-main-button.jsx-fffbb62990f56333:hover{transform:translateY(-2px)scale(1.05);box-shadow:0 12px 40px #3b82f666,0 0 0 1px #fff3,inset 0 1px #ffffff4d}.cta-main-button.jsx-fffbb62990f56333:hover:before{left:100%}.cta-main-button.jsx-fffbb62990f56333:active{transform:translateY(0)scale(1.02)}.energy-particle.jsx-fffbb62990f56333{pointer-events:none;background:radial-gradient(circle,#fff,#3b82f6);border-radius:50%;width:4px;height:4px;animation:1s ease-out forwards energy-burst;position:absolute}@keyframes energy-burst{0%{opacity:1;transform:translate(0)translateY(0)scale(1)}to{transform:translateX(calc(cos(var(--angle))*60px))translateY(calc(sin(var(--angle))*60px))scale(0);opacity:0}}.newsletter-container.jsx-fffbb62990f56333{-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);background:#0f0f0fcc;border:1px solid #3b82f633;border-radius:24px;padding:32px;position:relative;overflow:hidden}.newsletter-container.jsx-fffbb62990f56333:before{content:"";background:linear-gradient(90deg,#0000,#3b82f680,#0000);height:1px;position:absolute;top:0;left:0;right:0}.newsletter-input.jsx-fffbb62990f56333{color:#fff;background:#1e1e1ecc;border:2px solid #4b55634d;border-radius:12px;outline:none;flex:1;padding:16px 20px;font-size:1rem;transition:all .3s}.newsletter-input.jsx-fffbb62990f56333:focus{border-color:#3b82f699;transform:scale(1.02);box-shadow:0 0 0 4px #3b82f61a,0 0 20px #3b82f633}.newsletter-input.jsx-fffbb62990f56333::placeholder{color:#9ca3afcc}.newsletter-submit.jsx-fffbb62990f56333{color:#fff;cursor:pointer;background:linear-gradient(135deg,#059669,#0d9488);border:none;border-radius:12px;min-width:140px;padding:16px 32px;font-weight:600;transition:all .3s;position:relative;overflow:hidden}.newsletter-submit.jsx-fffbb62990f56333:hover{background:linear-gradient(135deg,#047857,#0f766e);transform:translateY(-1px);box-shadow:0 8px 25px #0596694d}.newsletter-submit.is-loading.jsx-fffbb62990f56333 .label.jsx-fffbb62990f56333{opacity:0}.newsletter-submit.jsx-fffbb62990f56333 .spinner.jsx-fffbb62990f56333{opacity:0;border:2px solid #ffffff4d;border-top-color:#fff;border-radius:50%;width:20px;height:20px;animation:1s linear infinite spin;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.newsletter-submit.is-loading.jsx-fffbb62990f56333 .spinner.jsx-fffbb62990f56333{opacity:1}.newsletter-submit.is-done.jsx-fffbb62990f56333{background:linear-gradient(135deg,#059669,#10b981)}.newsletter-submit.is-done.jsx-fffbb62990f56333 .check.jsx-fffbb62990f56333{opacity:1}.newsletter-submit.jsx-fffbb62990f56333 .check.jsx-fffbb62990f56333{opacity:0;transition:opacity .3s;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.newsletter-submit.jsx-fffbb62990f56333 .check.jsx-fffbb62990f56333:after{content:"✓";color:#fff;font-size:18px;font-weight:700}@keyframes spin{0%{transform:translate(-50%,-50%)rotate(0)}to{transform:translate(-50%,-50%)rotate(360deg)}}.success-message.jsx-fffbb62990f56333{color:#10b981;text-align:center;opacity:0;background:#0596691a;border:1px solid #0596694d;border-radius:8px;margin-top:16px;padding:12px 20px;transition:all .3s;transform:translateY(-10px)}.success-message.show.jsx-fffbb62990f56333{opacity:1;transform:translateY(0)}.interactive-bg.jsx-fffbb62990f56333{background:radial-gradient(600px circle at var(--mouse-x,50%)var(--mouse-y,50%),#3b82f60d,transparent 40%);transition:opacity .3s;position:absolute;inset:0}'
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: sectionRef,
                id: "cta-section",
                style: {
                    '--mouse-x': `${mousePosition.x * 100}%`,
                    '--mouse-y': `${mousePosition.y * 100}%`
                },
                className: "jsx-fffbb62990f56333" + " " + "relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                        ref: particlesRef,
                        className: "jsx-fffbb62990f56333" + " " + "absolute inset-0 w-full h-full pointer-events-none opacity-30"
                    }, void 0, false, {
                        fileName: "[project]/app/components/CTASection.tsx",
                        lineNumber: 351,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-fffbb62990f56333" + " " + "interactive-bg"
                    }, void 0, false, {
                        fileName: "[project]/app/components/CTASection.tsx",
                        lineNumber: 354,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-fffbb62990f56333" + " " + "absolute inset-0 neural-grid opacity-60"
                    }, void 0, false, {
                        fileName: "[project]/app/components/CTASection.tsx",
                        lineNumber: 357,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute inset-0 pointer-events-none",
                        style: {
                            y,
                            opacity
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-fffbb62990f56333" + " " + "ai-orb absolute top-1/4 left-1/4"
                            }, void 0, false, {
                                fileName: "[project]/app/components/CTASection.tsx",
                                lineNumber: 364,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-fffbb62990f56333" + " " + "ai-orb absolute top-3/4 right-1/4"
                            }, void 0, false, {
                                fileName: "[project]/app/components/CTASection.tsx",
                                lineNumber: 365,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-fffbb62990f56333" + " " + "ai-orb absolute bottom-1/3 left-2/3"
                            }, void 0, false, {
                                fileName: "[project]/app/components/CTASection.tsx",
                                lineNumber: 366,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/CTASection.tsx",
                        lineNumber: 360,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-fffbb62990f56333" + " " + "relative z-10 max-w-6xl mx-auto px-6 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 50,
                                    scale: 0.9
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1
                                },
                                viewport: {
                                    once: true,
                                    margin: '-100px'
                                },
                                transition: {
                                    duration: 0.8,
                                    ease: [
                                        0.25,
                                        0.1,
                                        0.25,
                                        1
                                    ]
                                },
                                className: "mb-20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            duration: 0.6,
                                            delay: 0.2
                                        },
                                        className: "mb-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-fffbb62990f56333" + " " + "inline-block px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6",
                                            children: "🤖 Physical AI Revolution"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/CTASection.tsx",
                                            lineNumber: 384,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/CTASection.tsx",
                                        lineNumber: 378,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                        className: "text-4xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent leading-tight",
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            duration: 0.6,
                                            delay: 0.3
                                        },
                                        children: [
                                            "Ready to Revolutionize",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                className: "jsx-fffbb62990f56333"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/CTASection.tsx",
                                                lineNumber: 395,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-fffbb62990f56333" + " " + "text-white",
                                                children: "Your Industry?"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/CTASection.tsx",
                                                lineNumber: 396,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/CTASection.tsx",
                                        lineNumber: 389,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                        className: "text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed",
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            duration: 0.6,
                                            delay: 0.4
                                        },
                                        children: "Experience the future where AI transcends screens and transforms reality. See Propheus Physical AI solutions in action."
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/CTASection.tsx",
                                        lineNumber: 399,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            scale: 0.8
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        transition: {
                                            duration: 0.6,
                                            delay: 0.5
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleDemoClick,
                                            "aria-label": "Book a demo with Propheus",
                                            className: "jsx-fffbb62990f56333" + " " + "cta-main-button",
                                            children: "Book a Demo!"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/CTASection.tsx",
                                            lineNumber: 414,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/CTASection.tsx",
                                        lineNumber: 409,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/CTASection.tsx",
                                lineNumber: 371,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "flex items-center justify-center mb-16",
                                initial: {
                                    opacity: 0,
                                    scaleX: 0
                                },
                                whileInView: {
                                    opacity: 1,
                                    scaleX: 1
                                },
                                transition: {
                                    duration: 0.8,
                                    delay: 0.6
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-fffbb62990f56333" + " " + "h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent w-full max-w-2xl"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/CTASection.tsx",
                                        lineNumber: 431,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-fffbb62990f56333" + " " + "mx-4 p-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-fffbb62990f56333" + " " + "w-2 h-2 rounded-full bg-blue-400 animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/CTASection.tsx",
                                            lineNumber: 433,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/CTASection.tsx",
                                        lineNumber: 432,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-fffbb62990f56333" + " " + "h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent w-full max-w-2xl"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/CTASection.tsx",
                                        lineNumber: 435,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/CTASection.tsx",
                                lineNumber: 425,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 40
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true,
                                    margin: '-50px'
                                },
                                transition: {
                                    duration: 0.7,
                                    delay: 0.7
                                },
                                className: "max-w-4xl mx-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-fffbb62990f56333" + " " + "newsletter-container",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h3, {
                                            className: "text-2xl md:text-3xl font-semibold mb-4 text-white",
                                            initial: {
                                                opacity: 0
                                            },
                                            whileInView: {
                                                opacity: 1
                                            },
                                            transition: {
                                                duration: 0.5,
                                                delay: 0.8
                                            },
                                            children: "Stay at the Forefront of Physical AI"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/CTASection.tsx",
                                            lineNumber: 447,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                            className: "text-gray-300 mb-8 text-lg leading-relaxed",
                                            initial: {
                                                opacity: 0
                                            },
                                            whileInView: {
                                                opacity: 1
                                            },
                                            transition: {
                                                duration: 0.5,
                                                delay: 0.9
                                            },
                                            children: "For more on Physical AI, industry news, and Propheus offerings and impact, sign up for our newsletter!"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/CTASection.tsx",
                                            lineNumber: 456,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].form, {
                                            onSubmit: handleSubmit,
                                            className: "newsletter-form",
                                            initial: {
                                                opacity: 0,
                                                y: 20
                                            },
                                            whileInView: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                duration: 0.5,
                                                delay: 1
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-fffbb62990f56333" + " " + "flex flex-col sm:flex-row gap-4 items-stretch",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "email",
                                                            required: true,
                                                            placeholder: "Enter your email address",
                                                            "aria-label": "Email address",
                                                            className: "jsx-fffbb62990f56333" + " " + "newsletter-input"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/CTASection.tsx",
                                                            lineNumber: 473,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "submit",
                                                            disabled: submitting,
                                                            className: "jsx-fffbb62990f56333" + " " + `newsletter-submit ${submitting ? 'is-loading' : submitted ? 'is-done' : ''}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-fffbb62990f56333" + " " + "label",
                                                                    children: "Subscribe"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/CTASection.tsx",
                                                                    lineNumber: 485,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-fffbb62990f56333" + " " + "spinner"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/CTASection.tsx",
                                                                    lineNumber: 486,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-fffbb62990f56333" + " " + "check"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/CTASection.tsx",
                                                                    lineNumber: 487,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/CTASection.tsx",
                                                            lineNumber: 480,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/CTASection.tsx",
                                                    lineNumber: 472,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-fffbb62990f56333" + " " + `success-message ${showSuccess ? 'show' : ''}`,
                                                    children: "🎉 Thanks! You're now part of the Physical AI revolution."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/CTASection.tsx",
                                                    lineNumber: 491,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/CTASection.tsx",
                                            lineNumber: 465,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/CTASection.tsx",
                                    lineNumber: 446,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/CTASection.tsx",
                                lineNumber: 439,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/CTASection.tsx",
                        lineNumber: 369,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].svg, {
                        className: "absolute inset-0 w-full h-full pointer-events-none opacity-20",
                        style: {
                            y
                        },
                        viewBox: "0 0 1200 800",
                        fill: "none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                d: "M200 200 Q 400 100 600 200 T 1000 200",
                                stroke: "url(#gradient1)",
                                strokeWidth: "1",
                                initial: {
                                    pathLength: 0
                                },
                                whileInView: {
                                    pathLength: 1
                                },
                                transition: {
                                    duration: 2,
                                    delay: 1
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/components/CTASection.tsx",
                                lineNumber: 506,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                d: "M100 400 Q 300 300 500 400 T 900 400",
                                stroke: "url(#gradient2)",
                                strokeWidth: "1",
                                initial: {
                                    pathLength: 0
                                },
                                whileInView: {
                                    pathLength: 1
                                },
                                transition: {
                                    duration: 2,
                                    delay: 1.2
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/components/CTASection.tsx",
                                lineNumber: 514,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                className: "jsx-fffbb62990f56333",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                        id: "gradient1",
                                        x1: "0%",
                                        y1: "0%",
                                        x2: "100%",
                                        y2: "0%",
                                        className: "jsx-fffbb62990f56333",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "0%",
                                                stopColor: "rgba(59, 130, 246, 0)",
                                                className: "jsx-fffbb62990f56333"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/CTASection.tsx",
                                                lineNumber: 524,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "50%",
                                                stopColor: "rgba(59, 130, 246, 0.5)",
                                                className: "jsx-fffbb62990f56333"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/CTASection.tsx",
                                                lineNumber: 525,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "100%",
                                                stopColor: "rgba(59, 130, 246, 0)",
                                                className: "jsx-fffbb62990f56333"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/CTASection.tsx",
                                                lineNumber: 526,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/CTASection.tsx",
                                        lineNumber: 523,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                        id: "gradient2",
                                        x1: "0%",
                                        y1: "0%",
                                        x2: "100%",
                                        y2: "0%",
                                        className: "jsx-fffbb62990f56333",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "0%",
                                                stopColor: "rgba(168, 85, 247, 0)",
                                                className: "jsx-fffbb62990f56333"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/CTASection.tsx",
                                                lineNumber: 529,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "50%",
                                                stopColor: "rgba(168, 85, 247, 0.5)",
                                                className: "jsx-fffbb62990f56333"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/CTASection.tsx",
                                                lineNumber: 530,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "100%",
                                                stopColor: "rgba(168, 85, 247, 0)",
                                                className: "jsx-fffbb62990f56333"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/CTASection.tsx",
                                                lineNumber: 531,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/CTASection.tsx",
                                        lineNumber: 528,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/CTASection.tsx",
                                lineNumber: 522,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/CTASection.tsx",
                        lineNumber: 500,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/CTASection.tsx",
                lineNumber: 341,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(CTASection, "aL9myOB3CHc9keAb8LvssNnH1xc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = CTASection;
const __TURBOPACK__default__export__ = CTASection;
var _c;
__turbopack_context__.k.register(_c, "CTASection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/IndustriesPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IndustriesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$CTASection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/CTASection.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
'use client';
;
;
;
// Particles Background Component
const ParticlesBackground = ()=>{
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const particlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const timeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParticlesBackground.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            // Set canvas size
            const resizeCanvas = {
                "ParticlesBackground.useEffect.resizeCanvas": ()=>{
                    if (canvas) {
                        canvas.width = window.innerWidth;
                        canvas.height = window.innerHeight;
                    }
                }
            }["ParticlesBackground.useEffect.resizeCanvas"];
            resizeCanvas();
            // Particle class
            class Particle {
                x;
                y;
                vx;
                vy;
                baseSize;
                pulseOffset;
                constructor(){
                    this.x = Math.random() * (canvas?.width || 0);
                    this.y = Math.random() * (canvas?.height || 0);
                    this.vx = (Math.random() - 0.5) * 0.3;
                    this.vy = (Math.random() - 0.5) * 0.3;
                    this.baseSize = Math.random() * 2 + 1.5; // Base size 1.5-3.5px
                    this.pulseOffset = Math.random() * Math.PI * 2; // Random phase for pulsing
                }
                update(time) {
                    this.x += this.vx;
                    this.y += this.vy;
                    // Wrap around edges
                    if (canvas) {
                        if (this.x < 0) this.x = canvas.width;
                        if (this.x > canvas.width) this.x = 0;
                        if (this.y < 0) this.y = canvas.height;
                        if (this.y > canvas.height) this.y = 0;
                    }
                }
                draw(time) {
                    if (!ctx) return;
                    // Calculate pulsating size
                    const pulseIntensity = 0.4; // How much the particle grows/shrinks
                    const pulseSpeed = 0.002; // Speed of pulsation
                    const pulseFactor = 1 + Math.sin(time * pulseSpeed + this.pulseOffset) * pulseIntensity;
                    const currentSize = this.baseSize * pulseFactor;
                    // Calculate pulsating opacity
                    const opacityPulse = 0.3 + Math.sin(time * pulseSpeed * 1.5 + this.pulseOffset) * 0.2;
                    // Draw particle with glow
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, currentSize, 0, Math.PI * 2);
                    // Main particle
                    ctx.fillStyle = `rgba(255, 140, 66, ${0.8 + opacityPulse})`;
                    ctx.fill();
                    // Enhanced glow effect
                    ctx.shadowColor = '#ff8c42';
                    ctx.shadowBlur = currentSize * 3;
                    ctx.fill();
                    // Additional outer glow
                    ctx.shadowBlur = currentSize * 6;
                    ctx.shadowColor = 'rgba(255, 140, 66, 0.3)';
                    ctx.fill();
                    // Reset shadow
                    ctx.shadowBlur = 0;
                }
            }
            // Create particles
            const createParticles = {
                "ParticlesBackground.useEffect.createParticles": ()=>{
                    const particleCount = 70; // Slightly increased for better network effect
                    particlesRef.current = [];
                    for(let i = 0; i < particleCount; i++){
                        particlesRef.current.push(new Particle());
                    }
                }
            }["ParticlesBackground.useEffect.createParticles"];
            // Draw connections between nearby particles
            const drawConnections = {
                "ParticlesBackground.useEffect.drawConnections": (time)=>{
                    if (!ctx) return;
                    for(let i = 0; i < particlesRef.current.length; i++){
                        for(let j = i + 1; j < particlesRef.current.length; j++){
                            const dx = particlesRef.current[i].x - particlesRef.current[j].x;
                            const dy = particlesRef.current[i].y - particlesRef.current[j].y;
                            const distance = Math.sqrt(dx * dx + dy * dy);
                            if (distance < 150) {
                                // Enhanced connection visibility
                                const baseOpacity = (150 - distance) / 150;
                                const pulseEffect = 0.4 + Math.sin(time * 0.001 + distance * 0.01) * 0.3;
                                const finalOpacity = baseOpacity * pulseEffect * 0.7; // Increased from 0.3 to 0.7
                                ctx.beginPath();
                                ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
                                ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
                                // Gradient line for better visual appeal
                                const gradient = ctx.createLinearGradient(particlesRef.current[i].x, particlesRef.current[i].y, particlesRef.current[j].x, particlesRef.current[j].y);
                                gradient.addColorStop(0, `rgba(255, 140, 66, ${finalOpacity})`);
                                gradient.addColorStop(0.5, `rgba(255, 200, 100, ${finalOpacity * 1.2})`);
                                gradient.addColorStop(1, `rgba(255, 140, 66, ${finalOpacity})`);
                                ctx.strokeStyle = gradient;
                                ctx.lineWidth = 1.2; // Increased from 0.5 to 1.2
                                ctx.stroke();
                                // Add subtle glow to connections
                                ctx.shadowColor = '#ff8c42';
                                ctx.shadowBlur = 2;
                                ctx.stroke();
                                ctx.shadowBlur = 0;
                            }
                        }
                    }
                }
            }["ParticlesBackground.useEffect.drawConnections"];
            // Animation loop
            const animate = {
                "ParticlesBackground.useEffect.animate": ()=>{
                    if (!ctx || !canvas) return;
                    timeRef.current += 16; // Approximate 60fps timing
                    // Clear canvas
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    // Update and draw particles
                    particlesRef.current.forEach({
                        "ParticlesBackground.useEffect.animate": (particle)=>{
                            particle.update(timeRef.current);
                            particle.draw(timeRef.current);
                        }
                    }["ParticlesBackground.useEffect.animate"]);
                    // Draw enhanced connections
                    drawConnections(timeRef.current);
                    animationRef.current = requestAnimationFrame(animate);
                }
            }["ParticlesBackground.useEffect.animate"];
            createParticles();
            animate();
            // Handle resize
            const handleResize = {
                "ParticlesBackground.useEffect.handleResize": ()=>{
                    resizeCanvas();
                    createParticles();
                }
            }["ParticlesBackground.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            return ({
                "ParticlesBackground.useEffect": ()=>{
                    window.removeEventListener('resize', handleResize);
                    if (animationRef.current) {
                        cancelAnimationFrame(animationRef.current);
                    }
                }
            })["ParticlesBackground.useEffect"];
        }
    }["ParticlesBackground.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "fixed top-0 left-0 w-full h-full pointer-events-none z-0",
        style: {
            background: 'transparent'
        }
    }, void 0, false, {
        fileName: "[project]/app/components/IndustriesPage.tsx",
        lineNumber: 189,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ParticlesBackground, "uYqmn/ol023XAgDcFuPiKMyD/m4=");
_c = ParticlesBackground;
const INDUSTRIES = {
    retail: {
        name: 'Retail',
        description: 'Leveraging data insights to optimize store locations, inventory, and customer engagement in physical retail environments.',
        useCases: [
            'Physical Observability (for stores)',
            'Site Selection',
            'Demand Planning',
            'Product Recommendation',
            'Promotion Recommendation'
        ],
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-6 w-6",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3 7h18M5 7l2 12h10l2-12",
                    strokeWidth: 1.6,
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/app/components/IndustriesPage.tsx",
                    lineNumber: 219,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9 11h6M8 15h8",
                    strokeWidth: 1.4,
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/app/components/IndustriesPage.tsx",
                    lineNumber: 220,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/IndustriesPage.tsx",
            lineNumber: 218,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    cpg: {
        name: 'CPG',
        description: 'Driving consumer packaged goods strategies through market analysis, retailer partnerships, and personalized product promotions.',
        useCases: [
            'Market Potential',
            'Retailer Selection',
            'Demand Planning',
            'Product Recommendation',
            'Promotion Recommendation'
        ],
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-6 w-6",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M7 7h10v10H7z",
                    strokeWidth: 1.6
                }, void 0, false, {
                    fileName: "[project]/app/components/IndustriesPage.tsx",
                    lineNumber: 236,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M10 10h4v4h-4z",
                    strokeWidth: 1.4
                }, void 0, false, {
                    fileName: "[project]/app/components/IndustriesPage.tsx",
                    lineNumber: 237,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/IndustriesPage.tsx",
            lineNumber: 235,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    o2o: {
        name: 'Online to Offline (O2O)',
        description: 'Connecting digital interactions to physical locations for enhanced demand forecasting, pricing, and assortment in hybrid retail models.',
        useCases: [
            'Physical Observability (for zones, stores, restaurants etc)',
            'Demand Planning',
            'Dynamic Pricing',
            'Product Assortment'
        ],
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-6 w-6",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M4 7h16M6 7l-2 10h12l2-10",
                    strokeWidth: 1.6,
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/app/components/IndustriesPage.tsx",
                    lineNumber: 252,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M7 17a2 2 0 104 0M15 17a2 2 0 104 0",
                    strokeWidth: 1.2
                }, void 0, false, {
                    fileName: "[project]/app/components/IndustriesPage.tsx",
                    lineNumber: 253,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/IndustriesPage.tsx",
            lineNumber: 251,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    travel: {
        name: 'Travel',
        description: 'Enhancing travel and hospitality with real-time observability, personalized recommendations, and dynamic pricing for properties and experiences.',
        useCases: [
            'Physical Observability (for properties)',
            'Personalized Discovery & Recommendations',
            'Dynamic Pricing & Bundling'
        ],
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-6 w-6",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3 10l9-7 9 7-9 7-9-7z",
                    strokeWidth: 1.6
                }, void 0, false, {
                    fileName: "[project]/app/components/IndustriesPage.tsx",
                    lineNumber: 267,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 17v4",
                    strokeWidth: 1.6,
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/app/components/IndustriesPage.tsx",
                    lineNumber: 268,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/IndustriesPage.tsx",
            lineNumber: 266,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    fintech: {
        name: 'FinTech',
        description: 'Empowering financial services with transaction intelligence, fraud prevention, and secure merchant integrations.',
        useCases: [
            'Transaction Enrichment & Merchant Intelligence',
            'Fraud Detection & Risk Management',
            'Merchant Onboarding & Verification'
        ],
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-6 w-6",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
                strokeWidth: 1.6,
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/app/components/IndustriesPage.tsx",
                lineNumber: 282,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/components/IndustriesPage.tsx",
            lineNumber: 281,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    realestate: {
        name: 'Real Estate',
        description: 'Informing property investments through site evaluations, rental forecasts, and accurate valuations.',
        useCases: [
            'Site Selection',
            'Rent Prediction',
            'Property Valuation'
        ],
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-6 w-6",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 21h18M5 21V7l8-4 8 4v14M10 12h4v4h-4z",
                strokeWidth: 1.6,
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/app/components/IndustriesPage.tsx",
                lineNumber: 296,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/components/IndustriesPage.tsx",
            lineNumber: 295,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }
};
// Semi-circle component with teal glow and animated text
const GlowingSemiCircle = ()=>{
    _s1();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(containerRef, {
        once: false,
        margin: "-100px 0px"
    });
    // Scroll progress tracking for the container
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: containerRef,
        offset: [
            "start end",
            "end start"
        ]
    });
    // Transform scroll progress to scale and dimensions
    const scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.25,
        0.5
    ], [
        0.4,
        1,
        1.8
    ]);
    const width = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.25,
        0.5
    ], [
        300,
        800,
        1400
    ]);
    const height = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.25,
        0.5
    ], [
        250,
        650,
        1100
    ]);
    const glowIntensity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.15,
        0.35,
        0.5
    ], [
        0.3,
        0.7,
        0.9,
        1
    ]);
    const textOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0.4,
        0.6,
        0.8,
        1
    ], [
        0.4,
        0.7,
        1,
        1
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "relative w-full h-[200vh] overflow-hidden my-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute bottom-0 left-1/2 bg-slate-200 dark:bg-black rounded-t-full",
                style: {
                    x: "-50%",
                    width,
                    height,
                    scale
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute inset-0 rounded-t-full",
                        style: {
                            boxShadow: "0 0 100px 20px rgba(20,184,166,0.4)",
                            opacity: glowIntensity
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/components/IndustriesPage.tsx",
                        lineNumber: 331,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute inset-0 rounded-t-full",
                        style: {
                            boxShadow: "0 0 200px 40px rgba(20,184,166,0.2)",
                            opacity: glowIntensity
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/components/IndustriesPage.tsx",
                        lineNumber: 338,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/IndustriesPage.tsx",
                lineNumber: 322,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10",
                initial: {
                    opacity: 0
                },
                animate: isInView ? {
                    opacity: 1
                } : {
                    opacity: 0
                },
                transition: {
                    duration: 1.2,
                    ease: "easeOut"
                },
                style: {
                    opacity: textOpacity
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                    className: "text-5xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-wide mb-16",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: isInView ? {
                        opacity: 1,
                        y: 0
                    } : {
                        opacity: 0,
                        y: 20
                    },
                    transition: {
                        duration: 1.5,
                        ease: "easeOut",
                        staggerChildren: 0.1,
                        delayChildren: 0.3
                    },
                    children: Array.from("your industry").map((char, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                            initial: {
                                opacity: 0,
                                y: 10
                            },
                            animate: isInView ? {
                                opacity: 1,
                                y: 0
                            } : {
                                opacity: 0,
                                y: 10
                            },
                            transition: {
                                duration: 0.8,
                                delay: 0.3 + index * 0.05,
                                ease: "easeOut"
                            },
                            className: "inline-block",
                            children: char === " " ? "\u00A0" : char
                        }, index, false, {
                            fileName: "[project]/app/components/IndustriesPage.tsx",
                            lineNumber: 366,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/app/components/IndustriesPage.tsx",
                    lineNumber: 354,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/IndustriesPage.tsx",
                lineNumber: 347,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/IndustriesPage.tsx",
        lineNumber: 321,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(GlowingSemiCircle, "os8Sx4+QQ4/uLnipAOPr8xtuEvY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c1 = GlowingSemiCircle;
// Split text animation
const AnimatedText = ()=>{
    _s2();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fullText = "The challenges of the physical world are unique to every industry. Propheus provides a single source of truth, finely tuned to deliver the specific intelligence your sector demands. Explore your solution below.";
    const words = fullText.split(' ');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedText.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "AnimatedText.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                }
            }["AnimatedText.useEffect"], {
                threshold: 0.3,
                rootMargin: '-100px 0px'
            });
            if (containerRef.current) {
                observer.observe(containerRef.current);
            }
            return ({
                "AnimatedText.useEffect": ()=>observer.disconnect()
            })["AnimatedText.useEffect"];
        }
    }["AnimatedText.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .split-word {
          position: relative;
          display: inline-block;
          margin-right: 0.25em;
          opacity: 0;
          transform: translate3d(0, 100px, 0) scale(0.8);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .split-word.animate {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
        }
      `
            }, void 0, false, {
                fileName: "[project]/app/components/IndustriesPage.tsx",
                lineNumber: 416,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "mt-8 text-center max-w-4xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-2xl md:text-3xl font-medium leading-relaxed text-slate-700 dark:text-slate-100",
                    children: words.map((word, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `split-word ${isVisible ? 'animate' : ''}`,
                            style: {
                                transitionDelay: `${index * 0.08}s`
                            },
                            children: word
                        }, index, false, {
                            fileName: "[project]/app/components/IndustriesPage.tsx",
                            lineNumber: 435,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/app/components/IndustriesPage.tsx",
                    lineNumber: 433,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/IndustriesPage.tsx",
                lineNumber: 432,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s2(AnimatedText, "8JNVpFpwz/l/yKObBTFcQO0uPZ0=");
_c2 = AnimatedText;
// Individual Industry Card Component
const IndustryCard = ({ industry, industryKey })=>{
    _s3();
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const toggleExpanded = ()=>{
        setIsExpanded(!isExpanded);
    };
    const handleKeyPress = (e)=>{
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleExpanded();
        }
    };
    // Placeholder background images for different industries
    const getBackgroundImage = (key)=>{
        const backgrounds = {
            retail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            cpg: 'https://images.unsplash.com/photo-1586380951230-1dd1362a2655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            o2o: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            travel: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            fintech: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            realestate: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        };
        return backgrounds[key];
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full max-w-sm mx-auto rounded-[20px] overflow-hidden shadow-xl transition-all duration-200 hover:shadow-2xl hover:scale-105",
        style: {
            backgroundImage: `url(${getBackgroundImage(industryKey)})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: isExpanded ? 'auto' : '420px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black bg-opacity-50 rounded-[20px]"
            }, void 0, false, {
                fileName: "[project]/app/components/IndustriesPage.tsx",
                lineNumber: 490,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 p-6 text-white h-full flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col justify-end mt-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold text-white mb-3 leading-tight",
                                        children: industry.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/IndustriesPage.tsx",
                                        lineNumber: 495,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white text-opacity-90 text-sm leading-relaxed mb-6 line-clamp-3",
                                        children: industry.description
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/IndustriesPage.tsx",
                                        lineNumber: 499,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-3 py-1.5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-white text-opacity-80",
                                                            children: industry.icon
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/IndustriesPage.tsx",
                                                            lineNumber: 506,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-white text-opacity-90 font-medium",
                                                            children: "Data-Driven"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/IndustriesPage.tsx",
                                                            lineNumber: 509,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/IndustriesPage.tsx",
                                                    lineNumber: 505,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/IndustriesPage.tsx",
                                                lineNumber: 504,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-3 py-1.5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-white text-opacity-90 font-medium",
                                                    children: [
                                                        industry.useCases.length,
                                                        " Solutions"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/IndustriesPage.tsx",
                                                    lineNumber: 515,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/IndustriesPage.tsx",
                                                lineNumber: 514,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/IndustriesPage.tsx",
                                        lineNumber: 503,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/IndustriesPage.tsx",
                                lineNumber: 494,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleExpanded,
                                onKeyDown: handleKeyPress,
                                className: "w-full bg-black hover:bg-gray-800 text-white font-semibold py-3.5 px-6 rounded-full transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 flex items-center justify-center gap-2 shadow-lg",
                                "aria-expanded": isExpanded,
                                "aria-controls": `use-cases-${industryKey}`,
                                style: {
                                    backgroundColor: '#000000'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Find your use case"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/IndustriesPage.tsx",
                                        lineNumber: 530,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].svg, {
                                        animate: {
                                            rotate: isExpanded ? 90 : 0
                                        },
                                        transition: {
                                            duration: 0.3,
                                            ease: "easeInOut"
                                        },
                                        className: "w-4 h-4",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M9 5l7 7-7 7"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/IndustriesPage.tsx",
                                            lineNumber: 539,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/IndustriesPage.tsx",
                                        lineNumber: 531,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/IndustriesPage.tsx",
                                lineNumber: 522,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/IndustriesPage.tsx",
                        lineNumber: 493,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: false,
                        animate: {
                            height: isExpanded ? 'auto' : 0,
                            opacity: isExpanded ? 1 : 0
                        },
                        transition: {
                            duration: 0.3,
                            ease: "easeInOut"
                        },
                        className: "overflow-hidden",
                        id: `use-cases-${industryKey}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: contentRef,
                            className: "pt-6 mt-4 border-t border-white border-opacity-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-white text-lg font-semibold mb-3",
                                    children: "Available Solutions:"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/IndustriesPage.tsx",
                                    lineNumber: 555,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2",
                                    children: industry.useCases.map((useCase, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#use-case-details",
                                                className: "text-white text-opacity-90 text-sm hover:text-white hover:underline transition-colors duration-150 block pl-2 relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute left-0 top-2",
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/IndustriesPage.tsx",
                                                        lineNumber: 563,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-2",
                                                        children: useCase
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/IndustriesPage.tsx",
                                                        lineNumber: 564,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/IndustriesPage.tsx",
                                                lineNumber: 559,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, index, false, {
                                            fileName: "[project]/app/components/IndustriesPage.tsx",
                                            lineNumber: 558,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/IndustriesPage.tsx",
                                    lineNumber: 556,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/IndustriesPage.tsx",
                            lineNumber: 554,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/IndustriesPage.tsx",
                        lineNumber: 544,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/IndustriesPage.tsx",
                lineNumber: 492,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/IndustriesPage.tsx",
        lineNumber: 481,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s3(IndustryCard, "w1iQxIUfCmfi4iyx+EJJQtyN8XA=");
_c3 = IndustryCard;
// Industries Cards Grid Section
const IndustriesCardsSection = ()=>{
    const industriesArray = Object.entries(INDUSTRIES);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center",
                children: industriesArray.map(([key, industry])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IndustryCard, {
                        industry: industry,
                        industryKey: key
                    }, key, false, {
                        fileName: "[project]/app/components/IndustriesPage.tsx",
                        lineNumber: 585,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/app/components/IndustriesPage.tsx",
                lineNumber: 583,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/components/IndustriesPage.tsx",
            lineNumber: 582,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/IndustriesPage.tsx",
        lineNumber: 581,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c4 = IndustriesCardsSection;
const SectionHeader = ({ title })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative z-10 text-center max-w-4xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-5xl md:text-7xl font-bold text-slate-900 dark:text-slate-100 leading-tight mb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "animated-teal-gradient teal-glow-text",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/app/components/IndustriesPage.tsx",
                    lineNumber: 600,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/IndustriesPage.tsx",
                lineNumber: 599,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedText, {}, void 0, false, {
                fileName: "[project]/app/components/IndustriesPage.tsx",
                lineNumber: 602,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/IndustriesPage.tsx",
        lineNumber: 598,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c5 = SectionHeader;
function IndustriesPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "bg-slate-50 dark:bg-black text-slate-900 dark:text-slate-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParticlesBackground, {}, void 0, false, {
                fileName: "[project]/app/components/IndustriesPage.tsx",
                lineNumber: 609,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative isolate overflow-hidden py-24 sm:py-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                    title: "One Atlas. Tailored for Every World."
                }, void 0, false, {
                    fileName: "[project]/app/components/IndustriesPage.tsx",
                    lineNumber: 612,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/IndustriesPage.tsx",
                lineNumber: 611,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlowingSemiCircle, {}, void 0, false, {
                fileName: "[project]/app/components/IndustriesPage.tsx",
                lineNumber: 615,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IndustriesCardsSection, {}, void 0, false, {
                fileName: "[project]/app/components/IndustriesPage.tsx",
                lineNumber: 617,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$CTASection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/components/IndustriesPage.tsx",
                lineNumber: 618,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/IndustriesPage.tsx",
        lineNumber: 608,
        columnNumber: 5
    }, this);
}
_c6 = IndustriesPage;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "ParticlesBackground");
__turbopack_context__.k.register(_c1, "GlowingSemiCircle");
__turbopack_context__.k.register(_c2, "AnimatedText");
__turbopack_context__.k.register(_c3, "IndustryCard");
__turbopack_context__.k.register(_c4, "IndustriesCardsSection");
__turbopack_context__.k.register(_c5, "SectionHeader");
__turbopack_context__.k.register(_c6, "IndustriesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/industries/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Industries
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$IndustriesPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/IndustriesPage.tsx [app-client] (ecmascript)");
'use client';
;
;
function Industries() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$IndustriesPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/industries/page.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
_c = Industries;
var _c;
__turbopack_context__.k.register(_c, "Industries");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_64ed9f7d._.js.map