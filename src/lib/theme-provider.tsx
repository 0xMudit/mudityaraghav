"use client";

import { createContext, useCallback, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  toggle: () => void;
}>({ theme: "light", toggle: () => {} });

export function useTheme() {
  return useContext(ThemeContext);
}

let currentTheme: Theme = "light";

function subscribe(callback: () => void) {
  const handler = (e: MediaQueryListEvent) => {
    if (!localStorage.getItem("theme")) {
      currentTheme = e.matches ? "dark" : "light";
      callback();
    }
  };
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", handler);
  return () => {
    window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", handler);
  };
}

function getSnapshot() {
  return currentTheme;
}

function getServerSnapshot() {
  return "light" as Theme;
}

function applyTheme(theme: Theme) {
  currentTheme = theme;
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored === "dark" || stored === "light") {
      applyTheme(stored);
    } else {
      applyTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    }
  }, []);

  const toggle = useCallback(() => {
    const next = currentTheme === "dark" ? "light" : "dark";
    applyTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}