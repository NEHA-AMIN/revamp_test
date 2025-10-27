module.exports = [
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 47,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = "Button";
;
}),
"[project]/components/ui/shadcn-io/background-paths/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BackgroundPaths",
    ()=>BackgroundPaths
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function FloatingPaths({ position }) {
    const paths = Array.from({
        length: 36
    }, (_, i)=>({
            id: i,
            d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
            color: `rgba(13,148,136,${0.35 + i * 0.05})`,
            width: 0.8 + i * 0.04
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 pointer-events-none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-full h-full",
            viewBox: "0 0 696 316",
            fill: "none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                    children: "Background Paths"
                }, void 0, false, {
                    fileName: "[project]/components/ui/shadcn-io/background-paths/index.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "tealStroke",
                        x1: "0",
                        y1: "0",
                        x2: "1",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "rgba(13,148,136,0.65)"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/shadcn-io/background-paths/index.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "50%",
                                stopColor: "rgba(20,184,166,0.75)"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/shadcn-io/background-paths/index.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "rgba(13,148,136,0.65)"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/shadcn-io/background-paths/index.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/shadcn-io/background-paths/index.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/shadcn-io/background-paths/index.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                paths.map((path)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].path, {
                        d: path.d,
                        stroke: "url(#tealStroke)",
                        strokeWidth: path.width,
                        strokeOpacity: 0.45 + path.id * 0.025,
                        initial: {
                            pathLength: 0.4,
                            opacity: 0.8
                        },
                        animate: {
                            pathLength: 1,
                            opacity: [
                                0.5,
                                0.9,
                                0.5
                            ],
                            pathOffset: [
                                0,
                                1,
                                0
                            ]
                        },
                        transition: {
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: 'linear'
                        }
                    }, path.id, false, {
                        fileName: "[project]/components/ui/shadcn-io/background-paths/index.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/shadcn-io/background-paths/index.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/shadcn-io/background-paths/index.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
function BackgroundPaths({ title = 'Background Paths' }) {
    const words = title.split(' ');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-br from-black via-gray-900/50 to-black"
            }, void 0, false, {
                fileName: "[project]/components/ui/shadcn-io/background-paths/index.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingPaths, {
                        position: 1
                    }, void 0, false, {
                        fileName: "[project]/components/ui/shadcn-io/background-paths/index.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingPaths, {
                        position: -1
                    }, void 0, false, {
                        fileName: "[project]/components/ui/shadcn-io/background-paths/index.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/shadcn-io/background-paths/index.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 container mx-auto px-4 md:px-6 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: 2
                    },
                    className: "max-w-4xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter",
                            children: words.map((word, wordIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block mr-4 last:mr-0",
                                    children: word.split('').map((letter, letterIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                            initial: {
                                                y: 100,
                                                opacity: 0
                                            },
                                            animate: {
                                                y: 0,
                                                opacity: 1
                                            },
                                            transition: {
                                                delay: wordIndex * 0.1 + letterIndex * 0.03,
                                                type: 'spring',
                                                stiffness: 150,
                                                damping: 25
                                            },
                                            className: "inline-block text-transparent bg-clip-text  bg-gradient-to-r from-white via-teal-100 to-teal-300",
                                            children: letter
                                        }, `${wordIndex}-${letterIndex}`, false, {
                                            fileName: "[project]/components/ui/shadcn-io/background-paths/index.tsx",
                                            lineNumber: 93,
                                            columnNumber: 19
                                        }, this))
                                }, wordIndex, false, {
                                    fileName: "[project]/components/ui/shadcn-io/background-paths/index.tsx",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/ui/shadcn-io/background-paths/index.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-block group relative bg-gradient-to-b from-teal-500/20 to-teal-600/10  p-px rounded-2xl backdrop-blur-lg  overflow-hidden shadow-lg shadow-teal-500/20 hover:shadow-xl hover:shadow-teal-500/30 transition-shadow duration-300",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                className: "rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md  bg-gray-900/80 hover:bg-gray-900/90 border border-teal-500/30 hover:border-teal-400/50 text-white transition-all duration-300  group-hover:-translate-y-0.5 hover:shadow-md hover:shadow-teal-500/20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5  transition-all duration-300 text-teal-300",
                                    children: "→"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/shadcn-io/background-paths/index.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ui/shadcn-io/background-paths/index.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ui/shadcn-io/background-paths/index.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/shadcn-io/background-paths/index.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/shadcn-io/background-paths/index.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/shadcn-io/background-paths/index.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/data/resourcesData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categories",
    ()=>categories,
    "resourcesData",
    ()=>resourcesData
]);
const resourcesData = [
    // Blog Posts
    {
        id: '1',
        type: 'blog',
        category: 'AI & Automation',
        title: 'How AI Agents Transform Customer Support',
        description: 'Discover how intelligent AI agents can handle customer queries 24/7, reducing response times by 80% while maintaining high satisfaction scores.',
        thumbnail: '/api/placeholder/400/250',
        url: '/blog/ai-agents-customer-support',
        readTime: '8 min read',
        publishDate: '2025-01-15',
        tags: [
            'AI',
            'Customer Support',
            'Automation'
        ]
    },
    {
        id: '2',
        type: 'blog',
        category: 'Best Practices',
        title: 'Building Conversational AI: 10 Essential Tips',
        description: 'Learn the key principles for designing natural, effective conversational experiences that users love.',
        thumbnail: '/api/placeholder/400/250',
        url: '/blog/conversational-ai-tips',
        readTime: '6 min read',
        publishDate: '2025-01-12',
        tags: [
            'Best Practices',
            'Conversational AI',
            'Design'
        ]
    },
    {
        id: '3',
        type: 'video',
        category: 'Tutorials',
        title: 'Getting Started with AI Voice Agents',
        description: 'A complete walkthrough of setting up your first AI voice agent in under 15 minutes.',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        videoId: 'dQw4w9WgXcQ',
        readTime: '12 min watch',
        publishDate: '2025-01-10',
        tags: [
            'Tutorial',
            'Voice AI',
            'Getting Started'
        ]
    },
    {
        id: '4',
        type: 'blog',
        category: 'Industry Insights',
        title: 'The Future of Insurance with AI',
        description: 'How leading insurance companies are leveraging AI to streamline claims processing and improve customer experience.',
        thumbnail: '/api/placeholder/400/250',
        url: '/blog/ai-insurance-future',
        readTime: '10 min read',
        publishDate: '2025-01-08',
        tags: [
            'Insurance',
            'Industry Trends',
            'AI'
        ]
    },
    {
        id: '5',
        type: 'case-study',
        category: 'Case Studies',
        title: 'How RetailCo Increased Sales by 3x with AI',
        description: 'A detailed look at how a major retailer implemented AI-powered product recommendations and saw dramatic results.',
        thumbnail: '/api/placeholder/400/250',
        url: '/case-studies/retailco-success',
        readTime: '12 min read',
        publishDate: '2025-01-05',
        tags: [
            'Retail',
            'Case Study',
            'ROI'
        ]
    },
    {
        id: '6',
        type: 'video',
        category: 'Tutorials',
        title: 'Advanced AI Agent Configuration',
        description: 'Deep dive into advanced configuration options for customizing your AI agents behavior and responses.',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        videoId: 'dQw4w9WgXcQ',
        readTime: '18 min watch',
        publishDate: '2025-01-03',
        tags: [
            'Tutorial',
            'Advanced',
            'Configuration'
        ]
    },
    {
        id: '7',
        type: 'blog',
        category: 'AI & Automation',
        title: 'Automating Lead Qualification at Scale',
        description: 'How to use AI to automatically qualify and prioritize leads, saving hours of manual work every day.',
        thumbnail: '/api/placeholder/400/250',
        url: '/blog/lead-qualification-automation',
        readTime: '7 min read',
        publishDate: '2024-12-28',
        tags: [
            'Lead Generation',
            'Automation',
            'Sales'
        ]
    },
    {
        id: '8',
        type: 'guide',
        category: 'Best Practices',
        title: 'The Complete Guide to AI Voice Technology',
        description: 'Everything you need to know about implementing voice AI in your business, from basics to advanced strategies.',
        thumbnail: '/api/placeholder/400/250',
        url: '/guides/voice-ai-complete-guide',
        readTime: '15 min read',
        publishDate: '2024-12-25',
        tags: [
            'Voice AI',
            'Guide',
            'Comprehensive'
        ]
    },
    {
        id: '9',
        type: 'blog',
        category: 'Industry Insights',
        title: 'Healthcare AI: Privacy and Compliance',
        description: 'Navigating HIPAA compliance while implementing AI solutions in healthcare settings.',
        thumbnail: '/api/placeholder/400/250',
        url: '/blog/healthcare-ai-compliance',
        readTime: '9 min read',
        publishDate: '2024-12-22',
        tags: [
            'Healthcare',
            'Compliance',
            'Privacy'
        ]
    },
    {
        id: '10',
        type: 'video',
        category: 'Product Updates',
        title: 'New Features Q1 2025 Overview',
        description: 'Explore the latest features and improvements we have released this quarter.',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        videoId: 'dQw4w9WgXcQ',
        readTime: '8 min watch',
        publishDate: '2024-12-20',
        tags: [
            'Product',
            'Updates',
            'Features'
        ]
    },
    {
        id: '11',
        type: 'blog',
        category: 'AI & Automation',
        title: 'Reducing Support Costs with AI Chatbots',
        description: 'Real numbers: How businesses are cutting support costs by 60% without sacrificing quality.',
        thumbnail: '/api/placeholder/400/250',
        url: '/blog/reduce-support-costs',
        readTime: '6 min read',
        publishDate: '2024-12-18',
        tags: [
            'Cost Reduction',
            'Chatbots',
            'ROI'
        ]
    },
    {
        id: '12',
        type: 'case-study',
        category: 'Case Studies',
        title: 'Education Platform Scales with AI',
        description: 'How an online education platform handled 10x growth using AI-powered student support.',
        thumbnail: '/api/placeholder/400/250',
        url: '/case-studies/education-platform',
        readTime: '11 min read',
        publishDate: '2024-12-15',
        tags: [
            'Education',
            'Scaling',
            'Case Study'
        ]
    },
    {
        id: '13',
        type: 'video',
        category: 'Tutorials',
        title: 'Integrating AI with Your CRM',
        description: 'Step-by-step guide to connecting your AI agents with Salesforce, HubSpot, and other CRMs.',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        videoId: 'dQw4w9WgXcQ',
        readTime: '14 min watch',
        publishDate: '2024-12-12',
        tags: [
            'CRM',
            'Integration',
            'Tutorial'
        ]
    },
    {
        id: '14',
        type: 'blog',
        category: 'Best Practices',
        title: 'Writing Effective AI Prompts',
        description: 'Master the art of prompt engineering to get the best results from your AI agents.',
        thumbnail: '/api/placeholder/400/250',
        url: '/blog/effective-ai-prompts',
        readTime: '8 min read',
        publishDate: '2024-12-10',
        tags: [
            'Prompt Engineering',
            'Best Practices',
            'AI'
        ]
    },
    {
        id: '15',
        type: 'blog',
        category: 'Industry Insights',
        title: 'AI in E-commerce: 2025 Trends',
        description: 'The top AI trends transforming online retail and what they mean for your business.',
        thumbnail: '/api/placeholder/400/250',
        url: '/blog/ecommerce-ai-trends-2025',
        readTime: '10 min read',
        publishDate: '2024-12-08',
        tags: [
            'E-commerce',
            'Trends',
            '2025'
        ]
    },
    {
        id: '16',
        type: 'video',
        category: 'Product Updates',
        title: 'Multi-language Support Demo',
        description: 'See how our AI agents seamlessly handle conversations in 50+ languages.',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        videoId: 'dQw4w9WgXcQ',
        readTime: '6 min watch',
        publishDate: '2024-12-05',
        tags: [
            'Multilingual',
            'Demo',
            'Product'
        ]
    },
    {
        id: '17',
        type: 'blog',
        category: 'AI & Automation',
        title: 'Sentiment Analysis for Better Customer Insights',
        description: 'How to use AI sentiment analysis to understand customer emotions and improve service.',
        thumbnail: '/api/placeholder/400/250',
        url: '/blog/sentiment-analysis-insights',
        readTime: '7 min read',
        publishDate: '2024-12-03',
        tags: [
            'Sentiment Analysis',
            'Customer Insights',
            'AI'
        ]
    },
    {
        id: '18',
        type: 'case-study',
        category: 'Case Studies',
        title: 'Financial Services Firm Automates Compliance',
        description: 'How a fintech company used AI to automate regulatory compliance checks and reduce risk.',
        thumbnail: '/api/placeholder/400/250',
        url: '/case-studies/fintech-compliance',
        readTime: '13 min read',
        publishDate: '2024-12-01',
        tags: [
            'Finance',
            'Compliance',
            'Automation'
        ]
    },
    {
        id: '19',
        type: 'guide',
        category: 'Best Practices',
        title: 'AI Agent Security Best Practices',
        description: 'Comprehensive guide to securing your AI implementations and protecting customer data.',
        thumbnail: '/api/placeholder/400/250',
        url: '/guides/ai-security-best-practices',
        readTime: '12 min read',
        publishDate: '2024-11-28',
        tags: [
            'Security',
            'Best Practices',
            'Compliance'
        ]
    },
    {
        id: '20',
        type: 'video',
        category: 'Tutorials',
        title: 'Building Your First AI Workflow',
        description: 'Complete beginner tutorial on creating automated workflows with AI agents.',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        videoId: 'dQw4w9WgXcQ',
        readTime: '16 min watch',
        publishDate: '2024-11-25',
        tags: [
            'Workflow',
            'Tutorial',
            'Beginner'
        ]
    },
    {
        id: '21',
        type: 'blog',
        category: 'Industry Insights',
        title: 'The ROI of Conversational AI',
        description: 'Calculate the real return on investment from implementing conversational AI in your business.',
        thumbnail: '/api/placeholder/400/250',
        url: '/blog/conversational-ai-roi',
        readTime: '9 min read',
        publishDate: '2024-11-22',
        tags: [
            'ROI',
            'Business Value',
            'Analysis'
        ]
    },
    {
        id: '22',
        type: 'blog',
        category: 'AI & Automation',
        title: 'AI-Powered Analytics for Business Growth',
        description: 'Leverage AI analytics to uncover insights and drive data-driven business decisions.',
        thumbnail: '/api/placeholder/400/250',
        url: '/blog/ai-analytics-growth',
        readTime: '8 min read',
        publishDate: '2024-11-20',
        tags: [
            'Analytics',
            'Business Growth',
            'AI'
        ]
    }
];
const categories = [
    'All',
    'AI & Automation',
    'Best Practices',
    'Tutorials',
    'Industry Insights',
    'Case Studies',
    'Product Updates'
];
}),
"[project]/app/components/ResourcesPage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResourcesPage",
    ()=>ResourcesPage,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$shadcn$2d$io$2f$background$2d$paths$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/shadcn-io/background-paths/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$providers$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/providers/ThemeProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$resourcesData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/resourcesData.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const ResourcesPage = ({ resources = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$resourcesData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resourcesData"].map((r)=>({
        id: r.id,
        title: r.title,
        category: r.category,
        excerpt: r.description,
        date: new Date(r.publishDate).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        }),
        href: r.url || (r.videoId ? `https://www.youtube.com/watch?v=${r.videoId}` : '#'),
        ctaLabel: r.type === 'video' ? 'Watch' : 'Read'
    })), footerSlot })=>{
    const { theme, resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$providers$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const [isThemeTransitioning, setIsThemeTransitioning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('All');
    // Filter resources based on active category
    const filteredResources = resources.filter((resource)=>{
        if (activeCategory === 'All') return true;
        return resource.category.toLowerCase().includes(activeCategory.toLowerCase());
    });
    // Handle SSR hydration
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    // Listen for theme changes and handle transitions
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleThemeChange = ()=>{
            setIsThemeTransitioning(true);
            setTimeout(()=>setIsThemeTransitioning(false), 500);
        };
        window.addEventListener('theme-change', handleThemeChange);
        return ()=>window.removeEventListener('theme-change', handleThemeChange);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen bg-black text-white transition-colors duration-300",
        "data-theme": mounted ? resolvedTheme : 'light',
        "data-theme-preference": mounted ? theme : 'system',
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$shadcn$2d$io$2f$background$2d$paths$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BackgroundPaths"], {
                    title: "Resources Hub"
                }, void 0, false, {
                    fileName: "[project]/app/components/ResourcesPage.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/ResourcesPage.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative bg-black transition-colors duration-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto max-w-7xl px-6 sm:px-8 py-16 sm:py-24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-6 md:gap-8 mb-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 p-6 md:p-8 shadow-sm transition-all duration-500 hover:shadow-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "aspect-[16/9] rounded-xl bg-black/40 backdrop-blur-sm ring-1 ring-teal-500/30 flex items-center justify-center text-gray-200 transition-colors duration-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm",
                                                children: "Featured visual placeholder"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/ResourcesPage.tsx",
                                                lineNumber: 85,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ResourcesPage.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ResourcesPage.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-gray-700 bg-gray-900/60 backdrop-blur-sm p-6 md:p-8 transition-all duration-500 hover:shadow-lg hover:bg-gray-900/80",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-semibold text-teal-300 mb-2",
                                                children: resources[0]?.category
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/ResourcesPage.tsx",
                                                lineNumber: 91,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl md:text-2xl font-semibold text-gray-100 mb-3",
                                                children: resources[0]?.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/ResourcesPage.tsx",
                                                lineNumber: 94,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm md:text-base text-gray-300 mb-4",
                                                children: resources[0]?.excerpt
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/ResourcesPage.tsx",
                                                lineNumber: 97,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-400 mb-5",
                                                children: resources[0]?.date
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/ResourcesPage.tsx",
                                                lineNumber: 100,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: resources[0]?.href ?? "#",
                                                className: "inline-flex items-center rounded-full bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 text-sm font-medium shadow-sm transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2",
                                                children: [
                                                    resources[0]?.ctaLabel ?? "Read",
                                                    " →"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/ResourcesPage.tsx",
                                                lineNumber: 103,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/ResourcesPage.tsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/ResourcesPage.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-3 justify-center mb-12",
                                children: [
                                    "All",
                                    "AI & Automation",
                                    "Best Practices",
                                    "Tutorials",
                                    "Industry Insights",
                                    "Case Studies",
                                    "Product Updates"
                                ].map((label)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveCategory(label),
                                        className: `inline-flex items-center rounded-full px-4 py-2 text-sm font-medium border transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${activeCategory === label ? "bg-teal-500 text-white border-teal-500 hover:bg-teal-600 focus:ring-teal-500 shadow-lg" : "bg-gray-900/60 text-gray-200 border-gray-700 hover:bg-gray-800 hover:shadow-md focus:ring-gray-500 backdrop-blur-sm"}`,
                                        children: label
                                    }, label, false, {
                                        fileName: "[project]/app/components/ResourcesPage.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/app/components/ResourcesPage.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-white mb-2",
                                        children: activeCategory === 'All' ? 'All Resources' : activeCategory
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ResourcesPage.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-400 mb-8",
                                        children: [
                                            "Showing ",
                                            filteredResources.length,
                                            " ",
                                            filteredResources.length === 1 ? 'resource' : 'resources'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/ResourcesPage.tsx",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/ResourcesPage.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                children: filteredResources.map((resource)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-gray-700 bg-gray-900/60 backdrop-blur-sm p-6 transition-all duration-300 hover:shadow-lg hover:bg-gray-900/80 hover:border-teal-500/50 group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-semibold text-teal-300 mb-2",
                                                children: resource.category
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/ResourcesPage.tsx",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold text-gray-100 mb-3 group-hover:text-teal-400 transition-colors",
                                                children: resource.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/ResourcesPage.tsx",
                                                lineNumber: 156,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-300 mb-4 line-clamp-3",
                                                children: resource.excerpt
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/ResourcesPage.tsx",
                                                lineNumber: 159,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-400 mb-4",
                                                children: resource.date
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/ResourcesPage.tsx",
                                                lineNumber: 162,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: resource.href ?? "#",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "inline-flex items-center rounded-full bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 text-sm font-medium shadow-sm transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2",
                                                children: [
                                                    resource.ctaLabel ?? "Read",
                                                    " →"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/ResourcesPage.tsx",
                                                lineNumber: 165,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, resource.id, true, {
                                        fileName: "[project]/app/components/ResourcesPage.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/app/components/ResourcesPage.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/ResourcesPage.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    footerSlot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "border-t border-gray-800 py-8 text-sm text-gray-300 transition-colors duration-500 bg-gray-900/50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto max-w-7xl px-6 sm:px-8",
                            children: footerSlot
                        }, void 0, false, {
                            fileName: "[project]/app/components/ResourcesPage.tsx",
                            lineNumber: 181,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/ResourcesPage.tsx",
                        lineNumber: 180,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ResourcesPage.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ResourcesPage.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ResourcesPage;
}),
];

//# sourceMappingURL=_a933832c._.js.map