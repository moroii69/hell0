(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [185], {
        8677: (e, a, l) => {
            Promise.resolve().then(l.bind(l, 2709)), Promise.resolve().then(l.t.bind(l, 3216, 23)), Promise.resolve().then(l.t.bind(l, 830, 23)), Promise.resolve().then(l.bind(l, 1247)), Promise.resolve().then(l.t.bind(l, 6521, 23))
        },
        1247: (e, a, l) => {
            "use strict";
            l.d(a, {
                Navbar: () => i
            });
            var r = l(192),
                n = l(2709),
                s = l(9540);
            let o = function() {
                    for (var e = arguments.length, a = Array(e), l = 0; l < e; l++) a[l] = arguments[l];
                    return a.filter(Boolean).join(" ")
                },
                t = {
                    "/": {
                        name: "home"
                    },
                    "/": {
                        name: ""
                    }
                };

            function i() {
                let e = (0, s.usePathname)();
                return (0, r.jsx)("aside", {
                    className: "-ml-[8px] mb-8 tracking-tight",
                    children: (0, r.jsx)("div", {
                        className: "lg:sticky lg:top-20",
                        children: (0, r.jsx)("nav", {
                            className: "relative flex scroll-pr-6 flex-row items-start px-0 pb-0 md:relative md:overflow-auto",
                            id: "nav",
                            children: (0, r.jsx)("div", {
                                className: "flex flex-row space-x-0 pr-10",
                                children: Object.entries(t).map(a => {
                                    let [l, {
                                        name: s
                                    }] = a, t = e === l || (null == e ? void 0 : e.startsWith(l)) && "/" === e[l.length];
                                    return (0, r.jsx)(n.Link, {
                                        href: l,
                                        className: o("relative flex px-2 py-1 align-middle transition-all hover:text-neutral-800 dark:hover:text-neutral-200", t && "underline decoration-wavy decoration-[0.1em] underline-offset-4"),
                                        children: s
                                    }, l)
                                })
                            })
                        })
                    })
                })
            }
        },
        6521: () => {},
        830: e => {
            e.exports = {
                style: {
                    fontFamily: "'GeistMono', ui-monospace, SFMono-Regular, Roboto Mono, Menlo, Monaco, Liberation Mono, DejaVu Sans Mono, Courier New, monospace"
                },
                className: "__className_c1e5c9",
                variable: "__variable_c1e5c9"
            }
        },
        3216: e => {
            e.exports = {
                style: {
                    fontFamily: "'GeistSans', 'GeistSans Fallback'"
                },
                className: "__className_3a0388",
                variable: "__variable_3a0388"
            }
        }
    },
    e => {
        var a = a => e(e.s = a);
        e.O(0, [858, 709, 933, 302, 744], () => a(8677)), _N_E = e.O()
    }
]);
