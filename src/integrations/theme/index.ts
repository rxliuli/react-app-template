export const ThemeScript = `
  (function() {
    const theme = (() => {
      if (typeof localStorage !== "undefined") {
        const stored = localStorage.getItem("vite-ui-theme");
        if (stored) return stored;
      }
      return "system";
    })();
    
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const currentTheme = theme === "system" ? systemTheme : theme;
    
    document.documentElement.classList.add(currentTheme);
  })();
`

export { ThemeProvider } from './ThemeProvider'
export { ThemeToggle } from './ThemeToggle'
