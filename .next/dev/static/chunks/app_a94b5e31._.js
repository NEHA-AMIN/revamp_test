(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/GlowRing.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlowRing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
function GlowRing({ className = '', ctaText = 'Get started free', ctaHref = '#' }) {
    // Particle positions for cosmic effect
    const particles = Array.from({
        length: 80
    }, (_, i)=>({
            id: i,
            x: Math.random() * 120 - 60,
            y: Math.random() * 50 - 25,
            size: Math.random() * 3 + 0.5,
            delay: Math.random() * 3
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative w-full h-[400px] flex items-center justify-center ${className}`,
        children: [
            particles.map((particle)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute rounded-full",
                    style: {
                        left: `calc(50% + ${particle.x}%)`,
                        top: `calc(50% + ${particle.y}%)`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        background: particle.size > 2 ? 'rgba(20, 184, 166, 0.6)' : 'rgba(20, 184, 166, 0.4)',
                        boxShadow: particle.size > 2 ? '0 0 8px rgba(20, 184, 166, 0.8)' : '0 0 4px rgba(20, 184, 166, 0.6)'
                    },
                    animate: {
                        opacity: [
                            0.3,
                            1,
                            0.3
                        ],
                        scale: [
                            0.8,
                            1.4,
                            0.8
                        ]
                    },
                    transition: {
                        duration: 4,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: 'easeInOut'
                    }
                }, particle.id, false, {
                    fileName: "[project]/app/components/GlowRing.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-[1100px] h-[400px] max-w-[90vw]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute inset-0",
                        style: {
                            background: 'radial-gradient(ellipse 1100px 400px at center, rgba(20, 184, 166, 0.25) 0%, transparent 60%)',
                            filter: 'blur(120px)'
                        },
                        animate: {
                            opacity: [
                                0.4,
                                0.7,
                                0.4
                            ],
                            scale: [
                                0.95,
                                1.08,
                                0.95
                            ]
                        },
                        transition: {
                            duration: 5,
                            repeat: Infinity,
                            ease: 'easeInOut'
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/components/GlowRing.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute inset-0",
                        style: {
                            background: 'radial-gradient(ellipse 900px 320px at center, rgba(20, 184, 166, 0.35) 0%, rgba(13, 148, 136, 0.15) 40%, transparent 70%)',
                            filter: 'blur(60px)'
                        },
                        animate: {
                            opacity: [
                                0.5,
                                0.8,
                                0.5
                            ],
                            scale: [
                                1,
                                1.03,
                                1
                            ]
                        },
                        transition: {
                            duration: 3.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: 0.5
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/components/GlowRing.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute inset-0",
                        animate: {
                            rotateZ: [
                                180,
                                185,
                                180,
                                175,
                                180
                            ]
                        },
                        transition: {
                            duration: 8,
                            repeat: Infinity,
                            ease: 'easeInOut'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 1100 400",
                            className: "w-full h-full",
                            style: {
                                filter: 'drop-shadow(0 0 40px rgba(20, 184, 166, 0.9))'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                        id: "ellipse-gradient",
                                        x1: "0%",
                                        y1: "0%",
                                        x2: "100%",
                                        y2: "0%",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "0%",
                                                stopColor: "rgba(20, 184, 166, 0.1)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/GlowRing.tsx",
                                                lineNumber: 112,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "15%",
                                                stopColor: "rgba(20, 184, 166, 0.8)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/GlowRing.tsx",
                                                lineNumber: 113,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "25%",
                                                stopColor: "rgba(20, 184, 166, 1)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/GlowRing.tsx",
                                                lineNumber: 114,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "35%",
                                                stopColor: "rgba(20, 184, 166, 0.6)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/GlowRing.tsx",
                                                lineNumber: 115,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "50%",
                                                stopColor: "rgba(20, 184, 166, 0.2)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/GlowRing.tsx",
                                                lineNumber: 116,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "65%",
                                                stopColor: "rgba(20, 184, 166, 0.7)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/GlowRing.tsx",
                                                lineNumber: 117,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "75%",
                                                stopColor: "rgba(20, 184, 166, 1)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/GlowRing.tsx",
                                                lineNumber: 118,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "85%",
                                                stopColor: "rgba(20, 184, 166, 0.8)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/GlowRing.tsx",
                                                lineNumber: 119,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "100%",
                                                stopColor: "rgba(20, 184, 166, 0.1)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/GlowRing.tsx",
                                                lineNumber: 120,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/GlowRing.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/GlowRing.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                    cx: "550",
                                    cy: "200",
                                    rx: "520",
                                    ry: "175",
                                    fill: "none",
                                    stroke: "url(#ellipse-gradient)",
                                    strokeWidth: "4",
                                    strokeLinecap: "round",
                                    className: "dark:opacity-100 opacity-80"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/GlowRing.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                    cx: "550",
                                    cy: "200",
                                    rx: "490",
                                    ry: "160",
                                    fill: "none",
                                    stroke: "url(#ellipse-gradient)",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    opacity: "0.5"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/GlowRing.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/GlowRing.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/GlowRing.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    [
                        0,
                        45,
                        90,
                        135,
                        180,
                        225,
                        270,
                        315
                    ].map((angle, index)=>{
                        const radians = angle * Math.PI / 180;
                        const x = Math.cos(radians) * 520;
                        const y = Math.sin(radians) * 175;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute left-1/2 top-1/2 rounded-full",
                            style: {
                                width: index % 2 === 0 ? '6px' : '4px',
                                height: index % 2 === 0 ? '6px' : '4px',
                                marginLeft: `${x - (index % 2 === 0 ? 3 : 2)}px`,
                                marginTop: `${y - (index % 2 === 0 ? 3 : 2)}px`,
                                background: 'rgba(20, 184, 166, 1)',
                                boxShadow: '0 0 30px rgba(20, 184, 166, 1), 0 0 50px rgba(20, 184, 166, 0.6)'
                            },
                            animate: {
                                opacity: [
                                    0.5,
                                    1,
                                    0.5
                                ],
                                scale: [
                                    0.9,
                                    1.4,
                                    0.9
                                ]
                            },
                            transition: {
                                duration: 2.5,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: index * 0.2
                            }
                        }, angle, false, {
                            fileName: "[project]/app/components/GlowRing.tsx",
                            lineNumber: 159,
                            columnNumber: 13
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[350px] rounded-full",
                        style: {
                            background: 'radial-gradient(ellipse 1000px 350px at center, rgba(20, 184, 166, 0.3) 0%, rgba(13, 148, 136, 0.15) 30%, transparent 60%)',
                            filter: 'blur(50px)'
                        },
                        animate: {
                            scale: [
                                0.88,
                                1.15,
                                0.88
                            ],
                            opacity: [
                                0.4,
                                0.7,
                                0.4
                            ]
                        },
                        transition: {
                            duration: 6,
                            repeat: Infinity,
                            ease: 'easeInOut'
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/components/GlowRing.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[240px] rounded-full",
                        style: {
                            background: 'radial-gradient(ellipse 700px 240px at center, rgba(20, 184, 166, 0.4) 0%, transparent 50%)',
                            filter: 'blur(30px)'
                        },
                        animate: {
                            scale: [
                                0.92,
                                1.08,
                                0.92
                            ],
                            opacity: [
                                0.5,
                                0.8,
                                0.5
                            ]
                        },
                        transition: {
                            duration: 4,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: 1
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/components/GlowRing.tsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/GlowRing.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/GlowRing.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c = GlowRing;
var _c;
__turbopack_context__.k.register(_c, "GlowRing");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$GlowRing$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/GlowRing.tsx [app-client] (ecmascript)");
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative flex items-center justify-center bg-slate-50 dark:bg-black overflow-hidden py-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$GlowRing$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            ctaText: "",
                            ctaHref: ""
                        }, void 0, false, {
                            fileName: "[project]/app/components/IndustriesPage.tsx",
                            lineNumber: 623,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/IndustriesPage.tsx",
                        lineNumber: 622,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 max-w-6xl mx-auto px-6 text-center",
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
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: 0.2
                                },
                                className: "mb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-teal-500/20 to-teal-600/20 border border-teal-500/30 text-teal-600 dark:text-teal-400",
                                    children: "🤖 Physical AI Revolution"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/IndustriesPage.tsx",
                                    lineNumber: 635,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/IndustriesPage.tsx",
                                lineNumber: 628,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                className: "text-4xl md:text-6xl font-bold mb-4 leading-tight",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: 0.3
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-gradient-to-r from-teal-500 via-teal-400 to-teal-600 bg-clip-text text-transparent",
                                        children: "Ready to Revolutionize"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/IndustriesPage.tsx",
                                        lineNumber: 648,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/app/components/IndustriesPage.tsx",
                                        lineNumber: 651,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-900 dark:text-white",
                                        children: "Your Industry?"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/IndustriesPage.tsx",
                                        lineNumber: 652,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/IndustriesPage.tsx",
                                lineNumber: 641,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                className: "text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-6 max-w-3xl mx-auto leading-relaxed",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: 0.4
                                },
                                children: "Experience the future where AI transcends screens and transforms reality. See Propheus Physical AI solutions in action."
                            }, void 0, false, {
                                fileName: "[project]/app/components/IndustriesPage.tsx",
                                lineNumber: 656,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    scale: 0.8
                                },
                                whileInView: {
                                    opacity: 1,
                                    scale: 1
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: 0.5
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/contact",
                                    className: "inline-block px-10 py-3.5 text-lg font-bold bg-teal-500/15 dark:bg-teal-500/15 border-2 border-teal-400/60 dark:border-teal-400/70 text-teal-600 dark:text-teal-200 hover:bg-teal-500/25 hover:border-teal-300 backdrop-blur-md shadow-[0_0_40px_rgba(20,184,166,0.5),0_0_80px_rgba(20,184,166,0.3)] hover:shadow-[0_0_60px_rgba(20,184,166,0.7),0_0_120px_rgba(20,184,166,0.4)] transition-all duration-300 rounded-xl",
                                    children: "Book a Demo!"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/IndustriesPage.tsx",
                                    lineNumber: 674,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/IndustriesPage.tsx",
                                lineNumber: 668,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/IndustriesPage.tsx",
                        lineNumber: 626,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/IndustriesPage.tsx",
                lineNumber: 620,
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

//# sourceMappingURL=app_a94b5e31._.js.map