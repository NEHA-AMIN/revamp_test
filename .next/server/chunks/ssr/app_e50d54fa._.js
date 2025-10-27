module.exports=[70578,a=>{"use strict";let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/app/components/ClientLayout.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/app/components/ClientLayout.tsx <module evaluation>","default");a.s(["default",0,b])},41935,a=>{"use strict";let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/app/components/ClientLayout.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/app/components/ClientLayout.tsx","default");a.s(["default",0,b])},67790,a=>{"use strict";a.i(70578);var b=a.i(41935);a.n(b)},33290,a=>{"use strict";var b=a.i(7997),c=a.i(67790);function d(){let a=`
    (function() {
      try {
        const THEME_STORAGE_KEY = 'theme-preference';
        
        function getSystemTheme() {
          return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        
        function resolveTheme(theme, systemTheme) {
          return theme === 'system' ? systemTheme : theme;
        }
        
        function applyTheme(resolvedTheme, themePreference) {
          const root = document.documentElement;
          root.classList.remove('light', 'dark');
          root.classList.add(resolvedTheme);
          root.setAttribute('data-theme', resolvedTheme);
          root.setAttribute('data-theme-preference', themePreference || resolvedTheme);
          
          // Apply theme to body for additional styling hooks
          document.body.classList.remove('light', 'dark');
          document.body.classList.add(resolvedTheme);
          document.body.setAttribute('data-theme', resolvedTheme);
          
          // Update meta theme-color for mobile browsers with enhanced colors
          const metaThemeColor = document.querySelector('meta[name="theme-color"]');
          if (metaThemeColor) {
            metaThemeColor.setAttribute(
              'content', 
              resolvedTheme === 'dark' ? '#0f172a' : '#ffffff'
            );
          }
          
          // Update meta viewport-fit for better mobile experience
          const metaViewport = document.querySelector('meta[name="viewport"]');
          if (metaViewport && !metaViewport.getAttribute('content')?.includes('viewport-fit')) {
            const currentContent = metaViewport.getAttribute('content') || '';
            metaViewport.setAttribute('content', currentContent + ', viewport-fit=cover');
          }
        }
        
        // Get stored theme preference
        let theme = 'system';
        try {
          const stored = localStorage.getItem(THEME_STORAGE_KEY);
          if (stored && ['light', 'dark', 'system'].includes(stored)) {
            theme = stored;
          }
        } catch (error) {
          console.warn('Failed to read theme from localStorage:', error);
        }
        
        // Resolve and apply theme
        const systemTheme = getSystemTheme();
        const resolvedTheme = resolveTheme(theme, systemTheme);
        applyTheme(resolvedTheme, theme);
        
        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
          if (theme === 'system') {
            const newResolvedTheme = e.matches ? 'dark' : 'light';
            applyTheme(newResolvedTheme, 'system');
          }
        });
        
        // Listen for cross-tab theme changes
        window.addEventListener('storage', function(e) {
          if (e.key === THEME_STORAGE_KEY && e.newValue) {
            const newTheme = e.newValue;
            if (['light', 'dark', 'system'].includes(newTheme)) {
              theme = newTheme;
              const newSystemTheme = getSystemTheme();
              const newResolvedTheme = resolveTheme(newTheme, newSystemTheme);
              applyTheme(newResolvedTheme, newTheme);
            }
          }
        });
        
      } catch (error) {
        console.warn('Theme script error:', error);
        // Fallback to system preference
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        document.documentElement.classList.add(systemTheme);
        document.documentElement.setAttribute('data-theme', systemTheme);
      }
    })();
  `;return(0,b.jsx)("script",{dangerouslySetInnerHTML:{__html:a},suppressHydrationWarning:!0})}function e({children:a}){return(0,b.jsxs)("html",{lang:"en",suppressHydrationWarning:!0,children:[(0,b.jsx)("head",{children:(0,b.jsx)(d,{})}),(0,b.jsx)("body",{className:"antialiased bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300",children:(0,b.jsx)(c.default,{children:a})})]})}a.s(["default",()=>e,"metadata",0,{title:"Propheus - We Infer the World",description:"We turn maps into meaning, enabling AI agents that reason about the world through location, data, and context.",viewport:"width=device-width, initial-scale=1",themeColor:[{media:"(prefers-color-scheme: light)",color:"#f8fafc"},{media:"(prefers-color-scheme: dark)",color:"#0f172a"}]}],33290)}];

//# sourceMappingURL=app_e50d54fa._.js.map